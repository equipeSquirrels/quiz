// Form template and logic

<template>

  <div class="vff" :class="{'vff-not-standalone': !standalone, 'vff-is-mobile': isMobile, 'vff-is-ios': isIos}">


    <div class="vff-footer">
      <div class="footer-inner-wrap">
        <div v-if="progressbar" class="f-progress" v-bind:class="{'not-started': percentCompleted === 0, 'completed': percentCompleted === 100}">

          <div class="f-progress-bar">
            <div class="f-progress-bar-inner" v-bind:style="'width: ' + percentCompleted + '%;'"></div>
          </div>

        </div>


        <div v-if="timer" class="f-timer">
          <span>{{ formatTime(time) }}</span>
        </div>
      </div>
    </div>

    <div class="f-container">
      <div v-if="navigation" class="f-nav">
        <a
          class="f-prev"
          href="#"
          v-bind:class="{'f-disabled': activeQuestionIndex === 0 || submitted}"
          v-on:click.prevent="goToPreviousQuestion()"
          role="button"
          v-bind:aria-label="language.ariaPrev"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.79785 11.6699L14.4385 5.0293C14.8975 4.57031 15.6397 4.57031 16.0938 5.0293L17.1973 6.13281C17.6563 6.5918 17.6563 7.33398 17.1973 7.78809L12.4951 12.5L17.2022 17.207C17.6611 17.666 17.6611 18.4082 17.2022 18.8623L16.0986 19.9707C15.6397 20.4297 14.8975 20.4297 14.4434 19.9707L7.80274 13.3301C7.33887 12.8711 7.33887 12.1289 7.79785 11.6699Z" fill="#E1366A"/>
          </svg>
        </a>
        <a
          class="f-next"
          href="#"
          v-bind:class="{'f-disabled': !isNextQuestionAvailable()}"
          v-on:click.prevent="goToNextQuestion()"
          role="button"
          v-bind:aria-label="language.ariaNext"
        >
          <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4207 13.5434L10.78 20.184C10.321 20.643 9.57886 20.643 9.12476 20.184L8.02124 19.0805C7.56226 18.6215 7.56226 17.8793 8.02124 17.4252L12.7283 12.7182L8.02124 8.01117C7.56226 7.55218 7.56226 6.81 8.02124 6.3559L9.11987 5.24261C9.57886 4.78363 10.321 4.78363 10.7751 5.24261L17.4158 11.8832C17.8796 12.3422 17.8796 13.0844 17.4207 13.5434V13.5434Z" fill="#E1366A"/>
          </svg>
        </a>



      </div>
      <div class="f-form-wrap">
        <flow-form-question
          :ref="setQuestionRef"
          v-for="(q, index) in questionList"
          v-bind:question="q"
          v-bind:language="language"
          v-bind:key="'q' + index"
          v-bind:active="q.index === activeQuestionIndex"
          v-model="q.answer"
          v-on:answer="onQuestionAnswered"
          v-bind:reverse="reverse"
          v-bind:disabled="disabled"
          v-on:disable="setDisabled"
        />

        <slot></slot>

        <!-- Complete/Submit screen slots -->   
        <div v-if="isOnLastStep" class="vff-animate f-fade-in-up field-submittype">
          <slot name="complete">
            <!-- Default content for the "complete" slot -->
            <div class="f-section-wrap">
              <p>
                <span class="fh2">{{ language.thankYouText }}</span>
              </p>

            </div>
          </slot>

          <slot name="completeButton">
            <!-- Default content for the "completeButton" slot -->
            <button 
              class="o-btn-action"
              ref="button" 
              type="button" 
              href="#" 
              v-on:click.prevent="submit()" 
              v-if="!submitted"
              v-bind:aria-label="language.ariaSubmitText">
                <span>{{ language.submitText }}</span>
            </button>
            <a 
              class="f-enter-desc"
              href="#"
              v-on:click.prevent="submit()"
              v-if="!submitted"
              v-html="language.formatString(language.pressEnter)">
            </a>
            <p class="text-success" v-if="submitted">{{ language.successText }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  /*!
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://github.com/ditdot-dev/vue-flow-form
    https://www.ditdot.hr/en
  */

  import FlowFormQuestion from './FlowFormQuestion.vue'
  import QuestionModel, { ChoiceOption, LinkOption, QuestionType } from '../models/QuestionModel'
  import LanguageModel from '../models/LanguageModel'
  import { IsMobile } from '../mixins/IsMobile'
  import { ComponentInstance } from '../mixins/ComponentInstance'

  export default {
    name: 'FlowForm',

    components: {
      FlowFormQuestion
    },
    
    props: {
      questions: {
        type: Array,
        validator: value => value.every(q => q instanceof QuestionModel)
      }, 
      language: {
        type: LanguageModel,
        default: () => new LanguageModel()
      },
      progressbar: {
        type: Boolean, 
        default: true
      },
      standalone: {
        type: Boolean, 
        default: true
      },
      navigation: {
        type: Boolean, 
        default: true
      },
      timer: {
        type: Boolean,
        default: false
      },
      timerStartStep: [String, Number],
      timerStopStep: [String, Number]
    },

    mixins: [
      IsMobile,
      ComponentInstance
    ],

    data() {
      return {
        questionRefs: [],
        completed: false,
        submitted: false,
        activeQuestionIndex: 0,
        questionList: [],
        questionListActivePath: [],
        reverse: false,
        timerOn: false,
        timerInterval: null,
        time: 0,
        disabled: false
      }
    },

    mounted() {
      document.addEventListener('keydown', this.onKeyDownListener)
      document.addEventListener('keyup', this.onKeyUpListener, true)
      window.addEventListener('beforeunload', this.onBeforeUnload)

      this.setQuestions()
      this.checkTimer()
    },

    beforeUnmount() {
      document.removeEventListener('keydown', this.onKeyDownListener)
      document.removeEventListener('keyup', this.onKeyUpListener, true)
      window.removeEventListener('beforeunload', this.onBeforeUnload)
      
      this.stopTimer()
    },

    beforeUpdate() {
      this.questionRefs = []
    },
    
    computed: {
      numActiveQuestions() {
        return this.questionListActivePath.length
      },

      activeQuestion() {
        return this.questionListActivePath[this.activeQuestionIndex]
      },

      activeQuestionId() {
        const question = this.questionModels[this.activeQuestionIndex]

        if (this.isOnLastStep) {
          return '_submit'
        }

        if (question && question.id) {
          return question.id
        }

        return null
      },

      numCompletedQuestions() {
        let num = 0

        this.questionListActivePath.forEach(question => {
          if (question.answered) {
            ++num
          }
        })

        return num
      },

      percentCompleted() {
        if (!this.numActiveQuestions) {
          return 0
        }

        return Math.floor((this.numCompletedQuestions / this.numActiveQuestions) * 100)
      },

      isOnLastStep() {
        return this.numActiveQuestions > 0 && this.activeQuestionIndex === this.questionListActivePath.length
      }, 

      isOnTimerStartStep() {
        if (this.activeQuestionId === this.timerStartStep) {
          return true
        }

        if (!this.timerOn && !this.timerStartStep && this.activeQuestionIndex === 0) {
          return true
        }

        return false
      },

      isOnTimerStopStep() {
        if (this.submitted) {
          return true
        }
        
        if (this.activeQuestionId === this.timerStopStep) {
          return true 
        }

        return false
      },

      questionModels: {
        cache: false,

        get() {
          if (this.questions && this.questions.length) {
            return this.questions
          }

          const questions = []

          if (!this.questions) {
            const classMap = {
              options: ChoiceOption,
              descriptionLink: LinkOption
            }

            const defaultSlot = this.$slots.default()
            let children = null

            if (defaultSlot && defaultSlot.length) {
              children = defaultSlot[0].children
              if (!children) {
                children = defaultSlot
              } 
            }

            if (children) {
              children
                .filter(q => q.type && q.type.name.indexOf('Question') !== -1)
                .forEach(q => {
                  const props = q.props
                  const componentInstance = this.getInstance(props.id)
                  let model = new QuestionModel()

                  if (componentInstance.question !== null) {
                    model = componentInstance.question
                  } 

                  if (props.modelValue) {
                    model.answer = props.modelValue
                  }

                  Object.keys(model).forEach(key => {
                    if (props[key] !== undefined) {
                      if (typeof model[key] === 'boolean') {
                        model[key] = props[key] !== false
                      } else if (key in classMap) {
                        const
                          classReference = classMap[key],
                          options = []

                        props[key].forEach(option => {
                          const instance = new classReference()

                          Object.keys(instance).forEach(instanceKey => {
                            if (option[instanceKey] !== undefined) {
                              instance[instanceKey] = option[instanceKey]
                            }
                          })

                          options.push(instance)
                        })

                        model[key] = options
                      } else {
                        switch(key) {
                          case 'type':
                            if (Object.values(QuestionType).indexOf(props[key]) !== -1) {
                              model[key] = props[key]
                            } else {
                              for (const questionTypeKey in QuestionType) {
                                if (questionTypeKey.toLowerCase() === props[key].toLowerCase()) {
                                  model[key] = QuestionType[questionTypeKey]
                                  break
                                }
                              }
                            }
                            break

                          default:
                            model[key] = props[key]
                            break
                        }
                      }
                    }
                  })

                  componentInstance.question = model

                  model.resetOptions()

                  questions.push(model)
                })
            }
          }

          return questions
        }
      }
    },

    methods: {
      setQuestionRef(el) {
        this.questionRefs.push(el)
      },

      /**
       * Returns currently active question component (if any).
       */
      activeQuestionComponent() {
        return this.questionRefs[this.activeQuestionIndex]
      },

      setQuestions() {
        this.setQuestionListActivePath()
        this.setQuestionList()
      },

      /**
       * This method goes through all questions and sets the ones
       * that are in the current path (taking note of logic jumps)
       */
      setQuestionListActivePath() {
        const questions = []

        if (!this.questionModels.length) {
          return
        }

        let
          index = 0,
          serialIndex = 0,
          nextId

        do {
          let question = this.questionModels[index]

          question.setIndex(serialIndex)
          question.language = this.language

          questions.push(question)

          if (!question.jump) {
            ++index
          } else if (question.answered) {
            nextId = question.getJumpId()
            if (nextId) {
              if (nextId === '_submit') {
                index = this.questionModels.length
              } else {
                for (let i = 0; i < this.questionModels.length; i++) {
                  if (this.questionModels[i].id === nextId) {
                    index = i
                    break
                  }
                }
              }
            } else {
              ++index
            }
          } else {
            index = this.questionModels.length
          }

          ++serialIndex
        } while (index < this.questionModels.length)

        this.questionListActivePath = questions
      },

      /**
       * Sets the question list array
       * (all questions up to, and including, the current one)
       */
      setQuestionList() {
        const questions = []

        for (let index = 0; index < this.questionListActivePath.length; index++) {
          const question = this.questionListActivePath[index]

          questions.push(question)

          if (!question.answered) {
            if (this.completed) {
              // The "completed" status changed - user probably changed an
              // already entered answer.
              this.completed = false
            }
            break
          }
        }

        this.questionList = questions
      },

      /**
       * If we have any answered questions, notify user before leaving
       * the page.
       */
      onBeforeUnload(event) {
        if (this.activeQuestionIndex > 0 && !this.submitted) {
          event.preventDefault()
          event.returnValue = ''
        }
      },

      /**
       * Global key listeners, listen for Enter or Tab key events.
       */
      onKeyDownListener(e) {
        if (e.key !== 'Tab' || this.submitted) {
          return
        }

        if (e.shiftKey) {
          e.stopPropagation()
          e.preventDefault()

          if (this.navigation) {
            this.goToPreviousQuestion()
          }
        } else {
          const q = this.activeQuestionComponent()

          if (q.shouldFocus()) {
            e.preventDefault()

            q.focusField()
          } else {
            e.stopPropagation()

            this.emitTab()
            this.reverse = false
          }
        }
      }, 

      onKeyUpListener(e) {
        if (e.shiftKey || ['Tab', 'Enter'].indexOf(e.key) === -1 || this.submitted) {
          return
        }

        const q = this.activeQuestionComponent()

        if (e.key === 'Tab' && q.shouldFocus()) {
          q.focusField()
        } else {
          if (e.key === 'Enter') {
            this.emitEnter()
          } 

          e.stopPropagation()
          this.reverse = false
        }
      },

      emitEnter() {
        if (this.disabled) {
          return
        }

        const q = this.activeQuestionComponent()

        if (q) {
          // Send enter event to the current question component
          q.onEnter()
        } else if (this.completed && this.isOnLastStep) {
          // We're finished - submit form
          this.submit()
        }
      },

      emitTab() {
        const q = this.activeQuestionComponent()

        if (q) {
          // Send tab event to the current question component
          q.onTab()
        } else {
          this.emitEnter()
        }
      },

      submit() {
        this.emitSubmit()
        this.submitted = true
      },

      emitComplete() {
        this.$emit('complete', this.completed, this.questionList)
      },

      emitSubmit() {
        this.$emit('submit', this.questionList)
      },

      /**
       * Checks if we have another question and if we
       * can jump to it.
       */
      isNextQuestionAvailable() {
        if (this.submitted) {
          return false
        }

        const q = this.activeQuestion
        if (q && !q.required) {
          return true
        }

        if (this.completed && !this.isOnLastStep) {
          return true
        }
   
        return this.activeQuestionIndex < this.questionList.length - 1
      },

      /**
       * Triggered by the "answer" event in the Question component
       */
      onQuestionAnswered(question) {
        if (question.isValid()) {
          this.$emit('answer', question.question)

          if (this.activeQuestionIndex < this.questionListActivePath.length) {
            ++this.activeQuestionIndex
          }
         
          this.$nextTick(() => {
            this.reverse = false

            this.setQuestions()
            this.checkTimer()
            // Nested $nextTick so we're 100% sure that setQuestions
            // actually updated the question array
            this.$nextTick(() => {
              const q = this.activeQuestionComponent()

              if (q) {
                q.focusField()
                this.activeQuestionIndex = q.question.index
              } else if (this.isOnLastStep) {
                // No more questions left - set "completed" to true
                this.completed = true
                this.activeQuestionIndex = this.questionListActivePath.length
                
                this.$refs.button && this.$refs.button.focus()
              }

              this.$emit('step', this.activeQuestionId, this.activeQuestion)
            })
          })
        } else if (this.completed) {
          this.completed = false
        }
      },

      /**
       * Jumps to previous question.
       */
      goToPreviousQuestion() {
        this.blurFocus()
    
        if (this.activeQuestionIndex > 0 && !this.submitted) {
          if (this.isOnTimerStopStep) {
            this.startTimer()
          }

          --this.activeQuestionIndex

          this.reverse = true

          this.checkTimer()
        }
      },

      /**
       * Jumps to next question.
       */
      goToNextQuestion() {
        this.blurFocus()
        if (this.isNextQuestionAvailable()) {
          this.emitEnter()
        }

        this.reverse = false
      },

      /**
       * Removes focus from the currently focused DOM element.
       */
      blurFocus() {
        document.activeElement && document.activeElement.blur && document.activeElement.blur()
      },

      checkTimer() {
        if (this.timer) {
          if (this.isOnTimerStartStep) {
            this.startTimer()
          } else if (this.isOnTimerStopStep) {
            this.stopTimer()
          }
        }
      },

      startTimer() {
        if (this.timer && !this.timerOn) {
          this.timerInterval = setInterval(this.incrementTime, 1000)
          this.timerOn = true
        }
      },

      stopTimer() {
        if (this.timerOn) {
          clearInterval(this.timerInterval)
        }

        this.timerOn = false
      },

      incrementTime() {
        ++this.time
        
        this.$emit('timer', this.time, this.formatTime(this.time))
      },

      formatTime(seconds) {
        let
          startIndex = 14,
          length = 5
            
        if (seconds >= 60 * 60) {
          startIndex = 11
          length = 8
        }

        return new Date(1000 * seconds).toISOString().substr(startIndex, length)
      },

      setDisabled(state) {
        this.disabled = state
      }
    },

    watch: {
      completed() {
        this.emitComplete()
      },
      
      submitted() {
        this.stopTimer()
      }
    }
  }
</script>

<style lang="css">
  @import '../assets/css/common.css';
</style>

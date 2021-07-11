// Create and setup your form here
 
<template>
  <div>
    <header class="vff-header">
      <div class="f-container">
        <!-- Add custom logo here -->
        <svg xmlns="http://www.w3.org/2000/svg" width='150' height='28' fill='white' viewBox="0 0 361.3 69.57">
          <g data-name="Layer 2">
            <g data-name="Layer 1">

            </g>
          </g>
        </svg>
      </div>
    </header>

    <flow-form
      ref="flowform"
      v-on:complete="onComplete"
      v-on:submit="onQuizSubmit"
      v-on:timer="onTimer"
      v-bind:questions="questions"
      v-bind:language="language"
      v-bind:standalone="true"
      v-bind:timer="true"
      timer-start-step="generale_1"
    >
    <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
      <!-- We've overriden the default "complete" slot content -->
      <template v-slot:complete>
        <p>
          <span class="fh2">Vous l'avez fait</span>
          <span v-if="!submitted" class="f-section-text">
            Vérifiez vos réponses ou appuyez sur Calculer le score pour voir votre résultat.
          </span>
        </p>
      </template>

      <!-- We've overriden the default "completeButton" slot content -->
      <template v-slot:completeButton>
        <div class="f-submit" v-if="!submitted">
          <button
            class="o-btn-action"
            ref="button"
            type="submit"
            href="#"
            v-on:click.prevent="onQuizSubmit()"
            aria-label="Press to submit">
            <span>Calculer mon score</span>
          </button>
          <a 
            class="f-enter-desc"
            href="#"
            v-on:click.prevent="onQuizSubmit()"
            v-html="language.formatString(language.pressEnter)">
          </a>
        </div>

        <p class="text-success" v-if="submitted && time">Votre temps {{ formattedTime }}</p>
        <p class="text-success" v-if="submitted && score < 15">"Vous avez obtenu {{ score }} sur {{ total }}. Vous n'êtes pas éligible à devenir testeur."</p>
        <p class="text-success" v-else-if="submitted && score < 20">"Vous avez obtenu {{ score }} sur {{ total }}. Dommage, vous y êtiez presque!"</p>
        <p class="text-success" v-else-if="submitted && score <= total">"Vous avez obtenu {{ score }} sur {{ total }}. Félicitation ! Bienvenue dans la famille des testeurs de Résonance."</p>
<!--
        <p class="text-success" v-if="answers['informatique'] > answers['technologie']">Vous êtes plus team Informatique</p>
        <p class="text-success" v-else-if="answers['informatique'] === answers['technologie']">Vous êtes team Info-Techno</p>
        <p class="text-success" v-if="answers['informatique'] < answers['technologie']">Vous êtes plus team Technologie</p>
-->


      </template>
    </flow-form>
  </div>
</template>

<script>
  /*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://www.ditdot.hr/en
  */

  // Import necessary components and classes
  import FlowForm from '../../src/components/FlowForm.vue'
  import QuestionModel, { QuestionType, ChoiceOption, LinkOption } from '../../src/models/QuestionModel'
  import LanguageModel from '../../src/models/LanguageModel'
  // If using the npm package, use the following line instead of the ones above.
  // import FlowForm, { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'

  export default {
    name: 'example',
    components: {
      FlowForm
    },
    data() {

      return {

        submitted: false,
        completed: false,
        score: 0,
        total: 25,
        time: 0,
        formattedTime: '',
        answer: 0,
        answers: {

          generale_1: 'faux',
          generale_2: ['1', '3'],
          generale_3: 'faux',
          generale_4: '2',
          generale_5: '2',
          generale_6: 'vrai',
          generale_7: '2',
          generale_8: '2',
          generale_9: '2',
          generale_10: '1',
          generale_11: '5',
          generale_12: ['1', '4'],


            info_1: '4',
            info_2: '3',
            info_3: '4',
            info_4: ['2', '3'],
            info_5: '1',
            info_6: '2',
            info_7: '2',


            techno_1: '1',
            techno_2: '2',
            techno_3: '3',
            techno_4: '3',
            techno_5: ['1', '2', '4'],
            techno_6: '1',
          },











          language: new LanguageModel(),
          // Create question list with QuestionModel instances
          questions: [

            new QuestionModel({
              id: 'start',
              tagline: '25 questions',
              title: 'Testons votre éligibilité aux tests',
              content: 'Afin de s\'assurer de la pertinence de votre profil nous allons' +
                'vous poser quelques questions pour déterminer votre éligibilité aux tests.',
              type: QuestionType.SectionBreak,
              required: true,
            }),
            new QuestionModel({
              id: 'generale_1',
              title: 'Le bitcoin est géré par la BCE',
              type: QuestionType.MultipleChoice,
              multiple: false,
              helpText: 'Culture Générale',
              required: true,
              options: [
                new ChoiceOption({
                  label: 'vrai',
                  value: 'true'
                }),
                new ChoiceOption({
                  label: 'faux',
                  value: 'false'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_2',
              title: 'Qui est Jeff Bezos ?',
              helpText: 'Culture Générale 1 ou plusieurs réponses.',
              type: QuestionType.MultipleChoice,
              multiple: true,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Le fondateur d\'Amazon',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'L\'actuel PDG d\'Amazon',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Le créateur de Blue Origin',
                  value: '3'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_3',
              title: 'Le premier humain à être allé dans l\'espace était Neil Armstrong.',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'vrai',
                  value: 'true'
                }),
                new ChoiceOption({
                  label: 'faux',
                  value: 'false'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_4',
              title: 'L\'accessibilité permet...',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'D\'optimiser son site selon la qualité de la connexion du visiteur',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'D\'optimiser son site pour qu\'il soit pratique et lisible pour l\'ensemble des visiteurs',
                  value: '2'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_5',
              title: 'Qu\'est-ce que les GAFAM ?',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Un collectif open-source',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'L\'ensemble des 5 plus grandes entreprises tech américaine',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Des exosquelettes nipon',
                  value: '3'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_6',
              title: 'Les processeurs M1 des nouveaux Mac sont fabriqués par Apple, en interne.',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'vrai',
                  value: 'true'
                }),
                new ChoiceOption({
                  label: 'faux',
                  value: 'false'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_7',
              title: 'Que signifie le "s" dans "https" ?',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Qu\'il y en a plusieurs',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Qu\'il est sécurisé',
                  value: '2'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_8',
              title: 'Qu\'est-ce qu\'une API ?',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Un protocole d\'accessibilité web',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Une interface de programmation d\'applications',
                  value: '2'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_9',
              title: 'Qu\'est-ce qu\'un MVP ?',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Un élément indispensable au bon fonctionnement de la blockchain',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Une version d\'un produit avec juste assez de fonctionnalités pour être utilisable',
                  value: '2'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_10',
              title: 'En combien de temps la nouvelle Tesla Model S Plaid passe-t-elle de 0 à 96 km/h ?',
              helpText: 'Culture Générale',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: '1,9s',
                  value: '1'
                }),
                new ChoiceOption({
                  label: '2,0s',
                  value: '2'
                }),
                new ChoiceOption({
                  label: '2,2s',
                  value: '3'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_11',
              title: 'Lequel de ces termes n\'est pas assimilable à Google ?',
              type: QuestionType.MultipleChoice,
              multiple: false,
              helpText: 'Informatique',
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Alphabet',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Nest',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Pixel',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'WearOS',
                  value: '4'
                }),
                new ChoiceOption({
                  label: 'PlatFormSync',
                  value: '5'
                })
              ]
            }),
            new QuestionModel({
              id: 'generale_12',
              title: 'Lesquelles de ces marques produisent des drones ?',
              helpText: 'Informatique, 1 ou plusieurs réponses.',
              type: QuestionType.MultipleChoice,
              multiple: true,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Visuo',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Logitech',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Razer',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'DJI',
                  value: '4'
                })
              ]
            }),
            new QuestionModel({
              title: 'Excellent! Vous êtes à mi-chemin.',
              content: ' Testez vos connaissances !',
              type: QuestionType.SectionBreak
            }),

            new QuestionModel({
              id: 'info_1',
              helpText: 'Informatique.',
              title: 'Quel est le composant d\'un ordinateur dédié aux calculs ?',
              type: QuestionType.MultipleChoice,
              required: true,
              multiple: false,
              options: [
                new ChoiceOption({
                  label: 'Le disque dur',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'L\'alimentation',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'La carte graphique',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'Le microprocesseur',
                  value: '4'
                })
              ]
            }),
            new QuestionModel({
              id: 'info_2',
              title: 'Combien de chiffres composent au maximum une adresse IP ?',
              helpText: 'Informatique',
              type: QuestionType.MultipleChoice,
              required: true,
              multiple: false,
              options: [
                new ChoiceOption({
                  label: '10 chiffres',
                  value: '1'
                }),
                new ChoiceOption({
                  label: '11 chiffres',
                  value: '2'
                }),
                new ChoiceOption({
                  label: '12 chiffres',
                  value: '3'
                })
              ]
            }),

            new QuestionModel({
              id: 'info_3',
              title: 'Pour éviter de consommer de l\'énergie inutilement je peux régler sur un ordinateur la durée de...',
              helpText: 'Informatique',
              type: QuestionType.MultipleChoice,
              required: true,
              multiple: false,
              options: [
                new ChoiceOption({
                  label: 'L\'affichage de l\'écran',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'De travail d\'un logiciel',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'La tension d\'alimentation (en volts) en la diminuant',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'La mise en veille (si aucune action n\'est faite sur l\'ordinateur)',
                  value: '4'
                })
              ]
            }),
            new QuestionModel({
              id: 'info_4',
              title: 'Quels sont aujourd\'hui les 2 architectures de microprocesseur les plus répandu ?',
              type: QuestionType.MultipleChoice,
              multiple: true,
              helpText: 'Informatique 1 ou plusieurs réponses',
              required: true,
              options: [
                new ChoiceOption({
                  label: 'AMD',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'X86',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'ARM',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'SoC',
                  value: '4'
                })
              ]
            }),
            new QuestionModel({
              id: 'info_5',
              title: 'Qu\'est-ce que le Python ?',
              type: QuestionType.MultipleChoice,
              multiple: false,
              helpText: 'Informatique',
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Un langage de programmation',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Une méthode pour faire passer des tests utilisateurs',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Un serpent',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'Une méthode de gestion de conflit',
                  value: '4'
                })
              ]
            }),
            new QuestionModel({
              id: 'info_6',
              title: 'La nouvelle puce M1 d\'Apple est composé de...',
              type: QuestionType.MultipleChoice,
              multiple: false,
              helpText: 'Informatique',
              required: true,
              options: [
                new ChoiceOption({
                  label: '6 coeurs CPU, 6 coeurs GPU',
                  value: '1'
                }),
                new ChoiceOption({
                  label: '8 coeurs CPU, 8 coeurs GPU',
                  value: '2'
                }),
                new ChoiceOption({
                  label: '10 coeurs CPU, 16 coeurs GPU',
                  value: '3'
                })
              ]
            }),
            new QuestionModel({
              id: 'info_7',
              title: 'Le cache du navigateur internet permet...',
              type: QuestionType.MultipleChoice,
              multiple: false,
              helpText: 'Informatique',
              required: true,
              options: [
                new ChoiceOption({
                  label: 'De naviguer de manière anonyme sur Internet',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'De stocker une version des pages vues lors des précédentes visites',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'De stocker l\'historique des pages vues',
                  value: '3'
                })
              ]
            }),


            new QuestionModel({
              title: 'Excellent! Vous y êtes presque !',
              content: 'On part sur les technologies & logiciels !',
              type: QuestionType.SectionBreak
            }),

            new QuestionModel({
              id: 'techno_1',
              title: 'Quelle technologie LED, entre le micro et le mini, est auto-émicive ?',
              helpText: 'Technologies & logiciels',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Le micro-LED',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Le mini-LED',
                  value: '2'
                })
              ]
            }),
            new QuestionModel({
              id: 'techno_2',
              title: 'Apple a annoncé en juin l\'amélioration d\'Apple Music avec la prise en charge de nouveaux formats audios.' +
                'Quel format ne fait pas parti de ces technologies ?',
              helpText: 'Technologies & logiciels',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Dolby Atmos',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'DTX',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'LossLess Audio',
                  value: '3'
                })
              ]
            }),
            new QuestionModel({
              id: 'techno_3',
              title: 'Quel est la technologie d\'écran la plus complète et la moins perfectible ?',
              helpText: 'Technologies & logiciels',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Le mini-LED',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'L\'OLED',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Le micro-LED',
                  value: '3'
                })
              ]
            }),
            new QuestionModel({
              id: 'techno_4',
              title: 'Lequel de ces 4 logiciels n\'est pas un outil de production majeur en webdesign ?',
              helpText: 'Technologies & logiciels',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Sketch',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'XD',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Photoshop',
                  value: '3'
                }),
                new ChoiceOption({
                  label: 'Figma',
                  value: '4'
                })
              ]
            }),
            new QuestionModel({
              id: 'techno_5',
              title: 'Parmi les formats de fichiers suivants, lesquels peuvent intégrer des formes vectorielles ?',
              helpText: 'Technologies & logiciels 1 ou plusieurs réponses.',
              type: QuestionType.MultipleChoice,
              multiple: true,
              required: true,
              options: [
                new ChoiceOption({
                  label: '.ai',
                  value: '1'
                }),
                new ChoiceOption({
                  label: '.svg',
                  value: '2'
                }),
                new ChoiceOption({
                  label: '.jpg',
                  value: '3'
                }),
                new ChoiceOption({
                  label: '.eps',
                  value: '4'
                }),
                new ChoiceOption({
                  label: '.bmp',
                  value: '5'
                })
              ]
            }),
            new QuestionModel({
              id: 'techno_6',
              title: 'Lequel est un moteur de recherche web ?',
              helpText: 'Technologies & logiciels',
              type: QuestionType.MultipleChoice,
              multiple: false,
              required: true,
              options: [
                new ChoiceOption({
                  label: 'Google',
                  value: '1'
                }),
                new ChoiceOption({
                  label: 'Firefox',
                  value: '2'
                }),
                new ChoiceOption({
                  label: 'Safari',
                  value: '3'
                })
              ]
            })


          ],


        methods: {
          /* eslint-disable-next-line no-unused-vars */
          onComplete(completed, questionList) {
            // This method is called whenever the "completed" status is changed.
            this.completed = completed
          },

          arrayEquals(a, b) {
            return Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
              a.every((val, index) => val === b[index])
          },

          calculateScore() {
            this.questions.forEach(question => {
              if (question.type !== QuestionType.SectionBreak) {
                let answer = question.answer
                if (typeof answer === 'object') {
                  answer.sort((a, b) => a - b)

                  if (this.arrayEquals(answer, this.answers[question.id])) {
                    this.score++
                  }
                }
                if (answer === this.answers[question.id]) {
                  this.score++
                }
              }
            })
          },

          onQuizSubmit() {
            // Set `submitted` to true so the form knows not to allow back/forward
            // navigation anymore.
            this.$refs.flowform.submitted = true

            this.submitted = true
            this.calculateScore()
          },

          onTimer(time, formattedTime) {
            this.time = formattedTime
            this.formattedTime = formattedTime
          }
        },
      }
    },
  }
</script>

<style lang="css">
  @import '../../src/assets/css/themes/theme-purple.css';
  /* If using the npm package, use the following lines instead of the one above */
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css'; */
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>
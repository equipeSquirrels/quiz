// Import vue component
import FlowForm from './components/FlowForm.vue'
import Question from './components/Question.vue'
import QuestionModel, { QuestionType, ChoiceOption, LinkOption, MaskPresets } from './models/QuestionModel'
import LanguageModel from './models/LanguageModel'
import Example from "../examples/quiz/Quiz";

// To allow use as module (npm/webpack/etc.) export component
export {
  Example,
  FlowForm,
  Question,
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LinkOption,
  LanguageModel,
  MaskPresets
}
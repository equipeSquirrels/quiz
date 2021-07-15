// Create and setup your form here

<template>
  <div>
    <header class="vff-header">
      <div class="f-container">
        <!-- Add custom logo here -->
        <svg xmlns="http://www.w3.org/2000/svg" width='150' height='28' fill='white' viewBox="0 0 361.3 69.57">
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path d="M35.05 12.34h-22v9.88h20.24v10H13.08V54.7H0V2.36h35.05zM79 35q0 9.74-5.32 15.35t-15.07 5.6q-9.68 0-15-5.6T38.25 35q0-9.84 5.36-15.42t15-5.57q9.7 0 15 5.61T79 35zm-12.62.07a24.64 24.64 0 00-.58-5.85 10.88 10.88 0 00-1.6-3.75 6 6 0 00-2.46-2.05 7.91 7.91 0 00-3.13-.58 8.34 8.34 0 00-3 .51 5.82 5.82 0 00-2.46 2A10.8 10.8 0 0051.5 29a24.06 24.06 0 00-.63 6 23.19 23.19 0 00.6 5.85A11 11 0 0053 44.47a5.77 5.77 0 002.46 2 8.22 8.22 0 003.27.63 7.84 7.84 0 003-.63 5.68 5.68 0 002.45-1.9 11.19 11.19 0 001.65-3.64 24.4 24.4 0 00.58-5.88zM112.08 26.86h-1a9.16 9.16 0 00-2-.37c-.89-.08-1.88-.12-3-.12a16 16 0 00-4.06.56 36.9 36.9 0 00-4.13 1.34V54.7H85.57V15.22h12.31v5.66c.56-.51 1.34-1.16 2.33-1.95a23.8 23.8 0 012.73-1.88 15.17 15.17 0 013.11-1.39 11 11 0 013.36-.58h1.33c.49 0 .94.06 1.34.1zM164 54.7V35c0-1.94 0-3.59-.11-4.92a10 10 0 00-.63-3.27 3.59 3.59 0 00-1.63-1.85 6.93 6.93 0 00-3.12-.58 6.71 6.71 0 00-2.77.62 18.65 18.65 0 00-3 1.74v28h-12.4V35c0-1.92 0-3.56-.12-4.9a10.27 10.27 0 00-.65-3.29 3.59 3.59 0 00-1.63-1.85 6.84 6.84 0 00-3.08-.58 6.63 6.63 0 00-3 .71 21.81 21.81 0 00-2.82 1.65v28h-12.3V15.22h12.3v4.36a34.59 34.59 0 015.7-4 12.45 12.45 0 016-1.44 11.68 11.68 0 016.36 1.73 10.78 10.78 0 014.25 5.13 36.16 36.16 0 016.65-5.09 12.93 12.93 0 016.39-1.78 13.23 13.23 0 014.92.88 9.57 9.57 0 013.69 2.64 12.47 12.47 0 012.48 4.52 23.27 23.27 0 01.82 6.83v25.7zM254.85 68.55a32.87 32.87 0 01-4.24.78 65.92 65.92 0 01-6.66.24 21.07 21.07 0 01-7-1 12.93 12.93 0 01-4.83-2.94 11.81 11.81 0 01-2.9-4.43 17.71 17.71 0 01-1.11-5.52q-11.12-.49-17.49-7.7t-6.38-19.4q0-12.63 6.75-20t18.6-7.33q11.81 0 18.59 7.29t6.79 20a31.14 31.14 0 01-3.85 15.87 21.31 21.31 0 01-10.88 9.4c0 2.56.61 4.32 1.7 5.3s3 1.45 5.75 1.45a12.87 12.87 0 003.31-.46 13 13 0 002.55-.9h1.3zm-17-26.75a17.08 17.08 0 002.6-5.33 28.31 28.31 0 00.92-8 28.3 28.3 0 00-1-8 16.55 16.55 0 00-2.58-5.4 10 10 0 00-3.79-2.99 10.92 10.92 0 00-4.41-.94 10.72 10.72 0 00-4.39.87 10.51 10.51 0 00-3.8 3.07 16 16 0 00-2.62 5.42 28.41 28.41 0 00-1 8.05 28.14 28.14 0 001 8 16.17 16.17 0 002.6 5.33 9.8 9.8 0 003.76 3.12 11 11 0 004.43.93 10.61 10.61 0 004.5-1 9.77 9.77 0 003.76-3.13zM298.65 54.7h-12.3v-4.36a33.11 33.11 0 01-5.87 4.06 13.61 13.61 0 01-6.37 1.39q-5.87 0-9.15-3.71t-3.29-11.16v-25.7H274V34.8c0 2 .06 3.71.16 5a10.09 10.09 0 00.76 3.27 3.84 3.84 0 001.74 1.86 7 7 0 003.28.63 9.42 9.42 0 003.08-.63 13.4 13.4 0 003.29-1.72v-28h12.3zM320.73 9.6h-13V0h13zm-.35 45.1h-12.31V15.22h12.31zM361.3 54.7h-34.52v-8.12l18.84-22.11h-18v-9.25h33.29v8L342 45.28h19.3z"/>
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
        <p class="text-success" v-else-if="submitted && score <= total">"Vous avez obtenu {{ score }} sur {{ total }}. Félicitation ! Bienvenue dans la famille des testeurs de Résonance
        Vous êtes plutôt dans la team technologie et logiciel."</p>

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
          title: 'Neil Armstrong fut le premier astronaute humain de l\'histoire.',
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
              label: 'L\'ensemble des 5 plus grandes entreprises tech américaines',
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
          title: 'Les processeurs M1 des nouveaux Mac sont conçus par Apple, en interne.',
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
          title: 'Sélectionnez les 2 marques qui produisent des drones :',
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
          title: 'Dans un ordinateur, quel est le composant dédié aux calculs ?',
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
              label: 'Le processeur',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          id: 'info_2',
          title: 'Au maximum, combien de chiffres composent une adresse IP ?',
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
          title: 'Pour éviter de gaspiller l\'énergie de mon ordinateur, je peux régler :',
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
              label: 'La tension d\'alimentation en la diminuant',
              value: '3'
            }),
            new ChoiceOption({
              label: 'La mise en veille',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          id: 'info_4',
          title: 'Quelles sont aujourd\'hui les 2 architectures de microprocesseur les plus répandues ?',
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
          title: 'La nouvelle puce M1 d\'Apple est composée de...',
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
          title: 'Le cache du navigateur permet...',
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
            'Quel format n\'en fait pas partie ?',
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
      ]
    }
  },
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
          if (answer == this.answers[question.id]) {
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
</script>

<style lang="css">
@import '../../src/assets/css/themes/theme-purple.css';
/* If using the npm package, use the following lines instead of the one above */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>

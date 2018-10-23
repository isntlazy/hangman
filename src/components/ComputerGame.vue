<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h3 v-if="!wordToGuess.length">Input your word so computer will try to guess it. After hit Enter!</h3>
        <h3 v-else>Great! Now computer will try to guess your word. Just sit and watch it!</h3>
        <v-text-field
          v-show="!wordToGuess.length"
          mask="aaaaaaaaaaaa"
          v-model="playerWord"
          @keyup.enter="saveGuessed"
          autofocus
          dark
          maxlength="12"
          class="mt-2 letter-input"
          label="Letter"
          placeholder="Input your word here"
          solo
        ></v-text-field>
        <v-snackbar
          v-model="showSnackbar"
          :timeout="3000"
          top="top"
        >
          {{ snackBarText }}
          <v-btn
            color="pink"
            flat
            @click="showSnackbar = false"
          >
            Close
          </v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        possibleLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        playerWord: '',
        notUsedlettersFromWord: [],
        showSnackbar: false,
        snackBarText: ''
      }
    },
    computed: {
      ...mapGetters(['wordToGuess', 'usedLetters', 'gameMode', 'gameIsOver'])
    },

    watch: {
      usedLetters (newUsedLetters) {
        const self = this
        if (!this.gameIsOver) {
          this.notUsedlettersFromWord = this.notUsedlettersFromWord.filter((letter) => newUsedLetters.indexOf(letter) === -1)
          setTimeout(function () {
            self.guessNewLetter()
          }, 4000)
        }
      }
    },
    methods: {
      ...mapActions(['guessLetter', 'changeWordToGuess']),
      saveGuessed () {
        if (this.playerWord !== '') {
          this.$store.dispatch('checkWord', this.playerWord)
            .then((response) => {
              if (response.data.results.length && response.data.results[0].matchType === 'inflection') {
                this.notUsedlettersFromWord = [...new Set(this.playerWord.toUpperCase().split(''))]
                this.changeWordToGuess(this.playerWord)
              } else {
                this.snackBarText = `The word do not exist or computer doesn't know it, sorry. Please try another one`
                this.showSnackbar = true
              }
            })
        }
      },
      guessNewLetter () {
        const randomLetter = this.generateLetter()
        this.snackBarText = `Computer selected letter ${randomLetter}`
        this.guessLetter(randomLetter)
        this.showSnackbar = true
      },
      generateLetter () {
        let lettersAlreadyGuessed = 0
        this.playerWord.toUpperCase().split('').forEach((letter) => {
          if (this.usedLetters.indexOf(letter) !== -1) {
            lettersAlreadyGuessed++
          }
        })
        console.log(lettersAlreadyGuessed)
        const num = Math.random()
        if (this.playerWord.length - lettersAlreadyGuessed <= 4 && num < 0.7) {
          // We are making 70% chance to guess last letters for computer
          return this.notUsedlettersFromWord[Math.floor(Math.random() * this.notUsedlettersFromWord.length)]
        } else {
          return this.generateRandomLetter()
        }
      },
      generateRandomLetter () {
        let randomLetter = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)]
        if (this.usedLetters.indexOf(randomLetter) !== -1) {
          return this.generateRandomLetter()
        } else {
          return randomLetter
        }
      }
    }
  }
</script>

<style>
  .letter-input input {
    font-size: 25px;
    text-transform: uppercase !important;
  }
</style>

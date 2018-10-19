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
        showSnackbar: false,
        snackBarText: ''
      }
    },
    computed: {
      ...mapGetters(['wordToGuess', 'usedLetters', 'gameMode', 'gameIsOver'])
    },
    watch: {
      usedLetters (newValue) {
        const self = this
        if (!this.gameIsOver) {
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
          this.changeWordToGuess(this.playerWord)
        }
      },
      guessNewLetter () {
        const randomLetter = this.generateRandomLetter()
        this.snackBarText = `Computer selected letter ${randomLetter}`
        this.guessLetter(randomLetter)
        this.showSnackbar = true
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

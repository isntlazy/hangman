<template>
  <div class="word-container">
    <v-item-group>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex class="mt-3" :key="i" v-for="(letter, i) in wordToGuess">
            <v-card dark color="secondary">
              <v-card-text v-if="i === 0 || i === wordToGuess.length-1 || usedLetters.indexOf(letter) !== -1" class="px-0">{{ letter }}</v-card-text>
              <v-card-text v-else class="px-0">_</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12>
            <h3>Input your letter in the field and hit Enter!</h3>
              <v-text-field
                mask="a"
                v-model="currentLetter"
                @keyup.enter="guessNewLetter($event)"
                autofocus
                dark
                maxlength="1"
                class="mt-2 letter-input"
                label="Letter"
                placeholder="Let's try to guess it!"
                solo
              ></v-text-field>
            <v-snackbar
              v-model="showSnackbar"
              :timeout="5000"
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
    </v-item-group>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        currentLetter: '',
        isLetterUsed: true,
        showSnackbar: false,
        snackBarText: ''
      }
    },
    computed: {
      ...mapGetters(['wordToGuess', 'usedLetters'])
    },
    methods: {
      ...mapActions(['guessLetter']),
      guessNewLetter (event) {
        this.showSnackbar = false
        const letter = event.target.value.toUpperCase()
        if (letter === '') {
          return false
        }
        if (this.usedLetters.indexOf(letter) !== -1) {
          this.snackBarText = 'Hey, you already used this letter, try another one!'
        } else {
          if (this.wordToGuess.indexOf(letter) !== -1) {
            this.snackBarText = 'Nice! Another right letter'
          } else {
            this.snackBarText = `No ${letter} letter there, sorry...`
          }
          this.guessLetter(letter)
        }
        this.showSnackbar = true
        this.currentLetter = ''
      }
    }

  }
</script>

<style>
  .letter-input input {
    font-size: 25px;
    text-transform: uppercase !important;
  }
 .word-container {
   height: 259px;
 }
</style>

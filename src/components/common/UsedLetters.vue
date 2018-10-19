<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="light-blue darken-4 pt-2">
            <h3>Used Letters:</h3>
            <v-card-text class="px-0 display-2 mr-3">
              <v-chip color="primary" text-color="white" v-for="(letter, i) in usedLetters" :key="i">
                <v-avatar>
                  <v-icon v-if="wordToGuess.indexOf(letter) !== -1">check_circle</v-icon>
                  <v-icon v-else>cancel</v-icon>
                </v-avatar>
                <span class="font-weight-bold">{{ letter }}</span>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    created () {
      const firstLetter = this.wordToGuess.substring(0, 1)
      const lastLetter = this.wordToGuess.slice(-1)
      this.guessLetter(firstLetter)
      if (firstLetter !== lastLetter) {
        this.guessLetter(lastLetter)
      }
    },
    computed: {
      ...mapGetters(['usedLetters', 'wordToGuess'])
    },
    methods: {
      ...mapActions(['guessLetter'])
    }
  }
</script>

<style scoped>

</style>

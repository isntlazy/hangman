<template>
  <v-flex xs12>
    <div>
      <h1>Try to guess the word</h1>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card>
              <hangman />
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card>
              <word />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <used-letters />
    </div>
  </v-flex>
</template>

<script>
  import Hangman from './common/Hangman'
  import Word from './common/Word'
  import UsedLetters from './common/UsedLetters'
  import { mapGetters } from 'vuex'
  export default {
    components: { Hangman, Word, UsedLetters },
    computed: {
      ...mapGetters(['gameIsOver'])
    },
    watch: {
      gameIsOver () {
        this.$router.push('/game_over')
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <v-flex xs12>
    <div>
      <h1>{{ gameMode === 'player' ? 'Try to guess the word' : 'Computer will try to guess your word' }}</h1>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card>
              <hangman />
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card>
              <word-container />
              <component :is="gameMode === 'player' ? 'player-game' : 'computer-game'"></component>
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
  import PlayerGame from './PlayerGame'
  import ComputerGame from './ComputerGame'
  import WordContainer from './common/WordContainer'
  import UsedLetters from './common/UsedLetters'
  import { mapGetters } from 'vuex'
  export default {
    components: { Hangman, WordContainer, UsedLetters, PlayerGame, ComputerGame },
    computed: {
      ...mapGetters(['gameIsOver', 'gameMode'])
    },
    watch: {
      gameIsOver (newValue, oldValue) {
        if (newValue === true) {
          this.$router.push('/game_over')
        }
      }
    }
  }
</script>

<style scoped>

</style>

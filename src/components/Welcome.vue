<template>
  <v-flex xs12 sm6>
    <v-card>
      <v-img
        src="/static/bg.jpg"
        height="200px"
      >
      </v-img>

      <v-card-title primary-title>
        <div>
          <div class="headline font-weight-bold">Welcome to Hangman Game!</div>
          <span class="grey--text">Please choose a Game Mode</span>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn to="/player_game" dark large>I want to solve the word</v-btn>
        <v-btn to="/computer_game" large>I want computer to solve my word</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text>
          By choosing a type of Game you can choose between two modes: to guess the word yourself or to give computer a chance to guess your word. Have a Nice Game!
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    mounted () {
      this.clearState()
    },
    methods: {
      ...mapActions(['clearState'])
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-if="gameMode === 'player'">
      <h1 v-if="isWinner">Congratulations! You did it! You win the game!</h1>
      <h1 v-else>Sorry, you lose. Try next time</h1>
    </div>
    <div v-else>
      <h1 v-if="isWinner">Wow, computer guessed your word. Try more complex next time!</h1>
      <h1 v-else>Nice word! Even the genius computer didn't solve it</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isWinner', 'gameMode'])
    }
  }
</script>

<style scoped>

</style>

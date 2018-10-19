<template>
  <div>
    <h1 v-if="isWinner">Congratulations! You did it! You win the game!</h1>
    <h1 v-else>Sorry, you lose. Try next time</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isWinner'])
    }
  }
</script>

<style scoped>

</style>

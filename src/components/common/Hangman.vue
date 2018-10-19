<template>
  <div>
    <img v-show="status === hangmanStatus" v-for="status in possibleStatuses" :src="`/static/hangman${status}.png`" :key="status">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        possibleStatuses: [0, 1, 2, 3, 4, 5, 6]
      }
    },
    computed: {
      ...mapGetters(['hangmanStatus'])
    },
    methods: {
      ...mapActions(['changeHangmanStatus'])
    }
  }
</script>

<style scoped>
 img {
   max-width: 300px;
 }
</style>

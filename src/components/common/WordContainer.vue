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

    </v-item-group>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['wordToGuess', 'usedLetters'])
    }
  }
</script>

<style>
  .word-container {
    height: 103px;
  }
</style>

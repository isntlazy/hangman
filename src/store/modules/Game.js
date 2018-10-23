const state = {
  gameMode: 'computer', // 'player' or 'computer' - that's telling who is solving the word
  hangmanStatus: 0,
  wordToGuess: '',
  usedLetters: [],
  gameIsOver: false,
  isWinner: false
}

const mutations = {
  RESET_GAME_SETTINGS (state) {
    state.usedLetters = []
    state.gameIsOver = false
    state.isWinner = false
  },
  ACTIVATE_PLAYER_GAME_MODE (state) {
    state.gameMode = 'player'
    state.hangmanStatus = 0
  },
  ACTIVATE_COMPUTER_GAME_MODE (state) {
    state.gameMode = 'computer'
    state.hangmanStatus = 0
    state.wordToGuess = ''
  },
  CHANGE_WORD_TO_GUESS (state, payload) {
    state.wordToGuess = payload
  },
  CHANGE_HANGMAN_STATUS (state, payload) {
    state.hangmanStatus = payload
  },
  CHANGE_GAME_OVER (state, payload) {
    state.gameIsOver = payload
  },
  CHANGE_IS_WINNER (state, payload) {
    state.isWinner = payload
  },
  GUESS_LETTER (state, payload) {
    state.usedLetters.push(payload)
  }
}

const actions = {
  resetGameSettings ({ commit }) {
    commit('RESET_GAME_SETTINGS')
  },
  activatePlayerGameMode ({ commit }) {
    commit('RESET_GAME_SETTINGS')
    commit('ACTIVATE_PLAYER_GAME_MODE')
  },
  activateComputerGameMode ({ commit }) {
    commit('RESET_GAME_SETTINGS')
    commit('ACTIVATE_COMPUTER_GAME_MODE')
  },
  changeWordToGuess ({ commit }, payload) {
    commit('CHANGE_WORD_TO_GUESS', payload)
  },
  changeHangmanStatus ({ commit }, payload) {
    commit('CHANGE_HANGMAN_STATUS', payload)
  },
  guessLetter ({ commit, getters }, letter) {
    if (getters.wordToGuess.indexOf(letter) === -1) {
      commit('CHANGE_HANGMAN_STATUS', getters.hangmanStatus + 1)
    }
    commit('GUESS_LETTER', letter)
    if (getters.hangmanStatus === 6) {
      commit('CHANGE_GAME_OVER', true)
      commit('CHANGE_IS_WINNER', false)
    }
    let isWinner = true
    getters.wordToGuess.split('').forEach((letter) => {
      if (getters.usedLetters.indexOf(letter) === -1) {
        isWinner = false
      }
    })
    if (isWinner) {
      commit('CHANGE_GAME_OVER', true)
      commit('CHANGE_IS_WINNER', true)
    }
  }
}

const getters = {
  hangmanStatus: (state) => state.hangmanStatus,
  gameMode: (state) => state.gameMode,
  wordToGuess: (state) => state.wordToGuess.toUpperCase(),
  usedLetters: (state) => state.usedLetters,
  gameIsOver: (state) => state.gameIsOver,
  isWinner: (state) => state.isWinner
}

export default {
  state,
  mutations,
  actions,
  getters
}

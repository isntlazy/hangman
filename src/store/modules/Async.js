import axios from 'axios'

const state = {
  apiBaseUrl: 'https://od-api.oxforddictionaries.com/api/v1',
  appId: 'e075ed4e',
  appKey: 'f5765231281fb0fdf8a05787898ac79f'
}

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['app_id'] = state.appId
axios.defaults.headers.common['app_key'] = state.appKey

const mutations = {

}

const actions = {
  getWordToGuess ({ commit, getters }) {
    const url = `${getters.apiBaseUrl}/wordlist/en/registers=Rare;lexicalCategory=noun;`

    axios.get(url)
      .then(function (response) {
        const filteredData = response.data.results.filter((item) => /^[a-z]+$/i.test(item.word) && item.word.length > 5)
        // we only want words without dashes/spaces etc
        const randomWord = filteredData[Math.floor(Math.random() * filteredData.length)].word
        commit('CHANGE_WORD_TO_GUESS', randomWord)
      })
  }
}

const getters = {
  apiBaseUrl: (state) => state.apiBaseUrl
}

export default {
  state,
  mutations,
  actions,
  getters
}

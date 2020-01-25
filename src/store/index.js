import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: {},
  },
  mutations: {
    getText(state, payload) {
      state.text = payload.text
    }
  },
  actions: {
    async getTextAction(context, { textId }) {
      const payload = {
        text: {}
      }

      await axios
        .get(`/api/v1/texts/${textId}`).then(res => payload.text = res.data.data)
        .catch(e => console.log(e))
      context.commit('getText', payload)
    }
  },
  modules: {
  }
})

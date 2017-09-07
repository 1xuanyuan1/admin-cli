/**
 * 选择语言
 */
import * as types from '../mutation_types.js'
import langs from '@/assets/lang'
import ls from 'store2'

const state = {
  lang: ls.get('lang') || 'cn',
  token: ls.get('token') || ''
}
state.string = langs[state.lang]

const mutations = {
  [types.CHANGE_LANG] (state, lang) {
    state.string = langs[lang]
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
    ls.set('token', token)
  },
  [types.CLEAR_TOKEN] (state) {
    state.token = ''
    ls.remove('token')
  }
}

const actions = {
  fnChangeLang ({ commit }, lang) {
    commit(types.CHANGE_LANG, lang)
  },
  setToken ({ commit }, token) {
    commit(types.SET_TOKEN, token)
  },
  clearToken ({ commit }) {
    commit(types.CLEAR_TOKEN)
  }
}

const getters = {
  string: state => state.string,
  token: state => state.token
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

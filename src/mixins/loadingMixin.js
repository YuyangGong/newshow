import * as types from '@/vuex/mutation-types.js'

export default {
  methods: {
    showLoading () {
      this.$store.commit(types.TOGGLE_LOADING, true)
    },
    hideLoading () {
      this.$store.commit(types.TOGGLE_LOADING, false)
    }
  }
}

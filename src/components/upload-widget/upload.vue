<template>
  <div class="upload-container">
    <upload-dashboard v-show="isShowDashboard" @toggle-dashboard="toggleDashboard"/>
    <upload-actions @toggle-dashboard="toggleDashboard"/>
  </div>
</template>

<script>
import uploadDashboard from './upload-dashboard'
import uploadActions from './upload-actions'

export default {
  data () {
    return {
      isShowDashboard: true
    }
  },
  methods: {
    toggleDashboard (to) {
      this.isShowDashboard = typeof to === 'boolean'
        ? to
        : !this.isShowDashboard
    }
  },
  components: {
    uploadDashboard,
    uploadActions
  }
}
</script>

<style lang="scss" scoped>
.upload-container {
  position: fixed;
}
</style>

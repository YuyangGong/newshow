<template>
  <div class="upload-container">
    <upload-dashboard v-show="isShowDashboard"/>
    <upload-actions/>
  </div>
</template>

<script>
import uploadDashboard from './upload-dashboard'
import uploadActions from './upload-actions'

export default {
  data () {
    return {
      isShowDashboard: false
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

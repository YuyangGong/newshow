<template>
  <div class="upload-dashboard">
    <dashboard-header
      :photoTotal="1"
      @hide-dashboard="$emit('toggle-dashboard', false)"/>
    <dashboard-list/>
    <dashboard-footer
      @select-album="selectAlbum"
      @upload="upload"/>
  </div>
</template>

<script>
import dashboardHeader from './upload-dashboard-header'
import dashboardList from './upload-dashboard-list'
import dashboardFooter from './upload-dashboard-footer'

export default {
  data () {
    return {
      curAlbumId: ''
    }
  },
  methods: {
    selectAlbum (id) {
      this.curAlbumId = id
    },
    upload () {
    }
  },
  components: {
    dashboardHeader,
    dashboardList,
    dashboardFooter
  }
}
</script>

<style lang="scss" scoped>
.upload-dashboard {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 24rem;
  color: #555;
  border: 1px solid #d1d3d2;
  border-radius: 5px;
  box-shadow: 0 3px 12px rgba(27,31,35,.3);
  background-color: #fff;
}
</style>

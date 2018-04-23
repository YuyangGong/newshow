<template>
  <div class="dashboard-header">
    <span>一共上传 {{ photoTotal }} 张照片</span>
    <span class="dashboard-header-icon icon-keyboard_arrow_down"
      @click="$emit('hide-dashboard')"></span>
  </div>
</template>

<script>
export default {
  props: {
    photoTotal: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-header {
  display: flex;
  padding-left: $globalPadding;
  padding-right: $globalPadding;
  height: 2.2rem;
  box-sizing: border-box;
  font-size: .65rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  .dashboard-header-icon {
    color: #fff;
    border-radius: 3px;
    padding: 4px;
    background-color: #3f96f6;
    cursor: pointer;
    transition: all .3s;
    box-shadow: 1px 1px 12px rgba(27,31,35,.3);
    &:hover {
      opacity: .9;
    }
  }
}
</style>

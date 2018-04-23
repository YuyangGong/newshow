<template>
  <div class="dashboard-item">
    <span class="dashboard-item-position">{{ position }}</span>
    <span class="dashboard-item-name">
      <img class="dashboard-small-img" :src="item.url" :alt="item.name">
      {{ item.name }}
    </span>
    <span class="dashboard-item-size">{{ item.size | transformSize }}</span>
    <span class="dashboard-item-progress progress-wrap">
      <span :style="{width: progressHeight}"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    },
    position: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressHeight () {
      return this.item.progress + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-item-name {
  display: flex;
  align-items: center;
}
.dashboard-small-img {
  height: 2.5rem;
  width: 3.5rem;
  margin-right: 1rem;
}
.progress-wrap {
  position: relative;
  height: 6px;
  width: 100%;
  background-color: #f5f5f5;
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #4093f3;
  }
}
</style>

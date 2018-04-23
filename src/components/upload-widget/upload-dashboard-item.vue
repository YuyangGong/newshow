<template>
  <div class="dashboard-item">
    <span class="dashboard-item-position">{{ position }}</span>
    <span class="dashboard-item-name">
      <img class="dashboard-small-img" :src="item.url" :alt="item.name">
      {{ item.name }}
    </span>
    <span class="dashboard-item-size">{{ item.size }}</span>
    <span class="dashboard-item-progress">{{ item.progress }}</span>
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
  margin-right: .5rem;
}
</style>

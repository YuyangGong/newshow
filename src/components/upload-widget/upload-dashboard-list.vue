<template>
  <div class="dashboard-list">
    <div class="dashboard-item dashboard-list-title">
      <span class="dashboard-item-position">#</span>
      <span class="dashboard-item-name">名称</span>
      <span class="dashboard-item-size">大小</span>
      <span class="dashboard-item-progress">进度</span>
    </div>
    <dashboard-item
      class="dashboard-item"
      v-for="(item, idx) of list"
      :key="idx"
      :position="idx + 1"
      :item="item"/>
  </div>
</template>

<script>
import dashboardItem from './upload-dashboard-item'

function getData () {
  return new Array(20).fill().map((_, idx) => ({
    name: `test${idx}.jpg`,
    size: 32423,
    progress: idx * 3,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524324072440&di=f4d83ec02a9b6fe5af2aed93034c2ed8&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F38%2F06%2F16pic_3806677_b.jpg'
  }))
}

export default {
  data () {
    return {
      list: getData()
    }
  },
  components: {
    dashboardItem
  }
}
</script>

<style lang="scss">
.dashboard-list {
  box-sizing: border-box;
  overflow: auto;
  height: 19.2rem;
  font-size: .7rem;
  .dashboard-list-title {
    border-bottom: 1px solid #f2f1f3;
  }
  .dashboard-item {
    display: flex;
    align-items: center;
    padding: .6rem $globalPadding;
    border-top: 1px solid #f2f1f3;
    .dashboard-item-position {
      width: 2rem;
    }
    .dashboard-item-name {
      flex-grow: 1;
    }
    .dashboard-item-size {
      width: 4rem;
    }
    .dashboard-item-progress {
      width: 10rem;
    }
  }
}
</style>

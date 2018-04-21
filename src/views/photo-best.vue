<template>
  <div class="photo-wall">
    <image-list
      :items="items"
      :embedPage="'best-photo'"
    />
  </div>
</template>

<script>
import loadingMixin from '@/mixins/loadingMixin'
import imageList from 'components/common/image-list'

function mockData () {
  function getSingleData (id) {
    return {
      id: id,
      title: '上海实习照片',
      url: '',
      shortUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524324072440&di=f4d83ec02a9b6fe5af2aed93034c2ed8&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F38%2F06%2F16pic_3806677_b.jpg',
      ownerId: '1',
      ownerName: '羊羊羊',
      rank: id,
      likes: id * (Math.random() * 10 | 0),
      isLike: Math.random() > 0.5,
      comments: []
    }
  }
  return new Array(99).fill().map((_, id) => getSingleData(+id))
}

export default {
  mixins: [loadingMixin],
  data () {
    return {
      items: []
    }
  },
  created () {
    this.showLoading()
    setTimeout(() => {
      this.hideLoading()
      this.items = mockData()
    }, 2000)
  },
  methods: {
  },
  components: {
    imageList
  }
}
</script>

<style>

</style>

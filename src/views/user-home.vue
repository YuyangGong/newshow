<template>
  <div class="user-home">
    <template v-if="user">
      <aside class="user-aside">
        <div class="user-profile">
          <div class="icon-user"></div>
        </div>
        <div class="user-name">{{user.name}}</div>
        <div class="user-likes">
          <span class="icon-heart"></span>
          <span>{{user.likes}}</span>
        </div>
        <div class="user-info">
          <div :title="user.phone">{{user.phone}}</div>
          <div :title="user.email">{{user.email}}</div>
        </div>
      </aside>
      <main class="user-main">
        <div
          class="user-images"
          v-for="(imagesObject, idx) of nomolizedDateImages"
          :key="idx">
          <div class="image-date">
            <span>{{ imagesObject.date }}日</span>
            <span>{{ imagesObject.month | numMonth2TextMonth}}</span>
          </div>
          <div class="photo-list">
            <image-item
              v-for="image of imagesObject.images"
              :key="image.id"
              :item="image"
              @route-to="routeTo"
              />
          </div>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import loadingMixin from '@/mixins/loadingMixin'
import imageItem from 'components/common/image-item'

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
      comments: [],
      timestamp: new Date() - (id * 1000 * 60 * 60 * 24 / 10 | 0)
    }
  }
  return new Array(100).fill().map((_, id) => getSingleData(+id))
}

export default {
  mixins: [loadingMixin],
  data () {
    return {
      user: null,
      photos: null
    }
  },
  created () {
    this.showLoading()
    // console.log(this.$route)
    window.setTimeout(() => {
      this.user = {
        name: '羊羊羊',
        id: '1',
        email: 'yuyang421736079@gmail.com',
        photos: mockData(),
        phone: '12345678901',
        likes: '5647'
      }
      this.photos = this.user.photos
      this.hideLoading()
    }, 2000)
  },
  computed: {
    // 序列化图片数组, 后端需要保证传来的是按照创建
    // 时间排好序的数组, 这里我们将其按具体日期分类
    nomolizedDateImages () {
      if (!this.photos) {
        return null
      }
      console.log(this.photos)
      const res = []
      let wrapObj = null
      this.photos.forEach(photo => {
        const dateObj = new Date(photo.timestamp)
        const date = dateObj.getDate()
        const month = dateObj.getMonth()
        if (wrapObj &&
             date === wrapObj.date &&
             month === wrapObj.month) {
          wrapObj.images.push(photo)
        } else {
          wrapObj && res.push(wrapObj)
          wrapObj = {
            date,
            month,
            images: [photo]
          }
        }
      })
      wrapObj && res.push(wrapObj)
      console.log(res)
      return res
    }
  },
  methods: {
    routeTo (photoId) {
      this.$router.push(`/photo/${photoId}`)
    }
  },
  components: {
    imageItem
  }
}
</script>

<style lang="scss">
.user-home {
  font-size: .85rem;
  .user-aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: $navbarHeight;
    left: 0;
    height: 100%;
    width: $sidebarWidth * 1.5;
    border: 1px solid #eaecef;
    background-color: $themeTextColor;
    border: 1px solid #eaecef;
    color: $themeColor;
    box-shadow: 0 2px 11px rgba(27,31,35,.3);
    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: $themeColor;
      color: $themeTextColor;
    }
    .user-name {
      margin-top: .8rem;
      font-size: 1.1rem;
    }
    .user-likes {
      font-size: .8rem;
      margin-top: .8rem;
      margin-bottom: 1.4rem;
      span:first-child {
        color: red;
      }
    }
    .user-info {
      width: 5rem;
      font-size: .7rem;
      text-align: left;
      div:first-child {
        margin-bottom: .2rem;
      }
      div:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .user-main {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding-top: $navbarHeight;
    padding-left: $sidebarWidth * 1.75;
    padding-bottom: $footerHeight;
    .photo-list {
      & > div {
        display: inline-block;
        width: 210px;
        margin-right: 25px;
        margin-bottom: 30px;
        .image-wrap {
          height: 210px;
        }
      }
    }
    .image-date {
      color: $themeColor;
      margin-bottom: 1rem;
      margin-top: .5rem;
      span:first-child {
        font-size: 1.6rem;
      }
      span:last-child {
        margin-left: -.2rem;
      }
    }
  }
}
</style>

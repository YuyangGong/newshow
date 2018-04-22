<template>
  <div class="photo-detail">
    <template v-if="photo">
      <div class="photo-main photo-section">
        <img :src="photo.url" :alt="photo.title"/>
        <div class="photo-info">
          <span class="photo-name">{{photoFileName}}</span>
          <span class="status-btn" :class="{'outdate-btn': photo.status === '2'}">{{ photo.status === '1' ? '正常' : '失效' }}</span>
          <ul class="actions-list photo-actions">
            <li @click="download" class="photo-download">
              <span class="icon-cloud_download"></span>
              <!-- TODO: 兼容性不太好, 需要辅助其他方法(时间比较赶, 先这样实现了) -->
              <!-- 关于其兼容性, 可见https://caniuse.com/#feat=download -->
              <!-- 且需要设置响应头Content-Disposition, 为默认的文件名 -->
              <a :href="photo.url" :download="photoFileName"></a>
              <span>下载原图</span>
            </li>
            <li @click="focusComment">
              <span class="icon-comment"></span>
              <span>{{photo.commentsTotal}} Comment{{photo.commentsTotal > 1 ? 's' : ''}}</span>
            </li>
            <li class="action-like" :class="{'like-active': photo.isLike}" @click="toggleLike(photo.id)">
              <span class="icon-like"></span>
              <span>Likes</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="photo-avator photo-section">
        <span class="icon-user"></span>
        <span @click="routeToUserPage(photo.ownerId)">{{ photo.ownerName }}</span>
      </div>
      <div class="photo-form photo-section">
        <input type="text"
          v-model="commentContent"
          @focus="isShowErrMsg = false"
          placeholder="Write a Comment..."
          ref="comment">
        <button @click="postComment">POST</button>
        <transition name="fade">
          <span v-if="isShowErrMsg">评论内容不能为空~</span>
        </transition>
      </div>
      <div class="photo-comments photo-section"
        v-if="comments && comments.length">
      </div>
    </template>
  </div>
</template>

<script>
import loadingMixin from '@/mixins/loadingMixin'
import commentList from 'components/common/comment-list'

function mockData (id) {
  return {
    id: id,
    title: '上海实习照片',
    status: '2', // 1 - 正常  2 - 失效
    fileType: 'jpg',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524324072440&di=f4d83ec02a9b6fe5af2aed93034c2ed8&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F38%2F06%2F16pic_3806677_b.jpg',
    shortUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524324072440&di=f4d83ec02a9b6fe5af2aed93034c2ed8&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F38%2F06%2F16pic_3806677_b.jpg',
    ownerId: '1',
    ownerName: '羊羊羊',
    rank: id,
    likes: id * (Math.random() * 10 | 0),
    isLike: true,
    timestamp: new Date() - id * 1000 * 60 * 60 * 24 * Math.random() * 3 | 0,
    commentsTotal: 10,
    comments: [
      {
        content: '很好, 很棒',
        ownerId: '2',
        ownerName: '小笨蛋',
        avator: '',
        timestamp: new Date() - id * 1000 * 60 * 60 * 24 * Math.random() * 3 | 0
      },
      {
        content: '来帮忙顶一顶~',
        ownerId: '4',
        ownerName: '大坏蛋',
        avator: '',
        timestamp: new Date() - id * 1000 * 60 * 60 * 24 * Math.random() * 3 | 0
      },
      {
        content: '啦啦啦啦啦~ 加油呀~',
        ownerId: '7',
        ownerName: '小飞机',
        avator: '',
        timestamp: new Date() - id * 1000 * 60 * 60 * 24 * Math.random() * 3 | 0
      }
    ]
  }
}

export default {
  mixins: [loadingMixin],
  data () {
    return {
      photo: null,
      comments: null,
      commentContent: '',
      isShowErrMsg: false
    }
  },
  created () {
    const id = this.$route.params.photoid
    this.showLoading()
    setTimeout(() => {
      this.photo = mockData(id)
      this.comments = this.photo.comments
      this.hideLoading()
    }, 2000)
  },
  computed: {
    photoFileName () {
      return `${this.photo.title}.${this.photo.fileType}`
    }
  },
  methods: {
    routeToUserPage (userId) {
      this.$router.push(`/user/${userId}`)
    },
    download () {

    },
    focusComment () {
      this.$refs.comment.focus()
    },
    toggleLike () {
      this.photo.isLike = !this.photo.isLike
    },
    postComment () {
      if (/^\s*$/.test(this.commentContent)) {
        this.isShowErrMsg = true
      } else {
        // post(...)
        this.commentContent = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-detail {
  box-sizing: border-box;
  width: 80%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  .photo-section {
    padding: $detailPadding;
  }
  .photo-main {
    border: 1px solid #f1f1f1;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      margin-bottom: 1.4rem;
    }
    .photo-info {
      position: relative;
      .photo-name {
        font-size: 1.4rem;
        font-weight: 400;
      }
      .status-btn {
        display: inline-block;
        padding: .20rem .25rem;
        font-size: .6rem;
        color: $themeTextColor;
        background-color: $successColor;
        border-radius: 3px;
        letter-spacing: 2px;
      }
      .outdate-btn {
        background-color: $failColor;
      }
      .actions-list {
        display: flex;
        position: absolute;
        right: 0;
        top: .1rem;
        font-size: .8rem;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: .2rem .3rem;
          margin-right: .1rem;
          border: 1px solid $successColor;
          color: $successColor;
          transition: all .3s ease-in-out;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            color: $themeTextColor;
            background-color: $successColor;
          }
          span:last-child {
            font-size: .6rem;
            margin-left: .2rem;
          }
        }
        .photo-download {
          position: relative;
          a {
            position: absolute;
            top: 0;
            height: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
        .action-like {
          color: $confirmColor;
          border-color: $confirmColor;
          &:hover {
            color: $activeColor;
            background-color: $themeTextColor;
          }
          &.like-active {
            color: $themeTextColor;
            background-color: $confirmColor;
          }
        }
      }
    }
  }
  .photo-avator {
    display: flex;
    align-items: center;
    background-color: #faf9f9;
    border: 1px solid #f1f1f1;
    border-top: none;
    border-bottom: 2px solid #f1f1f1;
    padding-top: .6rem;
    padding-bottom: .6rem;
    span:first-child {
      display: inline-block;
      font-size: 1.8rem;
      color: #f7fff7;
      background-color: #ededec;
      padding: .3rem;
      border-radius: 50%;
    }
    span:last-child {
      margin-left: .5rem;
      font-size: .7rem;
      color: $confirmColor;
      cursor: pointer;
    }
  }
  .photo-form {
    border: 1px solid #f1f1f1;
    padding-top: .7rem;
    input {
      display: block;
      width: 100%;
      font-size: .8rem;
      outline: none;
      border: none;
      border-bottom: 1px solid #e1e0e0;
      margin-bottom: .3rem;
      height: 2rem;
      padding: .3rem 0;
      &::placeholder {
        color: #a9a5a5;
      }
    }
    button {
      display: inline-block;
      font-size: .5rem;
      margin-top: .5rem;
      padding: .45rem .6rem;
      border: none;
      border-radius: .2rem;
      background-color: $confirmColor;
      color: $themeTextColor;
      cursor: pointer;
      &:hover {
        opacity: .9;
      }
    }
    span {
      margin-left: .4rem;
      margin-top: .2rem;
      font-size: .7rem;
      color: $failColor;
    }
  }
}

@media (max-width: $MQMobile) {
  .photo-detail {
    width: 90%;
    .photo-section {
      padding: $smallDeviceDetailPadding;
      .photo-info {
        .actions-list {
          position: relative;
          margin-top: .5rem;
        }
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

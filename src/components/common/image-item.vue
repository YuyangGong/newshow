<template>
  <div class="image-item" @click="$emit('route-to', item.id)">
    <div class="image-wrap">
      <img
        :src="item.shortUrl"
        :alt="item.title"/>
      <template v-if="isShowRank">
        <div class="image-rank">{{item.rank}}</div>
        <div class="image-like">
          <span class="image-like-number">{{item.likes}}</span>
        </div>
      </template>
    </div>
    <div
      v-if="isShowTitle"
      class="image-title"
      :title="item.title">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowTitle: {
      type: Boolean,
      default: false
    },
    isShowRank: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.image-item {
  font-size: .8rem;
  color: $themeColor;
  cursor: pointer;
  .image-wrap {
    position: relative;
    overflow: hidden;
    img {
      height: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .image-rank {
      position: absolute;
      font-size: 1.2rem;
      top: .3rem;
      right: .3rem;
      transform: translate(-10%, 10%);
      color: $themeTextColor;
      font-weight: 100;
      z-index: 1;
    }
    .image-like {
      &:before {
        content: '';
        position: absolute;
        right: 0;
        border-top: 3rem solid rgba(70,115,224,.4);
        border-left: 3rem solid transparent;
        border-right: 3rem solid transparent;
        transform: rotate(-135deg);
        transform-origin: 70% 25%;
        opacity: .8;
        z-index: 0;
      }
      .image-like-number {
        position: absolute;
        font-size: .7rem;
        padding: .6rem .5rem .6rem 2rem;
        right: 0;
        bottom: 0;
        color: $themeTextColor;
        background-color: rgba(70,115,224,.4);
        &:before {
          content: '❤';
          position: absolute;
          margin-left: -1.3rem;
        }
      }
    }
  }
  .image-title {
    margin-top: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      color: $activeColor;
      font-weight: 500;
      text-decoration: underline;
    }
  }
}
</style>

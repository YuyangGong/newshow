<template>
  <div class="image-list">
    <image-item
      v-for="item of items"
      :key="item.id"
      :item="item"
      :isShowTitle="embedPage === 'photo-album'"
      :isShowRank="embedPage === 'best-photo'"
      @route-to="routeTo"
    />
  </div>
</template>

<script>
import imageItem from 'components/common/image-item'

export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    embedPage: {
      type: String,
      default: 'photo-wall'
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

<style lang="scss" scope>
.image-list {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 240px;
  & > div {
    display: inline-block;
    width: 240px;
    margin-bottom: 20px;
    .image-wrap {
      height: 260px;
    }
  }
}

@media (min-width: 320px) and (max-width: 479px) {
  .image-list {
    width: 300px;
    & > div {
      width: 145px;
      margin-right: 10px;
      margin-bottom: 20px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 155px;
      }
    }
  }
}

@media (min-width: 480px) and (max-width: 639px) {
  .image-list {
    width: 450px;
    & > div {
      width: 215px;
      margin-right: 20px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 240px;
      }
    }
  }
}

@media (min-width: 640px) and (max-width: 719px) {
  .image-list {
    width: 580px;
    & > div {
      width: 270px;
      margin-right: 40px;
      margin-bottom: 50px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 300px;
      }
    }
  }
}

@media (min-width: 720px) and (max-width: 967px) {
  .image-list {
    width: 700px;
    & > div {
      width: 220px;
      margin-right: 20px;
      margin-bottom: 30px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 240px;
      }
    }
  }
}

@media (min-width: 968px) and (max-width: 1167px) {
  .image-list {
    width: 940px;
    & > div {
      width: 220px;
      margin-right: 20px;
      margin-bottom: 30px;
      &:nth-child(4n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 240px;
      }
    }
  }
}

@media (min-width: 1168px) and (max-width: 1399px) {
  .image-list {
    width: 1150px;
    & > div {
      width: 210px;
      margin-right: 25px;
      margin-bottom: 30px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 230px;
      }
    }
  }
}

@media (min-width: 1450px) {
  .image-list {
    width: 1400px;
    & > div {
      width: 210px;
      margin-right: 28px;
      margin-bottom: 35px;
      &:nth-child(6n) {
        margin-right: 0;
      }
      .image-wrap {
        height: 230px;
      }
    }
  }
}
</style>

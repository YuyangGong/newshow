<template>
  <div class="comment-item">
    <div class="comment-avator icon-user" @click="routeToUserHome">
    </div>
    <div class="comment-main">
      <div class="comment-title">
        <span @click="routeToUserHome">{{ comment.ownerName }}</span>
        <span>{{ comment.timestamp | fromNow }}</span>
      </div>
      <div class="comment-content">{{ comment.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: null
    }
  },
  methods: {
    routeToUserHome () {
      this.$router.push(`/user/${this.comment.ownerId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-item {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  .comment-avator {
    @include avator-placeholder;
    cursor: pointer;
    margin-right: .6rem;
  }
  .comment-main {
    font-size: .7rem;
    .comment-title {
      margin-bottom: .4rem;
      font-size: .9rem;
      span:first-child {
        cursor: pointer;
        transition: all .3s;
        &:hover {
          color: $confirmColor;
        }
      }
      span:last-child {
        font-size: .7rem;
        margin-left: .1rem;
      }
    }
  }
}
</style>

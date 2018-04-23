<template>
  <div class="comment-list">
    <comment-item
      v-for="comment of comments"
      :key="comment.id"
      :comment="comment"/>
  </div>
</template>

<script>
import commentItem from './comment-item'

export default {
  props: {
    initComments: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      comments: this.initComments.slice()
    }
  },
  components: {
    commentItem
  }
}
</script>

<style lang="scss" scoped>
</style>

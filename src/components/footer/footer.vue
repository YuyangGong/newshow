<template>
  <footer>
    <span>{{copyrightText}}</span>
  </footer>
</template>

<script>
export default {
  props: {
    copyrightText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $footerHeight;
  font-size: .7rem;
  color: $themeTextColor;
  background-color: $themeColor;
}
</style>

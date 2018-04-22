<template>
  <footer class="footer" :class="{'fixed-footer': isFixed}">
    <span>{{copyrightText}}</span>
  </footer>
</template>

<script>
export default {
  props: {
    copyrightText: {
      type: String,
      default: ''
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $footerHeight;
  font-size: .7rem;
  color: $themeTextColor;
  background-color: $themeColor;
}
.fixed-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>

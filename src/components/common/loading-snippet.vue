<template>
  <div class="loading-snippet"/>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.loading-snippet {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 3px 12px rgba(27,31,35,0.15);
  animation: rotate 1.2s linear 0s infinite;
  &:after {
    content: '';
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border-right: 2px solid transparent;
    border-left: 2px solid $themeColor;
    border-top: 2px solid $themeColor;
  }
  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
}
</style>

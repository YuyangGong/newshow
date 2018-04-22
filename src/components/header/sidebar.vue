<template>
  <div class="sidebar">
    <transition name="slide">
      <ul class="nav-list" v-show="isShow">
        <li
          v-for="(item, idx) of items"
          class="nav-item"
          :class="{active: item === activeItem}"
          :key="idx"
          @click="routeTo(item)">
          {{item.title}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    activeItem: {
      type: Object,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      hideSidebarFn: null
    }
  },
  mounted () {
    const hideSidebarFn = () => {
      if (this.isShow) {
        this.$emit('toggle-sidebar', false)
      }
    }
    this.hideSidebarFn = hideSidebarFn
    window.addEventListener('click', hideSidebarFn)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.hideSidebarFn)
    this.hideSidebarFn = null
  },
  methods: {
    routeTo (item) {
      this.$emit('toggle-sidebar')
      this.$emit('route-to', item.routeName)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  position: fixed;
  top: $navbarHeight;
  height: 100%;
  left: 0;
  border: 1px solid #eaecef;
  background-color: $themeTextColor;
  font-size: .85rem;
  z-index: 2;
  li {
    box-sizing: border-box;
    width: $sidebarWidth;
    padding: .6rem 1.4rem;
    &:hover, &.active {
      cursor: pointer;
      background-color: $themeColor;
      color: $themeTextColor;
    }
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s;
  transform: translateX(0);
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>

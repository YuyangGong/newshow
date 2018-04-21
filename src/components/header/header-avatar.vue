<template>
  <div class="header-avatar">
    <div v-if="user">
      <span
        class="user-button"
        @click.stop="toggleUserList">
        {{ user.name }}
      </span>
      <transition name="slide">
        <ul v-show="isShowList" class="action-list" @click="isShowList = false">
          <li @click="$emit('routeToCurrentUserProfile')">用户主页</li>
          <li @click="$emit('logout')">注销</li>
        </ul>
      </transition>
    </div>
    <div v-else
      class="user-button"
      @click="$emit('login')">
      登陆
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      isShowList: false,
      hideShowListFn: null
    }
  },
  mounted () {
    const hideShowList = () => {
      if (this.isShowList) {
        this.isShowList = false
      }
    }
    this.hideShowListFn = hideShowList
    window.addEventListener('click', hideShowList)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.hideShowListFn)
    this.hideShowListFn = null
  },
  methods: {
    toggleUserList () {
      this.isShowList = !this.isShowList
    }
  }
}
</script>

<style lang="scss" scoped>
.header-avatar {
  position: absolute;
  right: $globalPadding;
  .user-button {
    @include nav-button;
  }
  .action-list {
    position: absolute;
    top: 1.75rem;
    right: $globalPadding;
    font-size: .70rem;
    // 这里设计成反色, 保证设计上的统一
    color: $textColor;
    background-color: $themeTextColor;
    border: 1px solid rgba(27,31,35,0.15);
    box-shadow: 0 3px 12px rgba(27,31,35,0.15);
    li {
      width: 3rem;
      padding: .5rem 1rem;
      &:hover {
        background-color: $activeColor;
        color: $themeTextColor;
        cursor: pointer;
      }
    }
  }
}
.slide-enter-active, .slide-leave-active {
  transition: height .3s;
  // 俩个item的高度相加
  height: (0.7rem + 0.5rem * 2) * 2;
  overflow: hidden;
}
.slide-enter, .slide-leave-to {
  height: 0;
}
</style>

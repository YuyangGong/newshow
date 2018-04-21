<template>
  <header class="header">
    <sidebar-button @toggle-sidebar="$emit('toggle-sidebar')"/>
    <img
      class="logo"
      @click="$emit('route-to', 'home')"
      src="@/assets/logo.png"
      alt="logo"/>
    <ul class="nav-list">
      <li
        v-for="(item, idx) of items"
        class="nav-item"
        :class="{active: item === activeItem}"
        :key="idx"
        @click="$emit('route-to', item.routeName)">
        {{item.title}}
      </li>
    </ul>
    <header-avatar
      :user="user"
      @login="$emit('login')"
      @logout="$emit('logout')"
      @route-to-current-user-profile="$emit('routeToCurrentUserProfile')"/>
  </header>
</template>

<script>
import sidebarButton from './sidebar-button'
import headerAvatar from './header-avatar'

export default {
  props: {
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
    },
    user: {
      type: Object,
      default () {
        return null
      }
    }
  },
  components: {
    sidebarButton,
    headerAvatar
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: $navbarHeight;
  padding: 0 $globalPadding;
  font-size: .8rem;
  color: $themeTextColor;
  background-color: $themeColor;
  box-shadow: 0 3px 12px rgba(27,31,35,.3);
  .logo {
    height: 2rem;
    margin-right: 1.2rem;
    cursor: pointer;
  }
  .nav-list {
    .nav-item {
      float: left;
      @include nav-button;
    }
  }
}
/* mobile header style */
@media (max-width: $MQMobile) {
  .header {
    justify-content: center;
    .nav-list {
      display: none;
    }
    .logo {
      width: 50%;
      height: auto;
      margin-right: 0;
    }
  }
}
</style>

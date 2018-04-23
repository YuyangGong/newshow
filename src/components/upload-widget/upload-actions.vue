<template>
  <div class="upload-actions">
    <transition name="slide">
      <div v-show="isShowList" class="actions-list">
        <div class="action-phone icon-phone upload-icon"
          @mouseover="showPhoneTip"
          @mouseout="hidePhoneTip">
          <transition name="slide">
            <div v-show="isShowPhoneTip" class="phone-tip">联系客服: 110120119</div>
          </transition>
        </div>
        <div class="action-photo icon-file-picture upload-icon"
          @click="$emit('toggle-dashboard')"></div>
      </div>
    </transition>
    <div
      class="action-plus icon-plus upload-icon"
      :class="{'active-action': isShowList}"
      @click="toggleList"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowList: false,
      isShowPhoneTip: false
    }
  },
  methods: {
    toggleList () {
      this.isShowList = !this.isShowList
    },
    showPhoneTip () {
      this.isShowPhoneTip = true
    },
    hidePhoneTip () {
      this.isShowPhoneTip = false
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-actions {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 2rem;
  font-size: .6rem;
  right: $globalPadding;
  color: $themeTextColor;
  .upload-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .4rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    box-shadow: 2px 4px 12px rgba(27,31,35,.4);
    opacity: .8;
    transition: all .3s;
    cursor: pointer;
    &.active-action {
      opacity: 1;
    }
    &:hover {
      opacity: .9;
    }
  }
  .action-phone {
    background-color: #3f97fe;
  }
  .action-photo {
    background-color: #3dbad7;
  }
  .action-plus {
    width: 2.4rem;
    height: 2.4rem;
    background-color: #e9442d;
  }
  .phone-tip {
    position: absolute;
    top: .3rem;
    right: 3rem;
    padding: .5rem .8rem;
    border-radius: .3rem;
    line-height: 1rem;
    background-color: #3f97fe;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .4s;
  opacity: 1;
}
.slide-enter, .slide-leave-to {
  transform: translateY(30%);
  opacity: 0;
}
</style>

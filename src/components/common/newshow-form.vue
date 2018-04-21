<template>
  <div class="newshow-form">
    <img src="@/assets/logo.png" alt="logo">
    <template v-if="formType !== 'password-forget'">
      <input v-model="email" type="email" placeholder="邮箱"/>
      <input v-model="password" type="password" placeholder="密码"/>
      <input v-if="formType === 'register'" v-model="checkPassword" type="password" placeholder="重复密码">
      <div class="form-btn" @click="downFormBtn">{{formType === 'login' ? '登陆' : '注册'}}</div>
      <div class="helper-action">
        <span @click="togglePage('')">{{formType === 'login' ? '注册': '登入'}}</span>
        <span v-if="formType === 'login'" @click="togglePage('password-forget')">忘记密码</span>
      </div>
    </template>
    <template v-else>
      <p>很抱歉, 目前暂时没有有效的找回密码方式。</p>
      <p>你可以尝试联系网站管理员。</p>
      <p>邮箱: yuyang421736079@gmail.com</p>
      <div class="helper-action">
        <span @click="togglePage('login')">登陆</span>
        <span @click="togglePage('register')">注册</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      checkPassword: ''
    }
  },
  props: {
    formType: {
      type: String,
      // login register password-forget
      default: 'login'
    }
  },
  methods: {
    downFormBtn () {
      if (this.formType === 'login') {
        this.login()
      } else if (this.formType === 'register') {
        this.register()
      }
    },
    login () {
    },
    register () {
    },
    togglePage (to) {
      this.$router.push({
        name: to ||
          (this.formType === 'login' ? 'register' : 'login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.newshow-form {
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  img {
    padding: 2rem 1rem;
    background-color: $themeColor;
    width: 10rem;
    margin-bottom: 1.5rem;
  }
  input {
    box-sizing: border-box;
    width: 12rem;
    height: 1.8rem;
    padding: 0 .5rem;
    margin-bottom: .5rem;
    border: 1px solid $themeColor;
  }
  .form-btn {
    font-size: .8rem;
    text-align: center;
    padding: .5rem 3rem;
    margin-top: .8rem;
    margin-bottom: .5rem;
    border-radius: .3rem;
    background-color: $themeColor;
    color: $themeTextColor;
    cursor: pointer;
    &:hover {
      background-color: $activeColor;
    }
  }
  .helper-action {
    span {
      font-size: .75rem;
      color: $themeColor;
      text-decoration: underline;
      opacity: .6;
      cursor: pointer;
      &:hover {
        color: $activeColor;
        opacity: 1;
      }
    }
    span:first-child {
      margin-right: .5rem;
    }
    span:last-child {
      margin-right: 0;
    }
  }
  p {
    color: red;
    font-size: .8rem;
    margin-bottom: .5rem;
  }
  p:nth-child(4) {
    margin-bottom: .8rem;
  }
}
</style>

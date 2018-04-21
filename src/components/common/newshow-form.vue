<template>
  <div class="newshow-form">
    <img src="@/assets/logo.png" alt="logo">
    <input v-model="email" type="email" placeholder="邮箱"/>
    <input v-model="password" type="password" placeholder="密码"/>
    <input v-model="checkPassword" type="password" placeholder="重复密码">
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
  }
}
</script>

<style>

</style>

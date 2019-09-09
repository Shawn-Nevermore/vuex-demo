<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>我是全局属性account：{{ getAccount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getAccount() {
      return this.$store.state.account;
    }
  }
};
</script>

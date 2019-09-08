<template>
  <div>
    <p>我是全局属性account：{{ getAccount }}</p>
    <span>我是子组件</span>
    <div>来自父组件的message： {{ msg }}</div>
    <div>
      <button @click="sendMsg2Parent">向父组件传递信息</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      msg2Parent: "爹，儿子给您发微信了"
    };
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  methods: {
    sendMsg2Parent() {
      this.$emit("handle", this.msg2Parent);
    }
  },
  computed: {
    getAccount() {
      return this.$store.state.account;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
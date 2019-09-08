<template>
  <div>
    <span>我是父组件</span>
    <p>儿子发来的微信：{{ data }}</p>
    <hr />
    <child :msg="message" @handle="getMsgFromChild"></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  name: "parent",
  data() {
    return {
      message: "我是你爸爸",
      data: ""
    };
  },
  components: {
    child
  },
  methods: {
    getMsgFromChild(value) {
      this.data = value;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
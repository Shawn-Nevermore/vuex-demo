<template>
  <div class="parent">
    <p>全局属性count: {{ getNum }}</p>
    <button @click="add">全局+1</button>
    <span>我是父组件</span>
    <p>儿子发来的微信：{{ data }}</p>
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
    },
    add() {
      this.$store.commit("increase");
    }
  },
  computed: {
    getNum() {
      return this.$store.state.num;
    }
  }
};
</script>

<style scoped>
.parent {
  border: 1px solid #ddd;
  max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
}
</style>
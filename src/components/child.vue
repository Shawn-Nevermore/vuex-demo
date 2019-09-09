<template>
  <div class="child">
    <p>全局属性count: {{ getNum }}</p>
    <button @click="add">全局-1</button>
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
    },
    add() {
      this.$store.commit("decrease");
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
.child {
  border: 1px solid #ddd;
  max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
}
</style>
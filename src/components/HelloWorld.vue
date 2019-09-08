<template>
  <div class="hello">
    <parent />
  </div>
</template>

<script>
import parent from "./parent";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    parent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

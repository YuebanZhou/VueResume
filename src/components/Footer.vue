<template>
  <div id="footer">
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Copyright  2019-07  YuebanZhou"
    };
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  height: 30px;
  width: 100%;
  background-color: #eee;
  box-shadow: 0px -2px 8px #ccc;
}
span {
  color: #444;
  font-size: 12px;
  text-align: right;
  line-height: 30px;
  float: right;
  margin-right:20px;
}
</style>

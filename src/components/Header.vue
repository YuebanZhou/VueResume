<template>
  <div id="header">
    <div class="logo">
      <app-logo></app-logo>
    </div>
    <div class="author">{{author}}</div>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Header",
  data() {
    return {
      author: "YeubanZhou"
    };
  },
  components: {
    "app-logo": Logo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  height: 50px;
  width: 100%;
  background: #2a4e6d;
  box-shadow: 0px 2px 8px #2a4e6d;
}
#header .logo {
  float: left;
  width: 50px;
  height: 50px;
  margin: 0 20px;
}
#header .author {
  float: left;
  height: 50px;
  line-height: 65px;
  color: #fff;
}
</style>

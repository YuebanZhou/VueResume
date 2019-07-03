<template>
  <div id="about">
    <div class="link">
      <router-link to="/">
        <app-return></app-return>
      </router-link>
    </div>
    <div class="content">
      <p>Please contact me!</p>
    </div>
  </div>
</template>
<script>
import Return from "../Return";
export default {
  name: "About",
  components: {
    "app-return": Return
  }
};
</script>

<style>
#about {
  height: calc(100% - 80px);
  overflow-y: auto;
}
#about .link {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  width: 100%;
  padding-left: 20px;
}
#about .content {
  padding: 25px;
}
</style>

<template>
  <div id="contact">
    <div class="link">
      <router-link to="/">
        <app-return></app-return>
      </router-link>
    </div>

    <div class="content">
      <p>联系方式</p>
      <ul class="item1">
        <li v-for="item in items1" :key="item.name">
          <div class="name">{{item.name}}</div>
          <div class="detail">{{item.detail}}</div>
        </li>
      </ul>
      <p>个人主页</p>
      <ul class="item2">
        <li v-for="item in items2" :key="item.name">
          <a v-bind:href="item.detail" target="_blank">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Return from "../Return";
export default {
  name: "Contact",
  components: {
    "app-return": Return
  },
  data() {
    return {
      items1: [
        { name: "QQ", detail: "5980565612" },
        { name: "mail", detail: "yuebanzhou@163.com" },
        { name: "phone", detail: "15369930905" },
        { name: "wechat", detail: "zhouyan_598065612" }
      ],
      items2: [
        {
          name: "SF",
          detail: "https://segmentfault.com/u/shenbiaohutixiaoyueban"
        },
        { name: "github", detail: "https://github.com/YuebanZhou" },
        { name: "codepen", detail: "https://codepen.io/YuebanZhou/" },
        { name: "jq22", detail: "https://www.jq22.com/mem792516" }
      ]
    };
  }
};
</script>

<style>
#contact {
  height: calc(100% - 80px);
  overflow-y: auto;
}
#contact .link {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  width: 100%;
  padding-left: 20px;
}
#contact .content {
  padding: 25px;
}
#contact .content p {
  font-weight: bold;
  color: #2a4e6d;
}
#contact .content ul {
  background: #798ea0;
  padding: 10px;
  border-radius: 5px;
}
#contact .content .item1 li {
  height: 50px;
  color: #ddd;
}
#contact .content .item1 li .name {
  font-weight: bold;
  color: #fff;
}
#contact .content .item2 li {
  height: 50px;
  line-height: 50px;
  display: inline-block;
  width: 40%;
  margin-right: 10%;
  margin-bottom: 10px;

  text-align: center;
}
#contact .content .item2 li a {
  text-decoration: none;
  color: #fff;
}
</style>

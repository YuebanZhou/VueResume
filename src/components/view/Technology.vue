<template>
  <div id="technology">
    <div class="link">
      <router-link to="/">
        <app-return></app-return>
      </router-link>
    </div>

    <div class="content">
      <ul>
        <li v-for="item in items" :key="item.name">
          <div class="name">{{item.name}}</div>
          <div class="fa">
            <div class="percent" :style="'width:' + item.percent  ">{{item.percent}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Return from "../Return";
export default {
  name: "Technology",
  components: {
    "app-return": Return
  },
  data() {
    return {
      items: [
        { name: "HTML", percent: "90%" },
        { name: "CSS", percent: "90%" },
        { name: "JavaScript", percent: "80%" },
        { name: "jQuery", percent: "90%" },
        { name: "node", percent: "80%" },
        { name: "Git", percent: "90%" },
        { name: "SVN", percent: "90%" },
        { name: "Vue", percent: "60%" },
        { name: "Angular", percent: "60%" },
        { name: "React", percent: "50%" },
        { name: "JSP", percent: "80%" },
        { name: "Layui", percent: "80%" },
        { name: "小程序", percent: "30%" }
      ]
    };
  }
};
</script>

<style>
#technology {
  height: calc(100% - 80px);
  overflow-y: auto;
}
#technology .link {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  width: 100%;
  padding-left: 20px;
}
#technology .content {
  padding: 25px;
}
#technology .content ul li {
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
}
#technology .content ul li div {
  display: inline-block;
}
#technology .content ul li .name {
  width: 80px;
  font-weight: bold;
  position: relative;
  color: #2a4e6d;
}
#technology .content ul li .name::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 2px;
  background: #2a4e6d;
  left: -20px;
  top: 19px;
}
#technology .content ul li .fa {
  width: calc(100% - 90px);
  background: #ccc;
  border-radius: 15px;
}
#technology .content ul li .percent {
  /* width: attr(data-per); */
  text-align: right;
  background: #798ea0;
  color: #fff;
  border-radius: 15px;
  padding-right: 10px;
  box-sizing: border-box;
  animation: aniwidth 1s cubic-bezier(.97,0,.71,1.21);
}
@keyframes aniwidth {
  0% {
    width: 0;
  }
  100% {
    width: attr(data-per);
  }
}
</style>

<template>
  <div id="home">
    <div class="content" v-if="widthFlag">
      <div class="msg">
        <ul>
          <li v-for="msg in msgs" :key="msg.name">
            <span>{{msg.name}}</span>
            <span>{{msg.msg}}</span>
          </li>
        </ul>
      </div>
      <div class="bannerList">
        <ul>
          <router-link v-for="item in items" :key="item.name" tag="li" :to="{path:item.path}">
            <span>{{item.name}}</span>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="contentP" v-if="!widthFlag">
      <h3>Hover items!</h3>
      <div class="msg">
        <ul>
          <li v-for="msg in msgs" :key="msg.name">
            <div class="msgblock">
              <div>{{msg.name}}</div>
              <div>{{msg.msg}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bannerList">
        <ul>
          <router-link v-for="item in items" :key="item.name" tag="li" :to="{path:item.path}">
            <div class="mask"></div>
            <div class="img"></div>
            <div class="leep">{{item.name}}</div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msgs: [
        {
          name: "姓名",
          msg: "周琰"
        },
        {
          name: "年龄",
          msg: "25"
        },
        {
          name: "学历",
          msg: "全日制本科"
        },
        {
          name: "工作年限",
          msg: "3年"
        },
        {
          name: "期望薪资",
          msg: "6-7K"
        },
        {
          name: "应聘职位",
          msg: "前端开发"
        }
      ],
      items: [
        {
          name: "Expression",
          path: "expression"
        },
        {
          name: "Contact",
          path: "contact"
        },
        {
          name: "Technology",
          path: "technology"
        },
        {
          name: "About",
          path: "about"
        }
      ],
      widthFlag: false,
      width: document.body.clientWidth
    };
  },
  components: {},
  mounted() {
    if (this.width <= 480) {
      this.widthFlag = true;
    } else {
      this.widthFlag = false;
    }
    window.onresize = () => {
      if (document.body.clientWidth <= 480) {
        this.widthFlag = true;
      } else {
        this.widthFlag = false;
      }
      console.log(this.widthFlag);
    };
    console.log(this.widthFlag);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  height: calc(100% - 80px);
  overflow-y: auto;
}

#home .content,
#home .contentP {
  width: 90%;
  margin: 0 auto;
}

#home .content .msg {
  padding-top: 20px;
}
#home .content .msg ul li {
  height: 25px;
  line-height: 25px;
  position: relative;
  padding-left: 10px;
  color: #2a4e6d;
  border-bottom: 1px dashed #ccc;
}
#home .content .msg ul li::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 15px;
  background: #2a4e6d;
  left: 0;
  top: 5px;
}
#home .content .bannerList ul li {
  list-style: none;
  width: 45%;
  height: 100px;
  display: inline-block;
  margin-right: 10%;
  margin-top: 20px;
  background: #eee;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ccc;
  padding-top: 70px;
  box-sizing: border-box;
}
#home .content .bannerList ul li:nth-child(1) {
  background: url("../img/guan.svg") center no-repeat;
}
#home .content .bannerList ul li:nth-child(2) {
  background: url("../img/dun.svg") center no-repeat;
  margin-right: 0;
}
#home .content .bannerList ul li:nth-child(3) {
  background: url("../img/thor.svg") center no-repeat;
}
#home .content .bannerList ul li:nth-child(4) {
  background: url("../img/wide.svg") center no-repeat;
  margin-right: 0;
}
#home .content .bannerList ul li span {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 30px;
  background: rgba(0, 0, 0, 0.6);
}
#home .contentP h3 {
  text-align: center;
}
#home .contentP .msg {
  max-width: 670px;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
}
#home .contentP .msg ul li {
  display: inline-block;
  width: 100px;
  height: 40px;
  background: #2a4e6d;
  color: #fff;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 40px;
  overflow: hidden;
}
#home .contentP .msg ul li:last-child {
  margin-right: 0;
}
#home .contentP .msg ul li div {
  margin-top: 0;
  transition: margin-top 0.5s;
}
#home .contentP .msg ul li:hover div:nth-child(1) {
  margin-top: -40px;
}
#home .contentP .bannerList {
  max-width: 1040px;
  margin: 10px auto;
}
#home .contentP .bannerList ul {
  max-width: 1040px;
}
#home .contentP .bannerList ul li {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 20px solid #333;
  box-sizing: border-box;
  position: relative;
  margin: 20px;
  display: inline-block;
}
#home .contentP .bannerList ul li .mask {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #2a4e6d;
  position: absolute;
  left: 0;
  top: 0;
}
#home .contentP .bannerList ul li .img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s, transform 0.5s;
}
#home .contentP .bannerList ul li:nth-child(1) .img {
  background: url("../img/guan.svg") center no-repeat;
  background-size: 160px;
}
#home .contentP .bannerList ul li:nth-child(2) .img {
  background: url("../img/dun.svg") center no-repeat;
  background-size: 160px;
}
#home .contentP .bannerList ul li:nth-child(3) .img {
  background: url("../img/thor.svg") center no-repeat;
  background-size: 160px;
}
#home .contentP .bannerList ul li:nth-child(4) .img {
  background: url("../img/wide.svg") center no-repeat;
  background-size: 160px;
}
#home .contentP .bannerList ul li .leep {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #798ea0;
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  transform: scale(1.5);
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.2s;
  color: #fff;
  line-height: 180px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}
#home .contentP .bannerList ul li:hover .leep {
  opacity: 1;
  transform: scale(1);
}

#home .contentP .bannerList ul li:hover .img {
  opacity: 0;
  transform: scale(0);
}
</style>

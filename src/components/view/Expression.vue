<template>
  <div id="expression">
    <div class="link">
      <router-link to="/">
        <app-return></app-return>
      </router-link>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in items" :key="item.name">
          <div class="block">
            <div class="company">
              <div>{{item.name}}</div>
              <div>{{item.time}}</div>
            </div>
            <div class="object" v-for="object in item.object" :key="object.projectName">
              <div class="project">
                <span>{{object.projectName}}</span>
                <span>{{object.time}}</span>
              </div>
              <div class="work">项目介绍：{{object.work}}</div>
              <div class="detail">工作内容：{{object.detail}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Return from "../Return";
export default {
  name: "Expression",
  components: {
    "app-return": Return
  },
  data() {
    return {
      items: [
        {
          name: "河北鸿海环保科技有限公司",
          time: "2018.08-2019.08",
          object: [
            {
              projectName: "质控新平台",
              time: "2018.11-2019.08",
              work: "质控旧平台迁移。",
              detail:
                "与同事配合，增删框架模块。还原设计图，增加动态效果。调用接口，调整JSP页面结构。整理接口数据。"
            },

            {
              projectName: "河流应急预警管理平台",
              time: "2018.08-2019.08",
              work: "对河流流域的浮标站、岸边站、移动站等下发质控的系统平台。",
              detail: "增加平台所需模块。维护系统，调试系统BUG。"
            },

            {
              projectName: "数据环保远程质控智能化监管平台",
              time: "2018.08-2019.08",
              work: "下发质控系统平台，监控烟气、空气、水质的污染情况。",
              detail:
                "维护质控平台。调整页面布局，增删模块。梳理逻辑，根据需求及时作出调整。"
            },

            {
              projectName: "电极管理平台",
              time: "2018.10-2018.11",
              work: "公司内部使用，监控设备电极情况。",
              detail:
                "修改框架的JSP页面，删减不需要模块。配合UI工程师，调整框架整体配色，添加动效。梳理逻辑，调用接口，整理数据。维护平台。"
            }
          ]
        },
        {
          name: "联通系统集成有限公司",
          time: "2018.03-2018.08",
          object: [
            {
              projectName: "CEM数据展示",
              time: "2018.06-2018.08",
              work:
                "数据展示项目，数据可视化，以折线图，柱图，饼图，仪表盘等形式展示数据。观察排名情况。",
              detail:
                "了解基本需求，根据原型图进行页面的搭建与基本逻辑的实现，完成数据的交互。使用jquery、echarts、bootstrap等框架。"
            },

            {
              projectName: "沃门店项目",
              time: "2018.05-2018.08",
              work:
                "数据可视化。展示联通门店活动信息。全国，省级，地市级的用户量等信息展示。各门店短信发送量展示。排名信息。",
              detail:
                "搭建页面，实现地图三级下钻，展示全国各门店短信发送量，实时渲染后台数据。使用jquery、bootstrap、echarts等框架工具"
            },

            {
              projectName: "双终端系统",
              time: "2018.04-2018.08",
              work: "对联通用户信息进行统计，监控异常用户。数据展示。",
              detail:
                "查找页面框架，修改框架，搭建页面，兼容IE浏览器，实现基本逻辑功能。使用H+框架搭建页面，使用jquery实现页面逻辑。"
            },

            {
              projectName: "engine内嵌页面",
              time: "2018.04-2018.05",
              work: "内嵌到其他项目的页面，填写项目的配置信息。包含提交功能。",
              detail:
                "搭建页面，传递前台页面输入内容，对文本框进行非空及格式判断，利用localStorage对数据进行临时存储，进行展示。"
            },

            {
              projectName: "devops平台管理",
              time: "2018.03-2018.04",
              work: "对项目进行管理。包括代码获取，代码构建等功能。",
              detail:
                "搭建前端页面，完成数据交互，使用iframe，angular，boostrap等。利用localStorage存储功能完成前端页面的模糊查询、分页。"
            }
          ]
        },
        {
          name: "侠网旅游服务有限公司",
          time: "2016.11-2017.10",
          object: [
            {
              projectName: "后台管理系统",
              time: "2017.09-2017.10",
              work:
                "包括首页、登录注册页面、个人信息编辑、各项子功能页面。主要负责页面构建、数据交互。",
              detail:
                "与UI沟通设计图，使用HTML、CSS、JS完成基本静态页面的搭建。使用插件实现网页用户登录验证，上传用户头像，裁切头像等功能。使用AngularJS的路由和模板实现单页应用。使用AngularJS实现员工个人信息的增删改查。使用Ajax发送异步请求，调用后台数据库。用Bootstrap实现页面的响应式开发。负责项目的更新。"
            },

            {
              projectName: "侠侣亲子游移动端",
              time: "2017.08-2017.10",
              work: "幼儿园、小区、家庭亲子出游活动。",
              detail:
                "用DIV和CSS搭建页面。利用插件实现登录注册的验证，懒加载，幻灯片。利用Ajax实现前后端数据交互，更新景点亲子活动等信息。调用腾讯和微博的接口，实现免密登陆的功能。调用百度接口，展示景点地图。"
            },

            {
              projectName: "侠侣周边游",
              time: "2017.06-2017.08",
              work: "亲子游的拓展项目",
              detail:
                "用DIV和CSS快速搭建页面。应用百度地图接口，查看景点的位置信息。使用jQuery实现特效及事件绑定，实现整体页面的Tab切换。使用jQuery的touchSlider插件实现手机图片滑动。实现面包屑导航的功能。利用cookie和sessionID实现用户的登录退出。"
            },

            {
              projectName: "侠侣亲子游",
              time: "2017.03-2017.06",
              work: "幼儿园、小区、家庭亲子出游活动。",
              detail:
                "用DIV和CSS搭建页面。利用插件实现登录注册的验证，懒加载，幻灯片。利用Ajax实现前后端数据交互。调用腾讯和微博的接口，实现免密登陆的功能。调用百度接口，展示景点地图。"
            },

            {
              projectName: "大学生游乐网",
              time: "2016.11-2017.01",
              work:
                "针对大学生的服务终端网站，包括班级出游、驾校培训、考研、四六级等服务",
              detail:
                "与UI沟通商讨页面设计原型图，还原设计师的PSD稿。利用jQuery的插件完成首页轮播图，列表图片懒加载等功能。利用Bootstrap框架进行响应式页面布局。详情页面，调用微信接口。"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
#expression {
  height: calc(100% - 80px);
  overflow-y: auto;
}
#expression .link {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  width: 100%;
  padding-left: 20px;
}
#expression .content {
  padding: 25px;
}

#expression .content ul li .block {
  background: #798ea0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
#expression .content ul li .company {
  color: #fff;
  font-weight: bold;
  line-height: 25px;
  text-shadow: 2px 2px 4px #ccc;
  font-size: 16px;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 5px;
}
#expression .content ul li .project {
  color: #eee;
  font-weight: bold;
  font-size: 14px;
  margin-top: 15px;
}
#expression .content ul li .work {
  color: #ddd;
  font-size: 12px;
}
#expression .content ul li .detail {
  color: #ddd;
  font-size: 12px;
}
</style>

<template>
  <div id="app">
    <div class="indexFooter">
      <router-link to="/home"><i class="icon iconfont icon-haoyou"></i>首页</router-link>
       <router-link to="/zt"><i class="icon iconfont icon-notification"></i>专题</router-link>
       <router-link to="/userCenter"><i class="icon iconfont icon-kehufuwu"></i>我的</router-link>
    </div>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.indexFooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  border-top: 1px solid #e7e7e7;
  a {
    display: block;
    width: 33%;
    float: left;
    text-align: center;
    font-size: 0.22rem;
    color: #555555;
    text-decoration: none;
    i {
      display: inline-block;
      width: 100%;
      font-size: 0.4rem;
      margin: 0.1rem 0 0.04rem;
    }
  }
  .router-link-active {
    color: red;
    i {
      color: red;
    }
  }
}
</style>

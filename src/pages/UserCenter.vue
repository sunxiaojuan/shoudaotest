<template>
  <div class="userCenter">
    <div class="topCon">
        <img :src="headImg" alt="">
        <p>{{nameTitle}}</p>
    </div>
    <div>
      <ul>
        <li>
          <router-link to="/moneybag"><i class="icon iconfont icon-icon-home"></i>
          我的钱包222</router-link>
          
        </li>
        <li>
           <router-link to="/aboutsd"><i class="icon iconfont icon-kuaisukaidian"></i>
          关于收稻22</router-link>
        </li>
        <li @click="goMoney()">
          js跳转路由22
        </li>
      </ul>
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      headImg: "",
      nameTitle: ""
    };
  },
  methods: {
    getHeaddata() {
      var api =
        "https://www.shoudaozi.com/App/Account/GetUserInfo?userId=f4bae46c-52f4-44a8-b170-774711530821";
      this.$http.get(api).then(
        res => {
          this.headImg = res.body.rows.Avatar;
          this.nameTitle = res.body.rows.NickName;
        },
        error => {}
      );
    },
    goMoney() {
      this.$router.push({ path: "/moneybag" });
    }
  },
  mounted() {
    this.getHeaddata();
  }
};
</script>

<style scoped lang='scss'>
.topCon {
  width: 7.5rem;
  height: 3.98rem;
  background: url("../assets/img/mybg.jpg") no-repeat left top;
  background-size: cover;
  text-align: center;
  padding-top: 0.6rem;
  img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
  p {
    font-size: 0.3rem;
    text-align: center;
    color: #fff;
    line-height: 1rem;
  }
}
ul {
  li {
    font-size: 0.28rem;
    line-height: 1rem;
    margin: 0 0.3rem;
    border-bottom: 1px solid #e6e6e6;
    i {
      color: #ff9401;
      font-size: 0.4rem;
      vertical-align: middle;
      margin-right: 0.1rem;
    }
    a {
      display: block;
    }
  }
}
</style>

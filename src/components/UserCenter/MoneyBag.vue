<template>
  <div class="moneyWrap">
      <div class="topHead">
        <p>账户余额</p>
        <div>{{money}}</div>
        <router-link to="/GetMoney">点击验证动画效果 </router-link>
        <!-- <a href="javascript:;" @click="getMoney()">提现</a> -->
      </div>
      <div class="bargList">
    <p class="name">交易记录查看2222</p>
    <ul>
      <li>
        <p>{{title}}<span>{{price}}</span></p>
        <p>{{time}}<span>{{status}}</span></p>
      </li>
    </ul>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "",
  data() {
    return {
      money: "5000",
      time: "2018-12-26",
      title: "这个是一个测试的",
      price: 0,
      status: "进行中"
    };
  },
  methods: {
    get: function() {},
    getMoney: function() {
      this.$root.push({ name: "getMoney" });
    }
  },
  mounted: function() {
    this.get();
  }
};
</script>
<style lang="scss">
.moneyWrap {
  font-size: 0.4rem;
  .bargList {
    font-size: 0.26rem;
    .name {
      line-height: 0.7rem;
      background: #f7f7f7;
      padding: 0 0.3rem;
    }
  }
  ul {
    background: #fff;
    li {
      font-size: 0.3rem;
      border-bottom: 1px solid #ccc;
      p {
        padding: 0 0.3rem;
        line-height: 0.7rem;
      }
      span {
        float: right;

        color: #f63;
      }
    }
  }
}
.topHead {
  width: 100%;
  height: 4rem;
  background: url("../../assets/img/mybg.jpg") no-repeat left top;
  color: #fff;
  text-align: center;
  background-size: contain;
  p {
    padding: 0.6rem 0;
    font-size: 0.3rem;
    color: #fff;
  }
  a {
    width: 1.9rem;
    height: 0.54rem;
    line-height: 0.54rem;
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    font-size: 0.3rem;
  }
  div {
    font-size: 0.66rem;
    margin-bottom: 0.7rem;
  }
}
</style>



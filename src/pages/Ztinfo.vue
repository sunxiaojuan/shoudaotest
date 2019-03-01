<template>
    <div class="ztinfo">
      <!-- <mt-header title="xxxx"> -->
        <mt-header>
        <router-link to="/zt" slot="left">
          <mt-button icon="back" @click="handleClose">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right" @click="more"></mt-button>
      </mt-header>
      <div class="infomation">
          <p>单人预算：{{data.PreTaxMoney}}</p>
          <p>需要人数：{{data.PeopleNumber}}</p>
          <p>需要地点：{{data.address}}</p>
          <p>期望完成时间：{{data.FinishDay}}天</p>
          <p>报名截止时间：{{data.RegDeadlineTime}}</p>
          <p>发布时间：{{data.CreatedTime}}</p>
          <h5>需求描述</h5>
          <div class="summery">{{data.Summary}}</div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  mounted() {
    this.newtitle = this.$route.params.title;
    this.getInfo(this.$route.params.id);
    console.log(this.$route.params.selected);
  },
  methods: {
    handleClose: function() {
      // console.log("返回");
    },
    more: function() {
      // console.log("更多");
    },
    async getInfo(id) {
      this.$http
        .get("https://www.shoudaozi.com/App/Home/XqInfo", {
          params: { id: id }
        })
        .then(
          res => {
            this.data = res.body.rows;
          },
          error => {}
        );
    }
  }
};
</script>
<style lang="scss" scoped>
.ztinfo {
  .infomation {
    padding: 0.1rem 0.3rem;
    font-size: 0.26rem;
  }

  p {
    padding: 0.2rem 0;
    line-height: 0.4rem;
    color: #333;
  }
  h5 {
    display: inline-block;
    position: relative;
    padding: 0.2rem;
    color: #333;
    font-size: 0.4rem;
  }
}
</style>

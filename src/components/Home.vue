<template>
  <div class="home">
    <div class="topHead">
     <img src='http://img.shoudaozi.com:8888/gxpt/Xq/20180831/20180831173346687312.jpg' alt="">
      <div id="statistics">
        <div class="num_area">
          <p><i>{{num_a}}位</i><br><span>认证智客</span></p>
          <p><i>{{num_b}}位</i><br><span>认证智客</span></p>
          <p><i>{{num_c}}位</i><br><span>认证智客</span></p>
        </div>
      </div>
    </div>
    <div class="content_center">
      <ul>
        <li>
          <img src="https://www.shoudaozi.com//Content/appless/img/demand-1.png" alt="">
          <div>
            <p>商业服务</p>
            <div><span>公关策划</span><span>活动策划</span></div>
            <div><span>公关策划</span><span>活动策划</span></div>
            <a href="javascript:;">需求大厅</a>
          </div>
        </li>
        <li class="item-cell">
          <p>市场调查类<span>&yen;2019</span></p>
        </li>
         <li class="item-cell">
          <p>市场调查类<span>&yen;2019</span></p>
        </li>
         <li class="item-cell">
          <p>市场调查类<span>&yen;2019</span></p>
        </li>
         <li class="item-cell">
          <p>市场调查类<span>&yen;2019</span></p>
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
      num_a: 0,
      num_b: 0,
      num_c: 0
    };
  },
  methods: {
    getPerNum() {
      this.$http.get("https://www.shoudaozi.com/Home/TongJi").then(
        res => {
          this.num_a = res.body.rows.c;
          this.num_b = res.body.rows.o;
          this.num_c = res.body.rows.p;
        },
        error => {}
      );
    },
    getList() {
      this.$http
        .post(
          "https://www.shoudaozi.com/App/Home/GetListByCate",
          {
            Cate: "5046,5032,5038,5033,5040,5045,5039,5249"
          },
          { emulateJSON: true }
        )
        .then(
          res => {
            console.log(res);
          },
          error => {}
        );
    }
  },
  mounted() {
    this.getPerNum();
    this.getList();
  }
};
</script>
<style lang="scss" scoped>
.topHead {
  position: relative;
  img {
    height: 3.29rem;
  }
}
#statistics {
  width: 100%;
  height: 25%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  color: #fff;
  .num_area {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 0.3rem;
    font-size: 0.18rem;
    height: 100%;
    p {
      line-height: 0.3rem;
    }
  }
}
.content_center {
  padding: 0 0.3rem;
  li {
    display: flex;
    padding: 0.2rem 0;
    border-bottom: 1px dashed #e5e5e5;
    img {
      height: 2rem;
      width: 3.3rem;
      margin-right: 0.3rem;
    }
    div {
      flex: 1;
      text-align: center;
      p {
        color: #fea55f;
        font-size: 0.3rem;
        margin-bottom: 0.08rem;
      }
      span {
        display: inline-block;
        color: #000;
        width: 50%;
        margin: 0.04rem 0;
        padding: 0 0 0 0.2rem;
        position: relative;
        font-size: 0.25rem;
        box-sizing: border-box;
        text-align: left;
      }
      span:before {
        content: "";
        position: absolute;
        left: 0;
        width: 0.08rem;
        height: 0.2rem;
        top: 0.05rem;
        background: #ff9434;
      }
      a {
        margin-top: 0.25rem;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.25rem;
        padding: 0 0.4rem;
        color: #fea55f;
        border: 1px solid #fea55f;
        display: inline-block;
      }
    }
  }

  .item-cell {
    p {
      font-size: 0.2rem;
      width: 100%;
      font-size: 0.25rem;
      span {
        color: #ff9434;
        float: right;
      }
    }
  }
}
</style>




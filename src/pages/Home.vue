<template>
  <div class="home">
  
    <div class="topHead">
     <el-carousel height="150px" indicator-position="none">
      <el-carousel-item v-for="item in imgList" :key="item.index">
        <img :src="item.pic" alt="" class="setImg">
      </el-carousel-item>
    </el-carousel>
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
        <li class="item-cell" v-for="item in list.list_a">
          <p>{{item.Title}}<span>&yen;{{item.PreTaxMoney}}</span></p>
        </li>
        <li>
          <div>
            <p>技术开发</p>
            <div><span>公关策划</span><span>活动策划</span></div>
            <div><span>公关策划</span><span>活动策划</span></div>
            <a href="javascript:;">需求大厅</a>
          </div>
          <img src="https://www.shoudaozi.com//Content/appless/img/demand-1.png" alt="">
        </li>
        <li class="item-cell" v-for="item in list.list_b">
          <p>{{item.Title}}<span>&yen;{{item.PreTaxMoney}}</span></p>
        </li>
      </ul>
      <div class="title-line">
        <span>为您推荐</span>
        <a href="javascript:;">更多智客</a>
      </div>
      <ol>
        <li v-for="item in starList">
          <img :src=item.Pic alt="">
          <div>
            <h3>{{item.TrueName}}</h3>
            <p>{{item.PrimarySkill}}</p>
            <p>{{item.SecondSkill}}</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      num_a: 0,
      num_b: 0,
      num_c: 0,
      list: {
        list_a: [],
        list_b: []
      },
      starList: [],
      imgList: []
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
    getList(cate, fn) {
      this.$http
        .post(
          "https://www.shoudaozi.com/App/Home/GetListByCate",
          {
            Cate: cate
          },
          { emulateJSON: true }
        )
        .then(
          res => {
            let newDate = res.body;
            if (newDate.status == "y") {
              fn(res.body.rows);
            }
          },
          error => {}
        );
    },
    getStar() {
      this.$http
        .post(
          "https://www.shoudaozi.com/Home/GetStars",
          {
            t: 1
          },
          {
            emulateJSON: true
          }
        )
        .then(
          res => {
            let newDate = res.body;
            if (res.status == "200") {
              this.starList = newDate;
            }
          },
          error => {}
        );
    },
    getImglist() {
      this.$http.get("https://www.shoudaozi.com/home/ScrollPic?t=1").then(
        res => {
          if (res.status == "200") {
            this.imgList = res.body;
          }
        },
        error => {
          alert("接口错误");
        }
      );
    }
  },
  mounted() {
    this.getPerNum();
    this.getImglist();
    this.getStar();
    this.getList("5046,5032,5038,5033,5040,5045,5039,5249", row => {
      this.list.list_a = row;
    });
    this.getList("5030,5036,5037,5043", row => {
      this.list.list_b = row;
    });
  }
};
</script>
<style lang="scss" scoped>
.setImg {
  width: 100%;
}

.home {
  padding-bottom: 1rem;
}
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
  z-index: 10;
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
  ul {
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
  ol {
    li {
      display: flex;
      padding: 0.2rem 0;
      border-bottom: 1px solid #e6e6e6;
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.2rem;
      }
      div {
        flex: 1;
        h3 {
          font-weight: normal;
          font-size: 0.34rem;
          width: 100%;
          height: 0.5rem;
          padding: 0.05rem 0;
        }
        p {
          font-size: 0.26rem;
          height: 0.5rem;
          line-height: 0.5rem;
        }
      }
    }
  }
}
.title-line {
  padding: 0 0.3rem;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.3rem;
  border-top: 0.5rem solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  span {
    display: inline-block;
    line-height: 0.7rem;
    position: relative;
    padding-left: 0.2rem;
    color: #333;
  }
  span:before {
    content: "";
    position: absolute;
    left: 0;
    width: 0.08rem;
    height: 0.3rem;
    top: 0.2rem;
    background: #ff9434;
  }
  a {
    float: right;
    color: #ff9434;
    height: 100%;
  }
}
</style>




<template>
  <div class="zt">
     <section class="hot_questions">
            <mt-navbar v-model="selected">
              <mt-tab-item id="1">选项一</mt-tab-item>
              <mt-tab-item id="2">选项二</mt-tab-item>
              <mt-tab-item id="3">选项三</mt-tab-item>
            </mt-navbar>
            <v-scroll style="top: 1rem" ref="pagelist"  :on-refresh="initData"  :on-infinite="loaderMore"  :enable-infinite="touchend"> 
             <mt-tab-container v-model="selected">
                <mt-tab-container-item :id="item+''" v-for="item in 3" :key="item + 'a'">
                  <ul class="order_list_ul">
                    <li v-for="(item,index) in dataShow">
                      <img :src=item.thumbnail_pic_s alt="">
                      <div class="content">
                        <h5>{{item.title}}</h5>
                        <p>{{item.author_name}}</p>
                        <p>{{item.date}}</p>
                      </div>
                    </li>
                    <p v-if="show" class="empty_data">没有更多了</p>
                  </ul>
                </mt-tab-container-item>
              </mt-tab-container>
       </v-scroll>
     </section>
  </div>
</template>

<script>
import VScroll from "../components/VScroll";
export default {
  data() {
    return {
      touchend: true, //是否允许滑动
      selected: "1",
      allLoaded: false,
      dataShow: [],
      PageIndex: 1,
      show: false //显示更多
    };
  },
  methods: {
    async initData(cb) {
      this.show = false; //显示更多
      this.allLoaded = false;
      this.touchend = true;
      this.dataShow = [];
      this.PageIndex = 1;
      this.$http
        .post(
          "/news",
          {
            PageIndex: 1
          },
          { emulateJSON: true }
        )
        .then(res => {
          this.dataShow = res.data.data;
          if (res.body.data.length < 10) {
            this.touchend = false;
          }
          if (!this.touchend) {
            this.show = true;
          }
          cb && cb();
        });
    },
    async loaderMore(ab) {
      if (!this.touchend) {
        return;
      }
      this.PageIndex++;
      if (this.PageIndex > 3) {
        this.show = true;
        this.touchend = false;
        return;
      }
      this.getdata(this.PageIndex);
      ab && ab();
    },
    async getdata(PageIndex) {
      this.$http
        .post(
          "/news",
          {
            PageIndex: PageIndex
          },
          { emulateJSON: true }
        )
        .then(res => {
          if (PageIndex > 1) {
            this.dataShow = this.dataShow.concat(res.body.data);
          } else {
            this.dataShow = res.data.data;
          }
          if (res.body.data.length < 10) {
            this.touchend = false;
          }
          if (!this.touchend) {
            this.show = true;
          }
        });
    }
  },
  created() {
    this.getdata(this.PageIndex);
  },
  mounted() {},
  components: {
    VScroll
  }
};
</script>
<style lang="scss" scoped>
.empty_data {
  text-align: center;
  font-size: 0.24rem;
  line-height: 1rem;
}
.order_list_ul {
  li {
    display: flex;
    padding: 0.1rem 0.2rem;
    border-bottom: 1px solid #e6e6e6;
    img {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.2rem;
    }
    div {
      flex: 1;
      h5 {
        font-size: 0.28rem;
        color: #666;
        line-height: 0.4rem;
        font-weight: bold;
        height: 0.85rem;
        white-space: pre-wrap;
      }
      p {
        margin-bottom: 0;
        font-size: 0.25rem;
        line-height: 0.4rem;
        color: #999;
      }
    }
  }
}
</style>




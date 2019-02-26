<template>
  <div class="zt">
     <section class="hot_questions">
       <v-scroll style="top: 0" ref="pagelist"  :on-refresh="initData"  :on-infinite="loaderMore"  :enable-infinite="touchend"> 
            <mt-navbar v-model="selected">
              <mt-tab-item id="1">选项一</mt-tab-item>
              <mt-tab-item id="2">选项二</mt-tab-item>
              <mt-tab-item id="3">选项三</mt-tab-item>
            </mt-navbar>
             <mt-tab-container v-model="selected">
                <mt-tab-container-item :id="item+''" v-for="item in 3" :key="item + 'a'">
                  <ul class="order_list_ul">
                    <li>
                      <img src="http://img.shoudaozi.com:8888/gxpt/Xq/20180930/20180930092202968044.jpg" alt="">
                      <div class="content">
                        <h5>PCC专业教练</h5>
                        <p>杨莉珺</p>
                        <p>国际教练协会认证高级教练</p>
                      </div>
                    </li>
                     <li>
                      <img src="http://img.shoudaozi.com:8888/gxpt/Xq/20180930/20180930092202968044.jpg" alt="">
                      <div class="content">
                        <h5>PCC专业教练</h5>
                        <p>杨莉珺</p>
                        <p>国际教练协会认证高级教练</p>
                      </div>
                    </li>
                  </ul>
                  <mt-cell v-for="(item, index) in 10" :title="'内容 ' + item" :key="index" />
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
      allLoaded: false
    };
  },
  methods: {
    initData() {
      this.$http
        .post(
          "https://www.shoudaozi.com/Service/ServiceListPartial",
          {
            PageIndex: "1",
            pageSize: "8",
            type: "0",
            userid: "f4bae46c-52f4-44a8-b170-774711530821"
          },
          { emulateJSON: true }
        )
        .then(
          res => {
            let newDate = res.body;
            if (newDate.status == "y") {
              console.log(newDate);
            }
          },
          error => {}
        );
    },
    async loaderMore(ab) {}
  },
  mounted() {
    this.initData();
  },
  components: {
    VScroll
  }
};
</script>
<style lang="scss" scoped>
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




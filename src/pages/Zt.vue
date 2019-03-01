<template>
  <div class="zt">
     <section class="hot_questions">
            <mt-navbar v-model="selected">
              <mt-tab-item id="" cata="">全部</mt-tab-item>
              <mt-tab-item id="5030" cata="5030">软硬件开发</mt-tab-item>
              <mt-tab-item id="5037" cata="5037">系统集成</mt-tab-item>
            </mt-navbar>
            <v-scroll style="top: 1rem" ref="pagelist"  :on-refresh="initData"  :on-infinite="loaderMore"  :enable-infinite="touchend"> 
             <mt-tab-container v-model="selected">
                <mt-tab-container-item :id="item" v-for="item in cateList" :key="item + 'a'">
                  <ul class="order_list_ul">
                    <li v-for="(item,index) in dataShow" @click="toDetail(item.ID)">
                      <h4>{{item.CateName}}</h4>
                      <p>{{item.CreatedUserName}}</p>
                      <div>报名截止时间：{{item.RegDeadlineTime}}</div>
                    </li>
                    <p v-if="show" class="empty_data">没有更多了</p>
                  </ul>
                </mt-tab-container-item>
              </mt-tab-container>
       </v-scroll>
     </section>
     <Footbottom></Footbottom>
  </div>
</template>

<script>
import VScroll from "../components/VScroll";
import Footbottom from "../components/Footbottom";
export default {
  data() {
    return {
      touchend: true, //是否允许滑动
      selected: "",
      dataShow: [],
      PageIndex: 1,
      cateList: ["", "5030", "5037"],
      show: false //显示更多
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: "Ztinfo",
        params: { id: id }
      });
    },
    async initData(cb) {
      this.show = false; //显示更多
      this.touchend = true;
      this.dataShow = [];
      this.PageIndex = 1;
      this.$http
        .post(
          "https://www.shoudaozi.com/App/Home/XqList",
          {
            PageIndex: this.PageIndex,
            Cate: this.selected
          },
          { emulateJSON: true }
        )
        .then(res => {
          this.dataShow = res.body.rows;
          if (res.body.rows.length < 10) {
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
      this.$http
        .post(
          "https://www.shoudaozi.com/App/Home/XqList",
          {
            PageIndex: this.PageIndex,
            Cate: this.selected
          },
          { emulateJSON: true }
        )
        .then(res => {
          this.dataShow = this.dataShow.concat(res.body.rows);
          if (res.body.rows.length < 10) {
            this.touchend = false;
            this.show = true;
          }
          ab && ab();
        });
    }
  },
  mounted() {
    this.initData();
  },
  components: {
    VScroll,
    Footbottom
  },
  watch: {
    //类型切换
    selected(val, oldval) {
      this.selected = val;
      this.PageIndex = 1;
      this.initData();
    }
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
    padding: 0.1rem 0.2rem;
    border-bottom: 1px solid #e6e6e6;
  }
}
</style>




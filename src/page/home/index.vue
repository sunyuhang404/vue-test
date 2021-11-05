<template>
  <div class="home-box">
    <div v-for="item in aaa" :key="item">
      {{ item }}
    </div>

    <div @click="test111">click me </div>
    <!-- <div v-format="time"></div> -->
    <!-- <span v-test></span> -->
    <!-- <div class="img-box"></div> -->
    <!-- <Test :list="list">
      <div slot="header">header</div>
      <div slot-scope="scope">
        <span>{{ scope.name }}</span>
      </div>
    </Test> -->
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import homeMixin from '@mixin/home';
  import Test from '@component/Test';
  import input from '@component/input';

  export default {
    components: {
      Test,
      input
    },
    mixins: [homeMixin],
    beforeRouteEnter(to, from, next) {
      console.log('home before route enter');
      next(vm => {
        // 通过 vm 访问组件实例
      });
    },
    beforeRouteUpdate(to, from, next) {
      console.log('home before route update');
      next();
    },
    beforeRouteLeave(to, from, next) {
      console.log('home before route leave');
      next();
    },
    computed: {
      ...mapGetters({
        leftMenu: 'home/getLeftMenu',
        menu: 'getMenu'
      })
    },
    beforeCreate() {
      console.log('home beforeCreate');
    },
    created() {
      console.log('home created');
    },
    beforeMount() {
      console.log('home beforeMount');
    },
    data() {
      return {
        list: [
          { name: 'name1' },
          { name: 'name2' },
          { name: 'name3' },
          { name: 'name4' },
        ],
        aaa: [1, 2, 3],
        time: 1602649716615
      }
    },
    mounted() {
      console.log('home mounted');
      const menu = [{
          path: '/home',
          title: '首页'
        },
        {
          path: '/mine',
          title: '我的'
        },
      ]
      this.changeMenu(menu);
      this.changeGlobalMenu(menu)
    },
    updated() {
      console.log('updated');
    },
    methods: {
      ...mapActions({
        changeMenu: 'home/changeMenu',
        changeGlobalMenu: 'changeMenu'
      }),

      test111() {
        this.aaa[0] = 123;
        console.log(this.aaa);
        this.aaa.__ob__.dep.notify();
      },

      
    }
  }
</script>

<style lang="less">
.home-box {
  height: 100%;
  background-color: green;
  background-position: center;
  background-size: 100%;
}

.img-box {
  height: 100%;
  background-image: url('@image/test1.jpg');
  background-size: 100%;
  background-position: center;
}

</style>

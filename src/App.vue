<template>
  <div id="app">
    <el-container>
    <el-header>
      <div class="header">
        <span>信息管理工具</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-main>
        <router-view v-if="isRouterAlive"></router-view>
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
export default {
  components:{
    Aside
  },
  name: "App",
  data() {
    return {
      isRouterAlive: true,
    };
  },
  mounted(){
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  /* font-size: small; */
}
.el-container {

}
 .el-header {
    background-color: rgb(49, 50, 44);
    color: #af231c;
    line-height: 10vh;
    line-height: 60px;
  }
 .el-aside {
    color: #333;
    height:91vh;
  }
  .el-main {
    color: #333;
    height: 91vh;
    background: url(https://img-qn-3.51miz.com/Element/00/64/90/18/bae27b6b_E649018_3371b208.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/320) no-repeat;
    background-size: cover;
  }
  .header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
  }
</style>

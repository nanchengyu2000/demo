<template>
    <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    text-color="#CC33FF"
    active-text-color="#ffd04b"
    :router="false"
    >
    <el-menu-item
      :index="noChildren.path"
      v-for="noChildren in noChildrens"
      :key="noChildren.path"
      @click="Addnames(noChildren,noChildren.path)"
    >
      <i :class="'el-icon-' + noChildren.icon"></i>
      <span slot="title">{{ noChildren.label }}</span>
    </el-menu-item>
    <el-submenu  v-for="(hasChildren,index) in hasChildrens" :key="hasChildren.path" :index="index">
      <template slot="title">
        <i :class="'el-icon-'+hasChildren.icon"></i>
        <span slot="title">{{hasChildren.label}}</span>
      </template>
      <el-menu-item-group v-for="children in hasChildren.children" :key="children.path">
        <el-menu-item @click="Addnames(children,children.path)" :index="children.path">{{children.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name:"import",
          label:"信息录入",
          icon:"menu",
          children:[{
            path: "/Portal",
            name: "portal",
            label: "青海油田门户抓取",
          },{
            path: "/WeiXin",
            name: "weixin",
            label: "公众号信息抓取",
          },{
            path: "/Petroleuminfo",
            name: "Petroleuminfo",
            label: "青海石油报信息导入",
          },{
            path: "/Craftinfo",
            name: "Craftinfo",
            label: "手工信息导入",
          },]
        },{
          name:"export",
          label:"信息导出",
          icon:"download",
          path: "/",
        }, {
          name:"Setting",
          label:"系统设置",
          icon:"setting",
          children:[{
            path: "/Staffinfo",
            name: "Staffinfo",
            label: "人员信息",
          },{
            path: "/Reward",
            name: "Reward",
            label: "报酬标准",
          },{
            path: "/Remuneration",
            name: "Remuneration",
            label: "报酬统计",
          }]
        }, 
      ],
    };
  },
  computed: {
    hasChildrens() {
      return this.menu.filter((item) => item.children);
    },
    noChildrens() {
      return this.menu.filter((item) => !item.children);
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    Addnames(children,path){
      const obj={
        path:children.path,
        name:children.name,
        label:children.label
      }
      this.$store.commit("Changeusernames",obj) 
      this.$router.replace({
        path:path
      })
    }
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  background-color: #af231c;
}
</style>
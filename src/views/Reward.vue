<template>
  <div class="box">
    <left-table/>
    <right-table/>
  </div>
</template>
<script>
import LeftTable from '../components/LeftTable.vue'
import RightTable from '../components/RightTable.vue'
export default {
  components:{
    LeftTable,
    RightTable
  },
  data() {
    return {
      tableData:[{
        id:1,
        sort:"电视相关业务",
        postion:"副高级",
        reach:"480",
        qualified:"400",
        iseditor:false,
      },{
        id:2,
        sort:"",
        postion:"中级",
        reach:"360",
        qualified:"300",
        iseditor:false,
      },{
        id:3,
        sort:"",
        postion:"无职称及初级",
        reach:"260",
        qualified:"",
        iseditor:false,
      },{
        id:4,
        sort:"",
        postion:"导播岗位",
        reach:"300",
        qualified:"280",
        iseditor:false,
      },{
        id:5,
        sort:"",
        postion:"网络电视岗",
        reach:"",
        qualified:"",
        iseditor:false,
      },{
        id:6,
        sort:"",
        postion:"值班编辑岗",
        reach:"",
        qualified:"",
        iseditor:false,
      },],
      
    };
  },
}
</script>
<style scoped>
.box {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
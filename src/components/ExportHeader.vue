<template>
  <div style="margin-bottom:20px">
      <span style="margin-right:20px">日期</span>
      <el-date-picker  value-format="yyyy-MM-dd" format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="form.date1" style="width:150px;"></el-date-picker>
      <span style="font-size:15px;font-weight:600">~</span>
      <el-date-picker value-format="yyyy-MM-dd" format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="form.date2" style="width:150px;margin-right:10px"></el-date-picker>
      <span>
        稿件名称：<el-input v-model="form.title" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
      <span>
        作者：<el-input v-model="form.author" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
      <span>
        作者单位:<el-input v-model="form.authorunit" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
    </div>
</template>
<script>
export default {
  props:["form"],
  data() {
    return {
      
    };
  },
}
</script>
<style scoped>

</style>
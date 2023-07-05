<template>
  <el-upload
  class="upload-demo"
  :action="url"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  multiple
  name="file"
  accept=".xlsx,.xls,.csv"
  :limit="1"
  :show-file-list="false"
  :on-success="success"
  :on-error="error"
  :before-upload="showbar"
  :on-progress="progress"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button  type="info">导入</el-button>
</el-upload>
</template>
<script>
import {Message} from 'element-ui'
export default {
    data() {
      return {
        fileList: [],
      };
    },
    props:["getpercent","getinfos","url","setbar"],
    methods: {
      progress(event, file, fileList){
        this.getpercent(event.percent)
      },
      success(response, file, fileList){
        this.fileList=[]
        if (response==1) {
          Message.success({
            message:"文件录入成功!",
            type:"success"
          })
          this.getinfos()
        }else if(response==-1){
          Message.error({
            message:"文件部分录入失败!",
            type:"error"
          })
          this.getinfos()
        }else{
          Message.error({
            message:"文件部分录入失败!",
            type:"error"
          })
        }
      },
      error(err, file, fileList){

      },
      showbar(){
        this.setbar()
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        
      },
      beforeRemove(file, fileList) {
        
      }
    }
  }
</script>
<style scoped>
.el-upload {
  float: left;
}
</style>
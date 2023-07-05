<template>
  <div>
    <div @mouseenter="isshow=true" @mouseleave="isshow=false" class="box">
      <span style="font-size:20px;font-weight:700;margin-right:20px">稿酬达标对照表:</span>
      <el-button v-show="isshow" @click="addItem" round>添加记录</el-button>
    </div>
    <el-table
    :data="tableData"
    border
    max-height="350"
    :cell-style="rowClass"
    :header-cell-style="headClass"
    :span-method="arraySpanMethod"
    @cell-click=handle(row,column,event,cell)
    style="width:582px;margin-top:20px;border-bottom: 1px solid black;">
    <el-table-column
      prop="id"
      label="序号"
      width="50"
      align="center"
      fixed>
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort"
      label="类别"
      width="130"
      align="center"
      >
      <template slot-scope="scope">
        <span  v-show="scope.row.iseditor" @click="goclick(scope.row)"  style="margin-left: 10px">{{ scope.row.sort }}</span>
        <el-input type="textarea"  autocomplete  v-model="scope.row.sort" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="post"
      label="职位"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row,scope.column)" style="margin-left: 10px">{{ scope.row.post}}</span>
        <el-select v-model="scope.row.post" v-show="!scope.row.iseditor"  placeholder="请选择">
            <el-option
                label="副高级"
                value="副高级">
            </el-option>
            <el-option
                label="中级"
                value="中级">
            </el-option>
            <el-option
                label="无职称及初级"
                value="无职称及初级">
            </el-option>
            <el-option
                label="导播岗位"
                value="导播岗位">
            </el-option>
            <el-option
                label="网络电视岗"
                value="网络电视岗">
            </el-option>
            <el-option
                label="值班编辑岗"
                value="值班编辑岗">
            </el-option>
          </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="integral"
      label="达标积分"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row,scope.column)" style="margin-left: 10px">{{ scope.row.integral}}</span>
        <el-input v-model="scope.row.integral" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="qualified"
      label="合格积分"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row,scope.column)" style="margin-left: 10px">{{ scope.row.qualified}}</span>
        <el-input v-model="scope.row.qualified" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column fixed="right"  width="150" label="操作">
      <template slot-scope="scope">
          <div>
            <span>
              <el-button
          size="mini"
          :key="k"
          v-show="!scope.row.iseditor&&!scope.row.flag"
          @click="save(scope.$index, scope.row)">保存</el-button>
            </span>
            <span>
              <el-button
          size="mini"
          :key="k"
          v-show="!scope.row.iseditor&&scope.row.flag"
          @click="updata(scope.$index, scope.row)">更新</el-button>
            </span>
            <span>
              <el-button
          size="mini"
          style="margin-left:10px"
          v-show="!scope.row.iseditor"
          @click="cancel(scope.$index, scope.row)">取消</el-button>
            </span>
          </div>
          <div>
            <el-button
          size="mini"
          v-show="scope.row.iseditor"
          @click="handleEdit(scope.row, scope)">编辑</el-button>
          <el-button
          size="mini"
          type="danger"
          v-show="scope.row.iseditor"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </div>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
import {Message} from 'element-ui'
export default {
  data() {
    return {
      tableData:[],
      k:0,
      isshow:false
    };
  },
  mounted() {
    this.getIntegrals()
  },
  methods:{
    addItem(){
      let length=this.tableData.length
      let id=length?this.tableData[this.tableData.length-1].id+1:0
      this.tableData.push({
        id:id,
        sort:"",
        post:"",
        integral:0,
        qualified:0
      })
    },
    handleEdit(row, index) {
        this.olddata=JSON.stringify(row)
        row.iseditor=false
        this.k--
      },
    getIntegrals(){
      this.$axios({
        url:"/Integral/getIntegrals"
      }).then((res)=>{
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].iseditor=true
          res.data[i].flag=true
        }
        this.tableData=res.data
      })
    },
    save(index,row){
        let info=JSON.stringify(row)
        this.$axios({
          url:"/Integral/addIntegral",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info
        }).then((res)=>{
          if (res.data) {
            Message.success({
              message:"保存成功!",
              type:"success"
            })
            row.flag=true
            row.iseditor=true
            this.k++
          }else{
            Message.error({
              message:"保存失败!",
              type:"error"
            })
          }
        })
        
     },
     updata(index,row){
        let info=JSON.stringify(row)
        this.$axios({
          url:"/Integral/updata",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info
        }).then((res)=>{
          if (res.data) {
            Message.success({
              message:"更新成功!",
              type:"success"
            })

            row.iseditor=true
            this.k++
          }else{
            Message.error({
              message:"更新失败!",
              type:"error"
            })
          }
        })
     },
      handleDelete(index,row){
        let id=row.id
        this.$axios({
          url:"/Integral/delete",
          params:{
            id:id
          }
        }).then((res)=>{
          if (res.data) {
            Message.success({
              message:"删除成功!",
              type:"success"
          })
          this.getIntegrals()
          }else{
            Message.error({
              message:"删除失败!",
              type:"error"
            })
          }
          
        })
      },
      cancel(index,row){
         row.iseditor=true
         this.k--
      }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
</style>
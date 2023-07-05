<template>
  <div>
    <div @mouseenter="isshow=true" @mouseleave="isshow=false" class="box">
      <span style="font-size:20px;font-weight:700;margin-right:20px">报酬统计对照表:</span>
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
    style="width:1000px;margin-top:20px;border-bottom: 1px solid black;">
    <el-table-column
      prop="contrastid"
      label="序号"
      width="50"
      align="center"
      fixed>
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.contrastid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort1"
      label="一级分类"
      width="130"
      align="center"
      >
      <template slot-scope="scope">
        <span  v-show="scope.row.iseditor" @click="goclick(scope.row)"  style="margin-left: 10px">{{ scope.row.sort1 }}</span>
        <el-input  autocomplete  v-model="scope.row.sort1" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort2"
      label="二级分类"
      width="130"
      align="center"
      >
      <template slot-scope="scope">
        <span  v-show="scope.row.iseditor" @click="goclick(scope.row)"  style="margin-left: 10px">{{ scope.row.sort2 }}</span>
        <el-input  autocomplete  v-model="scope.row.sort2" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort3"
      label="三级分类"
      width="130"
      align="center"
      >
      <template slot-scope="scope">
        <span  v-show="scope.row.iseditor" @click="goclick(scope.row)"  style="margin-left: 10px">{{ scope.row.sort3 }}</span>
        <el-input  autocomplete  v-model="scope.row.sort3" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="unit"
      label="单位"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span  v-show="scope.row.iseditor" @click="goclick(scope.row)"  style="margin-left: 10px">{{ scope.row.unit }}</span>
        <el-input  autocomplete  v-model="scope.row.unit" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row,scope.column)" style="margin-left: 10px">{{ scope.row.num}}</span>
        <el-input v-model="scope.row.num" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="cost"
      label="数量"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row,scope.column)" style="margin-left: 10px">{{ scope.row.cost}}</span>
        <el-input v-model="scope.row.cost" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="ishalves"
      label="是否平分"
      width="100"
      align="center"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row,scope.column)" style="margin-left: 10px">{{ scope.row.ishalves}}</span>
        <el-input v-model="scope.row.ishalves" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>

    <el-table-column   width="150" label="操作">
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
      let id=length?this.tableData[this.tableData.length-1].contrastid+1:0
      this.tableData.push({
        contrastid:id,
        sort1:"",
        sort2:"",
        sort3:"",
        unit:"",
        num:0,
        cost:"",
        ishalves:0,
      })
    },
    handleEdit(row, index) {
        this.olddata=JSON.stringify(row)
        row.iseditor=false
        this.k--
      },
    getIntegrals(){
      this.$axios({
        url:"/Contras/getContrast"
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
          url:"/Contras/insert",
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
          url:"/Contras/updata",
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
        let id=row.contrastid
        this.$axios({
          url:"/Contras/delete",
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
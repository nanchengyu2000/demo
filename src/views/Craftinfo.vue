<template>
  <div>
    <export-header :form="form"/>
    <el-button style="margin-left:40%" @click="seach" type="info">查询</el-button>
    <el-button @click="abolish"  type="info">取消查询</el-button>
    <el-button type="success" @click="addItem" style="margin-left:20px">添加记录</el-button>
    <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:20px">
    <el-table-column
      prop="id"
      label="序号"
      width="90"
      fixed>
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.id }}</span>
        <el-input  v-model="scope.row.id" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="stringDate"
      label="日期"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" @click="goclick(scope.row.id,scope.column)"  style="margin-left: 10px">{{ scope.row.stringDate }}</span>
        <el-date-picker
      v-model="scope.row.stringDate"
      type="date"
      v-show="!scope.row.iseditor"
      value-format="yyyy-MM-dd" 
      format="yyyy-MM-dd"
      placeholder="选择日期">
    </el-date-picker>
      </template>
    </el-table-column>
    <el-table-column
      prop="manuscript"
      label="稿件名称"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.manuscript}}</span>
        <el-input type="textarea"  autocomplete v-model="scope.row.manuscript" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="platform"
      label="所属平台"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.platform}}</span>
         <el-select v-show="!scope.row.iseditor" v-model="scope.row.platform" placeholder="请选择">
          <el-option
          label="青海油田电视台"
          value="青海油田电视台">
          </el-option>
          <el-option
          label="青海石油报"
          value="青海石油报">
          </el-option>
          <el-option
          label="油城电视报"
          value="油城电视报">
          </el-option>
          <el-option
          label="青海油田微信公众号"
          value="青海油田微信公众号">
          </el-option>
          <el-option
          label="青海油田抖音"
          value="青海油田抖音">
          </el-option>
          <el-option
          label="青海油田喜马拉雅"
          value="青海油田喜马拉雅">
          </el-option>
          <el-option
          label="青海油田门户网站"
          value="青海油田门户网站">
          </el-option>
          <el-option
          label="新闻中心门户网站"
          value="新闻中心门户网站">
          </el-option>
          <el-option
          label="瀚海记者  杂志"
          value="瀚海记者  杂志">
          </el-option>
          <el-option
          label="瀚海混 杂志"
          value="瀚海混 杂志">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort"
      label="稿件类型"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort}}</span>
        <el-select v-show="!scope.row.iseditor" v-model="scope.row.sort" placeholder="请选择">
          <el-option
          label="油田要闻"
          value="油田要闻">
          </el-option>
          <el-option
          label="领导动态"
          value="领导动态">
          </el-option>
          <el-option
          label="综合信息"
          value="综合信息">
          </el-option>
          <el-option
          label="基层快讯"
          value="基层快讯">
          </el-option>
          <el-option
          label="百味话题"
          value="百味话题">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.num}}</span>
        <el-input v-model="scope.row.num" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.author}}</span>
        <el-input v-model="scope.row.author" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="unit"
      label="作者单位"
      width="140"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.unit}}</span>
        <el-input v-model="scope.row.unit" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort1"
      label="分类1"
      width="140"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort1}}</span>
        <el-input v-model="scope.row.sort1" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort2"
      label="分类2"
      width="140"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort2}}</span>
        <el-input v-model="scope.row.sort2" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort3"
      label="分类3"
      width="140"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort3}}</span>
        <el-input v-model="scope.row.sort3" v-show="!scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sortunit"
      label="单位"
      width="100"
      >
      <template slot-scope="scope">
        <span v-show="scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sortunit}}</span>
        <el-input v-model="scope.row.sortunit" v-show="!scope.row.iseditor"></el-input>
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
import ExportHeader from '../components/ExportHeader.vue'
import {Message} from 'element-ui'
export default {
  components:{
    ExportHeader
  },
  data() {
    return {
      tableData:[],
      k:0,
      isshow:false,
      form:{
          date1:"",
          date2:"",
          author:"",
          authorunit:"",
        },
    };
  },
  mounted() {
    this.getCrafts()
  },
  methods:{
    abolish(){
        this.getCrafts()
      },
      seach(){
        let info=JSON.stringify(this.form);
        this.$axios({
          url:"/Craft/Seach",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info
        }).then((res)=>{     
          for (let i = 0; i < res.data.length; i++) {
          res.data[i].iseditor=true
          res.data[i].flag=true
        }
        this.tableData=res.data
        })
      },
    addItem(){
      let length=this.tableData.length
      let id=length?this.tableData[this.tableData.length-1].id+1:0
      this.tableData.push({
        id:id,
        date:"",
        manuscript:"",
        platform:"",
        sort:"",
        num:0,
        author:"",
        unit:""
      })
    },
    handleEdit(row, index) {
        this.olddata=JSON.stringify(row)
        row.iseditor=false
        this.k--
      },
    getCrafts(){
      this.$axios({
        url:"/Craft/getCrafts"
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
          url:"/Craft/addCraft",
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
          url:"/Craft/updata",
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
          url:"/Craft/delete",
          params:{
            id:id
          }
        }).then((res)=>{
          if (res.data) {
            Message.success({
              message:"删除成功!",
              type:"success"
          })
          this.getCrafts()
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

</style>
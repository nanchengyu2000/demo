<template>
  <div>
    <div style="margin-bottom:20px">
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
    <div class="option">
      <el-button style="margin-right:20px"  @click="seach" type="info">查询</el-button>
      <el-button style="margin-right:20px" @click="abolish" type="info">取消查询</el-button>
      <import-button :url="url" :getpercent="getpercent" :setbar="setbar" :getinfos="getpetroleum"/>
    </div>
     <el-progress v-show="close" :text-inside="true"  status="success" :percentage="percent" define-back-color="#FFFF33" :stroke-width="26" :format="format"></el-progress>
    <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:20px">
    <el-table-column
      prop="petroleumid"
      label="序号"
      width="90"
      fixed>
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.petroleumid }}</span>
        <el-input v-show="scope.row.iseditor"  v-model="scope.row.petroleumid"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="calendar"
      label="日期"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.calendar}}</span>
         <el-date-picker value-format="yyyy-MM-dd" format="yyyy-MM-dd"  v-show="scope.row.iseditor" type="date" placeholder="选择日期" v-model="scope.row.calendar" style="width: 100%;"></el-date-picker>
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="稿件名称"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.title}}</span>
        <el-input v-model="scope.row.title" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.author}}</span>
        <el-input v-model="scope.row.author" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="unit"
      label="作者单位"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.unit}}</span>
        <el-input v-model="scope.row.unit" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="copyright"
      label="版别"
      width="100"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.copyright}}</span>
        <el-input v-model="scope.row.copyright" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="money"
      label="金额"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.money}}</span>
        <el-input v-model="scope.row.money" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="signature"
      label="签名"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.signature}}</span>
        <el-input v-model="scope.row.signature" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column> 
    <el-table-column fixed="right"  width="150" label="操作">
      <template slot-scope="scope">
          <div>
            <el-button
          size="mini"
          :key="k"
          v-show="!scope.row.iseditor"
          @click="handleEdit(scope.row, scope)">编辑</el-button>
          <el-button
          size="mini"
          type="danger"
          v-show="!scope.row.iseditor"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </div>
          <div>
            <el-button
          size="mini"
          v-show="scope.row.iseditor"
          @click="save(scope.$index, scope.row)">保存</el-button>
          <el-button
          size="mini"
          v-show="scope.row.iseditor"
          @click="exit(scope.$index, scope.row)">取消</el-button>
          </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    v-show="flag"
    layout="prev, pager, next"
    :page-count="pageinfo.pageCount"
    :page-sizes="pageinfo.pageSize"
    :current-page="pageinfo.nowPage"
    @current-change="changepage"
    @prev-click="changepage"
    @next-click="changepage">
  </el-pagination>
  </div>
</template>
<script>
import ExportHeader from '../components/ExportHeader.vue'
import ImportButton from '../components/ImportButton.vue'
import {Message} from 'element-ui'
export default {
  components:{
    ExportHeader,
    ImportButton
  },
  data() {
    return {
      url:"http://vyke0kcd.beesnat.com/system-1.0-SNAPSHOT/petroleum/insert",
      percent:0,
      close:false,
      pageinfo:{},
      tableData:[],
      k:0,
      flag:true,
      form:{
        },
    };
  },
  watch:{
      percent(newvalue,oldvalue){
        if (newvalue==100) {
          window.setTimeout(()=>{
            this.close=false
          },1000)
        }
      }
    },
    mounted() {
      this.getpetroleum()
    },
  methods: {
    abolish(){
        this.getpetroleum()
        this.flag=true
      },
    setbar(){
        this.close=true
      },
      seach(){
        let info=JSON.stringify(this.form);
        this.$axios({
          url:"/petroleum/Seach",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info
        }).then((res)=>{
          this.flag=false
          this.tableData=res.data
        })
      },
    format(percentage) {
        return percentage === 100 ? '上传成功' : `${percentage}%`;
      },
      getpercent(value){
        this.percent=value
      },
      handleEdit(row, index) {
        this.olddata=JSON.stringify(row)
        row.iseditor=true
        this.k++
      },
      getpetroleum(value){
        this.$axios({
          url:"/petroleum/selectAllByPage",
          params:{
            nowpage:value
          }
        }).then((res)=>{
          this.pageinfo=res.data.pageserver
          for (let i = 0; i < res.data.petroleuminfos.length; i++) {
            res.data.petroleuminfos[i].iseditor=false
            res.data.petroleuminfos[i].calendar=res.data.petroleuminfos[i].year+"-"+res.data.petroleuminfos[i].month+"-"+res.data.petroleuminfos[i].date
          } 
          this.tableData=res.data.petroleuminfos
        })
      },
      changepage(value){
        this.getpetroleum(value)
      },
      handleDelete(index, row) {
        this.$axios({
          url:"/petroleum/delectPetroleum",
          params:{
            id:row.id
          }
        }).then((res)=>{
            if (res.data==1) {
              Message.success({
                message:"删除成功！",
                type:"success"
              })
              this.getpetroleum(this.pageinfo.nowPage)
            }else {
              Message.error({
                message:"删除失败!",
                type:"error"
              })
            }
        })
      },
      save(index,row){
        let inf=row.calendar
        let arr=inf.split('-')
        row.year=arr[0]
        row.month=arr[1]
        row.date=arr[2]
        if (row.money.slice(0,1)!='￥') {
          row.money='￥'+row.money
        }
        var info=JSON.stringify(row)
        this.$axios({
          url:"/petroleum/updataPetroleum",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info
        }).then((res)=>{
            if (res.data==1) {
              Message.success({
                message:"操作成功！",
                type:"success"
              })
              this.getpetroleum(this.pageinfo.nowPage)
            }else{
              Message.error({
                message:"操作失败！",
                type:"error"
              })
            }
        })
      },
      exit(index,row){
        row.iseditor=false
        this.getpetroleum(this.pageinfo.nowPage)
        this.k--
      }
  },
}
</script>
<style scoped>
.option {
  margin-left:35%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.el-pagination {
  margin-left: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
<template>
  <div>
    <Header :form="form"/>
    <div style="margin-top:20px;margin-left:40%;display: flex;flex-flow: row nowrap;">
      <import-button :url="url" :setbar="setbar" :getpercent="getpercent" :getinfos="getQinghai"/>
      <el-button style="margin-left:20px" @click="seach" type="info">查询</el-button>
      <el-button style="margin-left:20px" @click="abolish"  type="info">取消查询</el-button>
    </div>
     <el-progress v-show="close" :text-inside="true"  status="success" :percentage="percent" define-back-color="#FFFF33" :stroke-width="26" :format="format"></el-progress>
    <el-table
    :data="tableData"
    border
    max-height="400px"
    style="width: 100%;margin-top:20px">
    <el-table-column
      prop="stringDate"
      label="日期"
      width="130"
      >
      <template slot-scope="scope">
        <i v-show="!scope.row.iseditor" class="el-icon-time"></i>
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.stringDate }}</span>
        <el-date-picker value-format="yyyy-MM-dd" format="yyyy-MM-dd" v-show="scope.row.iseditor" type="date" placeholder="选择日期" v-model="scope.row.stringDate" style="width: 100%;"></el-date-picker>
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" @click="goclick(scope.row.id,scope.column)"  style="margin-left: 10px">{{ scope.row.title }}</span>
        <el-input type="textarea"  autocomplete  v-model="scope.row.title" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="fontnum"
      label="文字字数"
      width="100"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.fontnum}}</span>
        <el-input v-model="scope.row.fontnum" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="fontauthor"
      label="文字作者"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.fontauthor}}</span>
        <el-input v-model="scope.row.fontauthor" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="imageauthor"
      label="图片作者"
      width="120"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.imageauthor}}</span>
        <el-input v-model="scope.row.imageauthor" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="imgenum"
      label="图片数量"
      width="90"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.imgenum}}</span>
        <el-input v-model="scope.row.imgenum" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="videoauthor"
      label="视频作者"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.videoauthor}}</span>
        <el-input v-model="scope.row.videoauthor" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="videotype"
      label="视频类型"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.videotype}}</span>
        <el-input v-model="scope.row.videotype" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="videolong"
      label="视频时长"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.videolong}}</span>
        <el-input v-model="scope.row.videolong" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="audioauthor"
      label="音频作者"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.audioauthor}}</span>
        <el-input v-model="scope.row.audioauthor" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="plaedi"
      label="平台编辑"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.plaedi}}</span>
        <el-input v-model="scope.row.plaedi" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="executive"
      label="责编"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.executive}}</span>
        <el-input v-model="scope.row.executive" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="editorinchief"
      label="主编"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.editorinchief}}</span>
        <el-input v-model="scope.row.editorinchief" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="supervise"
      label="监制"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.supervise}}</span>
        <el-input v-model="scope.row.supervise" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="additional"
      label="条件"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.additional}}</span>
        <el-select v-model="scope.row.additional" v-show="scope.row.iseditor" placeholder="请选择">
            <el-option
                label="额外时间和额外任务"
                value="额外时间和额外任务">
            </el-option>
            <el-option
                label="盆地一线采访或异地采访"
                value="盆地一线采访或异地采访">
            </el-option>
            <el-option
                label="沙尘暴、大雨等恶劣天气采访"
                value="沙尘暴、大雨等恶劣天气采访">
            </el-option>
          </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort1"
      label="分类1"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort1}}</span>
        <el-input v-model="scope.row.sort1" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort2"
      label="分类2"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort2}}</span>
        <el-input v-model="scope.row.sort2" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sort3"
      label="分类3"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sort3}}</span>
        <el-input v-model="scope.row.sort3" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="sortunit"
      label="单位"
      width="150"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.sortunit}}</span>
        <el-input v-model="scope.row.sortunit" v-show="scope.row.iseditor"></el-input>
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
import {Message} from 'element-ui'
import Header from '../components/ExportHeader.vue'
import ImportButton from '../components/ImportButton.vue'
export default {
    components:{
      Header,
      ImportButton
    },
    data() {
      return {
        pageinfo:{},
        tableData:[],
        k:0,
        percent:0,
        close:false,
        flag:true,
        url:"http://vyke0kcd.beesnat.com/system-1.0-SNAPSHOT/qinghai/insert",
        form:{
          date1:"",
          date2:"",
          author:"",
          authorunit:"",
        },
      };
    },
    mounted(){
      this.getQinghai()
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
    methods: {
      abolish(){
        this.getQinghai()
        this.flag=true
      },
      format(percentage) {
        return percentage === 100 ? '上传成功' : `${percentage}%`;
      },
      setbar(){
        this.close=true
      },
      getpercent(value){
        this.percent=value
      },
      seach(){
        let info=JSON.stringify(this.form);
        this.$axios({
          url:"/qinghai/Seach",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info,
        }).then((res)=>{
          this.flag=false
          this.tableData=res.data
        })
      },
      getQinghai(value){
        this.$axios({
          url:"/qinghai/selectAllByPage",
          params:{
            nowpage:value
          }
        }).then((res)=>{
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].iseditor=false
          }
          this.tableData=res.data.qinghais
          this.pageinfo=res.data.pageserver
          console.log(JSON.stringify(this.tableData));
        })
      },
      changepage(value){
        this.getQinghai(value)
      },
      goclick(id,column){
          if (column.label=="标题") {
         let temp=this.tableData.filter((item)=>{
              return item.id==id
         })
          let url=temp[0].link
          console.log(url);
          let a=document.createElement("a")
          a.target="blank"
          a.href=url
          a.click()
        }
      },
      handleEdit(row, index) {
        row.iseditor=true
        this.k++
        // console.log(index, row);
      },
      handleDelete(index, row) {
        this.$axios({
          url:"/qinghai/delectQinghai",
          params:{
            id:row.id
          }
        }).then((res)=>{
            if (res.data==1) {
              Message.success({
                message:"操作成功！",
                type:"success"
              })
              this.getQinghai(this.pageinfo.nowPage)
            }else {
              Message.error({
                message:"操作失败!",
                type:"error"
              })
            }
        })
      },

      save(index,row){
        let info=JSON.stringify(row)
        this.$axios({
          url:"/qinghai/updateQinghai",
          headers:{
             'Content-Type':'application/json'
          },
          method:"POST",
          data:info
        }).then((res)=>{
           if (res.data) {
            Message.success({
              message:"修改成功！",
              type:"success"
            })
            row.iseditor=false
            this.k--
           }else{
            Message.error({
              message:"修改失败！",
              type:"error"
            })
           }
        })
      },
      exit(index,row){
        row.iseditor=false
        this.k--
      }
    }
  }
</script>

<style scoped>
.el-pagination {
  margin-left: 50%;
  transform: translateX(-40%);
  margin-top: 20px;
}
</style>

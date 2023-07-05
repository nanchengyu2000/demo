<template>
  <div>
    <div style="margin-bottom:20px">
      <div class="info">
        <span>
        员工编号：<el-input v-model="form.staffid" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
      <span>
        姓名：<el-input v-model="form.staffname" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
      <span>
        单位:<el-input v-model="form.unit" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
      <span>
        油田内外:
         <el-select v-model="form.oilorientation" placeholder="请选择">
            <el-option
                label="内"
                value="内">
            </el-option>
            <el-option
                label="外"
                value="外">
            </el-option>
          </el-select>
        </span>
      </div>
      <div class="info">
        
      <span>
        身份证号:<el-input v-model="form.identity" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
      </span>
      <span>
        银行卡号:<el-input v-model="form.bankcard" style="width:200px;margin-right:10px" placeholder="单行输入"></el-input>
        
      </span>
      <span>
        是否是建行:
        <el-select v-model="form.isbank" placeholder="请选择">
            <el-option
                label="是"
                value="是">
            </el-option>
            <el-option
                label="否"
                value="否">
            </el-option>
          </el-select>
      </span>
      <span>
        信息比对:
        <el-select v-model="form.contrast" placeholder="请选择">
            <el-option
                label="正确"
                value="正确">
            </el-option>
            <el-option
                label="信息不完整"
                value="信息不完整">
            </el-option>
            <el-option
                label="信息重复"
                value="信息重复">
            </el-option>
          </el-select>
      </span>
      </div>
    </div>
    <div class="option">
      <import-button :url="url" :setbar="setbar" :getpercent="getpercent" :getinfos="getstaffs"/>
      <el-button style="margin-left:20px" @click="seach" type="info">查询</el-button>
      <el-button style="margin-left:20px" @click="abolish"  type="info">取消查询</el-button>
      <el-button style="margin-left:20px" @click="expor" type="info">导出</el-button>
    </div>
    <el-progress v-show="close" :text-inside="true"  status="success" :percentage="percent" define-back-color="#FFFF33" :stroke-width="26" :format="format"></el-progress>
    <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:20px">
    <el-table-column
      prop="staffid"
      label="序号"
      width="90"
      fixed>
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.staffid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="employeeid"
      label="员工编号"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" @click="goclick(scope.row.id,scope.column)"  style="margin-left: 10px">{{ scope.row.employeeid }}</span>
        <el-input type="textarea"  autocomplete  v-model="scope.row.employeeid" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="authorname"
      label="姓名"
      width="120"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.authorname}}</span>
        <el-input v-model="scope.row.authorname" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="authorunit"
      label="单位"
      width="130"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.authorunit}}</span>
        <el-input v-model="scope.row.authorunit" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="identitycard"
      label="身份证号"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.identitycard}}</span>
        <el-input v-model="scope.row.identitycard" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="oilpotion"
      label="油田内外"
      width="100"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.oilpotion}}</span>
        <el-select v-model="scope.row.oilpotion" v-show="scope.row.iseditor" placeholder="请选择">
            <el-option
                label="内"
                value="内">
            </el-option>
            <el-option
                label="外"
                value="外">
            </el-option>
          </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="bankcard"
      label="银行卡号"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.bankcard}}</span>
        <el-input v-model="scope.row.bankcard" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="bank"
      label="建行卡"
      width="80"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.bank}}</span>
        <el-select v-model="scope.row.bank" v-show="scope.row.iseditor" placeholder="请选择">
            <el-option
                label="是"
                value="是">
            </el-option>
            <el-option
                label="否"
                value="否">
            </el-option>
          </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="authorunit"
      label="作者单位"
      width="160"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.authorunit}}</span>
        <el-input v-model="scope.row.authorunit" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="discrepancy"
      label="信息比对"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.discrepancy}}</span>
        <el-input v-model="scope.row.discrepancy" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="abnormal"
      label="信息异常内容"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.abnormal}}</span>
        <el-input v-model="scope.row.abnormal" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="backup1"
      label="备注1"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.backup1}}</span>
        <el-input v-model="scope.row.backup1" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="backup2"
      label="备注2"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.backup2}}</span>
        <el-input v-model="scope.row.backup2" v-show="scope.row.iseditor"></el-input>
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
import ImportButton from '../components/ImportButton.vue'
import {Message, Upload} from 'element-ui'
import { watch } from 'vue';
export default {
  components:{
    ImportButton
  },
  data() {
    return {
      form:{
          staffid:"",
          staffname:"",
          unit:"",
          oilorientation:"",
          identity:"",
          bankcard:"",
          isbank:"",
          contrast:""
        },
        pageinfo:{},
        tableData:[],
        k:0,
        flag:true,
        percent:0,
        close:false,
        olddata:{},
        url:"http://vyke0kcd.beesnat.com/system-1.0-SNAPSHOT/staff/insert"
    };
  },
  mounted(){
      this.getstaffs()
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
        this.getstaffs()
        this.flag=true
      },
      seach(){
        let info=JSON.stringify(this.form);
        this.$axios({
          url:"/staff/Seach",
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
      expor(){
        this.$axios({
          url:"/staff/download",
          responseType: 'blob'
        }).then((res)=>{
          let blob=new Blob([res.data])
          let a=document.createElement("a")
          // a.style.display='none'
          a.href=URL.createObjectURL(blob)
          a.setAttribute(
            'download',
            "导出.xlsx"
          ),
          // document.body.appendChild(a);
          a.click();                            //下载该文件
          // document.body.removeChild(a);

        })
      },
      setbar(){
        this.close=true
      },
      getpercent(value){
        this.percent=value
      },
      getstaffs(value){
        this.$axios({
          url:"/staff/selectAllByPage",
          params:{
            nowpage:value
          }
        }).then((res)=>{
          this.tableData=res.data.staffs
          this.pageinfo=res.data.pageserver
          for (let i = 0; i < this.tableData.length; i++) {
            this.tableData[i].iseditor=false
          }
          console.log(JSON.stringify(this.tableData));
        })
      },
      changepage(value){
        this.getstaffs(value)
      },
      handleEdit(row, index) {
        this.olddata=JSON.stringify(row)
        row.iseditor=true
        this.k++
      },
      handleDelete(index, row) {
        this.$axios({
          url:"/staff/delectStaff",
          params:{
            staffid:row.staffid
          }
        }).then((res)=>{
            if (res.data==1) {
              Message.success({
                message:"删除成功！",
                type:"success"
              })
              this.getstaffs(this.pageinfo.nowPage)
            }else {
              Message.error({
                message:"删除失败!",
                type:"error"
              })
            }
        })
      },
      save(index,row){
        let info=JSON.stringify(row)
        this.$axios({
          url:"/staff/updataStaff",
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
              this.getstaffs(this.pageinfo.nowPage)
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
        this.getstaffs(this.pageinfo.nowPage)
        this.k--
      }
    }
}
</script>
<style scoped>
.info {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 10px;
}
.option {
  margin-left:30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
/* .el-progress{
  width: 200px;
  margin-left: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
} */
.el-pagination {
  margin-left: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
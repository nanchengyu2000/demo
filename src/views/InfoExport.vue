<template>
  <div>
    <div style="margin-left:30%">
      <el-button @click="downloadqinghai">微信公众号导出</el-button>
      <el-button>青海门户导出</el-button>
    </div>
    <div>
      <h3>所有人员展示表:</h3>
      <el-table
      v-for="(table,index) in tableData"
      :key="index"
    :data="table"
    border
    style="width: 100%;margin-top:20px">
    <el-table-column
      prop="staffid"
      label="序号"
      width="200"
      fixed>
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.staffid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="employeeid"
      label="员工编号"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" @click="goclick(scope.row.id,scope.column)"  style="margin-left: 10px">{{ scope.row.employeeid }}</span>
        <el-input type="textarea"  autocomplete  v-model="scope.row.employeeid" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="authorname"
      label="姓名"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.authorname}}</span>
        <el-input v-model="scope.row.authorname" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="authorunit"
      label="单位"
      width="200"
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
      width="200"
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
      width="200"
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
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.authorunit}}</span>
        <el-input v-model="scope.row.authorunit" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="salary"
      label="收入"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.salary}}</span>
        <el-input v-model="scope.row.salary" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="taxes"
      label="个税"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.taxes}}</span>
        <el-input v-model="scope.row.taxes" v-show="scope.row.iseditor"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="reality"
      label="实际金额"
      width="200"
      >
      <template slot-scope="scope">
        <span v-show="!scope.row.iseditor" style="margin-left: 10px">{{ scope.row.reality}}</span>
        <el-input v-model="scope.row.reality" v-show="scope.row.iseditor"></el-input>
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
    </div>
  </div>
</template>
<script>
import {Message, Upload} from 'element-ui'
export default {
  data() {
    return {
        tableData:[],
        close:false,
        k:0,
    };
  },
  mounted(){
    this.getexpor()
  },
  methods:{
    getexpor(){
      this.$axios({
        url:"/Expr/getexpor"
      }).then((res)=>{
        if (res) {
          // for (let i = 0; i < res.data.length; i++) {
          //   console.log(res.data[i]);
          //   this.tableData.push({...res.data[i]})
          // }
          this.tableData=res.data
        }
      })
    },
    downloadqinghai(){
        this.$axios({
          url:"/Expr/downloadqinghai",
          responseType: 'blob'
        }).then((res)=>{
          let blob=new Blob([res.data])
          let a=document.createElement("a")
          // a.style.display='none'
          a.href=URL.createObjectURL(blob)
          a.setAttribute(
            'download',
            "导出qing.xlsx"
          ),
          // document.body.appendChild(a);
          a.click();                            //下载该文件
          // document.body.removeChild(a);

        })
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
              row.iseditor=false
              this.k++
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
        this.k--
      }
  }
}
</script>
<style scoped>

</style>
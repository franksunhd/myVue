<template>
  <Box>
    <el-form :inline="true" v-model="FormData">
      <el-form-item label="名称">
        <el-input v-model="FormData.name" />
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="FormData.type" clearable>
          <el-option :label="item.dife" :value="item.id" :key="item.id" v-for="item in types" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-date-picker v-model="FormData.beginTime" :editable="false" type="date" placeholder="选择开始日期" />
        <span>~</span>
        <el-date-picker v-model="FormData.endTime" :editable="false" type="date" placeholder="选择结束日期" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index" width="50" />
      <el-table-column label="名称" prop="name" width="200" />
      <el-table-column label="类别" prop="type" />
      <el-table-column label="上传时间" prop="date" />
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showDetail(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="currentPage"
                     :page-size="options.num"
                     :page-sizes="[10, 20, 30, 40]"
                     layout="total,sizes,prev, pager, next"
                     :total="total">
      </el-pagination>
    </div>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "life-note",
    components:{Box},
    data(){
      return {
        options:{
          start:0,
          num:10,
        },
        currentPage: 1, // 当前页码
        total: 10, // 数据总条数
        FormData:{
          name:'',
          type:'',
          beginTime:'',
          endTime:'',
          num:0,

        },
        tableData:[
          {id:1001,name:'',type:'心情随笔',date:'2018-10-10 10:10:10'},
          {id:1002,name:'',type:'教育随笔',date:'2018-10-10 10:10:10'},
          {id:1003,name:'',type:'伤感随笔',date:'2018-10-10 10:10:10'},
          {id:1004,name:'',type:'随笔散文',date:'2018-10-10 10:10:10'},
          {id:1005,name:'',type:'名人随笔',date:'2018-10-10 10:10:10'},
          {id:1006,name:'',type:'人生百态',date:'2018-10-10 10:10:10'},
          {id:1007,name:'',type:'大学生活',date:'2018-10-10 10:10:10'},
          {id:1008,name:'',type:'90后创业',date:'2018-10-10 10:10:10'},
        ],
        types:[
          {id:1,dife:'心情随笔'},
          {id:2,dife:'教育随笔'},
          {id:3,dife:'伤感随笔'},
          {id:4,dife:'随笔散文'},
          {id:5,dife:'名人随笔'},
          {id:6,dife:'人生百态'},
          {id:7,dife:'大学生活'},
          {id:8,dife:'90后创业'},
        ]
      }
    },
    methods:{
      showDetail(item) {
        var _t = this;
        _t.$router.push({name:'LifeNoteDetail',params:{
            techNoteId:item.id
          }
        });
        localStorage.setItem('lifeNoteId',item.id);
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.options.start = (currentPage - 1) * this.options.num;
        this.getData();
      },
      handleSizeChange(size) {
        this.options.num = size;
        this.options.start = 0;
        this.getData();
      },
      getData(){
        var _t = this;
        _t.$store.commit('setLoading',false);
      },
    },
    created(){
      this.$store.commit('setLoading',true);
      this.getData();
    }
  }
</script>

<style scoped>

</style>

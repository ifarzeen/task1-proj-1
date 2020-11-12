<template>
  <div class="container">
    <table class="data-table display">
      <thead>
        <tr>
          <th>Sr#</th>
          <th>Author</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="tableItem + index" v-for="(tableItem, index) in tableData">
          <td>{{ index + 1 }}</td>
          <td>{{ tableItem.data.author }}</td>
          <td>{{ tableItem.data.title }}</td>
          <td>
            <button  class="btn btn-primary" @click="toggleRowDetail(index)">Detail</button>
            <div v-show="showDetail === index">
            <RowDetail :author="tableItem.data.author" :title="tableItem.data.title"/> 
            </div>   
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import RowDetail from './RowDetail.vue'

export default {
  name: "Data-Table",
  components:{
    RowDetail
  },
  data() {
    return {
      tableData: [],
      showDetail:false
    };
  },
  

  methods:{
    

     toggleRowDetail (index) {
          this.showDetail = index
      } ,
    searchDelay:()=>{

    let myDataTable;
    $(document).ready(function() {
      myDataTable = $(".data-table")
        .dataTable()
        .api({
          data: this.tableData,
          columns: [{ title: "sr#" }, { title: "Author" }, { title: "Title" },{ title: "Actions" }],
        
      
        });

      const inputBox = $("input").attr("aria-name", "DataTables_Table_0");


      inputBox.unbind().bind("keyup", function() {
      
        if (inputBox.val().length >= 3) {
          myDataTable.search(this.value).draw();
        }
        if (inputBox.val() === "" || inputBox.val().length == 0) {
          
          myDataTable.search(this.value).draw();
        }
      });
    });


    }
  },

  async mounted() {
    const responseTableData = await axios.get("https://www.reddit.com/r/technology/new.json");
    this.tableData = responseTableData.data.data.children;
    this.searchDelay();
  }
};
</script>

<style>
table {
  margin-top: 10px;
  text-align: left;
  width: 100%;
  align-self: center;
}

th {
  background-color: #dddddd;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.btn1 {
  background-color: transparent;
  border: none;
}

input {
  width: 90%;
}

/* .myDataTableClass{
  margin-top: 10px;
} */
</style>

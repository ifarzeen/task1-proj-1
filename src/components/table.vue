<template>
  <div class="container">
    <table class="myDataTable">
      <thead>
        <tr>
          <th>Sr#</th>
          <th>Author</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(mydata, index) in tableData">
          <td>{{ index + 1 }}</td>
          <td>{{ mydata.data.author }}</td>
          <td>{{ mydata.data.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
//import dt from 'datatables.net'

// var dt      = require( 'datatables.net' )();
export default {
  name: "Table",
  data() {
    return {
      tableData: [],
    };
  },

  created() {},
  async mounted() {
    const res = await axios.get("https://www.reddit.com/r/technology/new.json");
    this.tableData = res.data.data.children;
    var table;
    $(document).ready(function() {
      table = $(".myDataTable")
        .dataTable()
        .api({
          data: this.tableData,
          columns: [{ title: "sr#" }, { title: "Author" }, { title: "Title" }],
        });

      const iets = $("input").attr("aria-name", "DataTables_Table_0");

      //  console.log( iets[0].className);
      console.log(iets[0]);

      iets.unbind().bind("keyup", function() {
        console.log(iets.val().length);
        var myvalue = iets.val();
        if (iets.val().length >= 3) {
          console.log("heyy");
          console.log(myvalue);
          table.search(this.value).draw();
        }
        if (iets.val() === "" || iets.val().length == 0) {
          console.log("Yo");
          table.search(this.value).draw();
        }
      });
    });

    // if(iets){
    //   iets.addEventListener('keyup',()=>{
    //     console.log('called')
    //      if(iets.val().length >= 3) {
    //           dt.search(iets.val()).draw();
    //       }
    //       if(iets.val() === ""){
    //           dt.search(iets.val()).draw();
    //       }
    //    });
    // }
  },
  updated() {},
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

.filter-box {
  margin-top: 10px;
  width: 100%;
}

input {
  width: 90%;
}
</style>

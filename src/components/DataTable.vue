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

export default {
  name: "Table",
  data() {
    return {
      tableData: [],
    };
  },

  
  async mounted() {
    const responseTableData = await axios.get("https://www.reddit.com/r/technology/new.json");
    this.tableData = responseTableData.data.data.children;
    var myDataTable;
    $(document).ready(function() {
      myDataTable = $(".myDataTable")
        .dataTable()
        .api({
          data: this.tableData,
          columns: [{ title: "sr#" }, { title: "Author" }, { title: "Title" }],
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
</style>

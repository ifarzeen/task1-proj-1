<template>
  <div class="container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Sr#</th>
          <th>Author</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-bind:key="tableItem + index"
          v-for="(tableItem, index) in tableData"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ tableItem.data.author }}</td>
          <td>{{ tableItem.data.title }}</td>
          <td>
            <button class="btn btn-primary" @click="showRowDetail(tableItem.data)">
              Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <PostList v-on:deleteRow="deleteRow($event)" :post-details="postDetails" />
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import PostList from "./PostList.vue";

export default {
  name: "Data-Table",
  components: {
    PostList,
  },
  data() {
    return {
      tableData: [],
      showDetail: false,
      postDetails: [],
    };
  },

  methods: {
    showRowDetail(tableItem) {
      this.postDetails.push(tableItem)
      console.log(this.postDetails)

    },

    deleteRow:function(data){
      console.log(data)
       this.tableData=this.tableData.filter((currentItem) => {
         console.log(currentItem)
         console.log(data)
         console.log(currentItem.data.author)
        
        return data !== currentItem.data.id
       });
    },
    searchDelay: () => {
      let myDataTable;
      $(document).ready(function () {
        myDataTable = $(".data-table")
          .dataTable()
          .api({
            data: this.tableData,
            columns: [
              { title: "sr#" },
              { title: "Author" },
              { title: "Title" },
              { title: "Actions" },
            ],
          });

        const inputBox = $("input").attr("aria-name", "DataTables_Table_0");

        inputBox.unbind().bind("keyup", function () {
          if (inputBox.val().length >= 3) {
            myDataTable.search(this.value).draw();
          }
          if (inputBox.val() === "" || inputBox.val().length == 0) {
            myDataTable.search(this.value).draw();
          }
        });
      });
    },
  },

  async mounted() {
    const responseTableData = await axios.get(
      "https://www.reddit.com/r/technology/new.json"
    );
    this.tableData = responseTableData.data.data.children;
    this.searchDelay();
  },
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

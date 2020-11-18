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
        <tr v-bind:key="postItem + index" v-for="(postItem, index) in postsData">
          <td>{{ index + 1 }}</td>
          <td>{{ postItem.data.author }}</td>
          <td>{{ postItem.data.title }}</td>
          <td>
            <button
              class="btn btn-primary"
              @click="showRowDetail(postItem.data)"
            >
              Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "Data-Table",
  components: {
  
  },
  data() {
    return {
      
      showDetail: false,
      postDetails: [],
    };
  },
  computed:{
    postsData(){
      return this.$store.commit('postsData')
    }
  },
  methods: {
    showRowDetail(postItem) {
      this.postDetails.push(postItem);
    },
    deletePost(data) {
      this.postsData = this.postsData.filter((currentItem) => {
        return data !== currentItem.data.id;
      });
    },
    initializeAndSearchDelay(){  
      $(document).ready(function() {
       const myDataTable = $(".data-table")
          .dataTable()
          .api({
            data: this.postsData,
            columns: [
              { title: "sr#" },
              { title: "Author" },
              { title: "Title" },
              { title: "Actions" },
            ],
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
    },
  },
  async mounted() {
    const responseTableData = await axios.get(
      "https://www.reddit.com/r/technology/new.json"
    );
    this.initializeAndSearchDelay();
    this.postsData = responseTableData.data.data.children;
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
</style>

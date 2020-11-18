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
        <tr
          v-bind:key="postItem + index"
          v-for="(postItem, index) in postsData"
        >
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
    <PostList
      v-on:deletePost="deletePost($event)"
      :post-details="postDetails"
    />
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
      postsData: [],
      showDetail: false,
      postDetails: [],
    };
  },

  methods: {
    showRowDetail(tableItem) {
      this.postDetails.push(tableItem);
    },

    deletePost(data) {
      this.postsData = this.postsData.filter(currentItem => {
        return data !== currentItem.data.id;
      });
    },

    initializeAndDelaySearch() {
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
    const tableData = await axios.get(
      "https://www.reddit.com/r/technology/new.json"
    );
    this.initializeAndDelaySearch();
    this.postsData = tableData.data.data.children;
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

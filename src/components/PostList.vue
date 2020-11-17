<template>
  <div>
    <div v-bind:key="post + index" v-for="(post, index) in postDetails">
      <RowDetail v-on:deletePost="deleteRow($event)" :post-details="post" />
    </div>
  </div>
</template>

<script>
import RowDetail from "./RowDetail.vue";
export default {
  name: "Post-List",
  props: ["postDetails"],
  components: {
    RowDetail,
  },

  methods: {
    deleteRow: function(data) {
      this.$emit("deleteRow", data);
    },
  },
  mounted() {
    console.log(this.postDetails);
    console.log("in PostList");
  },
};
</script>

<style scoped></style>

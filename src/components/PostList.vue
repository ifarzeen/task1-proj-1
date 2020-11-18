<template>
  <div>
    <div v-bind:key="singlePost + index" v-for="(singlePost, index) in postDetails">
      <RowDetail v-on:deletePost="deletePost($event)" :post-details="singlePost" />
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
    deletePost(data) {
      this.$emit("deletePost", data);
    },
  },
};
</script>

<style scoped></style>

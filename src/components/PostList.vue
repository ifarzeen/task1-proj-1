<template>
  <div>
    <div
      v-bind:key="singlePost + index"
      v-for="(singlePost, index) in postDetails"
    >
      <RowDetail :single-post-detail="singlePost" />
    </div>
  </div>
</template>

<script>
import RowDetail from "./RowDetail.vue";
export default {
  name: "Post-List",
  components: {
    RowDetail,
  },
  computed: {
    postDetails() {
      return this.$store.getters.getPostDetails;
    },
  }
};
</script>

<style scoped></style>

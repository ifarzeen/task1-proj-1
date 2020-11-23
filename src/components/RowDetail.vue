<template>
  <div>
    <div class="mx-auto card">
      <b> Author:</b> {{ singlePostDetail.author }} <b>Title: </b
      >{{ singlePostDetail.title }}
      <button v-on:click="deletePost(singlePostDetail.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Row-Detail",
  props: ["singlePostDetail"],
  computed: {
    postDetails() {
      return this.$store.getters.getPostDetail;
    },
  },
  methods: {
    deletePost(postId) {
      this.$store.commit("DELETE_POST", postId);
    },
  },
};
</script>

<style>
.card {
  text-align: left;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
  width: 34rem;
}
</style>

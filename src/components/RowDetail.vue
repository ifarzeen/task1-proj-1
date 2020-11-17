<template>
  <div>
    <div class="mx-auto card">
      <b> Author:</b> {{ " " + postDetails.author }} <b>Title: </b>{{ " " + postDetails.title }}

      <button v-on:click="deletePost">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Row-Detail",
  // props: ["author", "title"],
  props:["postDetails"],
// props:{
//     postDetails:{
//         type:Object,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//     }
// },
  methods:{
      deletePost:function(){
          this.$emit('deletePost',this.postDetails.id)
          console.log(this.postDetails.id)
      }
  },
    mounted(){
        console.log(this.postDetails)
        console.log("mounted in Row Detail")
    }
    
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
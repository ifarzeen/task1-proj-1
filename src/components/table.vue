<template>
  <div class="container">
    <div class="filter-box">
      <input type="text" placeholder="Filter..."/>
      <button class="btn1"><img src=".././assets/icons8-search.svg" /></button>
    </div>

    <table class="myDataTable">
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Author</th>
            <th>Title</th>
          </tr>
        </thead>
        
      <tr v-bind:key="index" v-for="(mydata, index) in tableData">
        <td> {{index}}</td>
        <td> {{mydata.data.author}}</td>
        <td> {{mydata.data.title}}</td>
      </tr>
      
    </table>

    
  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';
// import dt from 'datatables.net'

// var dt      = require( 'datatables.net' )();
export default {
  name: "Table",
  data() {
    return {
      tableData: [],
      specs: [
        {
          fName: "Farzeen",
          lName: "Saleem"
        },
        {
          fName: "Jordan",
          lName: "West"
        },
      ],
    };
  },
  async created(){
  // var _this=this;
  // var data;
  //    axios.get("https://www.reddit.com/r/technology/new.json")
  //    .then( (res) => { data =  res.data.data.children
  //    console.log(res);
  //       $(document).ready(function(){
  //         console.log(data)
  //         this.tableData=data;
  //         console.log(this.tableData);
  //      $('.myDataTable').DataTable();
  //      console.log(this.tableData);
  //   });
  //   });
    //   this.tableData=  data.data.data.children;
    //   console.log(data);
    //     $(document).ready(function(){
    //    $('.myDataTable').DataTable();
    // });

  },
 async mounted(){
     axios.get("https://www.reddit.com/r/technology/new.json")
     .then( (res) => { this.tableData =  res.data.data.children;
     console.log(res);
        console.log(this.tableData);
        $(document).ready(function(){
       
  
       $('.myDataTable').DataTable();
   
    });
    });

    //  axios
    //   .get("https://www.reddit.com/r/technology/new.json")
    //    .then((response) => (this.tableData = response.data.data.children));

    //  $(document).ready(function(){
    //    $('.myDataTable').DataTable();
    // });
    // $(document).ready(function() {
    // $('.myDataTable').DataTable( {
       
    // } );})

  }
  // methods:{
  //   initDatatable() {
  //               setTimeout(() => {
  //               $('.walla').DataTable({
  //                   "pagingType": "full_numbers",
  //                   "lengthMenu": [
  //                       [10, 25, 50, -1],
  //                       [10, 25, 50, "All"]
  //                   ],
  //                   order: [[0, 'asc'], [3, 'desc']],
  //                   responsive: true,
  //                   destroy: true,
  //                   retrieve: true,
  //                   autoFill: true,
  //                   colReorder: true,

  //               });
  //              }, 300)
  //           }
  // }
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

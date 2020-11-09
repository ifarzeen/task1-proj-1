<template>
  <div id="app">

    <Header/>
    <GoButton v-on:click.native="toggle = !toggle"/>
    <div v-show="toggle">
      <DataTable/>
    </div>
    
 
  </div>
</template>

<script>
import Header from './components/layout/Header'
import GoButton from './components/GoButton'
import DataTable from './components/DataTable'


export default {
  name: 'App',
  components: {
    Header,
    GoButton,
    DataTable
  },
   data () {
   return {
     toggle: false
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>

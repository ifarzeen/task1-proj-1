<template>
  <div id="app">

    <Header/>
    <ButtonGo v-on:click.native="toggle = !toggle"/>
    <div v-show="toggle">
      <Table/>
    </div>
    
 
  </div>
</template>

<script>
import Header from './components/layout/header'
import ButtonGo from './components/buttonGo'
import Table from './components/table'


export default {
  name: 'App',
  components: {
    Header,
    ButtonGo,
    Table
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

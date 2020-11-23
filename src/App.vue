<template>
  <div id="app">
    <Header/>
    <router-link to="/data-table"><GoButton/></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import GoButton from './components/GoButton'
export default {
  name: "App",
  components: {
    Header,
    GoButton,
  },
};
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

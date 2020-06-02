<template>
  <div id="app">
    <Bread></Bread>
    <router-view/>
  </div>
</template>

<script>
import Bread from './components/Bread'
export default {
  name: 'App',
  components: {
    Bread
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

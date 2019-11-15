<template>
  <div id="app">
    <div id="nav" class="no-print">
      <router-link to="/">主页</router-link> |
      <router-link to="/gridppreport">锐浪报表</router-link> |
      <button onclick="window.print()">原生打印</button> |
      <button @click="printReport()">插件打印</button>
    </div>
    <router-view id="main"/>
  </div>
</template>

<script>
import printJS from 'print-js'

export default {
  name: 'main',
  methods: {
    printReport() {
      printJS('main', 'html')
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

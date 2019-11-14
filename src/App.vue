<template>
  <div id="app">
    <div id="nav" class="no-print">
      <router-link to="/">主页</router-link> |
      <router-link to="/gridppreport">锐浪报表</router-link> |
      <router-link to="/survey">问卷</router-link> |
      <button onclick="window.print()">打印</button>
    </div>
    <router-view/>
  </div>
</template>

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

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ระบบบันทึกรายรับรายจ่าย</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
#app {
  font-family: 'Itim', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      font-size: 1.5em;
    }
  }
}
</style>

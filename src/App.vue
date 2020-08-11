<template>
  <div id="app">
    <router-view ref="router" class="absolute" />
  </div>
</template>

<style>
.absolute {
  position: absolute;
}
#app {
  font-family: serif;
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
.disabledAll {
  pointer-events: none;
}
</style>

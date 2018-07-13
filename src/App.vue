<template>
  <div id="app">
   <Headers></Headers>
   <SwiperSilder></SwiperSilder>
   <MusicNav></MusicNav>
  </div>
</template>

<script>
import Headers from './components/Header'
import MusicNav from './components/MusicNav'
import SwiperSilder from './components/SwiperSilder'
export default {
  name: 'App',
  components: {
    Headers,
    MusicNav,
    SwiperSilder
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template lang="html">
  <div class="container">
    <Header />
    <Search />
    <SwiperSlider />
    <MusicNav />
    <router-view></router-view>
    <Singer />
  </div>
</template>

<script>
import Header from "../components/Header"
import MusicNav from "./MusicNav"
import Singer from "./Singer"
import SwiperSlider from "../components/SwiperSilder"
import Search from "../components/Search"
export default {
  name:"index",
  data(){
    return{
    }
  },
  components:{
    Header,
    MusicNav,
    Singer,
    SwiperSlider,
    Search
  }
}
</script>

<style lang="css">
</style>

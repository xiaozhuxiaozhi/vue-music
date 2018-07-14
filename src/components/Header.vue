<template>
  <div class="header-box">
    <header class="header">
        <span class="logo"></span>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-box{
  overflow: hidden;
}
.header{
  width: 100%;
  height: 44px;
  background: #31c27c;
}
.logo{
  display: block;
  float: left;
  width: 90px;
  height: 25px;
  margin: 9px 0 0 10px;
  background: url('https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423') no-repeat;
  background-size: contain;
}
</style>
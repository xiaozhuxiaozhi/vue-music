<template>
	<div class="nav">
	<nav>
      <ul>
        <li>
          <router-link to="/recommend">推荐</router-link>
        </li>
        <li>
          <router-link to="/rank">排行榜</router-link>
        </li>
        <li>
          <router-link to="/search">搜索</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'MusicNav',
		data(){
			return {

			}
		}
	}
</script>
<style type="text/css">
nav{
  width: 100%;
  height: 40px;
  line-height: 40px;
}

ul{
  width: 100%;
}
ul li{
  width: 33.33%;
  text-align: center;
  font-size: 16px;
  float: left;  
  list-style: none;
  text-decoration: none;
}
ul li a{
  text-decoration: none;
}
ul li:nth-child(1){
      border-bottom: 2px solid green
}
</style>
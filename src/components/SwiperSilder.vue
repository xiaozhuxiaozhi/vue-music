<template>
	<div class="silder">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/banner/b1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner/b2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner/b3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/javascript">
	export default {
		name:"slider",
		data(){
			return{
			swiperOption: {
	        pagination: {
	          el: '.swiper-pagination',
	        },
	        loop:true,
	        autoplay: {
                 disableOnInteraction: false,
                 delay:4000
            }
	      }
		}
	}
}
</script>
<style type="text/css">
	img{
	border: none;
    max-width: 100%;
    vertical-align: middle;

	}
</style>
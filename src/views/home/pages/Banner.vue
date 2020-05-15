<template>
	<swiper class="banner" ref="mySwiper" :options="swiperOptions">
		<swiper-slide v-for="(item, index) in banner.list" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="" />
			</a>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
export default {
	props: {
		banner: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination',
				},
				loop: true,
				autoplay: true,
			},
		};
	},
	created() {},
};
</script>
<style lang="less" scoped>
.banner {
	height: 5.2rem;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>

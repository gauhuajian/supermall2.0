<template>
	<swiper class="banner" ref="mySwiper" :options="swiperOptions">
		<swiper-slide v-for="(item, index) in banner" :key="index">
			<img :src="item" alt="" />
		</swiper-slide>
	</swiper>
</template>
<script>
export default {
	props: {
		banner: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			swiperOptions: {
				effect: 'coverflow',
				slidesPerView: 2,
				centeredSlides: true,
				coverflowEffect: {
					rotate: 0,
					stretch: 10,
					depth: 120,
					modifier: 2,
					slideShadows: true,
				},
			},
		};
	},
	mounted() {},
};
</script>
<style lang="less" scoped>
.banner {
	img {
		width: 5.33333;
		height: 8rem;
	}
}
</style>

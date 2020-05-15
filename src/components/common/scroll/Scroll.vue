<template>
	<div class="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
	props: {
		probeType: {
			type: Number,
			default() {
				return 0;
			},
		},
		pullUpLoad: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
	data() {
		return {
			scroll: null,
		};
	},
	mounted() {
		let wrapper = document.querySelector('.wrapper');
		this.scroll = new BScroll(wrapper, {
			click: true,
			pullUpLoad: this.pullUpLoad,
			probeType: this.probeType,
		});

		this.pullUpLoad == true && this.pullingUp();
	},
	methods: {
		refresh() {
			this.scroll.refresh();
		},
		offScroll() {
			this.scroll.off('scroll');
		},
		SrcollElement() {
			this.scroll.on('scroll', (position) => {
				this.$emit('scroll', position);
			});
		},
		pullingUp() {
			this.scroll.on('pullingUp', () => {
				this.$emit('pullingUp');
			});
		},
		finishPullUp() {
			this.scroll.finishPullUp();
		},
		scrollTo(x, y, time = 300) {
			this.scroll.scrollTo(x, y, time);
		},
	},
};
</script>
<style lang="stylus" scoped></style>

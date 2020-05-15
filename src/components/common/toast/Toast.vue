<template>
	<div v-if="isShow" class="toast">
		<p>{{ title }}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: '',
			isShow: false,
		};
	},
	methods: {
		show(string, timer = 1000) {
			this.title = string;
			this.isShow = true;
			setTimeout(() => {
				this.title = '';
				this.isShow = false;
			}, timer);
		},
	},
};
</script>
<style lang="less" scoped>
.toast {
	position: fixed;
	z-index: 9999;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	p {
		padding: 0.3rem 0.5rem;
		border-radius: 0.2rem;
		background: rgba(0, 0, 0, 0.7);
		text-align: center;
		font-size: 0.42rem;
		color: #fff;
	}
}
</style>

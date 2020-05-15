<template>
	<div class="tab-bar-item" :class="{ active: isActions }" @click="itemClick">
		<div class="icon">
			<slot name="icon"></slot>
		</div>
		<div class="title">
			<slot name="title"></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		path: String,
		default() {
			return '';
		},
	},
	methods: {
		//点击 跳转
		itemClick() {
			this.$router.push(this.path);
		},
	},
	computed: {
		//判断是否与当前路径相等 .active生效
		isActions() {
			return this.$route.path.indexOf(this.path) != -1;
		},
	},
};
</script>
<style lang="less" scoped>
.tab-bar-item {
	flex: 1;
	font-size: 0.37rem;
	text-align: center;
	i {
		font-size: 0.6rem;
	}
}
.active {
	color: #ff5777;
}
</style>

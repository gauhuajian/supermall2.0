<template>
	<div class="tab-control">
		<div class="control-item" v-for="(item, index) in title" :key="index" @click="itemClick(index)">
			<span :class="{ active: curIndex == index }">{{ item }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			curIndex: 0,
		};
	},
	methods: {
		itemClick(index) {
			this.curIndex = index;
			this.$emit('itemClick', this.curIndex);
		},
	},
};
</script>
<style lang="less" scoped>
.tab-control {
	display: flex;
	padding: 0.3rem;
	background: #fff;
	.control-item {
		flex: 1;
		font-size: 0.42rem;
		text-align: center;
	}
	.active {
		padding-bottom: 0.1rem;
		border-bottom: 0.08rem #ff5777 solid;
		color: #ff5777;
	}
}
</style>

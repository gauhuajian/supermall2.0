<template>
	<scroll id="Menuscroll">
		<div
			class="menu-item"
			v-for="(item, index) in menu"
			:key="index"
			@click="itemClick(index)"
			:class="{ active: curIndex == index }"
		>
			{{ item.title }}
		</div>
	</scroll>
</template>
<script>
import scroll from '@/components/common/scroll/Scroll';
export default {
	components: {
		scroll,
	},
	props: {
		menu: {
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
	created() {},
	methods: {
		itemClick(index) {
			this.$emit('itemClick', index);
			this.curIndex = index;
		},
	},
};
</script>
<style lang="less" scoped>
#Menuscroll {
	position: absolute;
	top: 1.17333rem;
	width: 2.66rem;
	bottom: 1.30666rem;
	overflow: hidden;
}
.menu-item {
	width: 2.66rem;
	height: 1.2rem;
	line-height: 1.2rem;
	background: #eee;
	text-align: center;
	font-size: 0.37rem;
	color: #666;
}
.active {
	background: #fff;
	color: #ff5777;
}
</style>

<template>
	<div class="goods">
		<goods-item class="goods-item" v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-item>
	</div>
</template>
<script>
import goodsItem from './pages/GoodsItem';
export default {
	components: {
		goodsItem,
	},
	props: {
		goods: {
			type: Array,
			default() {
				return [];
			},
		},
	},

	mounted() {},
};
</script>
<style lang="less" scoped>
.goods {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 2px;
}
</style>

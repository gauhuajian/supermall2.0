<template>
	<div class="tab-bar">
		<!-- 把对应得路径传子  -->
		<tab-bar-item path="/home">
			<i slot="icon" class="iconfont">&#xe60c;</i>
			<div slot="title">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<i slot="icon" class="iconfont">&#xe601;</i>
			<div slot="title">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart">
			<i slot="icon" class="iconfont">&#xe600;</i>
			<div slot="title">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/my">
			<i slot="icon" class="iconfont">&#xe990;</i>
			<div slot="title">我的</div>
		</tab-bar-item>
	</div>
</template>

<script>
import TabBarItem from './pages/TabBarItem';
export default {
	name: 'tabBar',
	components: {
		TabBarItem,
	},
};
</script>

<style lang="less" scoped>
.tab-bar {
	position: fixed;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 99;
	display: flex;
	align-items: center;
	height: 1.306666666666667rem;
	background: #f6f6f6;
}
</style>

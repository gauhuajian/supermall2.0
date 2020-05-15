<template>
	<div class="cart">
		<nav-bar class="cart-herder">
			<div slot="center">购物车({{ Cartlength }})</div>
		</nav-bar>
		<scroll ref="scroll" class="scroll">
			<cart-list :list="list" @check="check"></cart-list>
		</scroll>
		<cart-tab-bar @allClick="allClick"></cart-tab-bar>
	</div>
</template>
<script>
//相关组件
import NavBar from '@/components/common/navbar/NavBar';
import CartList from './pages/CartList';
import CartTabBar from './pages/CartTabBar';
// 公共
import Scroll from '@/components/common/scroll/Scroll';
//vuex
import { mapGetters, mapState, mapActions } from 'vuex';
export default {
	components: {
		NavBar,
		CartList,
		Scroll,
		CartTabBar,
	},
	activated() {
		this.$refs.scroll.refresh();
	},
	methods: {
		allClick() {
			this.selectAll();
		},
		check(data) {
			this.getCheck(data);
		},
		...mapActions(['getCheck', 'selectAll']),
	},
	computed: {
		...mapGetters(['Cartlength']),
		...mapState(['list']),
	},
};
</script>
<style lang="less" scoped>
.cart {
	position: relative;
	height: 100vh;
	.cart-herder {
		background: #ff5777;
		font-size: 0.42rem;
		color: #fff;
	}
	.scroll {
		position: absolute;
		top: 1.173rem;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}
}
</style>

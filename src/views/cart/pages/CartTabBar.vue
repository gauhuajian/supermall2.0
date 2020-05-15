<template>
	<div class="tab-bar">
		<div class="pitch" @click="allClick">
			<img v-show="!allcheck" src="@/assets/img/common/nocheck.svg" alt="" />
			<img v-show="allcheck" src="@/assets/img/common/check.svg" alt="" />
			<span>全选</span>
		</div>
		<div class="total">合计:￥{{ total }}</div>
		<div class="calculate" @click="calculateClick">去计算({{ calculate }})</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	methods: {
		calculateClick() {
			this.$toast.show('请登录再加入购物车', 2000);
		},
		allClick() {
			this.$emit('allClick');
		},
	},
	computed: {
		allcheck() {
			if (this.list.length == 0) return !true;
			return !this.list.some((item) => !item.check);
		},
		calculate() {
			return this.list.filter((item) => item.check).length;
		},
		total() {
			return this.list
				.filter((item) => {
					return item.check;
				})
				.reduce((pre, item) => {
					return pre + item.data.price * item.count;
				}, 0)
				.toFixed(2);
		},

		...mapState(['list']),
	},
};
</script>
<style lang="less" scoped>
.tab-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 1.30666rem;
	background: #eee;
	font-size: 0.42rem;
	color: #555;
	.pitch {
		display: flex;
		align-items: center;
		padding: 0.2rem;
		img {
			display: block;
			width: 0.7rem;
			height: 0.7rem;
		}
	}
	.total {
		padding: 0.2rem;
	}
	.calculate {
		padding: 0.3rem 0.7rem;
		background: #ff5777;
		color: #fff;
	}
}
</style>

<template>
	<div class="cart-item">
		<div class="cart-wrap" v-for="(item, index) in list" :key="index">
			<div class="cart-check">
				<div @click="check(item)">
					<img v-show="!item.check" src="@/assets/img/common/nocheck.svg" alt="" />
					<img v-show="item.check" src="@/assets/img/common/check.svg" alt="" />
				</div>
			</div>
			<div class="cart-img">
				<img :src="item.data.img" alt="" />
			</div>
			<div class="cart-info">
				<div class="info-title">
					<div>{{ item.title }}</div>
					<div>{{ '颜色: ' + item.data.style + ' 尺寸: ' + item.data.size }}</div>
				</div>
				<div class="price-count">
					<span>{{ item.data.currency + item.data.price }}</span>
					<span>x{{ item.count }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	mounted() {},
	methods: {
		check(data) {
			this.$emit('check', data);
		},
	},
};
</script>
<style lang="less" scoped>
.cart-item {
	padding-bottom: 2.406666rem;
	.cart-wrap {
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 0;
		border-bottom: 0.03rem #ddd solid;
		.cart-check {
			width: 0.8rem;
			div {
				width: 0.7rem;
				height: 0.7rem;
				margin: auto;
				margin-top: 1rem;
				img {
					display: block;
					height: 100%;
					width: 100%;
				}
			}
		}
		.cart-img {
			width: 2rem;
			height: 2.7rem;
			img {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 0.16rem;
			}
		}
		.cart-info {
			.info-title {
				width: 7rem;
				div {
					padding: 0 0 0.4rem 0.2rem;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					font-size: 0.42rem;
					color: #333;
					&:last-child {
						font-size: 0.37rem;
					}
				}
			}
			.price-count {
				display: flex;
				justify-content: space-between;
				padding: 0 0.2rem;
				margin-top: 0.3rem;
				span {
					font-size: 0.42rem;
				}
			}
		}
	}
}
</style>

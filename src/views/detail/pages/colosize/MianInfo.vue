<template>
	<div class="color-size-view">
		<div class="image">
			<img v-if="!isShow" :src="data.image" alt="" />
			<img v-else-if="isShow" :src="data.img" alt="" />
		</div>
		<div class="text">
			<div class="price" v-if="!isShow">{{ data.defaultPrice }}</div>
			<div class="price" v-else>{{ price }}</div>
			<div class="repertory">库存{{ totalStock }}件</div>
			<div class="select">
				<span v-if="!isShow">请选择 : 颜色 尺寸</span>
				<span v-else-if="isShow">
					<span>已选择:</span>
					<span class="active">{{ data.style }}</span>
					<span class="active">{{ data.size }}</span>
				</span>
			</div>
		</div>
		<div class="out" @click="outClick">
			<img src="@/assets/img/common/no.svg" alt="" />
		</div>
	</div>
</template>
<script>
export default {
	props: {
		data: {
			type: Object,
			default() {
				return {};
			},
		},
		isShow: {},
		totalStock: {},
	},
	methods: {
		outClick() {
			this.$emit('outClick');
		},
	},
	computed: {
		price() {
			return this.data.currency + this.data.price;
		},
	},
};
</script>
<style lang="less" scoped>
.color-size-view {
	display: flex;
	padding: 0.2rem;
	.image {
		width: 2.13rem;
		height: 2.13rem;
		img {
			width: 2.13rem;
			height: 2.13rem;
		}
	}
	.text {
		padding-left: 0.3rem;
		font-size: 0.37rem;
		.price {
			font-size: 0.6rem;
		}
		.select {
			padding-bottom: 0rem;
		}
		div {
			padding-bottom: 0.3rem;
		}
	}
	.out {
		position: absolute;
		right: 0.2rem;
		top: 0;
	}
	.active {
		color: #f25;
	}
}
</style>

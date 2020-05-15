<template>
	<div class="color-size" @click.self="outOneself($event)">
		<transition name="slide-fade">
			<div class="content" v-if="show">
				<MianInfo :data="data" :isShow="isShow" :totalStock="totalStock" @outClick="outClick" />
				<ColorSize
					:size="skuInfo.size"
					:color="skuInfo.color"
					:count="count"
					@sizeClick="sizeClick"
					@colorClick="colorClick"
					@countClick="countClick"
				/>
				<colorSizeBar @click.native="addCart" />
			</div>
		</transition>
	</div>
</template>
<script>
// 相关
import MianInfo from './colosize/MianInfo';
import ColorSize from './colosize/ColorSize';
import colorSizeBar from './colosize/colorSizeBar';

import { mapActions } from 'vuex';

export default {
	components: {
		MianInfo,
		ColorSize,
		colorSizeBar,
	},
	props: {
		skuInfo: {
			type: Object,
			default() {
				return {};
			},
		},
		show: {},
	},
	data() {
		return {
			colorID: 0,
			sizeID: 0,
			data: {
				image: this.skuInfo.image,
				defaultPrice: this.skuInfo.defaultPrice,
			},
			totalStock: this.skuInfo.totalStock,
			count: 1,
			isShow: false,
		};
	},
	methods: {
		outOneself() {
			this.count = 1;
			this.$emit('outClick');
		},
		outClick() {
			this.count = 1;
			this.$emit('outClick');
		},
		addCart() {
			if (this.colorID != 0 && this.sizeID != 0) {
				let product = {};
				product.title = this.skuInfo.title;
				product.data = this.data;
				product.count = this.count;
				this.getAddCart(product).then((res) => {
					this.$emit('addClick', res);
				});
				product = null;
				this.colorID = 0;
				this.sizeID = 0;
				this.count = 1;
			} else {
				this.$toast.show('颜色或尺码未选', 2000);
			}
		},
		colorClick(id) {
			this.colorID = id;
			this.getGoodsArr();
		},
		sizeClick(id) {
			this.sizeID = id;
			this.getGoodsArr();
		},

		countClick(e) {
			let val = e.target.innerText;
			this.count = val == '+' ? (this.count += 1) : (this.count -= 1);
			this.count < 1 ? (this.count = 1) : this.count;
		},

		getGoodsArr() {
			this.data = this.skuInfo.skus.find((item) => {
				if (this.colorID != 0 && this.sizeID != 0) {
					this.isShow = true;
					return item.styleId == this.colorID && item.sizeId == this.sizeID;
				} else if (this.colorID != 0) {
					this.isShow = true;
					return item.styleId == this.colorID;
				} else {
					return;
				}
			});
		},
		...mapActions(['getAddCart']),
	},
};
</script>
<style lang="less" scoped>
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
	transform: translateY(100%);
	opacity: 0;
}
.color-size {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.4);
	.content {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0rem;
		z-index: 99999;
		height: 10.48rem;
		background: #fff;
	}
}
</style>

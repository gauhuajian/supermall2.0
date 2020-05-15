<template>
	<scroll ref="scroll" class="main-scroll">
		<div class="main">
			<div class="content-box">
				<div class="content-item" v-for="(item, index) in list" :key="index">
					<a :href="item.link">
						<img v-lazy="item.image" alt="" />
						<div>{{ item.title }}</div>
					</a>
				</div>
				<tab-control ref="control" class="control" :title="['综合', '新品', '销量']" @itemClick="itemClick" />
				<Goods :goods="this.goods[curType].list[0]" v-if="goods.length != 0" />
			</div>
		</div>
	</scroll>
</template>
<script>
import scroll from '@/components/common/scroll/Scroll';
import TabControl from '@/components/common/tabcontrol/TabControl';
import Goods from '@/components/common/goods/Goods';
import { itemListenerMixin } from '@/common/min';
export default {
	components: {
		TabControl,
		Goods,
		scroll,
	},
	mixins: [itemListenerMixin],
	props: {
		list: {
			type: Array,
			default() {
				return [];
			},
		},
		goods: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			curType: 'pop',
		};
	},
	mounted() {},
	activated() {
		this.$refs.scroll.refresh();
	},
	methods: {
		itemClick(index) {
			switch (index) {
				case 0:
					this.curType = 'pop';
					break;
				case 1:
					this.curType = 'new';
					break;
				case 2:
					this.curType = 'sell';
					break;
				default:
					break;
			}
			this.$emit('goodsClick', index);
		},
	},
	watch: {
		list() {
			this.$refs.control.curIndex = 0;
			this.$refs.scroll.scrollTo(0, 0, 0);
		},
	},
};
</script>
<style lang="less" scoped>
.main-scroll {
	position: absolute;
	width: ceil(100%-27px);
	top: 1.173rem;
	right: 0;
	bottom: 1.306rem;
	overflow: hidden;
}
.content-box {
	display: flex;
	flex-wrap: wrap;
	padding: 0.3rem;
}
.content-item {
	width: 2.133rem;
	height: 2.5333rem;
	text-align: center;
	a {
		text-decoration: none;
		color: #666;
	}
	img {
		display: block;
		width: 1.706rem;
		margin: auto;
	}
	div {
		margin-top: 0.4rem;
		font-size: 0.32rem;
	}
}
.control {
	margin-top: 0.5rem;
	width: 100%;
}
.goods {
	width: 100%;
}
</style>

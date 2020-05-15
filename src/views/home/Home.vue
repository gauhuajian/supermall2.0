<template>
	<div class="home">
		<nav-bar class="home-herder">
			<div slot="center">
				美人街
			</div>
		</nav-bar>
		<tabcontrol
			class="control1"
			v-show="isShowControl"
			ref="control1"
			:title="['流行', '新款', '精选']"
			@itemClick="itemClick"
		/>
		<scroll
			class="scroll"
			ref="scroll"
			:probe-type="3"
			@scroll="scroll"
			:pull-up-load="true"
			@pullingUp="pullingUp"
		>
			<banner :banner="banner" />
			<Recommend :recommend="recommend" />
			<featuer-view />
			<tabcontrol ref="control2" :title="['流行', '新款', '精选']" @itemClick="itemClick" />
			<goods :goods="goodsData" />
		</scroll>
		<backTop v-show="showBackTop" @click.native="backClick" />
	</div>
</template>
<script>
//相关组件
import NavBar from '@/components/common/navbar/NavBar';
import Banner from './pages/Banner';
import Recommend from './pages/Recommend';
import FeatuerView from './pages/FeatuerView';
//公共组件
import tabcontrol from '@/components/common/tabcontrol/TabControl';
import Goods from '@/components/common/goods/Goods';
import scroll from '@/components/common/scroll/Scroll';
//网络请求 netwo/home.js
import { getHomeMultidata, getHomeGoods } from '@/network/home';
//混入 监听goods图片加载情况使用防抖 强制让betterscroll重新计算高度
import { itemListenerMixin, BackTop } from '@/common/min';
export default {
	components: {
		NavBar,
		Banner,
		Recommend,
		FeatuerView,
		tabcontrol,
		Goods,
		scroll,
	},
	mixins: [itemListenerMixin, BackTop],
	data() {
		return {
			banner: {},
			recommend: {},
			goods: {
				pop: {
					page: 0,
					list: [],
				},
				new: {
					page: 0,
					list: [],
				},
				sell: {
					page: 0,
					list: [],
				},
			},
			curType: 'pop',
			mrakY: 0,
			tabControlTop: 0,
			isShowControl: false,
			showBackTop: false,
		};
	},
	created() {
		this.getMultidata();
		this.getGoods('pop');
		this.getGoods('new');
		this.getGoods('sell');
	},
	activated() {
		this.$refs.scroll.refresh();
		this.$refs.scroll.scroll.scrollTo(0, this.mrakY, 0);
		//bug
		this.$refs.scroll.SrcollElement();
	},
	deactivated() {
		this.probeType = 0;
		this.mrakY = this.$refs.scroll.scroll.y;
		this.$bus.$off('goodsImageLoad');
		//bug
		this.$refs.scroll.offScroll();
	},
	mounted() {},
	methods: {
		pullingUp() {
			this.getGoods(this.curType);
			this.$refs.scroll.finishPullUp();
		},
		scroll(position) {
			this.mrakY = this.$refs.scroll.scroll.y;
			this.isShowControl = -position.y >= this.$refs.control2.$el.offsetTop;
			this.backTop(position);
		},
		//点击切换goods
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
			}
			let y = this.$refs.control2.$el.offsetTop;
			this.$refs.scroll.scrollTo(0, -y);
			this.$refs.control2.curIndex = index;
			this.$refs.control1.curIndex = index;
			this.getGoods(this.curType);
		},
		//banner recommend 数据
		async getMultidata() {
			let res = await getHomeMultidata();
			const data = res.data;
			this.banner = data.banner;
			this.recommend = data.recommend;
		},
		//goods 数据
		async getGoods(type) {
			const page = (this.goods[type].page += 1);
			let res = await getHomeGoods(type, page);
			this.goods[type].list.push(...res.data.list);
			this.goods[type].page + 1;
		},
	},
	computed: {
		//goods最终数据
		goodsData() {
			return this.goods[this.curType].list;
		},
	},
};
</script>
<style lang="less" scoped>
@common: #ff5777;
.home {
	position: relative;
	height: 100vh;
	.home-herder {
		background: @common;
		text-align: center;
		font-size: 0.42rem;
		color: #fff;
	}
	.scroll {
		position: absolute;
		left: 0;
		right: 0;
		top: 1.17rem;
		bottom: 1.306rem;
		overflow: hidden;
	}
	.control1 {
		position: relative;
		z-index: 99;
	}
}
</style>

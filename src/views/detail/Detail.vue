<template>
	<div class="detail">
		<Header ref="header" @itemClick="itemClick" />
		<scroll ref="scroll" class="scroll" :probe-type="3" @scroll="scroll" :pull-up-load="true">
			<detail-banner :banner="banner" />
			<detail-goods-info :goods="goods" />
			<detail-select @click.native="goodsColorSize" />
			<detail-shop-info :shopInfo="shopInfo" />
			<DetailGoodsImage :detailInfo="detailInfo" @imageLoad="imageLoad" />
			<DetailsItemParams ref="ItemParams" :item-params="itemParams" />
			<DetailComment ref="comment" :comment="comment" />
			<recommend ref="recommend" :goods="recommend" />
		</scroll>
		<DetailsTabBar @addcart="addcart" />
		<DetailColorSize
			:show="showColorSize"
			:skuInfo="skuInfo"
			@outClick="outClick"
			@addClick="addClick"
			v-if="Object.keys(skuInfo).length > 0"
			v-show="showColorSize"
		/>
	</div>
</template>
<script>
//相关组件
import Header from './pages/DetailHeader';
import DetailBanner from './pages/DetailBanner';
import DetailGoodsInfo from './pages/DetailGoodsInfo';
import DetailSelect from './pages/DetailSelect';
import DetailShopInfo from './pages/DetailShopInfo';
import DetailGoodsImage from './pages/DetailGoodsImage';
import DetailsItemParams from './pages/DetailsItemParams';
import DetailComment from './pages/DetailsComment';
import DetailsTabBar from './pages/DetailsTabBar';
import DetailColorSize from './pages/DetailColorSize';
// 公共组件
import recommend from '@/components/common/goods/Goods';
import scroll from '@/components/common/scroll/Scroll';
//网络请求
import { getdetail, getRecommend } from '@/network/detail';
// 商品和店铺数据集合
import { Goods, ShopInfo, DetailInfo, ItemParams, Rate, SkuInfo } from '@/common/detail';
//混入
import { itemListenerMixin } from '@/common/min';
export default {
	name: 'detail',
	components: {
		//相关组件注册
		Header,
		DetailBanner,
		DetailGoodsInfo,
		DetailSelect,
		DetailShopInfo,
		DetailGoodsImage,
		DetailsItemParams,
		DetailComment,
		DetailsTabBar,
		DetailColorSize,
		//公共
		recommend,
		scroll,
	},
	mixins: [itemListenerMixin],
	data() {
		return {
			banner: [],
			goods: {},
			skuInfo: {},
			shopInfo: {},
			detailInfo: {},
			itemParams: {},
			recommend: [],
			comment: {},
			mark: [],
			currentIndex: -1,
			showColorSize: false,
		};
	},
	created() {
		this.getDetailData();
		this.getRecommendData();
	},
	mounted() {
		this.$refs.scroll.SrcollElement();
	},

	methods: {
		addcart() {
			this.showColorSize = !this.showColorSize;
		},
		addClick(res) {
			this.showColorSize = !this.showColorSize;
			this.$toast.show(res, 2000);
		},
		outClick() {
			this.showColorSize = !this.showColorSize;
		},
		goodsColorSize() {
			this.showColorSize = !this.showColorSize;
		},
		itemClick(index) {
			this.$refs.scroll.scrollTo(0, -this.mark[index], 500);
		},
		//监听滚动
		scroll(position) {
			let length = this.mark.length;
			for (let i = 0; i < length; i++) {
				if (
					this.currentIndex != i &&
					((i < length - 1 && -position.y >= this.mark[i] && -position.y < this.mark[i + 1]) ||
						(i == length - 1 && -position.y >= this.mark[length - 1]))
				) {
					this.currentIndex = i;
				}
			}
			this.$refs.header.initIndex = this.currentIndex;
		},
		//坐标位置
		getMark() {
			this.mark.push(0);
			this.mark.push(this.$refs.ItemParams.$el.offsetTop);
			this.mark.push(this.$refs.comment.$el.offsetTop);
			this.mark.push(this.$refs.recommend.$el.offsetTop);
			this.mark.push(this.mark[this.mark.length - 1] + 10000);
		},
		//重新让betterscroll计算高度
		imageLoad() {
			this.$refs.scroll.refresh();
			//坐标位置
			let startMark = this.debounce(this.getMark, 300);
			startMark();
		},
		//获取id相关详情数据
		async getDetailData() {
			const iid = this.$route.params.id;
			let res = await getdetail(iid);
			let data = res.result;
			this.banner = data.itemInfo.topImages;
			this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo);
			this.shopInfo = new ShopInfo(data.shopInfo);
			this.detailInfo = new DetailInfo(data.detailInfo);
			this.itemParams = new ItemParams(data.itemParams);
			this.comment = new Rate(data.rate);
			this.skuInfo = new SkuInfo(data.skuInfo);
		},
		//获取推荐
		async getRecommendData() {
			let res = await getRecommend();
			this.recommend = res.data.list;
		},
	},
};
</script>
<style lang="less" scoped>
.detail {
	position: relative;
	z-index: 999;
	background: #fff;
	height: 100vh;
	.scroll {
		position: absolute;
		left: 0;
		right: 0;
		top: 1.173rem;
		bottom: 1.3066rem;
		overflow: hidden;
	}
}
</style>

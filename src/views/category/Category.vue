<template>
	<div class="cate">
		<NavBar class="nav-bar">
			<div slot="center">
				商品分类
			</div>
		</NavBar>
		<Menu :menu="menu" v-if="menu.length != 0" @itemClick="itemClick" />
		<CateMain :list="list" :goods="goods" />
	</div>
</template>
<script>
//相关组件
import Menu from './pages/Menu';
import CateMain from './pages/CateMain';

//公共组件
import NavBar from '@/components/common/navbar/NavBar';
//网络请求
import { getCategory, getSubcategory, subCategoryDetail } from '@/network/category';

export default {
	components: {
		NavBar,
		Menu,
		CateMain,
	},
	data() {
		return {
			menu: [],
			list: [],
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
			curIndex: 0,
		};
	},
	created() {
		this.getCategoryData();
	},
	methods: {
		itemClick(index) {
			this.curIndex = index;
			this.getSubcategoryData(index);
		},
		async getCategoryData() {
			let res = await getCategory();
			this.menu = res.data.category.list;
			this.getSubcategoryData(this.curIndex);
		},
		async getSubcategoryData(index) {
			let maitKey = this.menu[index].maitKey;
			let res = await getSubcategory(maitKey);
			this.list = res.data.list;
			this.subCategoryDetailData('pop');
			this.subCategoryDetailData('new');
			this.subCategoryDetailData('sell');
		},
		async subCategoryDetailData(type) {
			let miniWallkey = this.menu[this.curIndex].miniWallkey;
			let res = await subCategoryDetail(miniWallkey, type);
			this.goods[type].list.push(res);
		},
	},
};
</script>
<style lang="less" scoped>
.cate {
	position: relative;
	height: 100vh;
}
.nav-bar {
	background: #ff5777;
	color: #fff;
	font-size: 0.42rem;
}
.main-scroll {
	position: absolute;
	width: ceil(100%-27px);
	top: 1.173rem;
	right: 0;
	bottom: 1.306rem;
	overflow: hidden;
}
</style>

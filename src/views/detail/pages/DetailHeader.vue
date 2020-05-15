<template>
	<div class="details-header">
		<nav-bar>
			<div slot="left" class="back" @click="back">
				<img src="@/assets/img/common/back.svg" alt="" />
			</div>
			<div slot="center" class="title">
				<div
					v-for="(item, index) in title"
					:key="index"
					@click="itemClick(index)"
					:class="{ active: initIndex == index }"
				>
					{{ item }}
				</div>
			</div>
		</nav-bar>
	</div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar';
export default {
	props: {
		currentIndex: {
			type: Number,
			default() {
				return 0;
			},
		},
	},
	data() {
		return {
			title: ['商品', '参数', '评论', '推荐'],
			initIndex: 0,
		};
	},
	components: {
		NavBar,
	},

	computed: {},
	methods: {
		//返回上页
		back() {
			this.$router.back();
		},
		//点击导航文字选中
		itemClick(index) {
			this.initIndex = index;
			this.$emit('itemClick', index);
		},
		//
	},
};
</script>
<style lang="less" scoped>
.details-header {
	background: #fff;
	.back {
		img {
			display: block;
			width: 0.5rem;
		}
	}
	.title {
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 0.42rem;
		div {
			width: 1.7rem;
		}
	}
	.active {
		color: #ff5777;
	}
}
</style>

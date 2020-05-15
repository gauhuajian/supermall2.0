<template>
	<div>
		<div class="list">
			<div>颜色</div>
			<span
				:class="{ active: curIndex == index }"
				v-for="(item, index) in color"
				:key="index"
				@click="colorClick(item.styleId, index)"
			>
				{{ item.name }}
			</span>
		</div>
		<div class="list">
			<div>尺寸</div>
			<span
				:class="{ active: curIndexs == index }"
				v-for="(item, index) in size"
				:key="index"
				@click="sizeClick(item.sizeId, index)"
			>
				{{ item.name }}
			</span>
		</div>

		<div class="list">
			<div>数量</div>
			<div>
				<span @click="countClick">-</span>
				<span>{{ count }}</span>
				<span @click="countClick">+</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['color', 'size', 'count'],
	data() {
		return {
			curIndex: -1,
			curIndexs: -1,
		};
	},
	methods: {
		colorClick(id, index) {
			this.curIndex = index;
			this.$emit('colorClick', id);
		},
		sizeClick(id, index) {
			this.curIndexs = index;
			this.$emit('sizeClick', id);
		},
		countClick(e) {
			this.$emit('countClick', e);
		},
	},
};
</script>
<style lang="less" scoped>
.list {
	padding: 0.5rem 0.2rem 0 0.2rem;
	font-size: 0.37rem;
	span {
		display: inline-block;
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		padding: 0.1rem;
		border: 0.02rem solid #ddd;
	}
}
.active {
	color: #f25;
	border: #f25;
}
</style>

<template>
	<div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
		<tab-bar />
	</div>
</template>
<script>
import TabBar from './components/common/tabbar/TabBar';
export default {
	name: 'app',
	components: {
		TabBar,
	},
};
</script>
<style lang="less"></style>

<template>
	<div class="nav">
		<div class="nav-left">
			<slot name="left"></slot>
		</div>
		<div class="nav-center">
			<slot name="center"></slot>
		</div>
		<div class="nav-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.nav {
	display: flex;
	height: 1.17rem;
	line-height: 1.17rem;
	.nav-left {
		width: 1.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-center {
		flex: 1;
		text-align: center;
	}
	.nav-right {
		width: 1.6rem;
	}
}
</style>

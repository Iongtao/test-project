<template>
	<view class="content">
		<view class="target">
		</view>
		<view class="list"></view>
		<view class="self"></view>
		<view class="list"></view>
	</view>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'
export default {
	setup() {
		onMounted(() => {
			const instance = getCurrentInstance()
			const obasver = uni.createIntersectionObserver(instance.ctx)
			obasver.relativeTo('.target')
			obasver.observe('.self', e => console.log(e))
		})
	},
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.target {
	width: 100%;
	height: 60upx;
	background-color: #007AFF;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 4;
}

.list {
	height: 2000upx;
}

.self {
	width: 100%;
	height: 30upx;
	background-color: #4CD964;
}

</style>

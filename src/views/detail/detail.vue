<template>
	<div class="detail top-page">
		<van-nav-bar 
			title="房屋详情"
			left-text="旅途"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script setup>
	import { useRoute, useRouter } from 'vue-router'
	import { getDetailInfos } from '@/services'
import { ref } from 'vue';
	
	const route = useRoute()
	const router = useRouter()
	const houseId = route.params.id
	
	// 发送网络请求获取数据
	const detailInfos = ref({})
	getDetailInfos(houseId).then(res => {
		detailInfos.value = res.data
	})
	
	
	// route.params.id
	
	// 发送网络请求发送数据
	getDetailInfos(route.params.id).then(res => {
		
	})
	
	
	// 监听返回按钮的点击
	const onClickLeft = () => {
		router.back()
	}
	
	
</script>

<style lang="less" scoped>
</style>
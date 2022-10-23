<template>
	<div class="city top-page">
		<div class="top">
			<!-- 1.搜索框 -->
			<van-search 
				v-model="searchValue"
				placeholder="城市/区域/位置"
				shape="round"
				show-action
				@cancel="cancelClick"
				/>
				
			<!-- 2.tab切换 -->
			<!-- tabACtive默认绑定索引 -->
			<van-tabs v-model:active="tabActive" color="#ff9854">
				<template v-for="(value, key, index) in allCities" :key="key">
					<van-tab :title="value.title" :name="key">
						
					</van-tab>
				</template>
			</van-tabs>
		</div>
		<div class="content">
			<!-- <template v-for="item in allCities[tabActive]?.cities"><p>{{item}}</p></template> -->
<!-- 			<template v-for="(group, index) in currentGroup?.cities" :key="index">
				<div class="group-item">
					<div class="title"><h2>标题：{{ group.group }}</h2></div>
					<div class="list">
						<template v-for="(city, indey) in group.cities" :key="indey">
							<div class="city">{{ city.cityName }}</div>
						</template>
					</div>
				</div>
			</template> -->
			<template v-for="(value, key, index) in allCities">
				<city-group v-show="tabActive === key" :group-data="value" />
			</template>
			<!-- <city-group :group-data="currentGroup" /> -->
		</div>
			
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue'
	import { useRouter } from 'vue-router';
	import useCityStore from '@/stores/modules/city';
	import { storeToRefs } from 'pinia';
	import cityGroup from './cpns/city-group.vue'
	
	const router = useRouter()
	
	// 搜索框功能
	const searchValue = ref("")
	const cancelClick = () => {
		router.back()
	}
	
	// tab栏的切换
	const tabActive = ref()
	
	/*
		网络请求太多
		如果页面有很多需要子组件，则都需要传递过去
	*/
	// 网络请求，请求城市数据
	// const allCity = ref({})
	// getCityAll().then(res => {
	// 	allCity.value = res.data
	// })
	
	// 从store中获取数据
	const cityStore = useCityStore()
	cityStore.fetchAllCitiesData()
	const { allCities } = storeToRefs(cityStore)
	
	// 获取选中标签后的数据
	// const currentGroup = allCities[Object.keys(allCities)[tabActive.value]]
	
	// 目的获取选中标签后的数据
	// 1. 获取正确的key  将tabs中绑定的tabAction正确绑定
	// 2. 根据key从allCities获取数据，默认直接获得的数据不是响应式，所以必须包裹computed
	const currentGroup = computed(() => allCities.value[tabActive.value])
	
	console.log("currentGroup", currentGroup)
	
</script>

<style lang="less" scoped>
	.city {
		
		.top {
			position: relative;
			z-index: 9;
		}
		
		.content {
			height: calc(100vh - 98px);
			overflow-x: hidden; //TODO ?
		}
	}
	
</style>
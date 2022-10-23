<template>
	<div class="city-group">
		<van-index-bar :index-list="indexList">
			<van-index-anchor index="热门" />
			<div class="list">
				<template v-for="(city, index) in groupData.hotCities">
					<div class="city">{{ city.cityName }}</div>
				</template>
			</div>
			
			<template v-for="(group, index) in groupData.cities" :key="index">
				<van-index-anchor :index="group.group" />
				<template v-for="(city, indey) in group.cities" :key="indey">
					<van-cell :title="city.cityName" />
				</template>
			</template>
		</van-index-bar>

		
		
		
<!-- 		<template v-for="(group, index) in groupData.cities" :key="index">
			<div class="group-item">
				<div class="title"><h2>标题：{{ group.group }}</h2></div>
				<div class="list">
					<template v-for="(city, indey) in group.cities" :key="indey">
						<div class="city">{{ city.cityName }}</div>
					</template>
				</div>
			</div>
		</template> -->
	</div>
</template>

<script setup>
	
	import { computed } from 'vue'
	
	
	const props = defineProps({
		groupData: {
			type: Object,
			default: () => ({})
		}
	})
	
	//cities group
	const indexList = computed(() => {
		const list = props.groupData.cities.map(item => item.group)
		list.unshift("#")
		return list
	})
	
	
</script>

<style lang="less" scoped>
	
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 10px;
		padding-right: 25px;
		
		.city {
			width: 70px;
			height: 28px;
			border-radius: 14px;
			font-size: 12px;
			color: #000;
			text-align: center;
			line-height: 28px;
			background-color: #fff4ec;
			margin: 10px 0;
		}
	}
</style>
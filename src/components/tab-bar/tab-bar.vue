<template>
	<div class="tab-bar">
		<van-tabbar v-model="currentIndex" active-color="#ff9854">
			<template v-for="(item, index) in tabbarData">
				<van-tabbar-item :to="item.path">
					<span>{{ item.text }}</span>
					<template #icon>
						<img :src="getAssetURL(item.image, item.imageActive, currentIndex === index)" />
					</template>
				</van-tabbar-item>
			</template>
		</van-tabbar>
	</div>

		<!-- 		<template v-for="(item, index) in tabbarData">
			<div class="tab-bar-item" 
				:class="{ active: currentIndex === index}"
				@click="itemClick(index, item)"
			> -->
		<!-- <img :src="require(item.image)" /> -->
		<!-- 1. v-if 来判断是否active -->
		<!-- 2. 使用函数 -->
		<!-- 				<img :src="getAssetURL(item.image, item.imageActive, currentIndex === index)" />
				<span class="text">{{ item.text }}</span>
			</div>
		</template> -->
	
</template>

<script setup>
	import tabbarData from "@/assets/data/tabbar.js"
	import { getAssetURL } from '@/utils/load_assets_img.js'
	import { ref } from "vue"
	import { useRouter } from "vue-router"

	const currentIndex = ref(0)
</script>

<style lang="less" scoped>
	// 修改第三方UI组件库的样式
	// 全局变量 没有scoped
	// 有scoped :depp(.class) 穿透到子组件里面让他生效
	
	.tab-bar {
		img {
			height: 28px;
		}
	}
</style>

import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from '@/services'
import { defineStore } from 'pinia'

const useHomeStore = defineStore("home", {
	state: () => ({
		hotSuggests: [],
		categories: [],
		
		currentPage: 1,
		houselist: []
	}),
	actions: {
		async fetchHotSuggestData() {
			const res = await getHomeHotSuggests()
			this.hotSuggests = res.data
		},
		async fetchCategoriesData() {
			const res = await getHomeCategories()
			this.categories = res.data
		},
		async fetchHouselistData() {
			const res = await getHomeHouselist(this.currentPage)
			// 获取到的数据 等于 this.houselist = res.data
			// ...解构 TODO 细节
			this.houselist.push(...res.data)
			this.currentPage ++
		}
	}
})

export default useHomeStore
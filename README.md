# 一休旅途 m_trip

---
1. 配置样式重置 normalize.css reset.css
2. 配置路由导航
3. pinia 状态管理
4. tab-bar 路由切换
5. 使用UI库 Vant   indexBar 索引栏



---
修改第三方UI组件库的样式
1. 用插槽，插入自己的元素，那么在自己的作用域中直接修改这个元素
2. 全局定义一个变量，覆盖它默认变量的值，缺点：全局修改
3. 局部 定义一个变量，覆盖它默认变量的值，有点：局部修改
4. 直接找到对应的子组件的选择器，进行修改，:deep(子组件中的元素的选择器)进行修改 直接修改css

---
city页面，就需要将tabbar隐藏
1. useRoute.meta   useRoute获取当前活跃路由  v-if 隐藏
2. 设置city的`z-index;height: 100vh;bg` 可以抽出来到common.css 

---
city.vue <-> cityStore(state, actions) -> city.js

---

city 国内，海外 切换数据的时候，渲染速度慢

直接创建两个city-group，然后通过v-show，v-if 和v-show区别？TODO
虚拟列表？ TODO



---
---


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

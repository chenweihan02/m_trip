export const getAssetURL = (image, imageActive, flag) => {
	// 参数一：相对路径
	// 参数二：当前路径的url
	let showImage = image;
	if (flag) showImage = imageActive
	return new URL(`../assets/img/${showImage}`, import.meta.url).href
}

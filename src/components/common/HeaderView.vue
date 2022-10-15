<template>
	<div>
		<div class="public-head">
			<div class="public-head-nav">
				<div class="public-head-left">
					<h1 class="public-head-logo">
						<a href="javascript:void(0);" @click="toPage('/')">
							<img src="@/assets/image/logo.png" alt="">
						</a>
					</h1>
					<ul class="public-head-list">
						<li><a href="javascript:void(0);" @click="toPage('/')">主页</a></li>
						<li class="public-head-hover">
							<a href="javascript:void(0);"  @click="toPage('/web/list')">我要投资</a>
							<!--二级导航-->
							<div class="two-title">
								<a href="javascript:void(0);">优选类产品</a>
								<a href="javascript:void(0);">散标类产品</a>
							</div>
						</li>
						<li><a href="user_center.html" >借款人信息</a></li>
						<li><a href="javascript:void(0);">信息披露</a></li>
						<li><a href="javascript:void(0);">安全计划</a></li>
					</ul>
				</div>
				<div class="public-head-right">
					<a href="login.html">登录</a>
					<a href="register.html">注册</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
// 例如：import [组件名称] from [组件路径];
export default {
// import 引入的组件需要注入到对象中才能使用
	name: "HeaderView",
	components: {
	},

	props: {},
	data() {
		// 这里存放数据
		return {}
	},
	// 方法集合
	methods: {
		toPage(url, param) {
			this.$router.push({
				path: url,
				query: param,
			})
		}
	},
	// 计算属性 类似于 data 概念
	computed: {},
	// 监控 data 中的数据变化
	watch: {},
	// 生命周期 - 创建完成（可以访问当前 this 实例）
	created() {
	},
	// 生命周期 - 挂载完成（可以访问 DOM 元素）
	mounted() {
	},
	// 生命周期 - 创建之前
	beforeCreate() {
	},
	// 生命周期 - 挂载之前
	beforeMount() {
	},
	// 生命周期 - 更新之前
	beforeUpdate() {
	},
	// 生命周期 - 更新之后
	updated() {
	},
	// 生命周期 - 销毁之前
	beforeUnmount() {
	},
	// 生命周期 - 销毁完成
	unmounted() {
	},
	// 如果页面有 keep-alive 缓存功能，这个函数会触发
	activated() {
	}
}
</script>

<style scoped>

</style>


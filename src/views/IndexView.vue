<template>
	<div id="app">
		<HeaderView></HeaderView>
		<!--banner-->
		<div class="banner-content">
			<div class="swiper-container banner-lb">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="javascript:">
							<img alt="" src="@/assets/image/banner.jpg">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img alt="" src="@/assets/image/banner.jpg">
						</a>
					</div>
				</div>
			</div>
			<div class="banner-abs">
				<div class="banner-abs-box">
					<div class="banner-abs-title">动力金融网历史年化收益率</div>
					<b>{{ indexBannerBo.historyAvgRate }}<i>%</i></b>
					<p>平台用户数</p>
					<span>{{ indexBannerBo.userCounts }}<i>位</i></span>
					<p class="banner-abs-border">累计成交金额</p>
					<span>{{ indexBannerBo.allBidMoney }}<i>元</i></span>
				</div>
			</div>
		</div>
		<div class="banner-list">
			<ul>
				<li>
					<img alt="" src="@/assets/image/banner-tag1.png">
					<p>
						<b>实力雄厚</b>
						<span>亿级注册资本 ,千万技术投入</span>
					</p>
				</li>
				<li>
					<img alt="" src="@/assets/image/banner-tag2.png">
					<p>
						<b>风控严苛</b>
						<span>30道风控工序，60项信用审核</span>
					</p>
				</li>
				<li>
					<img alt="" src="@/assets/image/banner-tag3.png">
					<p>
						<b>投资省心</b>
						<span>资金安全风控，银行安全托管</span>
					</p>
				</li>
			</ul>
		</div>
		
		<!--产品-->
		<div class="content">
			<h2 class="public-title"><span>新手宝</span></h2>
			<div class="new-user">
				<div class="new-user-sm">
					<span>{{ indexProductListBo.noviceList[0].bidMinLimit }}.0元起投</span>
					<span>投资最高限额{{ indexProductListBo.noviceList[0].bidMaxLimit }}.0元</span>
					<span>当日即系</span>
				</div>
				<div class="new-user-number">
					<ul>
						<li>
							<p><b>{{ indexProductListBo.noviceList[0].rate }}</b>%</p>
							<span>历史年化收益率</span>
						</li>
						<li>
							<p><b>{{ indexProductListBo.noviceList[0].cycle }}</b>天</p>
							<span>投资周期</span>
						</li>
						<li>
							<p><b>{{ indexProductListBo.noviceList[0].leftProductMoney }}</b>元</p>
							<span v-if="indexProductListBo.noviceList[0].leftProductMoney>0">剩余可投资金额</span>
							<span v-else>现已满标</span>
						</li>
					</ul>
					<a class="new-user-btn" href="javascript:void(0)" @click="toPage('/web/details',{productId:indexProductListBo.noviceList[0].id})">立即投资</a>
				</div>
				<span class="new-tag">新用户专享</span>
			</div>
			
			<h2 class="public-title"><span>优选产品</span> <a class="public-title-more" href="javascript:void(0)" @click="toPage('/web/list',{productType:indexProductListBo.preferredList[0].productType})">查看更多产品>></a></h2>
			<ul class="preferred-select clearfix">
				<li v-for="(preferredProduct,index) in indexProductListBo.preferredList" :key="preferredProduct.id">
					<h3 class="preferred-select-title">
						<span>{{ preferredProduct.productName }}</span>
						<img v-if="index===0" :alt="preferredProduct.productName" src='@/assets/image/1-bg1.jpg'>
						<img v-if="index===1" :alt="preferredProduct.productName" src='@/assets/image/1-bg2.jpg'>
						<img v-if="index===2" :alt="preferredProduct.productName" src='@/assets/image/1-bg3.jpg'>
					</h3>
					<div class="preferred-select-number">
						<p><b>{{ preferredProduct.rate }}</b>%</p>
						<span>历史年化收益率</span>
					</div>
					<div class="preferred-select-date">
						<div>
							<span>投资周期</span>
							<p><b>{{ preferredProduct.cycle }}</b>个月</p>
						</div>
						<div>
							<span>余利可投资金额</span>
							<p><b>{{ preferredProduct.leftProductMoney }}.0</b>元</p>
						</div>
					</div>
					<p class="preferred-select-txt">
						{{ preferredProduct.productDesc }}
					</p>
					<a class="preferred-select-btn" href="javascript:void(0)" @click="toPage('/web/details',{productId:preferredProduct.id})">立即投资</a>
				</li>
			</ul>
			
			<h2 class="public-title"><span>散标产品</span> <a class="public-title-more" href="javascript:void(0)" @click="toPage('/web/list',{productType:indexProductListBo.scattererList[0].productType})">查看更多产品>></a></h2>
			<ul class="preferred-select clearfix">
				<li v-for="scattererProduct in indexProductListBo.scattererList" :key="scattererProduct.id">
					<h3 class="preferred-select-title1">个人信用消费借款
						<span>散标</span>
					</h3>
					<div class="preferred-select-number">
						<p><b>{{ scattererProduct.rate }}</b>%</p>
						<span>历史年化收益率</span>
					</div>
					<div class="preferred-select-date">
						<div>
							<span>投资周期</span>
							<p><b>{{ scattererProduct.cycle }}</b>个月</p>
						</div>
						<div>
							<span>余利可投资金额</span>
							<p><b>{{ scattererProduct.leftProductMoney }}.0</b>元</p>
						</div>
					</div>
					<p class="preferred-select-txt">
						{{ scattererProduct.productDesc }},
						优选计划项目，投资回报周期1个月，起点低，适合短期资金周转、对流动性要求高的投资人。
					</p>
					<a class="preferred-select-btn" href="javascript:void(0)" @click="toPage('/web/details',{productId:scattererProduct.id})">立即投资</a>
				</li>
			</ul>
		</div>
		
		<!--说明-->
		<div class="information-box">
			<ul>
				<li>
					<img alt="" src="@/assets/image/2-icon1.png">
					<p>优质借款</p>
					<span>严苛风控，多重审核</span>
				</li>
				<li>
					<img alt="" src="@/assets/image/2-icon2.png">
					<p>次日计息</p>
					<span>闪电成交，谁比我快</span>
				</li>
				<li>
					<img alt="" src="@/assets/image/2-icon3.png">
					<p>全年无休</p>
					<span>百万用户，一路同行</span>
				</li>
				<li>
					<img alt="" src="@/assets/image/2-icon4.png">
					<p>知心托付</p>
					<span>百万用户，一路同行</span>
				</li>
				<li>
					<img alt="" src="@/assets/image/2-icon5.png">
					<p>技术保障</p>
					<span>千万投入，专注研发</span>
				</li>
			</ul>
		</div>
		<!--公共底部-->
		<footer-view></footer-view>
	</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
// 例如：import [组件名称] from [组件路径];
import HeaderView from "@/components/common/HeaderView";
import FooterView from "@/components/common/FooterView";
import {httpGet} from "@/router/HttpRequestMethod";

export default {
// import 引入的组件需要注入到对象中才能使用
	components: {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		HeaderView: HeaderView,
		// eslint-disable-next-line vue/no-unused-components
		FooterView: FooterView
	},
	props: {},
	data() {
		return {
			//首页banner图数据
			indexBannerBo: {
				allBidMoney: 0,
				historyAvgRate: 0,
				userCounts: 0
			},
			//首页三种产品数据
			indexProductListBo: {
				noviceList: [{
					id: 0,
					productName: undefined,
					rate: 0,
					cycle: 0,
					releaseTime: undefined,
					productType: 0,
					productNo: 0,
					productMoney: 0,
					leftProductMoney: 0,
					bidMinLimit: 0,
					bidMaxLimit: 0,
					productStatus: 0,
					productFullTime: undefined,
					productDesc: undefined
				}],
				preferredList: [{
					id: 0,
					productName: undefined,
					rate: 0,
					cycle: 0,
					releaseTime: undefined,
					productType: 0,
					productNo: 0,
					productMoney: 0,
					leftProductMoney: 0,
					bidMinLimit: 0,
					bidMaxLimit: 0,
					productStatus: 0,
					productFullTime: undefined,
					productDesc: undefined
				}],
				scattererList: [{
					id: 0,
					productName: undefined,
					rate: 0,
					cycle: 0,
					releaseTime: undefined,
					productType: 0,
					productNo: 0,
					productMoney: 0,
					leftProductMoney: 0,
					bidMinLimit: 0,
					bidMaxLimit: 0,
					productStatus: 0,
					productFullTime: undefined,
					productDesc: undefined
				}]
				
			}
		};
	},
	// 方法集合
	methods: {
		toPage(url, param) {
			this.$router.push({
				path: url,
				query: param,
			})
		},
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
		// 原生axios 发送get请求
		/*axios
			.get('/index/banner')
			.then(resp=>{
				this.indexBannerBo = resp.data.data.indexBannerBo;
			})
			.catch(error=>{
				console.log(error);
			})*/
		// 封装axios的 get请求
		httpGet('/index/banner').then(resp => {
			if (resp.data.code === "00000") {
				this.indexBannerBo = resp.data.data.indexBannerBo;
			}
		})
		httpGet('/index/product').then(resp => {
			if (resp.data.code === "00000") {
				this.indexProductListBo = resp.data.data.indexProductListBo;
			}
		})
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


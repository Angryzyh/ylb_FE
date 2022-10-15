<template>
	<div>
		<!--头部-->
		<HeaderView></HeaderView>
		<div class="content clearfix">
			<!--排行榜-->
			<ul class="rank-list">
				<li v-for="rank in listRankBos" :key="rank.rankNum">
					<img v-if="rank.rankNum===1" src="@/assets/image/list-rank1.png" alt="">
					<img v-if="rank.rankNum===2" src="@/assets/image/list-rank2.png" alt="">
					<img v-if="rank.rankNum===3" src="@/assets/image/list-rank3.png" alt="">
					<p class="rank-list-phone">{{ rank.phone }}</p>
					<span>{{ rank.bidMoney }}.0元</span>
				</li>
			</ul>
			<!--产品列表-->
			<ul class="preferred-select clearfix">
				<li v-for="product in listProductPage.records" :key="product.id">
					<h3 class="preferred-select-title">
						<span>{{ product.productName }}</span>
						<img v-if="product.cycle<3" src="@/assets/image/1-bg1.jpg" alt="">
						<img v-if="product.cycle>=3 && product.cycle<6" src="@/assets/image/1-bg2.jpg" alt="">
						<img v-if="product.cycle>=6 && product.cycle<12" src="@/assets/image/1-bg3.jpg" alt="">
						<img v-if="product.cycle>=12" src="@/assets/image/1-bg4.jpg" alt="">
					</h3>
					<div class="preferred-select-number">
						<p><b>{{ product.rate }}</b>%</p>
						<span>历史年化收益率</span>
					</div>
					<div class="preferred-select-date">
						<div>
							<span>投资周期</span>
							<p><b>{{ product.cycle }}</b>个月</p>
						</div>
						<div>
							<span>余利可投资金额</span>
							<p><b>{{ product.leftProductMoney }}.0</b>元</p>
						</div>
					</div>
					<p class="preferred-select-txt">
						{{ product.productDesc }},优选计划项目，投资回报周期1个月，起点低，适合短期资金周转、对流动性要求高的投资人。
					</p>
					<a href="javascript:void(0)" class="preferred-select-btn" @click="toPage()">立即投资</a>
				</li>
			</ul>
			
			<!--分页-->
			<div class="page_box">
				<ul class="pagination">
					<li><a href="javascript:void(0)" @click="firstPage()">首页</a></li>
					<li><a href="javascript:void(0)" @click="prePage()">上一页</a></li>
					<li class="active"><span>{{ listProductPage.current }}</span></li>
					<li><a href="javascript:void(0)" @click="nextPage()">下一页</a></li>
					<li><a href="javascript:void(0)" @click="lastPage()">尾页</a></li>
					<li class="totalPages"><span>{{ listProductPage.pages }}</span></li>
				</ul>
			</div>
			<!--页尾-->
			<FooterView></FooterView>
		</div>
	</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
// 例如：import [组件名称] from [组件路径];
import HeaderView from "@/components/common/HeaderView";
import FooterView from "@/components/common/FooterView";
import {httpGet} from "@/router/HttpRequestMethod";
let productType = null;
export default {
// import 引入的组件需要注入到对象中才能使用
	components: {
		HeaderView: HeaderView,
		FooterView: FooterView
	},
	props: {},
	data() {
		// 这里存放数据
		return {
			listRankBos:[{
				rankNum: 0,
				phone: undefined,
				bidMoney: 0
			}],
			listProductPage: {
				records: [{
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
				total: 0,
				size: 9,
				current: 1,
				pages: 0
			}
		}
	},
	// 方法集合
	methods: {
		toPage(url, param) {
			this.$router.push({
				path: url,
				query: param,
			})
		},
		refreshPage(productType,currentPage,pageSize) {
			httpGet('/list/product',{
				currentPage: currentPage,
				pageSize: pageSize,
				productType: productType
			}).then(resp=>{
				if (resp.data.code === "00000") {
					this.listProductPage = resp.data.data.listProductPage;
				}
			});
		},
		firstPage() {
			if (this.listProductPage.current === 1) {
				this.$message.warning('当前页已经是第一页')
			}else {
				this.refreshPage(productType,1,this.listProductPage.size);
			}
		},
		prePage() {
			if (this.listProductPage.current !== 1) {
				this.refreshPage(productType,this.listProductPage.current-1,this.listProductPage.size);
			}else {
				this.$message.warning('当前页已经是第一页,没有上一页了!');
			}
		},
		nextPage() {
			if (this.listProductPage.current === this.listProductPage.pages) {
				this.$message.warning('当前页已经是最后一页,没有下一页了');
			}else {
				this.refreshPage(productType, this.listProductPage.current + 1, this.listProductPage.size);
			}
		},
		lastPage() {
			if (this.listProductPage.current === this.listProductPage.pages) {
				this.$message.warning('当前页已经是最后一页');
			}else{
				this.refreshPage(productType, this.listProductPage.pages, this.listProductPage.size);
			}
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
		httpGet('/list/rank',).then(resp=>{
			if (resp.data.code === "00000") {
				this.listRankBos = resp.data.data.listRankBos;
			}
		});
		productType = this.$route.query.productType;
		this.refreshPage(productType,this.listProductPage.current,this.listProductPage.size)
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
<template>
	<div class="swipe-c">
		<slot></slot>
		<div class="dots">
			<i
				v-for="i in pageCount" 
				:key="i"
				class="dot"
				:class="showingPage == i ? 'active': ''"
			></i>
		</div>
	</div>
</template>

<style lang="less">
	.swipe-c {
		height: 5em;
		overflow: hidden;
		position: relative;
		box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px 0px;
		border-radius: 0.4em;
		.dots {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			right: 10%;
			bottom: 10%;
			// height: 4px;
			// width: 50px;

			.dot {
				display: block;
				background-color: #d0d0d0;
				height: 4px;
				width: 4px;
				margin-left: 6px;
				border-radius: 50%;
				&.active {
					background-color: #1673ff;
				}
			}
		}
	}
</style>

<script>
	export default {
		name: 'SwipeC',
		data() {
			return {
				pages: [],
				pageCount: 0,
				showingPage: 0,
				intervalId: null,
			}
		},
		methods: {
			run() {
				// 总页数
				let c = this.pageCount;
				// 当前展示的页面的index
				let p = this.showingPage;
				// 上一页的index, 如果当前是第0页那上一页就是最后一页, 即 (总页数 - 1)
				let lastPage = (p - 1 >= 0 ? p - 1 : c - 1);
				// 隐藏上一页
				this.pages[lastPage].componentInstance.hide();
				// 显示这一页
				this.pages[p].componentInstance.show();
				// 翻页
				p++;
				// 如果 翻完后的页 超过了总页数, 即 翻完后的页 >= 总页数, 则归零
				if (p >= c) p = 0;
				this.showingPage = p;
			}
		},
		mounted() {
			const slots = this.$slots.default;
			const slotsCount = slots.length;
			slots.forEach(d => {
				if (d?.componentInstance?.$options?.name != 'SwipeItemC') {
					console.error('[Error in SwipeC] <swipe-c>组件下只能包含<swipe-item-c>组件!', d);
					throw new Error();
				}
			});
			this.pages = slots;
			this.pageCount = slotsCount;
			this.run();
			this.intervalId = setInterval(this.run, 3000);
		},
		beforeDestroy() {
			clearInterval(this.intervalId);
		}
	}
</script>
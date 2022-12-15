<template>
	<transition>
		<div class="swipe-item" v-show="isShow">
			<slot></slot>
		</div>
	</transition>
</template>

<style lang="less" scoped>
	.swipe-item {
		height: 100%;
		width: 100%;
		position: absolute;
	}
	.v-enter-active {
		animation: swipe-enter 0.3s linear;
	}
	.v-leave-active {
		animation: swipe-leave 0.3s linear;
	}
	@keyframes swipe-enter {
		from {
			left: 100%;
			// transform: translateX(100%);
		}
		to {
			left: 0;
			// transform: translateX(0);
		}
	}
	@keyframes swipe-leave {
		from {
			left: 0;
			// transform: translateX(0);
		}
		to {
			left: -100%;
			// transform: translateX(-100%);
		}
	}
</style>

<script>
	export default {
		name: 'SwipeItemC',
		data() {
			return {
				isShow: 0,
			}
		},
		methods: {
			show() {
				this.isShow = 1;
			},
			hide() {
				this.isShow = 0;
			},
		}
	}
</script>
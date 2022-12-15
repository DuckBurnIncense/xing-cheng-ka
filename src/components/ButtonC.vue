<template>
	<button class="button" :disabled="disabled" @click="$emit('click', $event)"><slot></slot></button>
</template>

<style lang="less" scoped>
	.button {
		color: #fff;
		background-color: #007aff;
		box-shadow: 0 2px 16px 0 rgb(39 122 255 / 50%);
		width: 100%;
		height: 2.7em;
		font-size: 1.8em;
		letter-spacing: 0.02em;
		border-radius: 0.72em;
		display: inline-block;
		padding: 0 12px;
		appearance: none;
		border: 0;
		box-sizing: border-box;
		outline: 0;
		overflow: hidden;
		text-align: center;
		&:disabled {
			opacity: 0.6;
		}
		&:active:not(:disabled) {
			filter: brightness(0.5);
		}
	}
</style>

<script>
	export default {
		name: 'ButtonC',
		props: {
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
		}
	}
</script>
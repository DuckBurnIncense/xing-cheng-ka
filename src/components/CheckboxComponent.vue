<template>
	<label class="checkbox-component">
		<input
			class="checkbox"
			type="checkbox"
			v-bind:checked="value"
			@input="setValue($event.target.checked)"
		/>
		<slot></slot>
	</label>
</template>

<style lang="less" scoped>
	.checkbox-component {
		display: flex;
		flex-direction: row;
		// align-items: center;
		padding: 0.7em 0;
		text-align: left;
		.checkbox {
			appearance: none;
			border: 1px solid #ddd;
			border-radius: 50%;
			background-color: #fff;
			height: 2em;
			width: 2em;
			min-height: 2em;
			min-width: 2em;
			margin: 0.2em 0.36em 0 0;
			padding: 0;
			display: block;
			&:checked {
				border: 1px solid #1673ff;
				background-color: #1673ff;
				position: relative;
				&:after {
					content: "";
					position: absolute;
					top: 0.5em;
					left: 0.5em;
					background: transparent;
					border: 2px solid #fff;
					border-top: none;
					border-right: none;
					height: 0.4em;
					width: 0.7em;
					transform: rotate(-45deg);
				}
			}
		}
	}
</style>

<script>
	export default {
		name: 'CheckboxComponent',
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: Boolean,
				requried: 1
			}
		},
		methods: {
			setValue(value) {
				this.$emit('change', value);
			}
		}
	}
</script>
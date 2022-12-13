<template>
	<div class="input-component">
		<div class="icon"><slot name="icon"></slot></div>
		<div class="input-wrap">
			<input class="input" :value="value" @change="setValue($event.target.value)" :placeholder="placeholder" type="text" />
			<img class="clear-inputs-icon" @click="setValue('')" src="@/assets/clear_inputs.png" />
		</div>
		<div class="addon"><slot name="addon"></slot></div>
	</div>
</template>

<style lang="less" scoped>
	.input-component {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.7em 0;
		text-align: left;

		.icon {
			height: 2.4em;
			width: 2.4em;
		}
		.input-wrap {
			position: relative;
			flex: 1;
			
			.input {
				height: 2.4em;
				border: none;
				outline: 0;
				width: 100%;
			}
			.clear-inputs-icon {
				position: absolute;
				top: calc(50% - 1em);
				right: 0.5em;
				height: 2em;
				display: none;
			}
			&:focus-within {
				.clear-inputs-icon {
					display: inline-block;
				}
			}
		}
		.addon:not(:empty) {
			border-left: 1px solid #e4e4e4;;
		}
	}
</style>

<script>
	export default {
		name: 'InputComponent',
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			placeholder: {
				type: String
			},
			value: {
				type: String,
				requried: 1
			}
		},
		data() {
			return {
			}
		},
		methods: {
			setValue(value) {
				this.$emit('change', value);
			}
		}
	}
</script>
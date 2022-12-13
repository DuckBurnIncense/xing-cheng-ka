<template>
	<div class="login-page">
		<div class="header">
			<img class="title-img" src="@/assets/white_bg_title.png" alt="title" />
		</div>
		<div class="main">
			<input-component v-model="phone" class="input input-phone" placeholder="手机号">
				<template v-slot:icon>
					<img class="icon" src="@/assets/phone_icon.png" alt="icon" />
				</template>
				<template v-slot:addon>
					<button class="get-verify-code" disabled>获取验证码</button>
				</template>
			</input-component>
			<input-component v-model="verifyCode" class="input input-verify-code" placeholder="请输入验证码">
				<template v-slot:icon>
					<img class="icon" src="@/assets/verify_code_icon.png" alt="icon" />
				</template>
			</input-component>
			<checkbox-component v-model="allowQueryInfo" class="input-allow">
				同意并授权运营商查询本人在疫情期间7天内到访地信息
			</checkbox-component>
			<button-component @click="submit" :disabled="!allowQueryInfo" class="submit">
				查询
			</button-component>
		</div>
		<div class="footer">
			<div class="providers">
				<p class="title">
					<i></i>
					<span>本服务联合提供</span>
				</p>
				<p class="list">
					<img src="@/assets/xty.png" alt="中国信通院" />
					<img src="@/assets/dianxin.png" alt="中国电信" />
					<img src="@/assets/yidong.png" alt="中国移动" />
					<img src="@/assets/liantong.png" alt="中国联通" />
					<img src="@/assets/guangdian.jpg" alt="中国广电" />
				</p>
			</div>
			<p class="tels">客服热线：10000 / 10086 / 10010 / 10099</p>
			<p class="tip">使用 “通信行程卡” 小程序或手机APP，不用每次输验证码</p>
			<p class="note">
				该程序仅供娱乐!!! <del>(反正行程卡已经下线了, 我这也伪造不了啥信息)</del>
				<br />
				&copy; 2022 DuckBurnIncense
			</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.login-page {
		background-color: white;
		font-size: 1rem;
		overflow: auto;
		padding-bottom: 10em;

		.header {
			width: 100%;
			height: 12em;
			display: flex;
			justify-content: center;
			align-items: center;

			.title-img {
				height: 50%;
				width: auto;
			}
		}
		.main {
			width: 85%;
			margin: 0 auto 0 auto;
			background-color: white;
			border-radius: 1.2em;
			box-shadow: 0 0 1.2em 0 #dedede;
			padding: 1.5em;

			.input {
				border-bottom: 1px solid #e4e4e4;
			}
			.input-phone {
				margin-top: 1em;
				.get-verify-code {
					color: #007aff;
					font-size: 1.4em;
					border: none;
					background-color: transparent;
					width: max-content;
				}
				.get-verify-code:disabled {
					color: #b5b5be;
				}
			}
			.input-verify-code {
				margin-top: 1.5em;
			}
			.input-allow {
				color: #94949e;
				margin-top: 1.5em;
				margin-left: 0.4em;
			}
		}
		.footer {
			padding: 1em 7.5%;
			color: #94949e;

			.providers {
				margin: 1em 0;

				.title {
					margin-bottom: 1em;
					padding: 0 0;
					position: relative;

					i {
						display: block;
						width: 100%;
						height: 1px;
						background-color: #e4e4e4;
						position: absolute;
						top: 50%;
					}
					span {
						display: inline-block;
						position: inherit;
						background-color: white;
						z-index: 2;
						padding: 0 3em;
					}
				}
				.list {
					display: flex;
					flex-direction: row;
					justify-content: center;

					img {
						object-fit: cover;
					}
					img:nth-child(1) {
						margin-top: 0.075em;
						height: 1.4em;
						width: 7.7em;
					}
					img:nth-child(2) {
						margin-left: 0.925em;
						height: 1.5em;
						width: 5em;
					}
					img:nth-child(3) {
						margin-left: 0.925em;
						height: 1.7em;
						width: 6em;
					}
					img:nth-child(4) {
						margin-left: 0.925em;
						height: 1.65em;
						width: 5.9em;
					}
					img:nth-child(5) {
						margin-left: 0.75em;
						height: 1.7em;
						width: 6.5em;
					}
				}
			}
			.tels, .tip {
				margin-bottom: 1em;
				color: rgb(0, 122, 255);
			}
			.note {
				color: red;
				font-weight: 900;
				font-size: 1.2em;
			}
		}
	}
</style>

<script>
	import InputComponent from '@/components/InputComponent';
	import CheckboxComponent from '@/components/CheckboxComponent';
	import ButtonComponent from '@/components/ButtonComponent';

	export default {
		name: 'LoginPage',
		components: {
			InputComponent,
			CheckboxComponent,
			ButtonComponent
		},
		data() {
			return {
				verifyCode: '',
				phone: '',
				allowQueryInfo: false
			}
		},
		methods: {
			submit() {
				this.$router.push('/result');
			}
		}
	}
</script>
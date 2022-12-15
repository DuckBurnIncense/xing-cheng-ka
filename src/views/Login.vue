<template>
	<div class="login-page">
		<div class="header">
			<img class="title-img" src="@/assets/white_bg_title.png" alt="title" />
		</div>
		<div class="main">
			<input-c v-model="phone" class="input input-phone" placeholder="手机号">
				<template v-slot:icon>
					<img class="icon" src="@/assets/phone_icon.png" alt="icon" />
				</template>
				<template v-slot:addon>
					<button
						class="get-verify-code"
						:disabled="!phoneLegel"
						@click="verifyCode = '114514'"
					>获取验证码</button>
				</template>
			</input-c>
			<input-c v-model="verifyCode" class="input input-verify-code" placeholder="请输入验证码">
				<template v-slot:icon>
					<img class="icon" src="@/assets/verify_code_icon.png" alt="icon" />
				</template>
			</input-c>
			<checkbox-c v-model="allowQueryInfo" class="input-allow">
				同意并授权运营商查询本人在疫情期间7天内到访地信息
			</checkbox-c>
			<button-c @click="submit" :disabled="!allowQueryInfo || !phoneLegel" class="submit">
				查询
			</button-c>
			<p class="instruction">行程卡使用说明</p>
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
			<div class="swipe-ad">
				<swipe-c>
					<swipe-item-c class="swipe swipe-1">
						<div class="left"><img src="@/assets/ad.jpg" alt="ad" /></div>
						<div class="right">点击进入</div>
					</swipe-item-c>
					<swipe-item-c class="swipe swipe-2">
						<img class="left" src="@/assets/qrcode_p2.png" alt="ad" />
						<div class="right">下载中国移动App<br />更多服务办理</div>
					</swipe-item-c>
					<swipe-item-c class="swipe swipe-3">
						<img class="left" src="@/assets/qrcode_p3.png" alt="ad" />
						<div class="right">关注联通大数据公众号，随需查询<br />更多大数据服务与您共抗疫情</div>
					</swipe-item-c>
					<swipe-item-c class="swipe swipe-4">
						<img class="left" src="@/assets/qrcode_p4.png" alt="ad" />
						<div class="right">中国信通院<br />国家高端专业智库·产业创新发展平台</div>
					</swipe-item-c>
					<swipe-item-c class="swipe swipe-5">
						<img class="left" src="@/assets/qrcode_p5.png" alt="ad" />
						<div class="right">用电信APP<br />充值查询更方便</div>
					</swipe-item-c>
				</swipe-c>
			</div>
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
				font-size: 1.8em;
				margin-top: 0.5em;
				margin-left: 0.4em;
			}
			.submit {
			}
			.instruction {
				margin-top: 1em;
				text-align: right;
				font-size: 1.2em;
				text-decoration: underline;
				color: rgb(0, 122, 255);
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
			.tels {
				margin-bottom: 1em;
				color: rgb(0, 122, 255);
			}
			.swipe-ad {
				box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px 0px;
				border-radius: 0.4em;

				.swipe-1 {
					background-color: rgb(76, 135, 252);
					display: flex;
					
					.left {
						width: 75%;
						
						img {
							object-fit: cover;
							height: 100%;
							// width: 100%;
						}
					}
					.right {
						flex: 1;
						border-left: 1px solid rgb(114, 154, 250);
						display: grid;
						place-items: center;
						color: rgb(238, 238, 238);
					}
				}
				.swipe:not(.swipe-1) {
					display: flex;

					.left {
						display: block;
						padding: 0.5em;
						width: 5em;
						object-fit: cover;
						height: 100%;
					}
					.right {
						text-align: left;
						padding-top: 0.8em;
						color: rgb(68, 68, 68);
					}
				}
			}
			.note {
				margin: 2em 0;
				color: red;
				font-weight: 900;
				font-size: 1.2em;
			}
		}
	}
</style>

<script>
	import InputC from '@/components/InputC';
	import CheckboxC from '@/components/CheckboxC';
	import ButtonC from '@/components/ButtonC';
	import SwipeC from '@/components/SwipeC';
	import SwipeItemC from '@/components/SwipeItemC';

	export default {
		name: 'LoginPage',
		components: {
			InputC,
			CheckboxC,
			ButtonC,
			SwipeC,
			SwipeItemC,
		},
		data() {
			return {
				verifyCode: '',
				phone: '',
				allowQueryInfo: false
			}
		},
		computed: {
			phoneLegel() {
				return this.phone * 1 >= 10000000000 && this.phone * 1 <= 20000000000;
			}
		},
		methods: {
			submit() {
				this.$store.commit('phone', this.phone);
				this.$router.push('/result');
			}
		}
	}
</script>
<template>
	<div class="result-page">
		<div class="header">
			<img class="title-img" src="@/assets/green_bg_title.png" alt="title" />
		</div>
		<div class="main">
			<img class="green-banner" src="@/assets/green_banner.png" alt="banner" />
			<div class="card">
				<p class="tel">{{phoneNumWithAsterisks}}的动态行程卡</p>
				<p class="update-time">更新于：{{formattedUpdateTime}}</p>
				<img class="green-card" src="@/assets/gif_green.gif" alt="green">
				<p class="desc" @click="changePlaces">
					<span class="title">您于前7天内到达或途经：</span>
					<span class="places">{{places}}</span>
				</p>
			</div>
		</div>
		<div class="footer">
			<p class="tip">结果包含您在前7天内到访的国家（地区）与停留4小时以上的国内城市<br />色卡仅对到访地作提醒，不关联健康状况</p>
			<div class="providers">
				<p class="title">
					<i></i>
					<span>本服务联合提供</span>
				</p>
				<p class="list">
					<img src="@/assets/xty_white.png" alt="中国信通院" />
					<img src="@/assets/dianxin_white.png" alt="中国电信" />
					<img src="@/assets/yidong_white.png" alt="中国移动" />
					<img src="@/assets/liantong_white.png" alt="中国联通" />
					<img src="@/assets/guangdian_white.jpg" alt="中国广电" />
				</p>
			</div>
			<p class="tels">客服热线：10000 / 10086 / 10010 / 10099</p>
			<p class="note">
				该程序仅供娱乐!!! <del>(反正行程卡已经下线了, 我这也伪造不了啥信息)</del>
				<br />
				&copy; 2022 DuckBurnIncense
			</p>
		</div>
		<div class="bottom-ad" @click="$router.push('/login')">
			<div class="left"><a href="https://getsimnum.caict.ac.cn/"><span class="b">一证通查来了！</span><br />立即点击进入</a></div>
			<div class="right"><span class="b">全国移动电话卡“⼀证通查”</span><br />防范诈骗，保护你我</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.result-page {
		// background-image: url('@/assets/green_bg.png');
		// background-size: 100% 100%;
		background-color: #2ba667;
		font-size: 1rem;
		overflow: auto;
		padding-bottom: 10em;

		.header {
			width: 100%;
			// height: 20%;
			height: 13em;
			display: flex;
			justify-content: center;
			align-items: center;

			.title-img {
				height: 50%;
				width: auto;
			}
		}
		.main {
			// height: 60%;
			// height: 39em;
			width: 85%;
			margin: 0 auto 0 auto;
			background-color: white;
			border-radius: 1.2em;

			.green-banner {
				width: 100%;
			}

			.card {
				padding: 0 1.5em 1em 1.5em;

				.tel {
					color: #46464c;
					font-size: 1.75em;
					font-weight: 700;
					padding: 1em 0 0.8em;
					line-height: 1.2;
				}
				.update-time {
					font-size: 1.75em;
					color: #94949e;
					letter-spacing: 0;
					text-align: center;
					font-weight: 700;
				}
				.green-card {
					width: 18em;
					height: 18em;
					padding: 1.6em;
				}
				.desc {
					border-top: 1px solid #e4e4e4;
					font-family: '黑体';
					font-size: 1.7em;
					padding-top: 0.5em;
					text-align: left;

					.title {
						color: #95959f;
					}
					.places {
						color: black;
						font-weight: 700;
					}
				}
			}
		}
		.footer {
			padding: 1em 7.5%;

			.tip {
				font-size: 1em;
				color: white;
			}
			.providers {
				margin: 1em 0;

				.title {
					margin-bottom: 1em;
					padding: 0 7.5%;
					position: relative;

					i {
						display: block;
						width: 85%;
						height: 1px;
						background-color: white;
						position: absolute;
						top: 50%;
					}
					span {
						display: inline-block;
						position: inherit;
						color: white;
						background-color: #2ba667;
						z-index: 2;
						padding: 0 1em;
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
				color: white;
				margin-bottom: 3em;
			}
			.note {
				color: red;
				font-weight: 900;
				font-size: 1.2em;
			}
		}
		.bottom-ad {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding: 0.4em 2em;
			background-color: white;
			font-size: 1.2em;
			// 绝对定位到底部
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 50;
			
			.b {
				font-weight: 700;
			}
			.left {
				text-align: left;
				padding: 0.5em;
				
				a {
					color: black;
					text-decoration: none;
				}
			}
			.right {
				padding: 0.5em 2em;
				background-color: black;
				color: white;
				border-radius: 0.5em;
			}
		}
	}
</style>

<script>
	export default {
		name: 'ResultPage',
		data() {
			return {
				updateTime: 0,
			}
		},
		computed: {
			phone() {
				return this.$store.state.phone || '11400005140';
			},
			places: {
				get() {
					return this.$store.state.places;
				},
				set(v) {
					this.$store.commit('places', v);
				}
			},
			phoneNumWithAsterisks() {
				let arr = this.phone.split('');
				const asterisk = '*';
				arr[3] = asterisk;
				arr[4] = asterisk;
				arr[5] = asterisk;
				arr[6] = asterisk;
				return arr.join('');
			},
			formattedUpdateTime() {
				const add0 = num => num > 9 ? num : '0' + num;
				const d = new Date(this.updateTime);
				const year = d.getFullYear(),
					month = add0(d.getMonth() + 1),
					date = add0(d.getDate()),
					hour = add0(d.getHours()),
					minute = add0(d.getMinutes()),
					second = add0(d.getSeconds());
				return `${year}.${month}.${date} ${hour}:${minute}:${second}`;
			}
		},
		methods: {
			changePlaces() {
				let newPlaces = prompt('请输入新的地点') || '哪也没去';
				this.$store.commit('places', newPlaces);
			}
		},
		mounted() {
			this.updateTime = new Date().getTime();
		}
	}
</script>
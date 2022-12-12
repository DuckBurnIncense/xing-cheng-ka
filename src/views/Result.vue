<template>
	<div class="result-page">
		<div class="header">
			<img class="title-img" src="@/assets/green_bg_title.png" alt="title" />
		</div>
		<div class="main">
			<img class="green-banner" src="@/assets/green_banner.png" alt="banner" />
			<div class="card">
				<p class="tel">123****4567的动态行程卡</p>
				<p class="update-time">更新于：2022.12.12 20:04:30</p>
				<img class="green-card" src="@/assets/gif_green.gif" alt="green">
				<p class="desc">
					<span class="title">您于前7天内到达或途径：</span>
					<span class="places">广西壮族自治区南宁市</span>
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.result-page {
		// background-image: url('@/assets/green_bg.png');
		// background-size: 100% 100%;
		background-color: #2ba667;
		font-size: 1rem;

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

			p {
				margin: 0;
				padding: 0;
			}

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
	}
</style>

<script>
	export default {
		name: 'ResultPage',
	}
</script>
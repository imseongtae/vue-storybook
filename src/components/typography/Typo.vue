<template>
	<div class="container">
		<h2 v-if="title" class="typo title">{{ title }}</h2>
		<p v-if="bodyText" class="typo body-text">
			{{ bodyText }}
		</p>
		<h3 v-if="subTitle" class="typo sub-title">{{ subTitle }}</h3>
		<p v-if="subBodyText" class="typo sub-body-text">{{ subBodyText }}</p>
	</div>
</template>

<script>
export default {
	name: 'Typo',
	props: {
		title: {
			type: String,
			required: true,
		},
		bodyText: {
			type: String,
			required: true,
		},
		subTitle: {
			type: String,
			required: true,
		},
		subBodyText: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	* {
		margin-bottom: 1rem;
	}
}
.typo {
	color: #000;
	&.title {
		font: {
			size: 24px;
			weight: 700;
			style: normal;
		}
		letter-spacing: -0.05rem;
	}
	&.body-text {
		font: {
			// 폰트 사이즈 16px로 조정하기
			size: 16px;
			weight: 400;
		}
		letter-spacing: -0.05rem;
	}
	&.sub-title {
		font: {
			size: 16px; // 16px
			weight: 700;
		}
		letter-spacing: -0.01rem;
	}
	&.sub-body-text {
		font: {
			size: 14px; // 14px
			weight: 400;
		}
		letter-spacing: -0.01rem;
	}

	&.reference {
		font: {
			size: 14px; // 14px
			weight: 400;
		}
		letter-spacing: -0.01rem;
	}

	&.detail-section-title {
		font: {
			size: 17px;
			weight: 700;
		}
		letter-spacing: -0.01rem;
	}
	&.detail-section-text {
		font: {
			size: 14px;
			weight: 400;
		}
		color: #666;
		letter-spacing: -0.01rem;
	}

	// Font weight 및 style(normal)
	&.thin {
		font-weight: 300;
	}
	&.normal {
		font-weight: 400;
	}
	&.bold {
		font-weight: 700;
	}
	&.style-normal {
		font-style: normal;
	}
}
</style>

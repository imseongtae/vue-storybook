<template>
	<div class="spinner-container">
		<div :class="classes" :style="style" />
	</div>
</template>

<script>
export default {
	name: 'LoadingSpinner',
	props: {
		size: {
			type: String,
			default: 'medium',
			validator: function (value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
		// Storybook을 위해 사용되는 props
		color: {
			type: String,
		},
	},
	computed: {
		classes() {
			return {
				spinner: true,
				[`spinner--${this.size}`]: true,
			};
		},
		style() {
			return {
				borderBottomColor: this.color,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.spinner-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 240px;
}
.spinner {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 5px solid #e0e0e0;
	border-bottom: 5px solid #4f00ff;
	animation: spin 1s linear infinite;
	position: relative;

	&--small {
		width: 36px;
		height: 36px;
	}
	&--medium {
		width: 50px;
		height: 50px;
	}
	&--large {
		width: 64px;
		height: 64px;
	}
}
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>

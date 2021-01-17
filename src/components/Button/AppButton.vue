<template>
	<button :type="buttonType" :class="classes" @click="onClick" :style="style">
		{{ label }}
	</button>
</template>

<script>
export default {
	name: 'AppButton',
	props: {
		label: {
			type: String,
			required: true,
		},
		primary: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		buttonType: {
			type: String,
			required: false,
			default: 'button',
		},
		size: {
			type: String,
			default: 'medium',
			validator: function (value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
		color: {
			type: String,
		},
	},
	computed: {
		classes() {
			return {
				'app-button': true,
				'app-button--primary': this.primary,
				'app-button--secondary': !this.primary,
				'app-button--disabled': !this.primary && this.disabled,
				[`app-button--${this.size}`]: true,
			};
		},
		// Storybook 색상 컨트롤을 위해 사용되는 computed value
		style() {
			if (this.disabled) return;
			return {
				backgroundColor: this.primary ? this.color : '#fff',
				borderColor: this.color,
				color: this.primary ? '#fff' : this.color,
			};
		},
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		},
	},
};
</script>

<style lang="scss" scoped>
.app-button {
	// display: inline-block;
	border: 1px solid #4f00ff;
	border-radius: 4px;
	color: #4f00ff;
	font: {
		family: inherit;
		weight: 700;
	}
	letter-spacing: 0.16px;
	text-align: center;
	cursor: pointer;
	// enabled, disabled, un-fill
	&--primary {
		color: white;
		background-color: #4f00ff;
	}
	&--secondary {
		background-color: #fff;
	}
	&--disabled {
		cursor: not-allowed;
		color: #999;
		background-color: #f3f3f3;
		border: 1px solid #eaeaea;
	}
	// 각 button의 width 값은 변경될 수 있음
	&--small {
		font-size: 14px;
		padding: 10px 16px;
		width: 288px;
	}
	&--medium {
		padding: 11px 20px;
		font-size: 16px;
		width: 320px;
	}
	&--large {
		font-size: 16px;
		padding: 15px 24px;
		width: 392px;
	}
}
</style>

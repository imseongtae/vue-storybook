<template>
	<input
		:id="id"
		:type="type"
		v-model="data"
		:placeholder="placeholder"
		aria-required="true"
		:class="classes"
		@input="onInput"
		:readonly="readonly"
		:disabled="disabled"
	/>
</template>

<script>
export default {
	name: 'AppInput',
	props: {
		// label 요소 속성 for에 대응하기 위한 id
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: false,
			default: 'text',
		},
		placeholder: {
			type: String,
			required: true,
		},
		valid: {
			type: Boolean,
			required: false,
			default: false,
		},
		invalid: {
			type: Boolean,
			required: false,
			default: false,
		},
		focus: {
			type: Boolean,
			required: false,
			default: false,
		},
		// readonly와 disabled 속성은 form submit시 데이터 전송 차이가 발생함
		readonly: {
			type: Boolean,
			required: false,
			default: false,
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
		state: {
			type: String,
			default: 'normal',
			validator(value) {
				return (
					[
						'normal',
						'focus',
						'valid',
						'invalid',
						'readonly',
						'disabled',
					].indexOf(value) !== -1
				);
			},
		},
		// TODO: 사이즈는 수치로도 받을 수 있도록
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
	},
	data() {
		return {
			data: '',
		};
	},
	computed: {
		classes() {
			return {
				'app-input': true,
				valid: this.valid,
				invalid: this.invalid,
				[`app-input--${this.state}`]: true,
				[`app-input--${this.size}`]: true,
			};
		},
	},
	methods: {
		onInput() {
			this.$emit('onInput', this.data);
		},
	},
};
</script>

<style lang="scss" scoped>
.app-input {
	font-size: 16px;
	padding-left: 1rem;
	height: 3rem;
	line-height: 3rem;
	// border: 1px solid #eaeaea;
	border-radius: 4px;
	outline: none;
	// 각 input의 width 값은 변경될 수 있음
	&--small {
		font-size: 14px;
		padding: 10px 16px;
		width: 288px;
	}
	&--medium {
		padding: 11px 16px;
		font-size: 16px;
		width: 320px;
	}
	&--large {
		font-size: 16px;
		padding: 15px 20px;
		width: 392px;
	}

	// input state style
	&--normal {
		border: 2px solid #eaeaea;
	}
	&:focus {
		border: 2px solid #4f00ff;
	}
	&--focus {
		border: 2px solid #4f00ff;
	}
	// !important를 설정하지 않으면 focus가 해제되어야 border style이 적용된다.
	&--valid {
		border: 2px solid #27ae60 !important;
	}
	&--invalid {
		border: 2px solid #eb5757 !important;
	}
}
</style>

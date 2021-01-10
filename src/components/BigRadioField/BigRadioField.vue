<template>
	<ul v-if="options.length" class="big-radio-field">
		<li
			v-for="(option, index) in options"
			:key="index"
			:class="{ enabled: option === selectedOption }"
			class="big-radio-field__item"
			@click="onClickRadio(option)"
		>
			{{ option }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'BigRadioField',
	props: {
		options: {
			type: Array,
			required: true,
		},
		// selectedOption: {
		// 	type: String,
		// 	required: true,
		// },
	},
	data() {
		return {
			selectedOption: '',
		};
	},
	methods: {
		onClickRadio(option) {
			this.selectedOption = option;
			this.$emit('select', option);
		},
	},
};
</script>

<style lang="scss" scoped>
.big-radio-field {
	display: flex;
	margin: 1rem 0;

	&__item {
		display: inline-block;
		width: 50%;
		height: 3rem;
		line-height: 3rem;
		// padding: 15px;
		margin-right: 1rem;

		text-align: center;
		border: 1px solid #4f00ff;
		border-radius: 4px;
		background-color: #fff;
		color: #4f00ff;
		cursor: pointer;
		font: {
			weight: 700;
			size: 14px;
		}
		// 접미사로 해당 value를 포함하고 있으면 선택
		// &[class$='--enabled'] {
		// 	background-color: #4f00ff;
		// 	color: #fff;
		// }
	}
	&__item:last-child {
		margin-right: 0;
	}
	&__item.enabled {
		background-color: #4f00ff;
		color: #fff;
	}
	&__item.disabled {
		cursor: not-allowed;
		border: none;
		color: #fff;
		background-color: #888;
	}
}
</style>

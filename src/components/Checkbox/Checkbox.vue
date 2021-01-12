<template>
	<p class="checkbox">
		<input
			type="checkbox"
			:id="`checkbox-${id}`"
			:value="label"
			:style="style"
		/>
		<label :for="`checkbox-${id}`" class="checkbox-label" :style="style">{{
			label
		}}</label>
	</p>
</template>

<script>
export default {
	name: 'Checkbox',
	// props: ['id', 'value', 'label'],
	props: {
		label: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
		color: {
			type: String,
		},
	},
	data() {
		return {
			proxyValue: false,
		};
	},
	computed: {
		style() {
			return {
				color: this.color,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.checkbox {
	display: inline-block;
	font-size: inherit;
	position: relative;
}
.checkbox[fill] {
	&::before {
		content: '';
		position: absolute;
		top: 0;
		opacity: 0;
		display: block;
		width: 1.2em;
		height: 1.2em;

		background-color: #4f00ff;
		border: 0.1em solid #4f00ff;
		transition: opacity 0.4s;
	}
	input[type='checkbox'] {
		&:checked + .checkbox-label {
			&::before {
				border-bottom-color: #4f00ff;
				border-right-color: #4f00ff;
			}
		}
	}
}
.checkbox[fill][checked='true'] {
	&::before {
		opacity: 1;
	}
}
input[type='checkbox'] {
	display: none;
	&:checked + .checkbox-label {
		color: #4f00ff;
		&::before {
			width: 0.6em;
			top: -0.3em;
			left: 0.3em;
			border-top-color: transparent;
			border-left-color: transparent;
			transform: rotate(45deg);
		}
	}
}
.checkbox-label {
	font-size: inherit;
	display: block;
	position: relative;
	padding-left: 1.8em;
	cursor: pointer;
	user-select: none;
	transition: color 0.2s;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		display: block;
		width: 1.2em;
		height: 1.2em;
		border: 0.1em solid #4f00ff;
		transition: all 0.2s;
	}
}
</style>

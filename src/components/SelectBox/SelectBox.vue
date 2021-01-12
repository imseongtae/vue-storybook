<template>
	<div class="custom-select" :tabindex="tabindex" @blur="open = false">
		<div class="selected" :class="{ open: open }" @click="open = !open">
			{{ selectedOption.label }}
		</div>
		<ul v-if="options.length" class="items" :class="{ selectHide: !open }">
			<li v-if="guideMessage" class="guide-message" v-text="guideMessage" />
			<li
				v-for="(option, i) of options"
				:key="i"
				:class="{ disabled: option.disabled }"
				@click="onClickItem(option)"
			>
				{{ option.label }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true,
		},
		selectedOption: {
			type: Object,
			required: true,
		},
		guideMessage: {
			type: String,
			required: false,
			default: null,
		},
		tabindex: {
			type: Number,
			required: false,
			default: 0,
		},
	},
	data() {
		return {
			open: false,
		};
	},
	// 초기값을 부모 컴포넌트로 전달하기 위해
	mounted() {
		this.$emit('select', this.selectedOption);
	},
	methods: {
		onClickItem(option) {
			if (!option.disabled) {
				this.open = false;
				this.$emit('select', option);
			}
		},
	},
};
</script>

<style scoped>
.custom-select {
	flex-grow: 1;
	position: relative;
	/* width: 100%; */
	text-align: left;
	outline: none;
	height: 48px;
	line-height: 48px;
}

.custom-select .selected {
	background-color: #fff;
	border-radius: 6px;
	border: 1px solid #eaeaea;
	color: #333;
	padding-left: 1em;
	cursor: pointer;
	user-select: none;
}
.custom-select .guide-message {
	color: #776 !important;
}

.custom-select .selected.open {
	border: 1px solid #eaeaea;
	border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
	position: absolute;
	content: '';
	top: 22px;
	right: 1em;
	width: 0;
	height: 0;
	border: 5px solid transparent;
	border-color: #555 transparent transparent transparent;
}

.custom-select .items {
	color: #333;
	border-radius: 0px 0px 6px 6px;
	overflow: hidden;
	border-right: 1px solid #eaeaea;
	border-left: 1px solid #eaeaea;
	border-bottom: 1px solid #eaeaea;
	position: absolute;
	background-color: #fff;

	left: 0;
	right: 0;
	z-index: 1;
}

.custom-select .items li {
	color: #333;
	padding-left: 1em;
	cursor: pointer;
	user-select: none;
}

.custom-select .items li:hover {
	background-color: rgba(79, 0, 255, 0.3);
}
/* guide message 영역 및 disabled 된 옵션은 hover 적용하지 않음 */
.custom-select .items li:first-child:hover,
.custom-select .items li.disabled:hover {
	background-color: transparent;
}

.selectHide {
	display: none;
}
</style>

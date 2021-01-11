<template>
	<input
		:id="id"
		:v-model="vModelData"
		class="app-input"
		:type="type"
		:placeholder="placeholder"
		aria-required="true"
	/>
</template>

<script>
export default {
	name: 'AppInput',
	props: {
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		vModelData: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			required: true,
		},
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.app-input {
	font-size: 16px;
	margin-bottom: 1rem;
	padding-left: 1rem;
	height: 3rem;
	line-height: 3rem;
	border: 1px solid #eaeaea;
	border-radius: 4px;
}
</style>

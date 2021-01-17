<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<app-input
			:id="'name'"
			:placeholder="'placeholder'"
			@onInput="onInputTest"
			:state="testState"
		/>
		<hr />
		<app-button :label="'Button'" :primary="true" />
	</div>
</template>

<script>
// import AppInput from '@/components/Input/AppInput.vue';
import { AppInput, AppButton } from '@imseongtae/vue-ui';

export default {
	name: 'App',
	components: {
		AppInput,
		AppButton,
	},
	data() {
		return {
			testState: 'normal',
		};
	},
	methods: {
		onInputTest(payload) {
			console.log(payload);
			if (payload === 'haemil') {
				this.testState = 'valid';
			} else {
				this.testState = 'normal';
			}
		},
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

* {
	box-sizing: border-box;
}
</style>

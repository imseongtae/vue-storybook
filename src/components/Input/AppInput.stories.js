import AppInput from './AppInput.vue';

export default {
	title: 'Example/Input',
	component: AppInput,
	decorators: [
		() => ({
			template: `				
			<div style="margin: 3em; max-width: 1024px"><h3>WIP</h3><br /> <story/></div>`,
		}),
	],
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { AppInput },
	template: `<app-input v-bind="$props" />`,
});

export const appInput = Template.bind({});
appInput.args = {
	id: '1',
	type: 'text',
	vModelData: '',
	placeholder: '전화번호를 입력해주세요',
};

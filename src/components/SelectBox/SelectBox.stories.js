import SelectBox from './SelectBox.vue';

export default {
	title: 'Example/SelectBox',
	component: SelectBox,
	decorators: [
		() => ({
			template:
				'<div style="margin: 3em; display:flex; justify-content: center; max-width: 1024px"><story/></div>',
		}),
	],
	methods: {},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SelectBox },
	template: `<select-box v-bind="$props" />`,
});

export const selectBox = Template.bind({});
selectBox.args = {
	options: [{ label: '11:00~12:00' }, { label: '12:00~13:00' }],
	selectedOption: { label: '시간을 선택해주세요.', value: null },
	guideMessage: '시간을 선택해주세요',
};

// export const normalButton = () => ({
// 	components: { Button },
// 	template: '<Button>Normal Button</Button>',
// });

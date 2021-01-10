import BigRadioField from './BigRadioField.vue';

export default {
	title: 'Example/BigRadioField',
	component: BigRadioField,
	decorators: [
		() => ({
			template:
				'<div style="margin: 3em; max-width: 1024px; margin: 0 auto;"><story/></div>',
		}),
	],
	argTypes: {
		color: { control: 'color' },
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BigRadioField },
	template: '<big-radio-field v-bind="$props" />',
});

export const TwoColumns = Template.bind({});
TwoColumns.args = {
	options: ['신용카드', '카카오페이', '네이버페이'],
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
	options: ['신용카드', '카카오페이', '네이버페이'],
};

export const FourColumns = Template.bind({});
FourColumns.args = {
	options: ['신용카드', '카카오페이', '네이버페이', '무통장입금'],
};

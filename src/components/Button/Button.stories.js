import CustomButton from './CustomButton.vue';

export default {
	title: 'Example/Button',
	component: CustomButton,
	argTypes: {
		// backgroundColor: { control: 'color' },
		color: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] },
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CustomButton },
	template: '<custom-button @click="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Button',
	disabled: true,
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};

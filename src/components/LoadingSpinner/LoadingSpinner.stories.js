import LoadingSpinner from './LoadingSpinner.vue';

export default {
	title: 'Example/LoadingSpinner',
	component: LoadingSpinner,
	decorators: [
		() => ({
			template:
				'<div style="margin: 3em; display:flex; justify-content: center; max-width: 1024px"><story/></div>',
		}),
	],
	argTypes: {
		color: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] },
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { LoadingSpinner },
	template: '<loading-spinner v-bind="$props" />',
});

export const Primary = Template.bind({});

export const Large = Template.bind({});
Large.args = {
	size: 'large',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};

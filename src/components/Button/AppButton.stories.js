import AppButton from './AppButton.vue';

export default {
	title: 'Example/Button',
	component: AppButton,
	argTypes: {
		color: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] },
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { AppButton },
	template: '<app-button @onClick="onClick" v-bind="$props" />',
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

export const sizes = (args, { argTypes }) => ({
	components: { AppButton },
	props: Object.keys(argTypes),
	template: `
		<ul class="list">		
			<li class="list-item">
				<p class="label">Small</p>
				<app-button :size="'small'" :label="'Button'" v-bind="$props" @onClick="onClick" />
			</li>
			<li class="list-item">
				<p class="label">Medium</p>
				<app-button :size="'medium'" :label="'Button'" v-bind="$props" @onClick="onClick" />
			</li>
			<li class="list-item">
				<p class="label">Large</p>
				<app-button :size="'large'" :label="'Button'" v-bind="$props" @onClick="onClick" />
			</li>
		</ul>
	`,
});

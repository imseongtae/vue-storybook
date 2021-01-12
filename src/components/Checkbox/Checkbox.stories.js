import Checkbox from './Checkbox.vue';

export default {
	title: 'Example/Checkbox',
	component: Checkbox,
	argTypes: {
		color: { control: 'color' },
		// size: {
		// 	control: { type: 'select', options: ['small', 'medium', 'large'] },
		// },
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Checkbox },
	template: '<Checkbox v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
	label: 'checkbox',
	id: 'one',
	value: 'value',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
// 	size: 'large',
// 	label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
// 	size: 'small',
// 	label: 'Button',
// };

// storiesOf('Components|Checkbox', module)
// 	.add('default', () => ({
// 		template: `
//             <div>
//                 <checkbox id="one">Default One</checkbox><br><br>
//                 <checkbox id="two" checked>Default Two</checkbox>
//             </div>`,
// 	}))
// 	.add('fill', () => ({
// 		template: `
//             <div>
//                 <checkbox id="one" fill checked>Fill One</checkbox><br><br>
//                 <checkbox id="two" fill>Fill Two</checkbox>
//             </div>`,
// 	}))
// 	.add('custom font size', () => ({
// 		template: `
//             <div>
//                 <checkbox id="one" fill style="font-size: 30px">30px</checkbox><br><br>
//                 <checkbox id="two" fill style="font-size: 40px">40px</checkbox>
//             </div>`,
// 	}));

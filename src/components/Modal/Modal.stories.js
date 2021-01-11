import Modal from './Modal.vue';

export default {
	title: 'Example/Modal',
	component: Modal,
	decorators: [
		() => ({
			template:
				'<div style="margin: 3em; display:flex; justify-content: center; max-width: 1024px"><story/></div>',
		}),
	],
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Modal },
	template: `<modal v-bind="$props" @close="isAlert = !isAlert" />`,
});

export const hasTitle = Template.bind({});
hasTitle.args = {
	isAlert: true,
	title: 'This text is Modal title',
};

export const hasBodytext = Template.bind({});
hasBodytext.args = {
	isAlert: true,
	message: 'This text is Modal bodytext',
};

export const hasTitleAndBody = Template.bind({});
hasTitleAndBody.args = {
	isAlert: true,
	title: 'This text is Modal title',
	message: 'This text is Modal bodytext',
};

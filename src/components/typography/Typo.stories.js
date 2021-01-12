import Typo from './Typo.vue';

export default {
	title: 'Example/Typo',
	component: Typo,
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Typo },
	template: `<typo v-bind="$props" />`,
});

export const typoStyle = Template.bind({});
typoStyle.args = {
	title: 'This text is title, 우리 아이가 혼자서 집중하는',
	bodyText:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. 우리 아이가 혼자서 집중하는',
	subTitle: 'This text is sub title 우리 아이가 혼자서 집중하는',
	subBodyText: 'This text is sub body text 우리 아이가 혼자서 집중하는',
};

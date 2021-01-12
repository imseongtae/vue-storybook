import Card from './Card.vue';

export default {
	title: 'Example/Card',
	component: Card,
	decorators: [
		() => ({
			template:
				'<div style="margin: 1em; display:flex; justify-content: center; max-width: 1024px"><story/></div>',
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
	components: { Card },
	template: '<card v-bind="$props" />',
});

export const BlogItem = Template.bind({});
BlogItem.args = {
	item: {
		id: 1,
		title: '마인크래프트로 배우는 건축 초급편 : 몽고 게르',
		thumbnailImg:
			'https://d2xeet26kttn3w.cloudfront.net/product/9-3-1609900108125.png',
		bodyText: `순식간에 짓고 허무는 신기한 몽고의 가옥 '게르'!`,
	},
};

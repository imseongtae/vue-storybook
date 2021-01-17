import AppInput from './AppInput.vue';

export default {
	title: 'Example/Input',
	component: AppInput,
	argTypes: {
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] },
		},
	},
	decorators: [
		() => ({
			template: `				
			<div style="margin: 3em; max-width: 1024px"><story/></div>`,
		}),
	],
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { AppInput },
	template: `<app-input v-model="data" v-bind="$props" @onInput="onInput"  />`,
	data() {
		return {
			data: '',
		};
	},
});

// TODO
// - CSS or 아이콘으로 체크 표현하기, 아이콘에 적당한 친구가 없음

export const normal = Template.bind({});
normal.args = {
	id: 'normal',
	state: 'normal',
	placeholder: 'normal input',
	disabled: false,
};

export const valid = Template.bind({});
valid.args = {
	id: 'valid',
	state: 'valid',
	placeholder: 'valid input',
};

export const invalid = Template.bind({});
invalid.args = {
	id: 'invalid',
	state: 'invalid',
	placeholder: 'invalid input',
};

export const focus = Template.bind({});
focus.args = {
	id: 'focus',
	state: 'focus',
	placeholder: 'focus input',
};

export const readonly = Template.bind({});
readonly.args = {
	id: 'readonly',
	state: 'readonly',
	placeholder: 'readonly input',
	readonly: true,
};

export const disabled = Template.bind({});
disabled.args = {
	id: 'disabled',
	state: 'disabled',
	placeholder: 'disabled input',
	disabled: true,
};

export const sizes = (args, { argTypes }) => ({
	components: { AppInput },
	props: Object.keys(argTypes),
	template: `
		<ul class="list">		
			<li class="list-item">
				<p class="label">Small</p>
				<app-input :id="'small'" :size="'small'" :placeholder="'Small'" @onInput="onInput" />
			</li>
			<li class="list-item">
				<p class="label">Medium</p>
				<app-input :id="'medium'" :size="'medium'" :placeholder="'Medium'" @onInput="onInput" />
			</li>
			<li class="list-item">
				<p class="label">Large</p>
				<app-input :id="'large'" :size="'large'" :placeholder="'Large'" @onInput="onInput" />
			</li>
		</ul>
	`,
});

// export const phoneNumberInput = Template.bind({});
// phoneNumberInput.args = {
// 	id: 'phoneNumber',
// 	placeholder: '전화번호를 입력해주세요',
// };

// function validatePhoneNumber(phone) {
// 	const ph1 = /^\+82\s1([0|1|6|7|8|9]?)-?([0-9]{4})-?([0-9]{4})$/;
// 	const ph2 = /^01([0|1|6|7|8|9]?)-?([0-9]{4})-?([0-9]{4})$/;
// 	return ph1.test(phone) || ph2.test(phone);
// }

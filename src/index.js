// Components
import AppButton from '@/components/Button/AppButton.vue';
import AppInput from '@/components/Input/AppInput.vue';

const components = [AppButton, AppInput];

const install = Vue => {
	components.forEach(component => {
		Vue.component(component.name, component);
	});
};

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export { AppButton, AppInput };

export default install;

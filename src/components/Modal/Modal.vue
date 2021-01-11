<template>
	<div v-if="isAlert" class="alert__background" @click="onCloseModal">
		<div class="alert__container">
			<div class="alert__contents" @click.stop>
				<!-- <p class="typo body-text">
					<slot name="title" />
				</p> -->
				<!-- <p class="typo body-text">
					<slot name="message" />
				</p> -->
				<!-- slot 대신 vprops로 변경 -->
				<p class="typo body-text" v-text="title" />
				<p class="typo body-text" v-text="message" />
			</div>
			<button
				class="alert__button"
				type="button"
				@click.prevent.stop="onCloseModal"
			>
				확인
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Alert',
	props: {
		isAlert: {
			type: Boolean,
			required: false,
			default: false,
		},
		title: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: false,
			default: '',
		},
	},
	methods: {
		onCloseModal() {
			this.$emit('close');
		},
	},
};
</script>

<style lang="scss" scoped>
.alert {
	&__background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__container {
		width: 320px;
		background-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
		border-radius: 4px;
		overflow: hidden;
	}
	&__contents {
		width: 100%;
		padding: 24px;
		text-align: center;
		min-height: 64px;
		border-bottom: 1px solid #eaeaea;
		user-select: none;
		p {
			color: #333;
		}
		& > p:first-child {
			margin-bottom: 8px;
		}
	}
	&__button {
		display: block;
		width: 100%;
		min-height: 48px;
		background-color: white;

		font-family: Noto Sans KR, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		letter-spacing: -0.01em;
		color: #4f00ff;
	}
}
</style>

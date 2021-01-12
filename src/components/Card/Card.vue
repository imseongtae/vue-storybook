<template>
	<li v-if="!!item" :key="item.id" class="blog-item">
		<nuxt-link
			:to="{ name: 'blog-id', params: { id: item.id } }"
			class="blog-item__container"
		>
			<div class="blog-item__text-container">
				<h4 class="blog-item__title typo sub-title">
					{{ item.title }}
				</h4>
				<p class="blog-item__text typo sub-body-text" v-html="item.bodyText" />
			</div>
			<figure class="blog-item__img-container">
				<img
					:src="item.thumbnailImg"
					:alt="item.title"
					class="blog-item__img"
				/>
			</figure>
		</nuxt-link>
	</li>
</template>

<script>
export default {
	name: 'BlogItem',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
// 새로운 블로그 아이템 레이아웃, 높이 고정과 마진
.blog-item {
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	width: 50%;
	padding: 0 8px;
	@media (min-width: 768px) {
		width: 33.33333%;
	}

	&__container {
		border: 1px solid #efefef;
		border-radius: 6px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	&__text-container {
		// display: flex;
		// flex-direction: column;
		order: 2;
		padding: 16px 12px;
		@media (min-width: 768px) {
			padding: 16px;
		}
		//padding: 0 20px;
		flex: 1 1 auto;
	}

	&__img-container {
		order: 1;
	}
	&__img {
		min-height: 68px;
		border-bottom: 1px solid #f3f3f3;
	}

	&__reference {
		display: inline-block;
		margin-bottom: 0.5rem;
	}
	&__title {
		line-height: 1.2;
		letter-spacing: -0.01rem;
		margin-bottom: 4px;
		// padding-bottom: 8px;
		// 요소에 높이를 주는 방법, 높이를 주면 모든 카드들이 일정한 높이값을 갖게 됨
		height: 40px;
		display: flex;
		align-items: flex-start;

		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	&__text {
		//margin-bottom: 8px;
		// item.excerpt.rendered 가 p 태그를 포함하므로 하위에 태그 선태자를 걸어서 속성 적용
		::v-deep p {
			// v-deep에 padding-bottom을 주면 말줄임표가 깨진다.
			line-height: 1.4;
			letter-spacing: -0.01rem;
			color: #766;

			// css 말줄임 참고
			// https://medium.com/nonamedeveloper/web-%EB%A7%90%EC%A4%84%EC%9E%84-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0-text-overflow-ellipsis-4a8466b723a1
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			// display: none;
			@media (min-width: 768px) {
				// display: block;
			}
		}
	}
}
</style>

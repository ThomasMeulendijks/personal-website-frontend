<template>
	<div>
		<app-category
			v-for="category in categories"
			:key="category.id"
			:category="category"
		/>
	</div>
</template>
<script>
import Category from "@/components/Category";

export default {
	components: {
		"app-category": Category
	},
	computed: {
		categories() {
			return this.$store.state.Categories;
		}
	}
};
</script>
<style lang="scss"></style>

<template>
	<div>
		<app-category
			v-for="category in categories"
			v-bind:key="category.id"
			v-bind:category="category"
		>
		</app-category>
	</div>
</template>
<script>
import Category from "@/components/Category";

export default {
	components: {
		"app-category": Category
	},
	computed: {
		categories(){
			return this.$store.state.Categories
		},
	},
};
</script>

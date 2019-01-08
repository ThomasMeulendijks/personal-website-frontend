<template>
	<div class="category">
		<h1>{{ category.name }}</h1>
		<hr />
		<div class="item-container">
			<app-item v-for="item in category.Items" :key="item.id" :item="item" />
		</div>
	</div>
</template>
<script>
import Item from "@/components/Item";

export default {
	components: {
		"app-item": Item
	},
	props: {
		category: {
			type: Object,
			default() {
				return { name: "Loading...", Items: Object };
			}
		}
	}
};
</script>
<style lang="scss">
.category {
	width: 100%;
}
.item-container {
	width: 100%;
	overflow-y: auto;
}
</style>

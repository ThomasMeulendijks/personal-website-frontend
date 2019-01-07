<template>
	<div class="category">
		<h1> {{ category.name }} </h1>
		<hr>
		<div class="item-container">
			<app-item
		 v-for="item in category.Items"
	 v-bind:key="item.id"
	 v-bind:item="item"
	 ></app-item>
		</div>
	</div>
</template>
<script>
import Item from "@/components/Item";

export default {
	props: ["category"],
	components: {
		"app-item": Item
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

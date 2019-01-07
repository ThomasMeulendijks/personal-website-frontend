<template>
	<div class="section">
		<h1> {{ section.name }} </h1>
		<hr>
		<div class="tile-container">
			<app-tile
		 v-for="link in section.Links"
	 v-bind:key="link.id"
	 v-bind:tile="link"
	 ></app-tile>
		</div>
	</div>
</template>
<script>
import Tile from "@/components/Tile";

export default {
  props: ["section"],
  components: {
    "app-tile": Tile
  }
};
</script>
<style lang="scss">
.section {
}
.tile-container {
  width: 100%;
  overflow-y: auto;
}
</style>

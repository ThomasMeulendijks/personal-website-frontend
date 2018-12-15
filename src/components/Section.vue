<template>
	<div class="section">
		<h1> {{ section.title }} </h1>
		<hr>
		<div class="tile-container">
		<app-tile
			v-for="tile in section.tiles"
   v-bind:key="tile.id"
   v-bind:tile="tile"
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

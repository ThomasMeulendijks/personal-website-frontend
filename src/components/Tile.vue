<template>
	<router-link :to="tile.url" class="tile">
		<h3> {{ tile.name}} </h3>
	</router-link>
</template>
<script>
export default {
  props: ["tile"]
};
</script>
<style lang="scss">
.tile {
  height: 100px;
  width: 100px;
  float: left;
  background: lightgray;
  margin: 15px;
}
</style>

<template>
	<router-link :to="item.link" class="item">
		<h3> {{ item.name}} </h3>
	</router-link>
</template>
<script>
export default {
	props: ["item"]
};
</script>
<style lang="scss">
.item {
  height: 100px;
  width: 100px;
  float: left;
  background: lightgray;
  margin: 15px;
}
</style>

<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("refreshSections");
  }
};
</script>

<style lang="scss">
#app {
  width: 60%;
  margin: auto;
  display: flex;
  padding: 10px;
  flex-warp: warp;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
	<div id="app">
		<router-view class="router"/>
	</div>
</template>
<script>
export default {
	created() {
		this.$store.dispatch("refreshCategories");
	}
};
</script>

<style lang="scss">
#app {
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
  display: flex;
  padding: 10px;

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
.router{
width:100%;
height:100%;
}
</style>

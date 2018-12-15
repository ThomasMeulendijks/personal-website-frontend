<template>
	<div id="app">
		<h1>{{ test }}</h1>
		<router-view/>
<input id="clickMe" type="button" value="clickme" v-on:click="refreshTest();" />
	</div>
</template>
<script>
export default {
  data() {
    return {
      test: this.$store.state.test
    };
  },
  methods: {
    refreshTest() {
      this.$store.dispatch("refreshTest").then(() => {
        this.test = this.$store.state.test;
      });
    }
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

<template>
	<router-link :to="item.link" class="item">
		<div class="img" />
		<div class="header">{{ item.name }}</div>
	</router-link>
</template>
<script>
export default {
	props: {
		item: {
			type: Object,
			default() {
				return { name: "Loading..." };
			}
		}
	}
};
</script>
<style lang="scss">
.item {
	height: 100px;
	width: 100px;
	float: left;
	margin: 15px;
	text-decoration: none;
	padding: 10px;
}
.item:hover {
	background: #e0e0e0;
}
.img {
	width: auto;
	height: 75%;
	background-image: url("../assets/T.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
.header {
	overflow: auto;
	height: 15%;
	width: auto;
	text-align: center;
	font-size: 100%;
	padding-top: 10%;
}
</style>

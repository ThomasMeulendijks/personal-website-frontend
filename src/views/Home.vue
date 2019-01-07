<template>
	<div>
		<app-section
			v-for="section in sections"
			v-bind:key="section.id"
			v-bind:section="section"
		>
		</app-section>
	</div>
</template>
<script>
import Section from "@/components/Section";

export default {
  components: {
    "app-section": Section
  },
	computed: {
		sections(){
			return this.$store.state.sections
		},
	},
};
</script>

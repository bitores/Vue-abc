<template>
	<div id="inner">
		<h1>{{named}}</h1>
	</div>
</template>

<script>
	export default {
		// data: {
		// 	named: "Inner"
		// }


		data() {
			return {
				named: "Inner"
			}
		}
	}
</script>

<style>
	#inner {
		background: white;
		color: red;
	}
</style>
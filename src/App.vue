<template>
	<div id="app" class="h-100 d-flex flex-column">
		<header-view></header-view>
		<div id="content" class="row mx-0 text-center align-items-center justify-content-center flex-grow-1">	
			<router-view/>
		</div>
		<footer-view></footer-view>
	</div>
</template>

<style>
	/*CSS Project Imports*/
	@import "./assets/fonts/fonts.css";

	#app{
		min-width: 575.98px;
		border-style: solid;
		border-color: 010B13; /*262626;*/ /*#141414; Chinese BLack*/ /*#282e33;*/ /*#212529; Maybe*/
		border-width: 60px;
	}

</style>

<style lang="scss">
	@import "./node_modules/bootstrap/scss/functions.scss";
	@import "./node_modules/bootstrap/scss/variables.scss";
	@import "./node_modules/bootstrap/scss/mixins";

	@include media-breakpoint-up(md) {
		body {
			font-size: 50px;
		}
	}

</style>
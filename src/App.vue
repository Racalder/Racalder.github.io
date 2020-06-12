<template>
	<div id="app" class="h-100 d-flex flex-column">
		<header-view></header-view>
		<div id="content" class="row mx-0 flex-grow-1">	
			<router-view/>
		</div>
		<footer-view></footer-view>
	</div>
</template>

<style>
	/*CSS Project Imports*/
	@import "./assets/fonts/fonts.css";

	#app{
		min-width: 375px;
		border-style: solid;
		border-color: #010B13; /*262626;*/ /*#141414; Chinese BLack*/ /*#282e33;*/ /*#212529; Maybe*/
		border-width: 0px;
		color: #010B13;
	}

</style>

<style lang="scss">
	@import "./node_modules/bootstrap/scss/_functions.scss";
	@import "./node_modules/bootstrap/scss/_variables.scss";
	@import "./node_modules/bootstrap/scss/mixins";

	// Less than  576px
	@include media-breakpoint-down(xs) {
		html{
			font-size: 12px;
		}

		#app{
			border-width: 0px;
		}
	}

	// > 576px
	@include media-breakpoint-up(sm) {
		html{
			font-size: 10px;
		}
	}

	// > 768px
	@include media-breakpoint-up(md) {
		html{
			font-size: 10px;
		}
	}

	// > 992px
	@include media-breakpoint-up(lg) {
		html{
			font-size: 12px;
		}
	}



</style>
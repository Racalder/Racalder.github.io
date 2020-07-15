<template>
	<div id="app-wrapper" class="h-100 w-100 d-flex flex-column">
		<!-- <header-view></header-view> -->
		<div id="app-section-intro">	
			<Home/>
		</div>
		<div class="section">	
			<Work/>
		</div>
		<div class="section">	
			<About/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Home from './views/Home.vue'
	import Work from './views/Work.vue'
	import About from './views/About.vue'

	export default{
		data(){
			return{
				// contentSize: '',
				// currHeight: 0,
				// currWidth: 0,
				// appAspectRatioWrapperStyle: '', 
			}
		},
		created(){
			// this.appAspectRatioWrapperStyle = 'font-size: ' + (document.body.clientHeight * 0.04) + 'px;';
			// console.log(this.appAspectRatioWrapperStyle);
			// this.currHeight = document.body.clientHeight;
			// this.currWidth = 1.33 * this.currHeight;
			// this.contentSize = 'height: 100%; width: ' + this.currWidth + 'px;';
			// this.$nextTick(function(){
			// 	window.addEventListener('resize', this.updateSize);
			// 	window.addEventListener('resize', this.updateAppAspectRatioWrapperStyle);
			// })
		},
		methods: {
			// updateSize(){
			// 	this.currHeight = this.$el.clientHeight;
			// 	this.currWidth = 1.33 * this.currHeight;
			// 	this.contentSize = 'height: 100%; width: ' + this.currWidth + 'px;';
			// },
			// updateAppAspectRatioWrapperStyle(){
			// 	//Updates the Website Base Font Size
			// 	this.appAspectRatioWrapperStyle = 'font-size: ' + (document.body.clientHeight * 0.04) + 'px;';
			// 	console.log(this.appAspectRatioWrapperStyle);	
			// }
		},
		destroyed(){
			// window.removeEventListener('resize', this.updateSize);
			// window.removeEventListener('resize', this.updateAppAspectRatioWrapperStyle);
		},
		components: {
			Home,
			Work,
			About
		}
	}
</script>

<style>
	/*CSS Project Imports*/
	@import "./assets/fonts/fonts.css";

	html, body {
		height: 100%;
		font-size: 16px;
	}

	/*-------------------------------------- GLOBAL FONT CLASSES---------------------------------------------*/

	/*FONT COLORS*/
	.app-text-color-default{
		color: #2B2A2A;
	}
	.app-text-color-muted{
		color: #A19D9D;
	}
	.app-text-color-light{
		color: #f1f1f1;
	}
	.app-text-color-0{
		/*color: #BF4343;*/
		color: #CF5C36;
	}
	.app-text-color-1{
		color: #4AA2BF; 
	}
	.app-text-color-2{
		color: #8C6868; 
	}
	.app-text-color-3{
		color: #48C270;
	}

	/*FONT WEIGHT*/

	.app-text-bold{
		font-family: gilroy-extrabold;
	}
	.app-text-light{
		/*font-family: gilroy-light;*/
		font-family: poppins, sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	.app-text-extralight{
		font-family: poppins, sans-serif;
		font-weight: 200;
		font-style: normal;
	}

	/*FONT SIZES*/
	.app-text-size-title{
		font-size: 240%;
	}
	.app-text-size-subtitle{
		font-size: 190%;
	}
	/*-----------------------------------------------------------------------------------*/

	/*-------------------------------------- APP DIVS AND CLASSES ---------------------------------------------*/

	#app-aspect-ratio-wrapper{
		background-color: #FFFFFF;
		padding-top: 5%;
		padding-bottom: 5%;
	}

	#app{
		background-color: #FFFFFF;
		padding-top: 40px;
		padding-bottom: 60px;
		margin-left: 50px;
		margin-right: 50px;
	}

	.app-section{
		height: 100vh;
	}

	.section, #app-section-intro{
		/*height: 92%;*/
		height: 100vh;
	}

	.app-text-color-default{
		color: #2B2F33;
	}
	/*-----------------------------------------------------------------------------------*/

</style>

<!-- <style lang="scss">
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

</style> -->

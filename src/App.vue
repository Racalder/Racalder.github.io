<template>
	<div id="app-wrapper" class="h-100 w-100 d-flex flex-column">
		<!-- <header-view></header-view> -->
		<div id="app-home-section" class="app-section">	
			<Home/>
		</div>
		<div id="app-work-section" class="app-section">	
			<Work/>
		</div>
		<div id="app-about-section" class="app-section">	
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

			}
		},
		created(){

		},
		mounted(){
			this.$nextTick(this.pinWorkSection);
		},
		methods: {
			pinWorkSection(){

				const scene = new this.$scrollmagic.Scene({
					triggerElement: '#app-work-section',
					triggerHook: 'onLeave',
					duration: '300%'
				})
				.setPin('#app-work-section')

				// Add Scene to ScrollMagic controller 
				this.$ksvuescr.$emit('addScene', 'pinWorkSection', scene)

			}
		},
		destroyed(){
			this.$ksvuescr.$emit('destroy'); 

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

	.app-text-color-default{
		color: #2B2F33;
	}

	#app-work-section{
		width: 100%;
	}

	#app-about-section{
		background-color: #EACBD2;
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

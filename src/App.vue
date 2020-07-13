<template>
	<div id="app-wrapper" class="h-100 w-100 d-flex flex-column">
		<header-view></header-view>
		<div id="app-content">	
			<router-view/>
		</div>
	</div>
</template>

<script type="text/javascript">
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
		}
	}
</script>

<style>
	/*CSS Project Imports*/
	@import "./assets/fonts/fonts.css";

	html, body {
		height: 100%;
	}

	/*.header-border{
		width: 80vw;
		height: 7px;
		background-color: #1C1C1C;
	}*/

	#app-aspect-ratio-wrapper{
		background-color: #FFFFFF;
		padding-top: 5%;
		padding-bottom: 5%;
	}

	#app{
		background-color: #FFFFFF;
		color: #2B2A2A;
		padding-top: 40px;
		padding-bottom: 60px;
		margin-left: 50px;
		margin-right: 50px;
	}

	#app-content{
		height: 92%;
	}

	.app-text-color-default{
		color: #2B2F33;
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

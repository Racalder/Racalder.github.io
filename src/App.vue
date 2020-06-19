<template>
	<div id="app-aspect-ratio-wrapper" class="h-100 m-0 p-0 d-flex justify-content-center">
		<div id="app" class="d-flex flex-column border border-dark" :style="contentSize">
			<div id="app-spacer" class=""></div>
			<header-view></header-view>
			<div id="content" class="row mx-0 flex-grow-1">	
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				contentSize: '',
				currHeight: 0,
				currWidth: 0,
			}
		},
		created(){
			this.currHeight = document.body.clientHeight;
			this.currWidth = 1.33 * this.currHeight;
			this.contentSize = 'height: 100%; width: ' + this.currWidth + 'px;';
			this.$nextTick(function(){
				window.addEventListener('resize', this.updateSize);
			})
		},
		methods: {
			updateSize(){
				this.currHeight = this.$el.clientHeight;
				this.currWidth = 1.33 * this.currHeight;
				this.contentSize = 'height: 100%; width: ' + this.currWidth + 'px;';
			},
		}
	}
</script>

<style>
	/*CSS Project Imports*/
	@import "./assets/fonts/fonts.css";

	html, body {
		height: 100%;
	}

	#app-aspect-ratio-wrapper{
		background-color: #FFFFFF;
		padding-top: 5%;
		padding-bottom: 5%;
	}

	#app{
		background-color: #FFFFFF;
		color: #2B2A2A;
		padding-top: 60px;
		padding-bottom: 40px;
		margin-left: 50px;
		margin-right: 50px;
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

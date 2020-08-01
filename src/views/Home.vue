<template>
		<div id="home-wrapper" class="d-flex flex-column h-100 w-100 justify-content-start">

			<!-- <div id="home-row-text" class="d-flex flex-row">
				<div id="home-text-left-indicator" class="w-25 d-flex align-items-center justify-content-end"><jam-chevron-circle-left/></div>
				<div id="home-text-title-col" class="d-flex flex-column w-50 justify-content-center">
					<div id="home-text-title-wrapper" class="d-flex flex-row"><div id="home-text-title-spacer" style="color:transparent;">I’m a&nbsp;</div><div id="home-text-title" class="home-text-bold">Ramiro Calderon</div></div>
					<div id="home-text-des-wrapper" class="d-flex flex-row"><div class="home-text-color-muted" >I’m a&nbsp;</div><component :is="selectedDes"></component></div>
				</div>
				<div id="home-text-right-indicator" class="w-25 d-flex align-items-center justify-content-start"><jam-chevron-circle-right/></div>

			</div> -->

			<div id="home-row-text" class="d-flex flex-row text-nowrap">
				<div id="home-text-left-indicator" class="w-25 d-flex align-items-center justify-content-end"><jam-chevron-left/></div>
				<div id="home-text-title-col" class="d-flex flex-column w-50 justify-content-center align-items-center">
					<div id="home-title-center" >
						<div id="home-text-title-wrapper" class="d-flex flex-row"><div id="home-text-title-spacer" class="app-text-size-subtitle" style="color:transparent;">I’m a&nbsp;</div><div class="app-text-size-title app-text-bold">Ramiro Calderon</div></div>
						<div id="home-text-des-wrapper" class="d-flex flex-row app-text-size-subtitle"><div class="app-text-color-muted" >I’m a&nbsp;</div><component :is="selectedDes"></component></div>
					</div>
				</div>
				<div id="home-text-right-indicator" class="w-25 d-flex align-items-center justify-content-start"><jam-chevron-right/></div>
			</div>

			<div id="home-portrait-wrapper" ref="imgWrapper"></div>

			<!-- <div id="home-row-text" class="align-items-center" ref="homeRowText">
				<div id="home-col-name" class="col-3 d-flex align-items-center">
					<div id="home-name" class="home-text-bold">
						<div ref="ramiroRef">Ramiro</div>
						<div :class="calderonColor">Calderon</div>
					</div>
				</div>
				<div id="home-col-des" class="col-9 d-flex justify-content-end align-items-center">
					<div class="d-flex h-100 align-items-center home-des-text home-text-light text-right overflow-hidden">
						<transition name="slide-fade" mode="out-in">
							<component v-bind:is="selectedDes"></component>
						</transition>
					</div>
				
				</div>
			</div> -->

					<!-- <div id="home-indicators" class="d-flex flex-column align-items-end justify-content-between">
						<div id="home-indicator-0" v-bind:class="homeInfo[0].btnClass" @click="selectStatement(0)"></div>	
						<div id="home-indicator-1" v-bind:class="homeInfo[1].btnClass" @click="selectStatement(1)"></div>	
						<div id="home-indicator-2" v-bind:class="homeInfo[2].btnClass" @click="selectStatement(2)"></div>	
						<div id="home-indicator-3" v-bind:class="homeInfo[3].btnClass" @click="selectStatement(3)"></div>	
					</div> -->

<!-- 			<div id="home-footer">
				<div  id="home-footer-row" class="row container-fluid">
					<div id="home-footer-col-left" class="col-6 d-flex justifycontent-start align-content-start home-text-bold">
						<div id="home-language-es" :class="esColor" @click="changeLangToEs" class="home-language-text">ES</div> <div class="home-text-color-default"> &nbsp;|&nbsp; </div> <div id="home-language-eng" :class="engColor" @click="changeLangToEng" class="home-language-text">ENG</div></div>
					<div id="home-footer-col-right" class="col-6 d-flex justify-content-end align-content-start">
						<jam-linkedin-square/>
					</div>
				</div>
			</div>
 -->
		</div>
</template>

<script>
	export default{
		data() {
			return{
				homeInfo: [
					// 1
					{
						btnClass: 'btn btn-outline-secondary embed-responsive embed-responsive-1by1 active',
					},
					// 2
					{
						btnClass: 'btn btn-outline-secondary embed-responsive embed-responsive-1by1',
					},

					// 3
					{	
						btnClass: 'btn btn-outline-secondary embed-responsive embed-responsive-1by1',
					},
					// 4
					{
						btnClass: 'btn btn-outline-secondary embed-responsive embed-responsive-1by1',
					}
				],
				selectedStatement: 0,
				selectedDes: 'des-0',
				engSelected: true,
				imgWrapperHeight: '',
				homeRowTextStyle: '',
				homeNameTextStyle: '',
				homeDesTextStyle: '', 
				
			}
		},

		methods: {
			selectStatement(nextStatement){
				console.log("Selecting Statement: " + nextStatement);
				this.homeInfo[this.selectedStatement].btnClass = 'btn btn-outline-secondary embed-responsive embed-responsive-1by1';
				this.homeInfo[nextStatement].btnClass = 'btn btn-outline-secondary active embed-responsive embed-responsive-1by1';
				this.selectedDes = 'des-' + nextStatement;
				this.selectedStatement = nextStatement;
				this.esColor();
				this.engColor();
				this.calderonColor();
			},
			changeLangToEs(){
				this.engSelected = false;
			}, 
			changeLangToEng(){
				this.engSelected = true;
			},
			// updateImageParent(){
			// 	this.imgWrapperHeight = 'height: ' + (this.$refs.imgWrapper.clientWidth * 0.3923) + 'px;'; 
			// },
			// updateHomeRowText(){
			// 	this.homeRowTextStyle = 'height: ' + (this.$refs.imgWrapper.clientHeight * 0.537) + 'px;';
			// },
			
		},
		computed: {
			esColor(){
				if(this.engSelected){
					return 'app-text-color-defualt';
				}
				else{
					return 'app-text-color-' + this.selectedStatement; 
				}
			},
			engColor(){
				if(this.engSelected){
					return'app-text-color-' + this.selectedStatement;
				}
				else{
					return 'app-text-color-defualt'
				}
			},
			calderonColor(){
				return 'app-text-color-' + this.selectedStatement;
			}
		},
		created(){
			// this.$nextTick(function(){
			// 	var elWidth = this.$el.clientWidth; 

			// 	var tempImgHeight = (elWidth * 0.3923);
			// 	this.imgWrapperHeight = 'height: ' + tempImgHeight + 'px;';
			// 	window.addEventListener('resize', this.updateImageParent);

			// 	this.homeRowTextStyle = 'height: ' + (tempImgHeight * 0.537) + 'px;';
			// 	window.addEventListener('resize', this.updateHomeRowText);

			// })
		},
		destroyed(){
			// window.removeEventListener('resize', this.updateImageParent);
			// window.removeEventListener('resize', this.updateHomeRowText);
		},
		components: {
			'des-0': {
				template: '<div class="app-text-color-0 home-des-text-content">mechanical design engineer</div>'
			},
			'des-1': {
				template: '<div class="app-text-color-default home-des-text-content">1 Is a <span class="app-text-color-1 app-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-2': {
				template: '<div class="app-text-color-default home-des-text-content">2 Is a <span class="app-text-color-2 app-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-3': {
				template: '<div class="app-text-color-default home-des-text-content">Is a <span class="app-text-color-3 app-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-load': {
				template: '<div class="app-text-color-default home-des-text-content">Is a <span class="app-text-color-4 app-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			}
		},
	}
</script>

<style>


	/*DIVS*/
	#home-wrapper{

	}

	#home-text-title-spacer, #home-text-des-wrapper{
		font-family: poppins, sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	#home-row-text{
		/*padding-bottom: 3%;*/
		height: 35%;
	}
	#home-portrait-wrapper{
		height: 60%;
		width: 100%;
		background-image: url("../assets/img/landingpage_portrait.jpg");
		background-size: contain; 
		background-position: center center;
		background-repeat: no-repeat;
	}

	.home-top-row{
		margin-top: 0px;
	}
	.home-bottom-row{
		margin-bottom: 0px;
	}

	#home-col-name, #home-col-des{
		height: 60%;
	}
	#home-col-name{
		padding-right: 0px;
	}
	#home-col-des{
		padding-left: 0px;
	}

	#home-indicators{
		height: 80%;
	}

	#home-footer-row.container-fluid, #home-footer-col-left, #home-footer-col-right{
		margin: 0px;
		padding: 0px;
		margin-top: 10px;
	}

	.jam:hover{
		cursor: pointer;
		opacity: 0.6;
		fill: #CF5C36;
	}

	.jam{
		width: 6%;
		height: auto;
		margin-bottom: 2px;
		margin-left: 2%;
	}

		
	/*TEXT*/
	#home-footer-col-left{
		font-size: 50%;
	}

	#home-name{
		font-size: 140%;
		line-height: 1.3;
	}

	.home-des-text{
		font-size: 65%;
		width: 90%;
		line-height: 1.22;
	}

	.home-des-text-content{
		align-content: center;
		align-self: center;
	}


	.homeTitle{
		font-size: 10rem;
		font-family: freight-display-pro, serif;
		font-weight: 500;
		font-style: normal;
		margin-bottom: -2%;
		color: #353535;
	
		/*color: black;*/
	}


	.desText{
		font-size: 3rem;
	}

	/*BUTTONS*/

	#home-indicators{
		width: 1.6%;
		margin-left: 5%;
	}

	#home-indicators .btn-outline-secondary{
		width: 100%;
		background-color: #FFFFFF;
		border-color: #2B2A2A;
		border-radius: 100%;
		box-shadow: 0px 0px 3px #070707;
		
	}

	#home-indicators #home-indicator-0.btn-outline-secondary:focus, 
	#home-indicators #home-indicator-0.btn-outline-secondary:active, 
	#home-indicators #home-indicator-0.btn-outline-secondary.active, 
	#home-indicators #home-indicator-0.btn-outline-secondary:hover,
	#home-indicators #home-indicator-0.btn-outline-secondary.active:hover
	{
		background-color: #BF4343 !important;
	}

	#home-indicators #home-indicator-1.btn-outline-secondary:focus, 
	#home-indicators #home-indicator-1.btn-outline-secondary:active, 
	#home-indicators #home-indicator-1.btn-outline-secondary.active, 
	#home-indicators #home-indicator-1.btn-outline-secondary:hover,
	#home-indicators #home-indicator-1.btn-outline-secondary.active:hover
	{
		background-color: #4AA2BF !important;
	}

	#home-indicators #home-indicator-2.btn-outline-secondary:focus, 
	#home-indicators #home-indicator-2.btn-outline-secondary:active, 
	#home-indicators #home-indicator-2.btn-outline-secondary.active, 
	#home-indicators #home-indicator-2.btn-outline-secondary:hover,
	#home-indicators #home-indicator-2.btn-outline-secondary.active:hover
	{
		background-color: #8C6868 !important;
	}

	#home-indicators #home-indicator-3.btn-outline-secondary:focus, 
	#home-indicators #home-indicator-3.btn-outline-secondary:active, 
	#home-indicators #home-indicator-3.btn-outline-secondary.active, 
	#home-indicators #home-indicator-3.btn-outline-secondary:hover,
	#home-indicators #home-indicator-3.btn-outline-secondary.active:hover
	{
		background-color: #48C270 !important;
	}

	.home-language-text:hover
	{
		cursor: pointer;
		opacity: 0.7;
	}

	.home-language-text:hover
	{
		cursor: pointer;
		opacity: 0.6;
	}

	.home-icon{
		width: 30px;
		height: 30px;
	}

	/*Transitions*/

	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to{
		transform: translateX(10px);
		opacity: 0;
	}

	

</style>

<!-- Bootstrap Responsive Styling -->

<!-- <style lang="scss">
	@import "./node_modules/bootstrap/scss/_functions.scss";
	@import "./node_modules/bootstrap/scss/_variables.scss";
	@import "./node_modules/bootstrap/scss/mixins";


	// Less than  576px
	@include media-breakpoint-down(xs) {

		#home-wrapper{
			height: 100%;
		}

		#home-portrait-wrapper{
			width: 100%;
			overflow: hidden;
		}

		#home-portrait-wrapper img{
			object-fit: cover;
			width: 100%;
			height: 200px;
		}
		
	}

	// > 576px
	@include media-breakpoint-up(sm) {

		#home-wrapper{
			height: 100%;
		}

		#home-portrait-wrapper{
			width: 100%;
			overflow: hidden;
		}

		#home-portrait-wrapper img{
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
		
	}

	// > 768px
	@include media-breakpoint-up(md) {

		#home-wrapper{
			height: 100%;
		}

		#home-portrait-wrapper{
			width: 100%;
			overflow: hidden;
		}

		#home-portrait-wrapper img{
			object-fit: cover;
			width: 100%;
			height: 400px;
		}
		
	}

	// > 992px
	@include media-breakpoint-up(lg) {

		#home-wrapper{
			height: 100%;
		}

		#home-portrait-wrapper{
			width: 100%;
			overflow: hidden;
		}

		#home-portrait-wrapper img{
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
		
	}

</style> -->
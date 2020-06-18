<template>
		<div id="home-wrapper" class="d-flex flex-column w-100 justify-content-center">

			<div id="home-portrait-wrapper">

				<div class="container-fluid h-100 px-1">
					<div class="row h-50">
						<div class="col home-top-row">
							<div id="home-name" class="home-text-bold ">
								<div>Ramiro</div>
								<div :class="calderonColor">Calderon</div>
							</div>
						</div>
						<div class="col home-top-row d-flex flex-column align-items-end justify-content-start">
							<div class="home-des-text home-text-light text-right border">
								<transition name="slide-fade" mode="out-in">
									<component v-bind:is="selectedDes"></component>
								</transition>
							</div>
							<div id="home-indicators" class="d-flex flex-row justify-content-end mx-1">
								<div id="home-indicator-0" v-bind:class="homeInfo[0].btnClass" @click="selectStatement(0)"></div>	
								<div id="home-indicator-1" v-bind:class="homeInfo[1].btnClass" @click="selectStatement(1)"></div>	
								<div id="home-indicator-2" v-bind:class="homeInfo[2].btnClass" @click="selectStatement(2)"></div>	
								<div id="home-indicator-3" v-bind:class="homeInfo[3].btnClass" @click="selectStatement(3)"></div>	
							</div>
						</div>
					</div>
					<div class="row h-50">
						<div class="col d-flex align-items-end justify-content-start home-bottom-row">
							<div class="d-flex flex-column home-text-bold">
								<div class="d-flex flex-row">
									<div id="home-language-es" :class="esColor" @click="changeLangToEs" class="home-language-text">ES</div> <div>|</div>
								</div>
								<div id="home-language-eng" :class="engColor" @click="changeLangToEng" class="home-language-text">ENG</div></div>
						</div>
						<div class="col d-flex align-items-end justify-content-end home-bottom-row">
							<jam-envelope/>
							<jam-github-square/>
							<jam-linkedin-square/>
						</div>

					</div>
				</div>
			</div>


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
			}
		},
		computed: {
			esColor(){
				if(this.engSelected){
					return 'home-text-color-defualt';
				}
				else{
					return 'home-text-color-' + this.selectedStatement; 
				}
			},
			engColor(){
				if(this.engSelected){
					return'home-text-color-' + this.selectedStatement;
				}
				else{
					return 'home-text-color-defualt'
				}
			},
			calderonColor(){
				return 'home-text-color-' + this.selectedStatement;
			}
		},
		created(){

		},
		components: {
			'des-0': {
				template: '<div class="home-text-color-defualt">0 Is a <span id="t0" class="home-text-color-0 home-text-bold"> product design engineer </span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-1': {
				template: '<div class="home-text-color-default">1 Is a <span class="home-text-color-1 home-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-2': {
				template: '<div class="home-text-color-default">2 Is a <span class="home-text-color-2 home-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-3': {
				template: '<div class="home-text-color-default">Is a <span class="home-text-color-3 home-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			},
			'des-load': {
				template: '<div class="home-text-color-default">Is a <span class="home-text-color-4 home-text-bold">product design engineer</span> and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder descriptionI am a product design engineer and this is mostly a placeholder description</div>'
			}
		},
	}
</script>

<style>


	/*DIVS*/
	#home-portrait-wrapper{
		height: 100%;
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
	
		
	/*TEXT*/

	#home-name{
		font-size: 4rem;
	}

	.home-des-text{
		font-size: 1.5rem;
		width:60%;
	}

	.home-text-color-default{
		color: #2B2A2A;
	}
	.home-text-color-0{
		color: #BF4343;
	}
	.home-text-color-1{
		color: #4AA2BF; 
	}
	.home-text-color-2{
		color: #8C6868; 
	}
	.home-text-color-3{
		color: #48C270;
	}

	.home-text-bold{
		font-family: gilroy-extrabold;
	}
	.home-text-light{
		font-family: gilroy-light;
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

	#home-indicators .btn-outline-secondary{
		width: 25%;
		margin: 0% 5% 0% 5%;
		background-color: #C8C8CA;
		border-color: #2B2A2A;
		border-radius: 100%;
		
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

	.jam:hover{
		cursor: pointer;
		opacity: 0.6;
	}

	.jam{
		width: 6%;
		height: auto;
		margin-bottom: 2px;
		margin-left: 3%;
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

	#home-indicators{
		margin-top: 1%;
		width: 18%;
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
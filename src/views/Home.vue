<template>
		<div class="d-flex flex-column h-100 w-100 text-center justify-content-center">
			<!-- <div id="home-title-text" class="text-nowrap h1">{{homeInfo[0].t}}</div>
			<div id="home-desc-text" class="text-muted h4">{{homeInfo[0].d}}</div>
			<div class="d-flex justify-content-center">
				<div v-bind:class="selectedIndicator[0]" @click="selectStatement0"></div>	
				<div v-bind:class="selectedIndicator[1]" @click="selectStatement1"></div>	
				<div v-bind:class="selectedIndicator[2]" @click="selectStatement2"></div>	
				<div v-bind:class="selectedIndicator[3]" @click="selectStatement3"></div>	
			</div>
			<div class="btn" > SEE work</div> -->

			<div class="w-75 homeText align-self-center"><div class="homeTitle">Ramiro Calderon</div> <transition name="slide-fade" mode="out-in"><component v-bind:is="selectedDes"></component></transition></div>

			<!-- <div class="w-75 align-self-center homeText">Ramiro Calderon <em class="text-muted" style="font-size: 3rem;">{{currentDes}}</em></div> -->
			<div id="indicators" class="d-flex flex-row align-self-center justify-content-center w-75">
							<div v-bind:class="homeInfo[0].btnClass" @click="selectStatement(0)"></div>	
							<div v-bind:class="homeInfo[1].btnClass" @click="selectStatement(1)"></div>	
							<div v-bind:class="homeInfo[2].btnClass" @click="selectStatement(2)"></div>	
							<div v-bind:class="homeInfo[3].btnClass" @click="selectStatement(3)"></div>	
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
						btnClass: 'btn btn-outline-secondary mx-3',
					},
					// 2
					{
						btnClass: 'btn btn-outline-secondary mx-3',
					},

					// 3
					{	
						btnClass: 'btn btn-outline-secondary mx-3',
					},
					// 4
					{
						btnClass: 'btn btn-outline-secondary mx-3',
					}
				],
				selectedStatement: 0,
				selectedDes: 'des-0',		
				
			}
		},

		methods: {
			selectStatement(nextStatement){
				this.homeInfo[this.selectedStatement].btnClass = 'btn btn-outline-secondary mx-3';
				this.homeInfo[nextStatement].btnClass = 'btn btn-outline-secondary mx-3 active';
				this.selectedDes = 'des-' + nextStatement;
				this.selectedStatement = nextStatement;
				
			}
		},
		computed: {
			
		},
		created(){

		},
		components: {
			'des-0': {
				template: '<div style="font-size: 0.6em; color: #cf5c36;">Is a placeholder description that will have something useful later 0</div>'
			},
			'des-1': {
				template: '<div style="font-size: 0.6em; color: #a1bf82;">Is a placeholder description that will have something useful later 1</div>'
			},
			'des-2': {
				template: '<div style="font-size: 0.6em; color: #cf5c36;">Is a placeholder description that will have something useful later 2</div>'
			},
			'des-3': {
				template: '<div style="font-size: 0.6em;">Is a placeholder description that will have something useful later 3</div>'
			},
			'des-load': {
				template: '<div style="font-size: 0.6em;"> <span style="color: transparent; text-shadow: none;">is a placeholder description that will have something useful later 3<</span></div>'
			}
		},
	}
</script>

<style scoped>
		
	/*TEXT*/

	.homeText{
		font-family: freight-big-pro, serif;
		font-weight: 600;
		font-style: normal;

		font-size: 5rem;
		color: black; 
		text-shadow: 1px 1px 7px white;
	}

	.homeTitle{
		font-size: 10rem;
		font-family: freight-display-pro, serif;
		font-weight: 500;
		font-style: normal;
		margin-bottom: -2%;
	}

	.desText{
		font-size: 3rem;
	}

	/*BUTTONS*/

	.btn-outline-secondary{
		height: 20px;
		width: 20px;
		/*border-color: #D3D5D7;*/
		background-color: white;
		border-color: transparent;
		border-radius: 50%;
		box-shadow: 0px 0px 6px #50514f;
		
	}

	.btn-outline-secondary:focus, .btn-outline-secondary:active,.btn-outline-secondary.active{
		/*background-color: #050517 !important;*/
/*		border-radius: 50%;
*/		/*border-color: #D3D5D7 !important;*/
		/*background-color: #cf5c36 !important;*/
		border-color: transparent !important;
		background-color: #50514f !important;
		box-shadow:0px 0px 0px 10px #50514f inset, 0px 0px 6px #50514f;


	}

	.btn-outline-secondary:hover{
		background-color: white;

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

	#indicators{
		/*margin-bottom: -20%;*/
		margin-top: 2%;
	}

</style>
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

			<div class="w-75 homeText align-self-center"><em>Ramiro Calderon</em> <transition name="slide-fade" mode="out-in"><component v-bind:is="selectedDes"></component></transition></div>

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
						btnClass: 'btn btn-secondary mx-3',
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
				this.homeInfo[nextStatement].btnClass = 'btn btn-secondary mx-3';
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
				template: '<span class="text-muted" style="font-size: 0.75em;">is a placeholder description that will have something useful later 0</span>'
			},
			'des-1': {
				template: '<span class="text-muted" style="font-size: 0.75em;">is a placeholder description that will have something useful later 1</span>'
			},
			'des-2': {
				template: '<span class="text-muted" style="font-size: 0.75em;">is a placeholder description that will have something useful later 2</span>'
			},
			'des-3': {
				template: '<span class="text-muted" style="font-size: 0.75em;">is a placeholder description that will have something useful later 3</span>'
			},
		},
	}
</script>

<style scoped>

	.homeText{
		font-family: freight-display-pro;
		font-size: 5rem;
	}
	.desText{
		font-size: 3rem;
	}

	.btn{
		height: 20px;
		width: 20px;

		border-radius: 100%;
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
		margin-top: 5%;
	}

</style>
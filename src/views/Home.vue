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

			<div class="w-75 homeText align-self-center"><em>Ramiro Calderon</em> <span class="text-muted" style="font-size: 0.75em;">{{currentDes}}</span></div>

			<!-- <div class="w-75 align-self-center homeText">Ramiro Calderon <em class="text-muted" style="font-size: 3rem;">{{currentDes}}</em></div> -->
			<div class="d-flex flex-row align-self-center mt-5 w-75 justify-content-center">
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
						t: 'Ramiro Calderon',
						d: 'is a a placeholder description that will have something useful later',
						i: true,
						btnClass: 'btn btn-secondary mx-3',
						ind: 0, 

					},
					// 2
					{
						t: 'Ramiro Calderon 2',
						d: '2is a a placeholder description that will have something useful later',
						i: false,
						btnClass: 'btn btn-outline-secondary mx-3',
						ind: 1, 

					},

					// 3
					{	
						t: 'Ramiro Caldeon 3',
						d: '3is a a placeholder description that will have something useful later',
						i: false,
						btnClass: 'btn btn-outline-secondary mx-3',
						ind: 2


					},
					// 4
					{
						t: 'Ramiro Caldeon 4',
						d: '4is a a placeholder description that will have something useful later',
						i: false,
						btnClass: 'btn btn-outline-secondary mx-3',
						ind: 3

					}
				],
				currentDes: '', 
				selectedStatement: 0,				
				
			}
		},

		methods: {
			selectStatement(nextStatement){
				this.homeInfo[this.selectedStatement].btnClass = 'btn btn-outline-secondary mx-3';
				this.homeInfo[nextStatement].btnClass = 'btn btn-secondary mx-3';
				this.currentDes = this.homeInfo[nextStatement].d;
				this.selectedStatement = nextStatement;
			}
		},
		computed: {
			activeHomeInfo(){
				return this.homeInfo[Object.keys(this.homeInfo.filter(function(u){return u.i}))[0]];
			}
		},
		created(){
			this.currentDes = this.homeInfo[0].d
		},
		components: {
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
		height: 5%;
		width: 40%;
	}

</style>
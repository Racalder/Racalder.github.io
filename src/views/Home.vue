<template>
		<div class="d-flex flex-column justify-content-center text-center h-100 w-100">
			<div id="home-title-text" class="text-nowrap h1">{{homeInfo[0].t}}</div>
			<div id="home-desc-text" class="text-muted h4">{{homeInfo[0].d}}</div>
			<div class="d-flex justify-content-center">
				<div v-bind:class="selectedIndicator[0]" @click="selectStatement0"></div>	
				<div v-bind:class="selectedIndicator[1]" @click="selectStatement1"></div>	
				<div v-bind:class="selectedIndicator[2]" @click="selectStatement2"></div>	
				<div v-bind:class="selectedIndicator[3]" @click="selectStatement3"></div>	
			</div>
			<div class="btn" > SEE work</div>
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
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: true,
						iClass: 'btn btn-secondary',
						ind: 0, 

					},
					// 2
					{
						t: 'Ramiro Calderon 2',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: false,
						iClass: 'btn btn-outline-secondary',
						ind: 1, 

					},

					// 3
					{	
						t: 'Ramiro Caldeon 3',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: false,
						iClass: 'btn btn-outline-secondary',
						ind: 2


					},
					// 4
					{
						t: 'Ramiro Caldeon 4',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: false,
						iClass: 'btn btn-outline-secondary',
						ind: 3

					}
				],

				homeSelected: 0,
				selectedStatement: 0,
				indicator0: ['btn btn-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3'],
				indicator1: ['btn btn-outline-secondary mx-3','btn btn-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3'],
				indicator2: ['btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-secondary mx-3','btn btn-outline-secondary mx-3'],
				indicator3: ['btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-secondary mx-3'],
				selectedIndicator: [],
			}
		},

		methods: {
			homeSelect: function(ind){
				this.homeInfo[this.homeSelected].i = false;
				this.homeInfo[this.homeSelected].iClass = 'btn btn-outline-secondary';
				this.homeInfo[ind].i = true;
				this.homeInfo[ind].iClass = 'btn btn-secondary';
				this.homeSelected = ind;
			},
			selectStatement0: function(){
				this.selectedIndicator = this.indicator0;
			},
			selectStatement1: function(){
				this.selectedIndicator = this.indicator1;
			},
			selectStatement2: function(){
				this.selectedIndicator = this.indicator2;
			},
			selectStatement3: function(){
				this.selectedIndicator = this.indicator3;
			},
		},
		computed: {
			activeHomeInfo(){
				return this.homeInfo[Object.keys(this.homeInfo.filter(function(u){return u.i}))[0]];
			}
		},
		created(){
			this.selectedIndicator = this.indicator0;
		},
		components: {
		},
	}
</script>

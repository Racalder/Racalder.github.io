<template>
	<div class="h-100">
		<div id="home-title-text" class="text-nowrap h1">{{statementInfo.t}}</div>
		<div id="home-desc-text" class="text-muted h4">{{statementInfo.d}}</div>
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
		data(){
			return{
				selectedStatement: 0,
				indicator0: ['btn btn-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3'],
				indicator1: ['btn btn-outline-secondary mx-3','btn btn-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3'],
				indicator2: ['btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-secondary mx-3','btn btn-outline-secondary mx-3'],
				indicator3: ['btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-outline-secondary mx-3','btn btn-secondary mx-3'],
				selectedIndicator: [],
			}
		},
		props: ['statementInfo'],
		methods: {
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
		created(){
			this.selectedIndicator = this.indicator0;
		}
	}
</script>

<style scoped>
	.btn{
		border-radius: 0;
	}
</style>
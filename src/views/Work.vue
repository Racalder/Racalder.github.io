<template>
	<div id="work-wrapper" class="h-100 w-100 d-flex flex-column align-items-center">
		<div id="work-header" class="d-flex flex-column justify-content-center align-items-center">
			<div id="work-header-title" class="app-text-size-title app-text-bold">Work</div>
			<div id="work-header-des" class="app-text-size-subtitle app-text-color-muted app-text-extralight">check out some of my projects</div>
		</div>
		<WorkCard/>
		<div id="work-card-border"><div style="visibility: hidden;"><WorkCard/></div></div>
	</div>
</template>

<style type="text/css">
	#work-wrapper{
		position: relative;
	}

	#work-header{
		height: 35%;
	}

	#work-card-border{
		position: absolute;
		top: 35%;
		background-image: url('../assets/img/card_border.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
	}
	
</style>

<script>
	import WorkCard from './WorkCard.vue'
	export default{
		data(){
			return{

			}
		},
		methods:{

		},
		computed:{

		},
		created(){

		},
		components:{
			WorkCard
		}
	}
</script>

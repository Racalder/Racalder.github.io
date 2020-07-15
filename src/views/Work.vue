<template>
	<div id="work-wrapper" class="h-100 w-100 d-flex flex-column align-items-center">
		<div id="work-header" class="d-flex flex-column justify-content-center align-items-center">
			<div id="work-header-title" class="app-text-size-title app-text-bold">Work</div>
			<div id="work-header-des" class="app-text-size-subtitle app-text-color-muted app-text-extralight">check out some of my projects</div>
		</div>
		<div id="work-card-wrapper">
			<div id="WorkCard-0" class="WorkCards"><WorkCard/></div>
			<div id="WorkCard-1" class="WorkCards"><WorkCard/></div>
			<div id="WorkCard-2" class="WorkCards"><WorkCard/></div>
			<div id="WorkCard-3" class="WorkCards"><WorkCard/></div>
			<div id="work-card-border"><div id="WorkCard-border" style="visibility: hidden;"><WorkCard/></div></div>
		</div>
	</div>
</template>

<style type="text/css">
	#WorkCard-border{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	#WorkCard-0{
		margin-top: 4%;
	}
	.WorkCards{
		margin-bottom: 4%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	#work-card-wrapper{
		position: relative;
		width: 100%;
		height: 82%;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	#work-wrapper{
		position: relative;
	}

	#work-header{
		height: 18%;
		align-items: end;
	}

	#work-card-border{
		margin-top: 4%;
		width: 100%;
		position: absolute;
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

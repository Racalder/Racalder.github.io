<template>
	<div id="work-wrapper" class="h-100 w-100 d-flex flex-column align-items-center">
		<div id="work-header" class="d-flex flex-column justify-content-center align-items-center">
			<div id="work-header-title" class="app-text-size-title app-text-bold">Work</div>
			<div id="work-header-des" class="app-text-size-subtitle app-text-color-muted app-text-extralight">check out some of my projects</div>
		</div>
		<div id="work-card-wrapper">
			<div id="WorkCard-0" class="WorkCards WorkCards-scroll"><WorkCard/></div>
			<div id="WorkCard-1" class="WorkCards WorkCards-scroll"><WorkCard/></div>
			<div id="WorkCard-2" class="WorkCards WorkCards-scroll"><WorkCard/></div>
			<div id="WorkCard-3" class="WorkCards WorkCards-scroll"><WorkCard/></div>
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
	#work-card-border,#WorkCard-0{
		margin-top: 1%;
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
		height: 40%;
		align-items: end;
	}

	#work-card-border{
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
			setWorkScrollScene(sceneName, scene){
				console.log("setWorkScrollScene Running");

				//Break on addScene listener to avoid event emit loop
				this.$ksvuescr.$off('addScene');

				const tween = new this.$gsap.TimelineMax();

				//Add animations to timeline for each WorkCard snapping point
				tween.delay(0.3);
				tween.fromTo('.WorkCards-scroll', 2, {y: '0%'}, {y: '-120%', delay: 0.3 ,ease: "power1.inOut"})
				tween.fromTo('.WorkCards-scroll', 2, {y: '-120%'}, {y: '-239%', delay: 0.3,ease: "power1.inOut"})
				tween.fromTo('.WorkCards-scroll', 2, {y: '-239%'}, {y: '-358%', delay: 0.3,ease: "power1.inOut"})
				tween.fromTo('.WorkCards-scroll', 1, {},{})

				//Add TimelineMax to scroll scene
				scene.setTween(tween);

				//Emit Scene to ScrollMagic controller (maybe not necessary?)
				this.$ksvuescr.$emit('addScene', sceneName, scene)
			},

		},
		computed:{

		},
		created(){
			this.$ksvuescr.$on('addScene', (sceneName, scene) => this.setWorkScrollScene(sceneName, scene));
		},
		components:{
			WorkCard
		},
		destroyed(){

		}
	}
</script>

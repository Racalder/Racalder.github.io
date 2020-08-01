<template>
	<div id="work-wrapper" class="h-100 w-100 d-flex flex-column align-items-center">
		<div id="work-header" class="d-flex flex-column justify-content-end align-items-center">
			<div id="work-header-title" class="app-text-size-title app-text-bold">Work</div>
			<div id="work-header-des" class="app-text-size-subtitle app-text-color-muted app-text-extralight">check out some of my projects</div>
		</div>
		<div id="work-card-wrapper">
			<div id="WorkCard-0" class="WorkCards WorkCards-scroll" @click="goToJPL()"><WorkCard/></div>
			<div id="WorkCard-1" class="WorkCards WorkCards-scroll"><WorkCard/></div>
			<div id="WorkCard-2" class="WorkCards WorkCards-scroll"><WorkCard/></div>
			<div id="WorkCard-3" class="WorkCards WorkCards-scroll"><WorkCard/></div>
<!-- 			<div class="work-card-border"><div id="WorkCard-border" style="visibility: hidden;"><WorkCard/></div></div>
 -->		</div>
	</div>
</template>

<style type="text/css">
	#WorkCard-border{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.work-card-border,#WorkCard-0{
		margin-top: 6%;
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
		height: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	#work-wrapper{
		position: relative;
		/*box-shadow: 0px 0px 40px 20px #f1f1f1 inset;*/
	}

	#work-header{
		height: 20%;
		margin-bottom: 2%;
	}

	/*.work-card-border{
		width: 100%;
		position: absolute;
		background-image: url('../assets/img/card_border.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
	}*/
	
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
				// let scale_reduc = 0.6;

				// tween.add("Card-0", 0.3);
				// tween.add("Card-1", 2.3);
				// tween.add("Card-2", 4.6);
				// tween.delay(0.3);
				// //Card-0
				// tween.fromTo('.WorkCards-scroll', 1.7, {y: '0%'}, {y: '-120%',ease: "power1.inOut", delay: 0.3}, "Card-0")
				// tween.fromTo('#WorkCard-0', 2, {scaleX: 1, scaleY: 1}, {scaleX: scale_reduc, scaleY: scale_reduc, opacity: 0.7, ease: "power1.inOut"}, "Card-0");
				// tween.fromTo('#WorkCard-1', 2, {scaleX: scale_reduc, scaleY: scale_reduc, opacity: 0.7}, {scaleX: 1, scaleY: 1,opacity: 1, ease: "power1.inOut"}, "Card-0");

				// //Card-1
				// tween.fromTo('.WorkCards-scroll', 1.7, {y: '-120%'}, {y: '-239%',ease: "power1.inOut", delay: 0.6} ,"Card-1")
				// tween.fromTo('#WorkCard-1', 2, {scaleX: 1, scaleY: 1}, {scaleX: scale_reduc, scaleY: scale_reduc, opacity: 0.7, ease: "power1.inOut", delay: 0.3}, "Card-1");
				// tween.fromTo('#WorkCard-2', 2, {scaleX: scale_reduc, scaleY: scale_reduc, opacity: 0.7}, {scaleX: 1, scaleY: 1,opacity: 1, ease: "power1.inOut", delay: 0.3}, "Card-1");
				// //Card-2
				// tween.fromTo('.WorkCards-scroll', 1.7, {y: '-239%'}, {y: '-358%',ease: "power1.inOut", delay: 0.6}, "Card-2")
				// tween.fromTo('#WorkCard-2', 2, {scaleX: 1, scaleY: 1}, {scaleX: scale_reduc, scaleY: scale_reduc, opacity: 0.7, ease: "power1.inOut", delay: 0.3}, "Card-2");
				// tween.fromTo('#WorkCard-3', 2, {scaleX: scale_reduc, scaleY: scale_reduc, opacity: 0.7}, {scaleX: 1, scaleY: 1,opacity: 1, ease: "power1.inOut", delay: 0.3}, "Card-2");

				// tween.fromTo('.WorkCards-scroll', 1, {},{})
				// tween.delay(0.1)
				tween.fromTo('.WorkCards-scroll', 2, {y: '0%'}, {y: '-360%', ease: "expo.inOut"});
				tween.fromTo('.WorkCards-scroll', 0.3, {}, {});



				//Add TimelineMax to scroll scene
				scene.setTween(tween);

				//Emit Scene to ScrollMagic controller (maybe not necessary?)
				this.$ksvuescr.$emit('addScene', sceneName, scene)
			},
			goToJPL(){
				this.$router.push('/JPL');
			}

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

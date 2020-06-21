<template>
	<div id="header-wrapper" class="row p-0 m-0 justify-content-center justify-content-md-end home-text-bold">
				<div class="align-text-center nav-bar">
					<div class="nav-text btn btn-primary p-0" @click="pushHome">
						Home
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0" @click="pushWork">
						Work
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0" @click="pushAbout">
						About
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0" @click="pushContact">
						Photography
					</div>
				</div>
					<div class="header-border w-100"></div>
					<div class="header-border w-100" style="background-color: #F1F1F1"></div>
			</div>
</template>

<script>
	export default{
		methods: {
			pushHome(){
				this.$router.push('/');
			},
			pushWork(){
				this.$router.push('/Work');
			},
			pushAbout(){
				this.$router.push('/About');
			},
			pushContact(){
				this.$router.push('/Contact');
			},


		}
	}
</script>

<style scoped>
	.nav-bar{
		word-spacing: 1.3em;
	}
	.header-border{
		height: 7px;
		background-color: #1C1C1C;
	}
	.nav-text{
		font-size: 50%;
		margin-bottom: -3px;
	}


	.btn-primary{
		color: #010B13 !important;
		background-color: transparent !important;
		border-radius: 0px;	
		border-color: white;
		border-bottom: 0.8px solid white;		
	}

	.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
		color: #808589 !important;
		/*border-color: #010B13;
		border-style: solid;
		border-bottom: 10px;
		border-top: 0px;
		border-right: 0px;
		border-left: 0px;*/

		border-bottom: 0.8px solid black;
	}
</style>
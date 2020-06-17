<template>
	<div id="header-wrapper" class="row px-0 mx-0 my-3 justify-content-center justify-content-md-end">
				<div class="align-text-center nav-bar">
					<div class="nav-text btn btn-primary mx-2 px-1 py-0" @click="pushHome">
						Home
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary mx-2 px-1 py-0" @click="pushWork">
						Work
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary mx-2 px-1 py-0" @click="pushAbout">
						About
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary ml-2 pl-1 py-0" @click="pushContact">
						Contact
					</div>
				</div>
					<div id="header-border" class="w-100"></div>
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
	#header-wrapper{
		font-family: gilroy-light;
	}
	#header-border{
		height: 5px;
		background-color: #1C1C1C;
		border-radius: 10px;
	}
	.nav-text{
		font-size: 1.7rem;
		display: inline-block;
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
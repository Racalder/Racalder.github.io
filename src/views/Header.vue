<template>
	<div id="header" class="row px-0 mx-0 justify-content-center justify-content-md-end">
				<div class="align-text-center m-3 nav-bar">
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
					<div class="nav-text btn btn-primary mx-2 px-1 py-0" @click="pushContact">
						Contact
					</div>
<!-- 
					<router-link class="btn btn-primary" to="/">Home</router-link> /
					<router-link to="/about">About</router-link>/
					<router-link to="/Work">Work</router-link>/
					<router-link to="/Contact">Contact</router-link>
 -->				</div>
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
	.nav-text{
		font-size: 1.4rem;
		display: inline-block;
		text-align: center !important;
	}

	.btn-primary{
		color: #010B13 !important;
		background-color: white !important;
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
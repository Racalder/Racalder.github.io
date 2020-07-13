<template>
	<div id="header-wrapper" class="d-flex home-text-bold">
				<div id="header-navbar" class="d-flex justify-content-center align-items-center">
					<div class="nav-text btn btn-primary p-0 app-text-color-default" @click="pushHome">
						HOME
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0 app-text-color-default" @click="pushWork">
						WORK
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0 app-text-color-default" @click="pushAbout">
						ABOUT
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0 app-text-color-default" @click="pushContact">
						CONTACT
					</div>
				</div>
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
		display: flex;
		justify-content: center;
		width: 100%;
		height: 8%;
	}

	#header-navbar{
		width: 25%;
		font-size: 20px;
	}
	
	.nav-text{
		/*font-size: 50%;*/
		/*margin-bottom: -3px;*/
		font-size: 70%;
		font-family: poppins, sans-serif;
		font-weight: 500;
		font-style: normal;

	}


	#header-wrapper .btn-primary{
		background-color: transparent;
		border-color: transparent;
		margin-left: 15px;
		margin-right: 15px;
	}

	.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
		color: #808589 !important;
	}
</style>
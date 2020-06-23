<template>
	<div id="header-wrapper" class="row p-0 m-0 justify-content-center justify-content-md-end home-text-bold">
				<div class="align-text-center nav-bar">
					<div class="nav-text btn btn-primary p-0 home-text-color-default" @click="pushHome">
						Home
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0 home-text-color-default" @click="pushWork">
						Work
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0 home-text-color-default" @click="pushAbout">
						About
					</div>
					<!-- <div class="nav-text align-middle"> /</div> -->
					<div class="nav-text btn btn-primary p-0 home-text-color-default" @click="pushContact">
						Photography
					</div>
				</div>
					<div class="header-border"></div>
					<div class="header-border" style="background-color: #F1F1F1"></div>
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
		width: 100%;
		height: 7px;
		background-color: #1C1C1C;
	}
	.nav-text{
		font-size: 50%;
		margin-bottom: -3px;
	}


	#header-wrapper .btn-primary{
		background-color: transparent !important;
		border-color: transparent;
	}

	.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
		color: #808589 !important;
	}
</style>
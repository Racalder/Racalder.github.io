<template>
	<div id="header" class="row px-0 mx-0 justify-content-center justify-content-md-end">
				<div class="align-items-center text-white border border-dark m-3">
					<div class="btn  btn-primary" @click="pushHome">
						Home
					</div>
					-
					<div class="btn  btn-primary" @click="pushWork">
						Work
					</div>
					-
					<div class="btn btn-primary" @click="pushAbout">
						About
					</div>
					-
					<div class="btn btn-primary" @click="pushContact">
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
<template>
	<div id="app-footer" class="container-fluid mb-2">
		<div class="row">
			<div class="col-6 text-left">
				<div class="footer-text">Ramiro Calderon</div>
			</div>
			<div class="col-6 d-flex align-items-center justify-content-end mx-0 px-3">
				<div @mouseover="emailMouseover" @mouseleave="emailMouseleave"><div class="footer-icon footer-icon-email" data-feather="mail"></div></div>
				<div class="footer-icon footer-icon-linkedin" data-jam="linkedin" data-fill="#222"></div>
			</div>
		</div>
	</div>
</template>

<style>
		
	.footer-icon{
		width: 30px;
		height: 30px;
	}

	.footer-icon:hover, .footer-text:hover{
		cursor: pointer;
		opacity: 0.8;
	}

	.footer-icon-email{
		margin-right: 10px;
		/*width: 25px;*/
		stroke-width: 2px;
	}
	.footer-icon-linkedin{
		margin-right: 0px;
		margin-bottom: -4px;
	}

	#app-footer{
		font-size: 2rem;

		font-family: freight-display-pro, serif;
		font-weight: 700;
		font-style: normal;
		color: black;
	}


</style>

<script>
	export default {
		data(){
			return{

			}
		},
		methods:{
			emailMouseover(){
				console.log("Just Hovering over email icon");
			},
			emailMouseleave(){
				console.log("Just Hovering over email icon");
			}
		},
		mounted() {
			const feather = require('feather-icons');
			feather.replace();
		}
	}
</script>


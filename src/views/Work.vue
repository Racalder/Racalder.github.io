<template>
	<div id="work-wrapper" class="h-100 w-100">
		<div class="row h-50 w-100">
			<div class="col-6 d-flex justify-content-center align-items-center">
				<WorkCard/>
			</div>
			<div class="col-6 d-flex justify-content-center align-items-center">
				1
			</div>
		</div>
		<div class="row h-50 w-100">
			<div class="col-6 d-flex justify-content-center align-items-center">
				2
			</div>
			<div class="col-6 d-flex justify-content-center align-items-center">
				3
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	#work-wrapper{
		font-size: 30%;
	}
	
</style>

<script>
	import WorkCard from './WorkCard'

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
			WorkCard,
		}
	}
</script>

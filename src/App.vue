<template>
	<div id="app" class="h-100 d-flex flex-column">
		<header-view></header-view>
		<div id="content" class="row mx-0 text-center align-items-center justify-content-center flex-grow-1">	
			<router-view/>
		</div>
		<footer-view></footer-view>
	</div>
</template>

<style>
	#app{
		min-width: 575.98px;
	}
</style>

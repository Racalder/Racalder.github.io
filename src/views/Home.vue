<template>
		<home-statement :statementInfo="activeHomeInfo"></home-statement>
</template>

<script>
	import HomeStatement from './HomeStatement';

	export default{
		data() {
			return{
				homeInfo: [
					// 1
					{
						t: 'Ramiro Calderon 1',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: true,
						iClass: 'btn btn-secondary',
						ind: 0, 

					},
					// 2
					{
						t: 'Ramiro Calderon 2',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: false,
						iClass: 'btn btn-outline-secondary',
						ind: 1, 

					},

					// 3
					{	
						t: 'Ramiro Caldeon 3',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: false,
						iClass: 'btn btn-outline-secondary',
						ind: 2


					},
					// 4
					{
						t: 'Ramiro Caldeon 4',
						d: 'This is some descritonThis is some descritonThis is some descritonThis is some descriton',
						i: false,
						iClass: 'btn btn-outline-secondary',
						ind: 3

					}
				],

				homeSelected: 0
			}
		},

		methods: {
			homeSelect: function(ind){
				this.homeInfo[this.homeSelected].i = false;
				this.homeInfo[this.homeSelected].iClass = 'btn btn-outline-secondary';
				this.homeInfo[ind].i = true;
				this.homeInfo[ind].iClass = 'btn btn-secondary';
				this.homeSelected = ind;
			}
		},
		computed: {
			activeHomeInfo(){
				return this.homeInfo[Object.keys(this.homeInfo.filter(function(u){return u.i}))[0]];
			}
		},
		components: {
			'home-statement': HomeStatement,
		},
	}
</script>

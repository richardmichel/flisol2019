<template>
	<div>
		<el-row :gutter="20">
			<div>
				<el-button type="primary" @click="isActive = !isActive">Ver evento</el-button>
			</div>
			<div v-if="isActive">
				<h1>Hola mundo</h1>
			</div>
			<ul>
				<li v-for="(item, index) in users" :key="index">
					{{ item.name}}
				</li>
			</ul>
		</el-row>
	</div>
</template>

<script>

	export default {
		components: {},
		data() {
			return {
				isActive : false,
				users: [
					{
						id: 1,
						name: 'Jose'
					},
					{
						id: 2,
						name: 'Luis'
					},

				]

			}
		},
		methods: {

			submit() {
				alert("submit");
			}
		}
	}
</script>

<style>
</style>

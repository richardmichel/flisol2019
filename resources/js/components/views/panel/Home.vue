<template>
	<div>
		<el-container>
			<el-header>
				<el-row type="flex" justify="space-between">
					<el-col :sm="12" :md="11">
						<b class="logo-gmm">
							Flisol
						</b>
					</el-col>
					<el-col :sm="12" :md="11">

					</el-col>
				</el-row>
			</el-header>


			<el-container>
				<el-main id="body-content" class="content-wrapper">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {
            };
        },
        computed: {

        },
        methods: {

        }
    }

</script>

<style scoped>
</style>

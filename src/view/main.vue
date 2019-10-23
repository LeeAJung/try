<template>

         <div id="app">

		<div style="padding:0 20px;background-color:#333;display:flex;align-items:center;height:140px;justify-content:space-between">
			<img src="@/assets/loginLogo.png" style="width:35%;height:auto;">
			<el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#333"
                text-color="#fff"
                active-text-color="#ffd04b"
				>
           <el-submenu style="">
           <template slot="title">用户登录之后的用户名</template>
           <el-menu-item index="2-1">修改密码</el-menu-item>
		   <el-menu-item index="2-2" @click="$router.push('/')">安全退出</el-menu-item>
    </el-submenu>
</el-menu>
		</div>		
		<section style="display:flex;flex:1;">
			<div>

				<el-row class="el-menu-vertical-demo">
					<el-col :span="5">
						<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
						 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
						 router>
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="1-1" route="/user">字典管理</el-menu-item>
									<el-menu-item index="1-2" route="/manage">资产管理</el-menu-item>
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航二</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="2-1">选项1</el-menu-item>
									<el-menu-item index="2-2">选项2</el-menu-item>
									<el-menu-item index="2-3">选项3</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航三</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="3-1">选项1</el-menu-item>
									<el-menu-item index="3-2">选项2</el-menu-item>
									<el-menu-item index="3-3">选项3</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">导航四</span>
							</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</div>
			<article style="flex:1;padding:5px;">
				
              <router-view></router-view>

			</article>
		</section>
	</div>
		 
</template>

<script>
	export default {
		
        mounted(){
            this.activeIndex=this.$route.meta.index
		},
		data() {
			return {
				    //登录之后set的name在这里被get到退出登录的组件上的{{nickname}}
				    // nickname:sessionStorage.getItem("username")
			};
		},
		methods: {
		
		}
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}


	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 693px;
	}
	
        
	
</style>

<template>
   
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" style="padding:10px;font-size:5px;">
			<el-tab-pane label="通用字典" name="first">

				<div>
					<div style="padding:10px;">
						<el-select v-model="value" multiple filterable remote reserve-keyword placeholder="请输入关键字搜索" :remote-method="remoteMethod"
						 :loading="loading" style="float:left;">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-button type="primary" plain @click="open">创建</el-button>
					</div>
				</div>


				<div style="padding:10px;">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="方向" name="first" fixed>
							<div style=" text-align: center;">
								<el-table :data="userlist" border style="width: 100%;">
									<el-table-column fixed prop="data" label="序号" width="150">
									</el-table-column>
									<el-table-column fixed prop="name" label="方向" width="650">
									</el-table-column>
									<el-table-column fixed prop="province" label="方向状态" width="450">
									</el-table-column>
									<el-table-column fixed prop="doing" label="操作" width=auto>
										<template slot-scope="scope">
											<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
											<el-button type="text" size="small">编辑</el-button>
											<el-button size="mini" type="danger" @click="delUser(scope.$index, scope.row.id)">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</div>
							<div>
								<el-pagination background layout="prev, pager, next" :total="1000">
								</el-pagination>
							</div>
						</el-tab-pane>
						<el-tab-pane label="天气" name="second">
							<div>
								<el-table :data="weatherData" border style="width: 100%;">
									<el-table-column fixed prop="date" label="序号" width="150">
									</el-table-column>
									<el-table-column fixed prop="name" label="天气" width="650">
									</el-table-column>
									<el-table-column fixed prop="province" label="天气状态" width="450">
									</el-table-column>
									<el-table-column fixed prop="doing" label="操作" width=auto>
										<template slot-scope="scope">
											<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
											<el-button type="text" size="small">编辑</el-button>
											<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</div>
						</el-tab-pane>
						<el-tab-pane label="公交线路编号" name="third">
							<div>
								<el-table :data="busData" border style="width: 100%;">
									<el-table-column fixed prop="date" label="序号" width="150">
									</el-table-column>
									<el-table-column fixed prop="name" label="线路编号" width="650">
									</el-table-column>
									<el-table-column fixed prop="province" label="线路状态" width="450">
									</el-table-column>
									<el-table-column fixed prop="doing" label="操作" width=auto>
										<template slot-scope="scope">
											<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
											<el-button type="text" size="small">编辑</el-button>
											<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</div>
						</el-tab-pane>
						<el-tab-pane label="点位" name="fourth">
							<div>
								<el-table :data="locationData" border style="width: 100%;">
									<el-table-column fixed prop="data" label="序号" width="150">
									</el-table-column>
									<el-table-column fixed prop="name" label="点位编号" width="650">
									</el-table-column>
									<el-table-column fixed prop="province" label="点位名称" width="450">
									</el-table-column>
									<el-table-column fixed prop="doing" label="操作" width=auto>
										<template slot-scope="scope">
											<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
											<el-button type="text" size="small">编辑</el-button>
											<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>

			</el-tab-pane>

			<el-tab-pane label="资产字典" name="second">配置管理</el-tab-pane>

		</el-tabs>



	</div>

</template>

<script>
	export default {
		data() {
			return {
				userlist: []
			};
		},
		methods:{
			delUser(id){
				 this.$confirm('确定删除?', '系统提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

		  this.$http.get("http://localhost:3000/user/"+id)
		      .then(function(response){
					this.list.push(userlist)
				});
        this.$message({
           type: 'success',
           message: '删除成功!'
                          });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
			},
			getUserList(){
				this.$http.get("http://localhost:3000/user").then(res=>{
					this.userlist=res.data;
				});
			}
		},
		created(){
			this.getUserList();
		}
		
	};
</script>

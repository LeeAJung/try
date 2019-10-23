<template>
    <div class="container">
        <div class="box-card content" shadow="hover">
          <el-card class="box-card">
              <el-form ref="form" :model="form" :rules="rules" >
                 <el-form-item style="text-align:center;">
                    <div style="font-size:22px">
                        智慧城市大脑-管理系统
                    </div>
                 </el-form-item>
                 <el-form-item prop="tel" label="账号">
                 <el-input v-model.trim="form.tel" prefix-icon="el-icon-s-custom" placeholder="请输入账号"></el-input>
                 </el-form-item>
                 <el-form-item prop="pwd" label="密码">
                 <el-input v-model.trim="form.pwd" type="password" prefix-icon="el-icon-key" placeholder="请输入密码"></el-input>
                 </el-form-item>
                 <el-form-item>
                   <el-button type="primary" style="width:100%" @click="onSubmit">登录</el-button>
                 </el-form-item>
              </el-form>
          </el-card>
        </div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               form:{
                    tel:'',
                    pwd:""
               },
               rules: {
                tel: [{ 
                    required: true, 
                    message: '请输入账号', 
                    trigger: 'blur' 
                    }],
                 pwd: [{ 
                    required: true, 
                    message: '请输入密码', 
                    trigger: 'blur' 
                    }]
               }
           }
       },
       methods:{
           onSubmit(){
               if(!this.form.tel||!this.form.pwd){
                   alert ("用户名和密码不能为空！")
                   this.form.pwd=''
               }
               else{
              
                   this.$router.push("/main")
                   //登录之后在这个方法里存了username，后面有一个"getItem"从这里获取username
                //    sessionStorage.setItem("username",this.from.tel)
                    }   
           }
       } 
    }
</script>


<style lang="scss">
           //scss下载之后子样式可以直接在样式里嵌套增强css样式
    $w :100vw;
    $h :100vh;
    .container{
        width: $w;
        height: $h;
        background: linear-gradient(to bottom,#409EFF,#ffffff);
        animation:change 0.5s 1s forwards;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .content{
            width: 500px;
            height: 300px;
            background: #ffffff;
        }
        .box-card{
            height: auto;
            justify-content: center;
        }
    }
  

</style>

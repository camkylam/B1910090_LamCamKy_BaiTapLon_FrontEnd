<script>
  import * as yup from "yup";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import UserService from "../services/User.service";
  import toast from "../assets/js/toasts";
  import {mapActions} from "pinia";
  import { useAuthStore } from "@/stores/Auth.store";
  export default{
     props:{user:Object},
     data() {
        const userform = yup.object().shape({
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(3, "Tên phải ít nhất 3 ký tự."),
            email:yup
            .string()
            .required("Email phải có giá trị")
            .email("Email không hợp lệ"),
            pwd:yup
            .string()
            .required("Mật khẩu phải có giá trị")
            });
            return {
            userform,
            infouser:this.user,
            toasts:{
                  title:"",
                  msg:"",
                  type:"",
                  duration:0
              },
            }
    },
    components:{
      Form,
      Field,
      ErrorMessage
    },
    methods:{
        toast,
        ...mapActions(useAuthStore, ["logout"]),
        async updateUser(){
            try{
                await UserService.update(this.infouser._id,this.infouser);
                    this.toasts.title="Success",
                    this.toasts.msg="Đã sửa thông tin vui lòng đăng nhập lại !",
                    this.toasts.type="success",
                    this.toasts.duration=3000
                this.toast();
                setTimeout(()=>{
                    this.logout();
                    this.$router.push({name:"login"});
                },2000);
            }catch(error){
                    this.toasts.title="Faild",
                    this.toasts.msg="Có lỗi hoặc trùng tên người dùng",
                    this.toasts.type="error",
                    this.toasts.duration=3000
                    this.toast();
                console.log(error);
            }
        },
    },
}
</script>
<template>
 <div class="wrapper">
  <h3>
				Hiệu chỉnh
			</h3>
    <Form :validation-schema="userform">
      <div class="form-group">
        <label for="nameproduct">Tên đăng nhập:</label>
        <Field type="text" class="form-control" id="nameproduct" name="name" v-model="infouser.username" placeholder="Nhập vào tên đăng nhập" />
        <ErrorMessage name="name" class="text-danger" />
      </div><br>
          <div class="form-group">
        <label for="nameproduct">Email:</label>
        <Field type="text" class="form-control" id="nameproduct" name="email" v-model="infouser.email" placeholder="Nhập vào email" />
        <ErrorMessage name="email" class="text-danger" />
      </div><br>
      <button type="submit" class="btn btn-success" @click="updateUser">Lưu</button>
      <br>
    </Form>
</div>       
</template>
<style scoped>   
    h3{
      margin-top: 55px;
		margin-bottom: 25px;
        font-family: serif;
    font-weight: bold;
    font-size:35px;
    font-style: italic;
    color: rgb(139, 96, 1);
    }
	</style>

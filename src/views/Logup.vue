<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import AuthService from "../services/Auth.service";
    import toast from "../assets/js/toasts";
    import toastsVue from "../components/toasts.vue";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
            toastsVue
        },
        data() {
        const Logupform = yup.object().shape({
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(2, "Tên phải ít nhất 2 ký tự."),
            email: yup
            .string()
            .required("Email phải có giá trị.")
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
           pwd: yup
            .string()
            .required("Mật khẩu phải có giá trị.")
            });
            return {
            Logupform,
            message:"Đăng ký thành công",
            usernew:{
                username:"",
                email:"",
                password:"",
            },
            toasts:{
              title:"",
              msg:"",
              type:"",
              duration:0
                 },
            };
        },
        methods:{
          toast,
            async postuser(){
                try{
                  await AuthService.createsignup(this.usernew);
                   this.toasts.title="Success",
                  this.toasts.msg="Đăng ký thành công",
                  this.toasts.type="success",
                  this.toasts.duration=2000
                  this.toast();
                  setTimeout(()=>{
                    this.$router.push({name:"login"});
                  },2000);
                }catch(erorr){
                  console.log(erorr);
                  this.toasts.title="Faild",
                  this.toasts.msg="Thông tin bạn nhập đã được dùng",
                  this.toasts.type="error",
                  this.toasts.duration=2000
                  this.toast();
                }
            }
        }
    };
</script>

<template>
<toastsVue></toastsVue>
<section class="text-center text-lg-start">
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-5 mb-5 mb-lg-0">
        <div class="card cascading-right">
          <div class="card-body p-5 shadow-5">
            <h2 class="fw-bold mb-5">Đăng ký</h2>
            <Form :validation-schema="Logupform">
              <div class="form-outline mb-4">
                 <label class="form-label" for="name"><b>Tên đăng nhập</b></label>
                 <Field 
                        id="name"
                        name="name"
                        type="text"
                        class="form-control"
                        placeholder="Nhập vào tên của bạn"
                        v-model="usernew.username"
                    />
                    <ErrorMessage name="name" class="text-danger"/> 
              </div>
                <div class="mb-4">
                  <label class="form-label" for="email"><b>Email</b></label>
                  <div class="form-outline">
                      <Field 
                        id="email"
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="Nhập vào email của bạn"
                        v-model="usernew.email"
                    />
                    <ErrorMessage name="email" class="text-danger" /> 
                  </div>
                </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="pwd"><b>Mật khẩu</b></label>
                    <Field 
                        id="pwd"
                        name="pwd"
                        type="password"
                        class="form-control"
                        placeholder="Nhập vào mật khẩu của bạn"
                        v-model="usernew.password"
                    />
                    <ErrorMessage name="pwd" class="text-danger" /> 
              </div>
              <button type="button" class="btn btn-success btn-block mb-4 ml-6 button" @click="postuser()">
                Đăng ký
              </button>
              <p class="text-center">Bạn đã có tài khoản? <router-link to="/login"> Đăng nhập</router-link></p>
            </Form>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png" class="w-100 rounded-4 shadow-4"
          alt="..." />
      </div>
    </div>
  </div>
</section>
</template>
 <style scoped  >
    .cascading-right {
      margin-right: -50px;
    }
    .button{
      margin-left: 155px;
    }
    h2{
      font-family: serif;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    margin-left: 15px;
    font-style: italic;
    }
    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }

  </style>

<script>
    import FormloginVue from "../components/Formlogin.vue";
    import toastsVue from "../components/toasts.vue";
    export default {
        components: {
            FormloginVue,
            toastsVue
        },
    };
</script>
<template>
<toastsVue></toastsVue>
    <h1 style="margin-top: 100px ; margin-left: 300px;">Đăng nhập</h1>
<div class="h-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 justify-align-start">
          <FormloginVue></FormloginVue>
      </div>
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-access-protection-5379568-4500319.png"
          class="img-fluid" alt="Sample image">
      </div>
     
    </div>
  </div>
</div>  

</template>
<style scoped>   
    h1{
        font-family: serif;
    font-weight: bold;
    font-size: 50px;
    color: rgb(139, 96, 1);
    margin-left: 15px;
    font-style: italic;
    
    }
    </style>

<script>
    import SliderShop from '@/components/SliderShop.vue'
    import HeaderShop from '@/components/HeaderShop.vue'
    import ProductService from '../services/Product.service'
    import { mapState } from "pinia";
    import { useAuthStore } from "@/stores/Auth.store";
    import toastsVue from '../components/toasts.vue';
    export default {
         data(){
            return {
                Products:[],
            }
        },
        components:{
            HeaderShop,
            SliderShop,
            toastsVue
        },
        computed: {
            ...mapState(useAuthStore,{
                currentUser: "user",
            }),
    },
        methods:{
             async retrieveProduct() {
            try {
                this.Products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
                }
            },          
        },
        mounted() {
        this.retrieveProduct();
        },
    }
</script>
<template>
    <div class="header">
        <HeaderShop></HeaderShop>
      </div>
      <toastsVue></toastsVue>
<div style="margin: 20px 100px; ">
    <div style="text-align: center; margin: 30px 0;" class="heading">
        <h3>Bánh cupcake</h3>
    </div>
    <div class="flex-row" style="margin:0 100px;">
        <div class="d-sm-flex flex-wrap">
            <div class="card m-1" style="width: 18rem; background-color: var(#eee); border: 1px solid black;"  v-for="item in Products" v-show="item.categories === 'Bánh cupcake'">
                <div class="wrapper-img">
                    <div class="image_item" >
                        <img :src="item.img" class="card-img-top" alt="...">
                    </div>
            </div>
                <div class="card-body product">
                    <h5 class="card-title text-center">{{item.title}}</h5>
                    <h6 class="price text-center">{{item.price}}000đ</h6>
                    <router-link :to="{
                        name: 'details',
                        params: { id: item._id },
                    }"  >
                        <button type="button" class="btn btn-outline-success">Xem chi tiết</button>
                    </router-link>
                </div>
            </div>
        </div> 
    </div>   
</div>
<div>
</div>
</template>
<style scoped>   
     h3{
        font-family: serif;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    margin-left: 15px;
    font-style: italic;
    color: rgb(139, 96, 1);
    }
    .card-title{
        font-family: serif;
    font-weight: bold;
   font-size: 1.5rem;
    font-style: italic;
    color: rgb(139, 96, 1);
    }
    .wrapper-img{
        width: 100%;
        height: 10rem;
        overflow: hidden;
    }
    .image_slider{
       display: flex;
       transition: all .8s ease;
       
    }
    .image_slider:hover{ 
       transform: translateX(-100%);
    }
   .image_item{
       flex: 1 0 100%;
   }
</style>
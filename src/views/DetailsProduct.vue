<script>
    import HeaderShop from '@/components/HeaderShop.vue'
    import ProductService from '../services/Product.service'
    import CartService from '../services/Cart.service'
    import toastsVue from '../components/toasts.vue'
    import toastsjs from '../assets/js/toasts.js'
    import { mapState } from 'pinia'
    import { useAuthStore } from "@/stores/Auth.store";
    export default {
        data(){
            return{
                 detailproduct:[],
                 cartitem:{
                     userId:'',
                     productId :this.$route.params.id,
                     quantity : 1,
                     title:"",
                     img:"",
                     price:"",
                 },
                 carts:[],
                 toasts:{
                    title:"Success",
                    msg:"Thêm vào giỏ hàng thành công",
                    type:"success",
                    duration:2000
                 },
                sub_quantity:1,
            }
        },
        computed:{
            ...mapState(useAuthStore,{
                currentUser: "user",
            }),
        },
        components:{
            HeaderShop,
            toastsVue
        },
        methods:{
            toastsjs,
            async getproduct(){
                try{
                    this.detailproduct = await ProductService.get(this.$route.params.id);
                    this.cartitem.title = this.detailproduct.title ;
                    this.cartitem.img =this.detailproduct.img  ;
                    this.cartitem.price = this.detailproduct.price; 
                     
                }catch(error){
                    console.log(error);
                }
            },
            async getidcart(){
                this.cartitem.quantity=this.sub_quantity;
                var exitcart = false;
                
                try{
                    this.carts = await CartService.get(this.currentUser._id);
                    this.cartitem.userId = this.currentUser._id;
                     this.carts.map((cartproduct)=>{
                             if(cartproduct.productId == this.cartitem.productId){
                                 this.cartitem.quantity+=cartproduct.quantity;
                                 CartService.update(cartproduct._id,this.cartitem);
                                 exitcart=true;    
                                 this.toastsjs(); 
                                 setTimeout(()=>{
                                     this.$router.push({name:'CartShop'});
                                 },1000);
                             }
                     })
                        if(exitcart === false){
                        this.cartitem.userId = this.currentUser._id;
                        CartService.create(this.cartitem);
                        this.toastsjs(); 
                        setTimeout(()=>{
                                this.$router.push({name:'CartShop'});
                            },1000);
                       }
                }catch(error){
                    this.toasts.title="Message",
                    this.toasts.msg="Bạn chưa đăng nhập!",
                    this.toasts.type="warn",
                    this.toasts.duration=3000,
                    this.toastsjs(); 
                    console.log(error);
                }
            },
        },
        created() {
            this.getproduct();
        },

    }
</script>
<template>
    <HeaderShop></HeaderShop>
    <toastsVue></toastsVue>
    <div class="heading">
        <h2 class="text-dark text-center">Chi tiết sản phẩm</h2>
    </div>
    <div class="wrapper">
        <div class="details d-flex justify-content-between flex-wrap">
    <div class="img_product col">
            <div class="carousel-inner">
                <div class="carousel-item"  v-for="(img,index) in detailproduct.img" :class="{active : index==0}">
                <img :src="detailproduct.img" class="d-block w-100" alt="..." style="border-radius: 8px ;">
                </div>
            </div>
    </div>
            <div class="info_product col" style="margin-left: 20px;">
                <h5 class="ptitle">{{detailproduct.title}}</h5>
                <span class="pricte text-danger">Giá sản phẩm: {{detailproduct.price}}đ</span>
               
                <div class="quatitly-product">
                    <h5>Nhập số lượng</h5>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <input id="quantity" name="quantity" type="number" v-model="sub_quantity"
                        class="form-control form-control-sm" style="width:50px;"/>
                    </div>
                </div><br>
                <div class="btn_product">   
                        <button type="submit" class="btn btn-success" style="width:180px;" @click="getidcart()">Thêm vào giỏ hàng</button>
                     <router-link to="/">
                        <button type="button" class="btn btn-danger" style="width:150px;">Trở về</button>
                    </router-link>
                </div>
            </div>  
            <div class="describe_product col">
                <h4>Mô tả sản phẩm</h4>
                <p>{{detailproduct.desc}}
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .btn_product{
        display: flex;
        justify-content: space-around;
    }
    .size_product,.color_product{
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }
    .list_btn_size,.list_btn_color{
        margin:0 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .list_btn_size button,.list_btn_color button{
        margin: 10px 5px;
    }
    .btn{
        width: 50px;
    }
    .form-control{
        border: 1px solid black;
        font-size: 16px;
    }
    .heading{
        padding-top: 32px;

    }
    h2{
    font-family: serif;
    font-weight: bold;
   font-size: 3rem;
    text-align: center;
    margin-left: 15px;
    font-style: italic;
    color: rgb(139, 96, 1);
    }
    
    
    .wrapper{
        margin: 50px 100px;
    }
    .heading{
        margin: 0 100px;
    }
    .title{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100px;
    }
    .ptitle{
        font-family: serif;
    font-weight: bold;
   font-size: 1.5rem;
    font-style: italic;
    color: rgb(139, 96, 1);
    }
</style>
<script>
import CartService from '../services/Cart.service';
import { mapState,mapActions } from "pinia";
import { useAuthStore } from "@/stores/Auth.store";
import toast from '../assets/js/toasts';

   export default {
    data(){
      return{
          carts:[],
             toasts:{
                    title:"Warning",
                    msg:"Bạn chưa đăng nhập",
                    type:"warn",
                    duration:3000
            },
      }
    },
    computed: {
      ...mapState(useAuthStore, {
        currentUser: "user",
      }),
       getlengthcarts(){
          return this.carts.length;
        },
    },
     methods:{
       toast,
         ...mapActions(useAuthStore, ["logout", "loadAuthState"]),
           async showcarts(){
          try{
            this.showuser();
             if(this.currentUser !=null){
            this.carts = await CartService.get(this.currentUser._id);
             }
          }catch(error){
            console.log(error);
          }
        },
        showuser(){
          if(this.currentUser==null){
            document.querySelector('.login').style.display="none";
            document.querySelector('.not-login').style.display="block";
          }else{
            document.querySelector('.login').style.display="block";
            document.querySelector('.not-login').style.display="none";
            document.querySelector('.data_user').innerHTML = this.currentUser.username;
          }
        },
        handlelogout(){
              this.logout();
              this.$router.push({ name: "login" });
        },
        gotocart(){
          if(!this.currentUser){
            this.toast();
          }else{
            this.$router.push({name:"CartShop"}); 
          }
        }
     },
     created(){
    this.loadAuthState();
	  },
    mounted(){		
      this.showcarts();
    },
  };
</script>
<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
       Bakery
    </a>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">
            Trang Chủ
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" aria-current="page">
            Giới thiệu
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sản phẩm
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/banhsinhnhat" class="dropdown-item" aria-current="page">
            Bánh Sinh Nhật
            </router-link></li>
            <li><router-link to="/cupcake" class="dropdown-item" aria-current="page">
            Bánh Cupcake
            </router-link></li>
            <li><router-link to="/bmy" class="dropdown-item" aria-current="page">
            Bánh Mỳ
            </router-link></li>
          </ul>
        </li>
      </ul>  
      
       <div class="Cart">
         <div class="wrapper_cart">
             <div class="cart_link" id="cart_link">
                <div class="card card-body bg-secondary cart-info"> 
                    <div class="cart-list">
                        <h4 class="text-warning text-center title ">Giỏ hàng của bạn</h4>
                         <router-link to="/cart" style="text-decoration: none;">
                        <div class="item_cart" v-for="item in carts">
                            <div class="item-img">
                                <img :src="item.img" class="img-product" alt="">
                            </div>
                            <div class="item-name">
                                <span class="text-light name-product">{{item.title}}</span>
                            </div>
                            <div class="item-price">
                                <span class="text-light price-product">{{item.price}}000đ</span>
                            </div>
                            <div class="item-quantity">
                                <span class="text-light quantity-product">x{{item.quantity}}</span>
                            </div>
                        </div>   
                         </router-link>          
                  </div>
                  <div class="footer-cart">
                          <span class="text-light">Có <span class="lenghtCart">{{getlengthcarts }}</span> sản phẩm trong giỏ hàng  </span>
                          <button class="btn btn-warning" type="button" @click="gotocart">Vào giỏ hàng</button>
                  </div>
            </div>
          </div>
           <i class="bi bi-bag-fill icon icon_cart icon-white"></i>
           <span class="quantity_cart">{{getlengthcarts}}</span>
         </div>
      </div>  

        <div class="User">
          <div class="not-login">
            <i class="bi bi-person-circle icon" data-bs-toggle="collapse" href="#user"></i>
              <div class="collapse user_link" id="user">
                <div class="card card-body bg-secondary connect-shop">
                  <router-link to="/login" class="text-white text-center">Đăng nhập</router-link><br>
                   <router-link to="/register" class="text-white text-center">Đăng ký</router-link>
                </div>        
            </div>
          </div>
             <div class="login">
            <span class="text-light data_user" data-bs-toggle="collapse" href="#user"></span>
              <div class="collapse user_link" id="user">
                <div class="card card-body bg-secondary connect-shop">
                  <router-link to="/profile" class="text-white text-center">Trang cá nhân</router-link><br>
                   <a to="/" class="text-white text-center" @click="handlelogout()">Đăng xuất</a>
                </div>        
            </div>
          </div>
        </div>
    </div>  
  </div>
</nav>
</template>
<style scoped>

.navbar{
  padding-left: 90px;
  padding-right: 50px;
  background-color: #dba800;
  box-shadow: 1px solid black;
  height: 6rem;
}
.navbar-brand{
  font-size: 3rem;
    font-weight: bold;
    color: rgb(231, 255, 10);
    font-family: serif;
    font-style: italic;
}
.navbar-nav{
  padding-left: 190px;
 
}
 .navbar-nav .nav-link {
  font-family: serif;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-left: 15px;
    font-style: italic;
    color: white
}
.title{
  font-family: serif;
    font-weight: bold;
    font-size: 30px;
    font-style: italic;
}

.User,.Cart{
  margin-left: 25px;
}
.wrapper_cart{
  position: relative;
  width: 50px;
  height: 50px;
}
.quantity_cart{
  position: absolute;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 20px;
    color: #fff;
    font-size: 16px;
    background: #ee4266;
    right: 10px;
    text-align: center;
}
.cart_link{
  position: absolute;
  top: 100%;
  right: 0;
  width: 500px;
  display: none;
  z-index: 100;
  overflow-y: scroll;
  max-height: 500px;
}
#cart_link::-webkit-scrollbar{
    width: 6px;
    background-color: #F5F5F5;
} 
.wrapper_cart:hover > .cart_link{
  cursor:pointer;
  display: block;
  animation: fadeIn .8s ease;
}

.cart-info{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.cart-info::-webkit-scrollbar {
    width: 3px;
    background-color: #fff;
} 
.cart-info::-webkit-scrollbar-thumb {
    background-color: #acacac;
    border-radius: 6px;
}
.hiden{
  visibility: hidden;
}
.input_search{
  visibility: visible;
  animation: Search 0.5s linear;
}

.icon{
  color: white;
}
.button{
  background-color: #dba800;
  border: none;
}

.user_link{
  width: 150px;
  text-align: end;
  position: absolute;
  top: 97%;
  right: 10px;
  z-index: 10;
}
.user_link a{
  display: block;
  text-decoration: none;

}
@keyframes Search{
    0%{
      transform:translateX(5%);
    }
    100%{
      transform:translateX(0%);
    }
}
.item_cart{
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}
.item-img{
  margin-right: 10px;
}
.img-product{
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.item-name{
  width: 250px;
}
.name-product{
    white-space: wrap; 
    min-width: 50px; 
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.item_cart:hover{
    background-color: rgb(122, 122, 122);
}
.footer-cart{
  display: flex;
  justify-content: space-around;
}
.data_user{
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
}
@media only screen and (max-width:1024px){
  .User,.Cart{
    display: none;
  }
  @keyframes Search{
    0%{
      transform:translateX(5%);
    }
    100%{
      transform:translateX(0%);
    }
  }
}
@keyframes fadeIn{
  0%{
      opacity: 0.5;
       transform: translateY(-100%);
  }
  100%{
      opacity: 1;
      transform: translateY(0%);
  }
}
</style>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/Auth.store";
import HeaderShop from "../components/HeaderShop.vue";
import EditUser from "../components/EditUser.vue";
import toastsVue from "../components/toasts.vue";
export default {
	data(){
		return{
			checkedit:false,
		}
	},
	components:{
		HeaderShop,
		EditUser,
		toastsVue
	},
	computed: {
		...mapState(useAuthStore, {
			currentUser: "user",
		}),
	},
	methods:{
		showedit(){
			if(!this.checkedit){
				this.checkedit=true;
			}
			else{
				this.checkedit=false;
			}
		},

	}
};
</script>
<template>
	<HeaderShop></HeaderShop>
	<toastsVue></toastsVue>
	<div style="display: flex;">
	<div v-if="currentUser" style="margin: 100px;">
		<header class="jumbotron">
			<h3>
				Thông tin người dùng
			</h3>
		</header>
		<div class="row">
			<div class="col-md-10">
				<p class="text-break">
					<strong>Tên đăng nhập:</strong>
					{{ currentUser.username }}
				</p>
				<p>
					<strong>E-mail:</strong>
					{{ currentUser.email }}
				</p>
			</div>
		</div>
		<router-link to="/">
			<button class="btn btn-danger">Trở về</button>
		</router-link>
		<button class="btn btn-warning text-light" style="margin-left: 20px;" @click="showedit">Hiệu chỉnh</button>
	</div>
	<div v-if="checkedit" style="display: flex;flex-direction: column;justify-content: center;">
			<EditUser :user="currentUser"></EditUser>
	</div>	
</div>
</template>
<style scoped>   
    h3{
		margin-bottom: 25px;
        font-family: serif;
    font-weight: bold;
    font-size:35px;
    font-style: italic;
    color: rgb(139, 96, 1);
    }
	</style>

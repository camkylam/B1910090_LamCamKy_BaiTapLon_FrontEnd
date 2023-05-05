import {createRouter,createWebHistory } from "vue-router";
import ShopView from "@/views/ShopView.vue";

const routes = [
    {
        path: "/",
        name: "ShopMain",
        component: ShopView,
    },
    {
        path: "/Cart",
        name: "CartShop",
        component: () => import("@/views/CartShop.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginUser.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
    },
    {
        path: "/details/:id",
        name: "details",
        component: () => import("@/views/DetailsProduct.vue"),
    },
    {
        path: "/addproduct",
        name: "addproduct",
        component: () => import("@/views/AddProduct.vue"),
    },
    {
        path: "/editproduct/:id",
        name: "editproduct",
        component: () => import("@/views/EditProduct.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/UserProfile.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/Adminview.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/banhsinhnhat",
        name: "banhsinhnhat",
        component: () => import("@/views/BanhSinhNhat.vue"),
    },
    {
        path: "/cupcake",
        name: "cupcake",
        component: () => import("@/views/CupCake.vue"),
    },
    {
        path: "/bmy",
        name: "banhmy",
        component: () => import("@/views/Banhmy.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
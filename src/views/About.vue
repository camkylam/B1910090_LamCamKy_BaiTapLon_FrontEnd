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
    <HeaderShop></HeaderShop>
    <section class="about">
         <div class="content">
            <p>Tại sao lại chọn Bakery</p><br><br>
            <ol>
               <li><b>Về an toàn vệ sinh thực phẩm:</b> Bakery cam kết không sử dụng chất phụ gia, chất bảo quản, hương liệu trong bánh. Nguyên liệu của Bakery cũng được lựa chọn rất kỹ càng, có nguồn gốc xuất xứ rõ ràng, đảm bảo an toàn vệ sinh cho mọi thực khách</li>
               <li><b>Đa dạng mẫu mã, kiểu dáng</b> cung cấp đa dạng các mẫu bánh sinh nhật, bánh mỳ, bánh bao,....</li>
               <li><b>Cam kết giao hàng đúng thời gian:</b> luôn chuẩn bị, hoàn thành sản phẩm theo yêu cầu của khách từ sớm để kịp cho việc vận chuyển đúng hạn. <b>TẬN TÂM</b> và <b>NHIỆT TÌNH</b> cho quý khách.</li>
               <li><b>Đội ngũ nhân viên chuyên nghiệp, nhiệt tình:</b> đội ngũ nhân viên cũng hết sức thân thiện, dễ thương và sẵn sàng tư vấn cũng như giải đáp thắc mắc cho mọi khách hàng.</li>
            </ol>
            <router-link to="/">
			<button class="btn btn-success">Liên hệ ngay</button>
		</router-link>
        </div>
    </section>

    <section class="introduce" id="introduce">
        <div class="content">
            <span style="color: #ce2448;">Bánh sinh nhật</span>
            <p>Bánh sinh nhật thường xuất hiện trong những bữa tiệc sinh nhật, tiệc cưới, tiệc mừng hay những buổi lễ quan trọng khác. Tuy nhiên bánh sinh nhật ngày nay trở nên thông dụng hơn trong cuộc sống của chúng ta, bánh sinh nhật là một món ăn ngọt có dạng cốt như một chiếc bánh bông lan xốp được dùng kem dày phủ lên để tăng hương vị và dùng để thực hiện trang trí cho chiếc bánh thêm hấp dẫn, bắt mắt. </p>
            <router-link to="/banhsinhnhat">
			<button class="btn btn-success">Đến ngay nào</button>
		</router-link>
        </div>
        <div class="image">
            <img src="https://diachiquanngon.com/wp-content/uploads/2020/10/Tiem_banh_Bao_Ngoc_Sai_Gon-4141.jpg" alt="">
        </div>
    </section>

    <section class="introduce" id="introduce">
        <div class="image">
            <img src="https://i-giadinh.vnecdn.net/2021/09/04/Thnhphm2-1630736406-8412-1630736488.jpg" alt="">
        </div>
        <div class="content">
            <span style="color: #ce2448;">Bánh mì</span>
            <p>Bánh mì (bread): là các loại bánh được hình thành từ các loại nguyên liệu cơ bản như bột mì, men, muối, nước và các nguyên liệu bổ sung khác để tạo nên một dạng bánh xốp, dai, giòn và đặc trưng theo từng loại. bánh mì ngọt là các loại bánh có vỏ mềm, ruột xốp và thường được kết hợp với các nguyên liệu khác để tạo hình.
               </p>
               <router-link to="/bmy">
			<button class="btn btn-success">Đến ngay nào</button>
		</router-link>
        </div>
    </section>
   
    <section class="introduce" id="introduce">
        <div class="content">
            <span style="color: #ce2448;">Bánh cupcake</span>
            <p>Cupcake là chiếc bánh nhỏ xinh, nhiều màu sắc sặc sỡ được phối hợp vô cùng hài hòa và bắt mắt. Chiếc bánh Cupcake thật ra là một chiếc bánh gato mini, được đựng trong những tờ giấy mỏng hoặc là lá nhôm có hình dạng “cup”, đó cũng là nguồn gốc tên của chiếc bánh này. Tuy nhỏ nhưng bề mặt bánh được trang trí bằng đủ loại màu sắc bằng kem hoặc kẹo, các loại mứt trái cây….</p>
            <router-link to="/cupcake">
			<button class="btn btn-success ">Đến ngay nào</button>
		</router-link>
        </div>
        <div class="image">
            <img src="https://hc.com.vn/i/ecommerce/media/ckeditor_2940870.jpg" alt="">
        </div>
    </section><br><br>
    <section class="introduce" id="introduce">
        <div class="content">
            <span style="color: #ce2448;"><b>HÃY ĐẾN VỚI FLOWER CHÚNG TÔI CAM KẾT SẼ HOÀN TIỀN 100% NHỮNG SẢN PHẨM NÀO CÓ DẤU HIỆU HƯ HỎNG</b></span>
        </div>
    </section>
</template>

<style scoped>

.about .content p {
    font-family: serif;
    font-weight: bold;
    font-style: italic;
    color: rgb(139, 96, 1);
    margin-top: 45px;
    text-align: center;
    font-size: 3rem;
}

ol li {
    font-size: 18px;
    margin-left: 3pc;
    margin-right: 3pc;
    text-align: start;
    text-decoration: black;
}

.about .content .btn {
    display: inline-block;
    width: auto;
    margin-left: 55px;
}

.introduce {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 32px;
}

.introduce .image {
    flex: 1 1 40rem;
    padding-top: 5rem;
}

.introduce .image img {
    width: 90%;
    margin-left: 25px;
}

.introduce .content {
    text-align: center;
    flex: 1 1 39rem;
}

.introduce .content p {
    text-align: justify;
    font-size: 20px;
    color: black;
   
}

.introduce .content span {
    font-family: serif;
    font-style: italic;
    font-weight: bold;
    font-size: 2rem;
    color: #666;
}

</style>
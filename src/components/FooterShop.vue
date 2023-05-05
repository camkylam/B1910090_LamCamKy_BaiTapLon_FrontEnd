<template>
<footer class="text-center text-lg-start bg text-muted">
  <section class="">
    <div class="container text-center text-md-start mt-5 pt-4">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"> 
          <h3>BAKERY</h3>
         <p>Ngon hơn và giá cả hợp lý hơn. Đó là những gì bạn nhận được khi mua hàng tại Bakery. Kết nối với chúng tôi để hiểu Bakery nhiều hơn nữa!</p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            SẢN PHẨM
          </h6>
          <p>
            <router-link to="/banhsinhnhat" class="text-reset" aria-current="page">
            Bánh Sinh Nhật
            </router-link>
          </p>
          <p>
            <router-link to="/cupcake" class="text-reset" aria-current="page">
            Bánh cupcake
            </router-link>
          </p>
          <p>
            <router-link to="/bmy" class="text-reset" aria-current="page">
            Bánh Mỳ
            </router-link>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Links nhanh
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            LIÊN HỆ
          </h6>
          <p><i class="fas fa-home me-3"></i>Ninh Kiều - Cần Thơ</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            camky@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> 0325617015</p>
          <p><i class="fas fa-print me-3"></i> 0326889223</p>
        </div>
      </div>
    </div>
  </section>
</footer>
</template>
<style scoped>
  .bg{
    background-color: #5a330f;
    color: white;
  }
  h3{
    font-size: 2rem;
    color: rgb(214, 201, 14);
    margin-bottom: 2rem;
    text-transform: capitalize;
  }
  h6{
    color: rgb(214, 201, 14);
  }
  p {
    color: white
  }
</style>
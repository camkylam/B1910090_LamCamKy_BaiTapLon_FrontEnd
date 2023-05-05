<script>
export default {
	props: {
		products: { type: Object, required: true },
	},
};
</script>
<template>
	<div class="d-flex">
		<div class="p-1 d-fex flex-column">
			<img :src=" products.img" alt="img" width="100">
		</div>
        <div>
            <div class="p-1">
                <strong>Loại sản phẩm:</strong>
                {{products.categories}}
            </div>
            <div class="p-1">
                <strong>Giá :</strong>
                {{products.price}}000đ
            </div>

        </div>
	</div>
</template>

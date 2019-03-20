<template>
    <div>
        <p
            v-for="product in products"
            :key="product.id"
        >
            {{ product.title }} - {{ product.price | currency }} （库存：{{product.inventory}}）
            <br>
            <el-button
                :disabled="!product.inventory"
                @click="addProductToCart(product)"
                type="warning"
                size="small"
            >
                加入购物车
            </el-button>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: mapState({
        products: state => state.products.all
    }),
    methods: mapActions('cart', [
        'addProductToCart'
    ]),
    created () {
        this.$store.dispatch('products/getAllProducts');
    }
};
</script>
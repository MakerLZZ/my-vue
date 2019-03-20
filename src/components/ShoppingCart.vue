<template>
    <div class="cart">
        <!-- <h2>Your Cart</h2> -->
        <p v-show="!products.length"><i>购物车已经空了~~</i></p>
        <div>
            <p
                v-for="product in products"
                :key="product.id"
            >
                {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
            </p>
        </div>
        <p>总价: {{ total | currency }}</p>
        <p>
            <el-button
                :disabled="!products.length"
                @click="checkout(products)"
                type="danger"
                size="small"
            >结算</el-button>
        </p>
        <p v-show="checkoutStatus">结算 {{ checkoutStatus }}</p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    },
    methods: {
        checkout (products) {
            this.$store.dispatch('cart/checkout', products);
        }
    }
};
</script>
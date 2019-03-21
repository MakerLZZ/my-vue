<template>
    <div>
        <h2 id="状态管理"><a
                href="#状态管理"
                class="headerlink"
                title="状态管理"
                data-scroll=""
            >状态管理</a></h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://vuex.vuejs.org/zh/"
                target="_blank"
            >API地址</a>
        </p>
        <h3
            id="购物车案例"
            data-scroll-id="购物车案例"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#购物车案例"
                class="headerlink"
                title="购物车案例"
                data-scroll=""
            >购物车案例</a></h3>
        <ul>
            <li>
                <p><strong>商品列表</strong></p>
                <ProductList />
            </li>
            <li>
                <p><strong>购物车列表</strong></p>
                <ShoppingCart />
            </li>
            <li>
                <p><strong>代码地址：</strong><a
                        href="https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart"
                        target="_blank"
                    >传送门</a></p>
            </li>
        </ul>

    </div>
</template>

<script>
import ProductList from '../../components/ProductList';
import ShoppingCart from '../../components/ShoppingCart';
export default {
    components: {
        ProductList,
        ShoppingCart
    }
};
</script>
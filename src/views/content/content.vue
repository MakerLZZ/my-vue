<template>
    <div
        class="content"
        ref="content"
    >
        <h1>API</h1>
        <Data />
        <Dom />
        <Lifecycle />
    </div>
</template>

<script>
import './content.css';
import Data from '../demo/data';
import Dom from '../demo/dom';
import Lifecycle from '../demo/lifecycle';
export default {
    components: {
        Data,
        Dom,
        Lifecycle
    },
    data() {
        return {
            scrollTop: 0
        };
    },
    mounted() {
        let that = this;
        window.addEventListener('scroll', () => {
            that.handleScroll();
        });
    },
    methods: {
        /**
         * 处理滚动条滚动
         */
        handleScroll() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            
            // console.log(document.documentElement);
        },
        /**
         * 设置锚点样式
         */
        // setAnchorStyle() {

        // }

    }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
strong {
    font-weight: 600;
    color: #2c3e50;
}
// 中间内容
.content {
    position: relative;
    max-width: 680px;
    height: 600px;
    margin: 0 auto;
    padding: 2.2em 0;
    padding-left: 50px;

    > h1 {
        margin: 0 0 1em;
    }

    .test {
        height: 500px;
        background: #f1f1f1;
    }
}
</style>

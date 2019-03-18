<template>
    <div
        class="content"
        ref="content"
    >
        <h1>API</h1>
        <h2
            id="选项-数据"
            data-scroll-id="选项-数据"
            tabindex="-1"
            style="outline: none;"
        >
            <a
                href="#选项-数据"
                class="headerlink"
                title="选项 / 数据"
                data-scroll=""
            >选项 / 数据</a>
        </h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE"
                target="_blank"
            >API地址</a>
        </p>
        <h3 id="data">
            <a
                href="#data"
                class="headerlink"
                title="data"
                data-scroll=""
            >基础用法</a>
        </h3>
        <Data />
        <h3
            id="props"
            data-scroll-id="props"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#props"
                class="headerlink"
                title="props"
                data-scroll=""
            >props</a></h3>
        <ul>
            <li>
                <p><strong>类型</strong>：<code>Array&lt;string&gt; | Object</code></p>
            </li>
            <li>
                <p><strong>详细</strong>：</p>
                <p>props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。</p>
            </li>
            <li>
                <p><strong>示例</strong>：</p>
            </li>
            <li>
                <p><strong>参考</strong>：<a href="../guide/components.html#通过-Prop-向子组件传递数据">Props</a></p>
            </li>
        </ul>
    </div>
</template>

<script>
import './content.css';
import Data from '../demo/data';
export default {
    components: {
        Data
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

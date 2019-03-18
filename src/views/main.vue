<template>
    <div class="api-home">
        <header class="header">
            <svg
                class="icon"
                aria-hidden="true"
            >
                <use xlink:href="#el-icon-api-vue"></use>
            </svg>
            <span>Vue.js</span>
        </header>
        <main class="main">
            <Sidebar />
            <Content />
        </main>
        <!-- 三种引用图标的方法 -->
        <!-- <el-button
            type="primary"
            icon="el-icon-api-vue"
        >主要按钮</el-button>
        <icon class="el-icon-api-vue"></icon>
        <svg
            class="icon"
            aria-hidden="true"
        >
            <use xlink:href="#el-icon-api-vue"></use>
        </svg> -->
    </div>
</template>

<script>
import Sidebar from './sidebar';
import Content from '_v/content/content';
export default {
    components: {
        Sidebar,
        Content
    },
    data () {
        return {
            // msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<style lang="scss" scoped>
.api-home {
    height: 100%;
    // 头部
    .header {
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 60px;
        padding: 10px 60px;
        line-height: 40px;
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        transition: background-color 0.3s ease-in-out;

        .icon {
            width: 2.5em;
            height: 2.5em;
            vertical-align: -1em;
            fill: currentColor;
            overflow: hidden;
        }

        > span {
            font-weight: 600;
        }
    }
    // 主体
    .main {
        position: static;
        height: 100%;
        padding: 60px 60px 0 60px;
    }
}
</style>

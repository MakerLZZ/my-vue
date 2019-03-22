<template>
    <div>
        <div id="mobile-bar">
            <img
                class="menu-button"
                src="../assets/images/menu.png"
                alt=""
                @click="handleClickOpen"
            >
            <img
                class="logo"
                src="../assets/images/logo.png"
            />
        </div>
        <header id="header">
            <a
                id="logo"
                href="/"
            >
                <img
                    src="../assets/images/logo.png"
                    alt="vue logo"
                >
                <span>Vue.js</span>
            </a>
        </header>
        <main
            id="main"
            class="fix-sidebar"
        >
            <Sidebar :class="sidebarClassname" />
            <Content @handle-close-sidebar="handleClickClose" />
        </main>
    </div>
</template>

<script>
import Sidebar from './sidebar';
import Content from './content';
export default {
    components: {
        Sidebar,
        Content
    },
    data () {
        return {
            sidebarClassname: 'sidebar' // 侧拉菜单类名
        };
    },
    methods: {
        /**
         * 处理点击打开
         */
        handleClickOpen() {
            this.sidebarClassname = 'sidebar open';
        },
        /**
         * 处理点击关闭
         */
        handleClickClose() {
            this.sidebarClassname = 'sidebar';
        }
    }
};
</script>
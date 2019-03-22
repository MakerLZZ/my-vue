<template>
    <div
        class="content api with-sidebar"
        ref="content"
        @click="handleClickContent"
    >
        <h1>API +</h1>
        <!-- 构建项目模块 -->
        <ContentItem :content="project" />
        <!-- 采用公共组件（ContentItem）渲染 -->
        <!-- <Project /> -->

        <!-- data模块 -->
        <ContentItem :content="data" />
        <!-- 采用公共组件渲染（ContentItem） -->
        <!-- <Data /> -->

        <!-- Dom模块 -->
        <Dom />

        <!-- 生命周期模块 -->
        <Lifecycle />

        <!-- 组件模块 -->
        <Com />

        <!-- 指令模块 -->
        <Ins />

        <!-- 路由模块 -->
        <Router />

        <!-- 状态管理模块 -->
        <Vuex />
    </div>
</template>

<script>
import '../assets/css/content.css';
// import Project from '../demo/project';
// import Data from '../test/data';
// import Data from '../demo/data';
import Dom from './demo/dom';
import Lifecycle from './demo/lifecycle';
import Com from './demo/_component';
// import Ins from '../test/ins';
import Ins from './demo/ins';
import Router from './demo/router';
import Vuex from './demo/vuex';

import {projectData, datas} from '../api/content.js';
import ContentItem from '../components/ContentItem';
export default {
    components: {
        // Project,
        // Data,
        Dom,
        Lifecycle,
        Ins,
        Router,
        Vuex,
        ContentItem,
        Com
    },
    data() {
        return {
            scrollTop: 0,
            project: projectData,
            data: datas
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
        /**
         * 处理点击内容
         */
        handleClickContent() {
            this.$emit('handle-close-sidebar');
        }

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
</style>
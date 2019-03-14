<template>
    <div class="api-home">
        <header>我来组成头部</header>
        <main>我来组成身体</main>
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
export default {
    data () {
        return {
            // msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<style lang="scss" scoped>
.api-home {
    color: #000;
}
</style>

<template>
    <div class="sidebar">
        <div class="sidebar-box">
            <div class="list">
                <h2>API</h2>
                <ul class="menu-root">
                    <li>
                        <a
                            class="section-link"
                            data-scroll=""
                            href="#项目搭建"
                        >项目搭建</a>
                    </li>
                    <li><a
                            class="section-link"
                            data-scroll=""
                            href="#选项-数据"
                        >选项 / 数据</a></li>
                    <ul class="menu-sub">
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#data-基础用法"
                            >基础用法</a></li>
                        <!-- <li><a
                                class="section-link"
                                data-scroll=""
                                href="#data-进阶用法"
                            >进阶用法</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#data-特殊案例"
                            >特殊案例</a></li> -->
                    </ul>
                    <li><a
                            class="section-link"
                            data-scroll=""
                            href="#选项-DOM"
                        >选项 / DOM</a></li>
                    <ul class="menu-sub">
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#el"
                            >el</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#template"
                            >template</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#render"
                            >render</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#renderError"
                            >renderError</a></li>
                    </ul>
                    <li><a
                            class="section-link"
                            data-scroll=""
                            href="#选项-生命周期钩子"
                        >选项 / 生命周期钩子</a></li>
                    <ul class="menu-sub">
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#create-mount"
                            >create-mount</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#update"
                            >update</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#destroy"
                            >destroy</a></li>
                    </ul>
                    <li><a
                            class="section-link"
                            data-scroll=""
                            href="#指令"
                        >指令</a></li>
                    <ul class="menu-sub">
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-focus"
                            >v-focus</a></li>
                    </ul>
                    <li><a
                            class="section-link"
                            data-scroll=""
                            href="#路由"
                        >路由</a></li>
                    <ul class="menu-sub">
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#router-基础用法"
                            >基础用法</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#路由懒加载"
                            >路由懒加载</a></li>
                    </ul>
                    <li><a
                            class="section-link"
                            data-scroll=""
                            href="#状态管理"
                        >状态管理</a></li>
                    <ul class="menu-sub">
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#购物车案例"
                            >购物车案例</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 侧边菜单
.sidebar {
    position: fixed;
    z-index: 10;
    top: 61px;
    left: 0;
    bottom: 0;
    border-right: 1px solid #e9e9e9;
    overflow-x: hidden;
    overflow-y: auto;

    .sidebar-box {
        width: 340px;
        padding: 40px 20px 60px 60px;
    }
}
</style>

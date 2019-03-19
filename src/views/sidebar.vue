<template>
    <div class="sidebar">
        <div class="sidebar-box">
            <div class="list">
                <h2>API</h2>
                <ul class="menu-root">
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
                                href="#beforeCreate"
                            >beforeCreate</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#created"
                            >created</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#beforeMount"
                            >beforeMount</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#mounted"
                            >mounted</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#beforeUpdate"
                            >beforeUpdate</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#updated"
                            >updated</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#activated"
                            >activated</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#deactivated"
                            >deactivated</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#beforeDestroy"
                            >beforeDestroy</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#destroyed"
                            >destroyed</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#errorCaptured"
                            >errorCaptured</a></li>
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
                                href="#v-text"
                            >v-text</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-html"
                            >v-html</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-show"
                            >v-show</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-if"
                            >v-if</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-else"
                            >v-else</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-else-if"
                            >v-else-if</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-for"
                            >v-for</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-on"
                            >v-on</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-bind"
                            >v-bind</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-model"
                            >v-model</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-slot"
                            >v-slot</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-pre"
                            >v-pre</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-cloak"
                            >v-cloak</a></li>
                        <li><a
                                class="section-link"
                                data-scroll=""
                                href="#v-once"
                            >v-once</a></li>
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
    overflow-x: hidden;
    overflow-y: auto;

    .sidebar-box {
        width: 340px;
        padding: 40px 20px 60px 60px;
    }
}
</style>

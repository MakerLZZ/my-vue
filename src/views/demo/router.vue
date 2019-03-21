<template>
    <div>
        <h2 id="路由"><a
                href="#路由"
                class="headerlink"
                title="路由"
                data-scroll=""
            >路由</a></h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://router.vuejs.org/zh/"
                target="_blank"
            >API地址</a>
        </p>
        <h3
            id="router-基础用法"
            data-scroll-id="router-基础用法"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#router-基础用法"
                class="headerlink"
                title="基础用法"
                data-scroll=""
            >基础用法</a></h3>
        <ul>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `import Vue from 'vue';\n` +
                `import Router from 'vue-router';\n` +
                `import main from '_v/main';\n` +
                `Vue.use(Router);\n` +
                `export default new Router({\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;routes: [{\n` +
                `\tpath: '/',\n` +
                `\tname: 'home',\n` +
                `\tcomponent: main\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}]\n` +
                `});`}}</code></pre>
            </li>
        </ul>
        <h3
            id="路由懒加载"
            data-scroll-id="路由懒加载"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#路由懒加载"
                class="headerlink"
                title="路由懒加载"
                data-scroll=""
            >路由懒加载</a></h3>
        <ul>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `import Vue from 'vue';\n` +
                `import Router from 'vue-router';\n` +
                `Vue.use(Router);\n` +
                `export default new Router({\n` +
                    `&nbsp;&nbsp;&nbsp;&nbsp;routes: [{\n` +
                        `\tpath: '/',\n` +
                        `\tname: 'home',\n` +
                        `\tcomponent: resolve => require(['_v/main'], resolve)\n` +
                    `&nbsp;&nbsp;&nbsp;&nbsp;}]\n` +
                `});`}}</code></pre>
            </li>
        </ul>
    </div>
</template>
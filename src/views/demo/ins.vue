<template>
    <div>
        <h2 id="指令"><a
                href="#指令"
                class="headerlink"
                title="指令"
                data-scroll=""
            >指令</a></h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4"
                target="_blank"
            >API地址</a>
        </p>
        <h3
            id="v-focus"
            data-scroll-id="v-focus"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#v-focus"
                class="headerlink"
                title="v-focus"
                data-scroll=""
            >v-focus</a></h3>
        <ul>
            <li>
                <p><strong>描述：</strong></p>
                <p>自定义指令，在Dom挂载时使用该指令的元素将触发focus方法</p>
            </li>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `// 注册一个全局自定义指令 'v-focus'\n` +
                `Vue.directive('focus', {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;// 当被绑定的元素插入到 DOM 中时……\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;inserted: function (el) {\n` +
                `\t// 聚焦元素\n` +
                `\tel.focus()\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `})`}}</code></pre>
                <pre><code class="hljs js">{{
                `// 局部指令，组件中也接受一个 directives 的选项\n` +
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;directives: {\n` +
                `\tfocus: {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;// 指令的定义\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;inserted(el) {\n` +
                `\t\tel.focus();\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `\t}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
                <pre><code class="hljs html">&#60;p&#62;&#60;input v-focus /&#62;&#60;/p&#62;</code></pre>
            </li>
        </ul>
    </div>
</template>
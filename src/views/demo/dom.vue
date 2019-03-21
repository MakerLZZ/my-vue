<template>
    <div>
        <h2
            id="选项-DOM"
            data-scroll-id="选项-DOM"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#选项-DOM"
                class="headerlink"
                title="选项 / DOM"
                data-scroll=""
            >选项 / DOM</a></h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-DOM"
                target="_blank"
            >API地址</a>
        </p>
        <h3
            id="el"
            data-scroll-id="el"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#el"
                class="headerlink"
                title="el"
                data-scroll=""
            >el</a></h3>
        <ul>
            <li>
                <p><strong>示例html：</strong></p>
                <pre><code class="hljs html">{{
                `&#60;!DOCTYPE html&#62;\n` +
                `&#60;html&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;head&#62;\n` +
                `\t&#60;meta charset="utf-8"&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;/head&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;body&#62;\n` +
                `\t&#60;div id="test"&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;/body&#62;\n` +
                `&#60;/html&#62;\n`}}</code></pre>
            </li>
            <li>
                <p><strong>示例1：</strong>render函数渲染的DOM替换&#60;div id="test"&#62;</p>
                <pre><code class="hljs js">{{
                `new Vue({\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;el: '#test',\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;router,\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;store,\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;render: h => h(App)\n` +
                `})`}}</code></pre>
            </li>
            <li>
                <p><strong>示例2：</strong>字符串模版替换&#60;div id="test"&#62;</p>
                <pre><code class="hljs js">{{
                `new Vue({\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;el: '#test',\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;router,\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;components: { APP },\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;template: '&#60;APP/&#62;'\n` +
                `})`}}</code></pre>
            </li>
            <li>
                <p><strong>示例3：</strong>手动挂载且不存在render函数和template属性</p>
                <pre><code class="hljs js">{{
                `new Vue({\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;router,\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;store,\n` +
                `}).$mount('#test')`}}</code></pre>
            </li>
        </ul>
        <h3
            id="template"
            data-scroll-id="template"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#template"
                class="headerlink"
                title="template"
                data-scroll=""
            >template</a></h3>
        <ul>
            <li>
                <p><strong>单文件组件使用方式：</strong></p>
                <pre><code>{{
                `&#60;template&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;div&#62; // template只能存在一个根元素\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div&#62;\n` +
                `&#60;/template&#62;\n`}}</code></pre>
            </li>
        </ul>
        <h3
            id="render"
            data-scroll-id="render"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#render"
                class="headerlink"
                title="render"
                data-scroll=""
            >render</a></h3>
        <ul>
            <li>
                <p><strong>字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力</strong></p>
                <p>当使用render函数描述虚拟DOM时，Vue提供createElement函数构建虚拟DOM，约定的简写叫h。</p>
                <p><strong>参考：</strong><a
                        href="https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0"
                        target="_blank"
                    >createElement参数</a></p>
            </li>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{       
                `render: (h, context) => {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;return h('div', {\n` +
                `\tprops: { // 给div绑定value属性\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;value: ''\n` +
                `\t},\n` +
                `\tstyle: { // 给div绑定样式\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;width: '30px'\n` +
                `\t},\n` +
                `\ton: { // 给div绑定点击事件\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;click: () => {\n` +
                `\t\tconsole.log('点击事件')\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `\t}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;})\n` +
                `}`}}</code></pre>
            </li>
        </ul>
        <h3
            id="renderError"
            data-scroll-id="renderError"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#renderError"
                class="headerlink"
                title="renderError"
                data-scroll=""
            >renderError</a></h3>
        <ul>
            <li>
                <p><strong>描述：</strong>当<code>render</code>函数遭遇错误时，提供另外一种渲染输出。</p>
            </li>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `new Vue({\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;render (h) {\n` +
                `\tthrow new Error('test')\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;renderError (h, err) {\n` +
                `\treturn h('p', { style: { color: 'red' } }, err.stack)\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}).$mount('#ele')`}}</code></pre>
            </li>
        </ul>
    </div>
</template>
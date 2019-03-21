<template>
    <div>
        <h2 id="组件"><a
                href="#组件"
                class="headerlink"
                title="组件"
                data-scroll=""
            >组件</a></h2>
        <h3
            id="com-init"
            data-scroll-id="com-init"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#com-init"
                class="headerlink"
                title="com-init"
                data-scroll=""
            >组件注册父与子</a></h3>
        <ul>
            <li>
                <p><strong>父组件：</strong></p>
                <pre><code class="hljs js">{{
                `&#60;template&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;Child :data="message" @father-method="handleCallback" /&#62;\n` +
                `&#60;/template&#62;\n` +
                `&#60;script&#62;\n` +
                `import Child from './Child'\n` +
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;components: {\n` +
                `\tChild\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;data() {\n` +
                `\tmessage: '来自父组件'\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;methods: {\n` +
                `\thandleCallback(val) {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;console.log(val) // 处理子组件的回调\n` +
                `\t}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}\n` +
                `&#60;script&#62;`}}</code></pre>
            </li>
            <li>
                <p><strong>子组件：</strong></p>
                <pre><code class="hljs js">{{
                `&#60;template&#62;\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;&#60;input :value="message" @change="handleChange" /&#62;\n` +
                `&#60;/template&#62;\n` +
                `&#60;script&#62;\n` +
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;props: ['message']\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;methods: {\n` +
                `\thandleChange(val) {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;this.$emit('father-method', val);\n` +
                `\t}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}\n` +
                `&#60;script&#62;`}}</code></pre>
            </li>
        </ul>
    </div>
</template>
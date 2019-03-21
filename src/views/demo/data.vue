<template>
    <div>
        <h2
            id="选项-数据"
            data-scroll-id="选项-数据"
            tabindex="-1"
            style="outline: none;"
        >
            <a
                href="#选项-数据"
                class="headerlink"
                title="选项 / 数据"
                data-scroll=""
            >选项 / 数据</a>
        </h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE"
                target="_blank"
            >API地址</a>
        </p>
        <h3 id="data-基础用法">
            <a
                href="#data-基础用法"
                class="headerlink"
                title="基础用法"
                data-scroll=""
            >基础用法</a>
        </h3>
        <ul>
            <li>
                <p><strong>data：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;data() {\n` +
                `\treturn {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;data: 'I am data!' // 此处的data为key\n` +
                `\t};\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
                <pre><code class="hljs html">&#60;p&#62;Vue实例的数据对象绑定的data：{ {data} }&#60;/p&#62;</code></pre>
            </li>
            <li>
                <p><strong>props：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;props: {\n` +
                `\tprop: {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;type: String,\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;default() {\n` +
                `\t\treturn 'I am from father!';\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `\t}\n` +
                `\t// props: ['prop'], // 不使用默认值的用法\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
                <pre><code class="hljs html">&#60;p&#62;props可以是数组或对象，用于接收来自父组件的数据：{ {prop} }&#60;/p&#62;</code></pre>
            </li>
            <li>
                <p><strong>propsData：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;mounted() {\n` +
                `\tvar FatherComponent = Vue.extend({\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;template: '&#60;p&#62;子组件内部值：{ {kidData} }，父组件传递的值：{ {fatherData} }（模拟）&#60;/p&#62;',\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;data() {\n` +
                `\t\treturn {\n` +
                `\t\t&nbsp;&nbsp;&nbsp;&nbsp;kidData: 'I am kid!'\n` +
                `\t\t}\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;},\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;props: ['fatherData']\n` +
                `\t});\n` +
                `\tnew FatherComponent({\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;propsData: {\n` +
                `\t\tfatherData: 'I am father!'\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `\t}).$mount('#propsData');\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
                <pre><code class="hljs html">&#60;p id="propsData"&#62;&#60;/p&#62;</code></pre>
            </li>
            <li>
                <p><strong>computed：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;data() {\n` +
                `\treturn {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;compute: 665,\n` +
                `\t};\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;computed: {\n` +
                `\tplusOne() {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;return this.compute + 1;\n` +
                `\t}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
                <pre><code class="hljs html">&#60;p&#62;返回处理后的数据：{ {plusOne} }&#60;/p&#62;</code></pre>
            </li>
            <li>
                <p><strong>watch：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;watch: {\n` +
                `\tnewVal: function (val, oldVal) {\n` +
                `\t&nbsp;&nbsp;&nbsp;&nbsp;this.oldVal = oldVal;\n` +
                `\t}\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
                <pre><code class="hljs html">{{`&#60;p&#62;&#60;el-input-number size="small" v-model="newVal"&#62;&#60;/el-input-number&#62;&#60;/p&#62;\n` +
                `&#60;p&#62;键是需要观察的表达式，值是对应回调函数，新值{ {plusOne} }!，旧值{ {oldVal} }!&#60;/p&#62;`}}</code></pre>
            </li>
        </ul>
        <!-- <h3 id="data-进阶用法">
            <a
                href="#data-进阶用法"
                class="headerlink"
                title="进阶用法"
                data-scroll=""
            >进阶用法</a></h3>
        <ul>
            <li>
                <p><strong>暂无</strong></p>
            </li>
        </ul>
        <h3 id="data-特殊案例">
            <a
                href="#data-特殊案例"
                class="headerlink"
                title="特殊案例"
                data-scroll=""
            >特殊案例</a></h3>
        <ul>
            <li>
                <p><strong>暂无</strong></p>
            </li>
        </ul> -->
    </div>
</template>
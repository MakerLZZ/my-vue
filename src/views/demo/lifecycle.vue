<template>
    <div>
        <h2
            id="选项-生命周期钩子"
            data-scroll-id="选项-生命周期钩子"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#选项-生命周期钩子"
                class="headerlink"
                title="选项 / 生命周期钩子"
                data-scroll=""
            >选项 / 生命周期钩子</a></h2>
        <p>
            <strong>参考：</strong>
            <a
                href="https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90"
                target="_blank"
            >API地址</a>
            <a
                href="https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA"
                target="_blank"
            >生命周期图示</a>
        </p>
        <h3
            id="create-mount"
            data-scroll-id="create-mount"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#create-mount"
                class="headerlink"
                title="create-mount"
                data-scroll=""
            >create/mount</a></h3>
        <ul>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` + 
                `&nbsp;&nbsp;&nbsp;&nbsp;beforeCreate() {\n` + 
                `\tconsole.group('beforeCreate 创建前状态===============》');\n` + 
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el); // undefined\n` + 
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data); // undefined\n` + 
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message);\n` + 
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` + 
                `&nbsp;&nbsp;&nbsp;&nbsp;created() {\n` + 
                `\tconsole.group('created 创建完毕状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el); // undefined\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data); // 已被初始化\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message); // 已被初始化\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` + 
                `&nbsp;&nbsp;&nbsp;&nbsp;beforeMount() {\n` + 
                `\tconsole.group('beforeMount 挂载前状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el); // 已被初始化\n` +
                `\tconsole.log(this.$el);\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data); // 已被初始化\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message); // 已被初始化\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` + 
                `&nbsp;&nbsp;&nbsp;&nbsp;mounted() {\n` + 
                `\tconsole.group('mounted 挂载结束状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el); // 已被初始化\n` +
                `\tconsole.log(this.$el);\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data); // 已被初始化\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message); // 已被初始化\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` + 
                `}`}}</code></pre>
            </li>
            <li>
                <p><strong>结果：</strong></p>
                <p><img src="../../assets/images/demo/life-c-m.png"></p>
            </li>
            <li>
                <p><strong>分析：</strong></p>
                <p><code>beforeCreat</code>钩子到<code>created</code>钩子之间开始监控Data对象数据变化，在<code>created</code>时Data对象已初始化</p>
                <p><code>beforeMount</code>钩子时dom还是{ { message } }，这里运用虚拟dom技术，在<code>mounted</code>挂载时再把值渲染进去</p>
            </li>
        </ul>
        <h3
            id="update"
            data-scroll-id="update"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#update"
                class="headerlink"
                title="update"
                data-scroll=""
            >update</a></h3>
        <ul>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;beforeUpdate() {\n` +
                `\tconsole.group('beforeUpdate 更新前状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el);\n` +
                `\tconsole.log(this.$el);\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data);\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message);\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;updated() {\n` + 
                `\tconsole.group('updated 更新完成状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el);\n` +
                `\tconsole.log(this.$el);\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data);\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message);\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
            </li>
            <li>
                <p><strong>结果：</strong></p>
                <p><img src="../../assets/images/demo/life-u.png"></p>
            </li>
            <li>
                <p><strong>分析：</strong></p>
                <p>数据变化了dom随时更新</p>
            </li>
        </ul>
        <h3
            id="destroy"
            data-scroll-id="destroy"
            tabindex="-1"
            style="outline: none;"
        ><a
            href="#destroy"
            class="headerlink"
            title="destroy"
            data-scroll=""
        >destroy</a></h3>
        <ul>
            <li>
                <p><strong>示例：</strong></p>
                <pre><code class="hljs js">{{
                `export default {\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;beforeDestroy() {\n` +
                `\tconsole.group('beforeDestroy 销毁前状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el);\n` +
                `\tconsole.log(this.$el);\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data);\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message);\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;},\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;destroyed() {\n` + 
                `\tconsole.group('destroyed 销毁完成状态===============》');\n` +
                `\tconsole.log('%c%s', 'color:red', 'el     : ' + this.$el);\n` +
                `\tconsole.log(this.$el);\n` +
                `\tconsole.log('%c%s', 'color:red', 'data   : ' + this.$data);\n` +
                `\tconsole.log('%c%s', 'color:red', 'message: ' + this.message);\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;}\n` +
                `}`}}</code></pre>
            </li>
            <li>
                <p><strong>结果：</strong></p>
                <p><img src="../../assets/images/demo/life-d.png"></p>
            </li>
            <li>
                <p><strong>分析：</strong></p>
                <p><code>beforeDestroy</code>vue实例销毁前执行的钩子，<code>destroyed</code>vue实例销毁</p>
            </li>
        </ul>
    </div>
</template>
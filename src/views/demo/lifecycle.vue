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
            id="beforeCreate"
            data-scroll-id="beforeCreate"
            tabindex="-1"
            style="outline: none;"
        ><a
                href="#beforeCreate"
                class="headerlink"
                title="beforeCreate"
                data-scroll=""
            >beforeCreate/created</a></h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'test'
        };
    },
    beforeCreate: function () {
        console.group('beforeCreate 创建前状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el); //undefined
        console.log('%c%s', 'color:red', 'data   : ' + this.$data); //undefined 
        console.log('%c%s', 'color:red', 'message: ' + this.message);
    },
    created: function () {
        console.group('created 创建完毕状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el); //undefined
        console.log('%c%s', 'color:red', 'data   : ' + this.$data); //已被初始化 
        console.log('%c%s', 'color:red', 'message: ' + this.message); //已被初始化
    },
    beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el); //已被初始化
        console.log(this.$el);
        console.log('%c%s', 'color:red', 'data   : ' + this.$data); //已被初始化  
        console.log('%c%s', 'color:red', 'message: ' + this.message); //已被初始化  
    },
    mounted: function () {
        console.group('mounted 挂载结束状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el); //已被初始化
        console.log(this.$el);
        console.log('%c%s', 'color:red', 'data   : ' + this.$data); //已被初始化
        console.log('%c%s', 'color:red', 'message: ' + this.message); //已被初始化 
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el);
        console.log(this.$el);
        console.log('%c%s', 'color:red', 'data   : ' + this.$data);
        console.log('%c%s', 'color:red', 'message: ' + this.message);
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el);
        console.log(this.$el);
        console.log('%c%s', 'color:red', 'data   : ' + this.$data);
        console.log('%c%s', 'color:red', 'message: ' + this.message);
    },
    beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el);
        console.log(this.$el);
        console.log('%c%s', 'color:red', 'data   : ' + this.$data);
        console.log('%c%s', 'color:red', 'message: ' + this.message);
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log('%c%s', 'color:red', 'el     : ' + this.$el);
        console.log(this.$el);
        console.log('%c%s', 'color:red', 'data   : ' + this.$data);
        console.log('%c%s', 'color:red', 'message: ' + this.message);
    }
};
</script>


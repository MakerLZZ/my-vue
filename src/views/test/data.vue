<template>
    <div>
        <ul>
            <li>
                <p><strong>data：</strong></p>
                <p>Vue实例的数据对象绑定的data：<strong>{{data}}</strong></p>
            </li>
            <li>
                <p><strong>props：</strong></p>
                <p>props可以是数组或对象，用于接收来自父组件的数据：<strong>{{prop}}</strong></p>
            </li>
            <li>
                <p><strong>propsData：</strong></p>
                <p id="propsData"></p>
            </li>
            <li>
                <p><strong>computed：</strong></p>
                <p>返回处理后的数据：<strong>{{plusOne}}!</strong></p>
            </li>
            <li>
                <p><strong>watch：</strong></p>
                <p>
                    <el-input-number
                        size="small"
                        v-model="newVal"
                    ></el-input-number>
                </p>
                <p>键是需要观察的表达式，值是对应回调函数，新值<strong>{{newVal}}!</strong>，旧值<strong>{{oldVal}}!</strong></p>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data() {
        return {
            data: 'I am data!',
            compute: 665,
            newVal: 0,
            oldVal: 0,
        };
    },
    props: {
        prop: {
            type: String,
            default() {
                return 'I am from father!';
            }
        }
    },
    // props: ['prop'], // 不使用 默认值
    computed: {
        /**
         * 加一计算
         */
        plusOne() {
            return this.compute + 1;
        }
    },
    watch: {
        /**
         * 监听input框的值
         */
        newVal: function (val, oldVal) {
            this.oldVal = oldVal;
        }
    },
    mounted() { // 测试 propsData
        var FatherComponent = Vue.extend({
            template: '<p>子组件内部值：<strong>{{kidData}}</strong>，父组件传递的值：<strong>{{fatherData}}</strong>（模拟）</p>',
            data() {
                return {
                    kidData: 'I am kid!'
                };
            },
            props: ['fatherData']
        });
        new FatherComponent({
            propsData: {
                fatherData: 'I am father!'
            }
        }).$mount('#propsData');
    }
};
</script>
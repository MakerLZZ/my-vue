<template>
    <div id="test"></div>
</template>

<script>
import Vue from 'vue';
export default {
    mounted() {
        var FatherComponent = Vue.extend({
            template: '<span>test</span>'
        });
        new FatherComponent({
            render () { // render (h) {
                throw new Error('test');
            },
            renderError (h, err) {
                return h('p', { style: { color: 'red' }}, err.stack);
            }
        }).$mount('#test');
    }

};
</script>
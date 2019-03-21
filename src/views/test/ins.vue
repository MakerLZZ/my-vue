<template>
    <p>
        <input
            v-focus
            placeholder="我将在页面挂载时选中"
        />
    </p>
</template>

<script>
export default {
    directives: {
        focus: {
            // 指令的定义
            inserted(el) {
                el.focus();
            }
        }
    }
};
</script>
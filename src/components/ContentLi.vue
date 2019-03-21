<template>
    <div>
        <div
            v-for="(item, key) in regroupPList"
            :key="key"
        >
            <p
                v-if="item.type === 'p'"
                v-html="item.str"
            ></p>
            <pre
                v-if="item.type === 'pre'"
                v-html="item.str"
            ></pre>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pList: Array,
        default() {
            return [];
        }
    },
    computed: {
        /**
         * 重组p标签列表数据
         */
        regroupPList() {
            let newPList = [];
            this.pList.forEach(item => {
                newPList.push({
                    type: item.type,
                    str: this.resortStr(item)
                });
            });
            return newPList;
        }
    },
    methods: {
        /**
         * 重排字符串
         */
        resortStr(item) {
            let keyArr = Object.keys(item);
            keyArr.splice(0 ,1); // 去除第一个参数（类型）
            let strArr = '';
            for (let i = 0; i < keyArr.length; i++) {
                for (let j = 0; j < keyArr.length; j++) {
                    if (item[keyArr[j]].sort === i) {
                        strArr += this.addTagToStr(keyArr[j], item[keyArr[j]]);
                    }
                }
            }
            return strArr;
        },
        /**
         * 给字符串增加标签
         */
        addTagToStr(type, obj) {
            switch (type) {
            case 'str': return obj.text;
            case 'code': return `<code>${obj.text}</code>`;
            case 'codeJs': return `<code class="hljs js">${obj.text}</code>`;
            case 'codeHtml': return `<code class="hljs html">${obj.text}</code>`;
            case 'strong': return `<strong>${obj.text}</strong>`;
            case 'img': return `<img src="${obj.src}" alt="${obj.text}" />`;
            case 'a': return `<a href="${obj.href}" alt="${obj.text}">${obj.text}</a>`;
            default: return obj.text;
            }
        }
    }
};
</script>


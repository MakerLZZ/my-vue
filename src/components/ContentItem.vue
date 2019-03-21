<template>
    <div>
        <h2 :id="content.h2Id"><a
                :href="`#${content.h2Id}`"
                class="headerlink"
                :title="content.h2Id"
                data-scroll=""
            >{{content.h2Titel}}</a></h2>
        <p v-if="content.isH2Detail">
            <strong>参考：</strong>
            <a
                v-for="(item, key) in content.h2Detail"
                :key="key"
                :href="item.href"
                target="_blank"
            >{{item.name}}</a>
        </p>
        <div
            v-for="(item, key) in content.subMenu"
            :key="key"
        >
            <h3
                :id="item.h3Id"
                :data-scroll-id="item.h3Id"
                tabindex="-1"
                style="outline: none;"
            ><a
                    :href="`#${item.h3Id}`"
                    class="headerlink"
                    :title="item.h3Id"
                    data-scroll=""
                >{{item.h3Titel}}</a></h3>
            <ul>
                <li
                    v-for="(li, index) in item.ul"
                    :key="index"
                >
                    <ContentLi :pList="li.pList" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ContentLi from './ContentLi';
export default {
    components: {
        ContentLi
    },
    props: {
        content: Object,
        default() {
            return {};
        }
    }
};
</script>
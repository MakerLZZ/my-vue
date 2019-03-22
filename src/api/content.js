import projectDetail from '../assets/images/demo/project-detail.png';
// 项目搭建模块数据
const projectData = {
    h2Id: '项目搭建',
    h2Titel: '项目搭建',
    isH2Detail: false,
    subMenu: [{
        h3Id: 'project-ready',
        h3Titel: '项目准备',
        ul: [{
            pList: [{
                type: 'p',
                strong: {
                    text: '相关命令：',
                    sort: 0
                }
            },
            {
                type: 'p',
                str: {
                    text: '安装node，npm',
                    sort: 0
                }
            },
            {
                type: 'p',
                str: {
                    text: '安装webpack：npm install webpack -g',
                    sort: 0
                }
            },
            {
                type: 'p',
                str: {
                    text: '安装vue-cli：npm install vue-cli -g 参考',
                    sort: 0
                },
                a: {
                    href: 'https://cli.vuejs.org/zh/',
                    text: 'API地址',
                    sort: 1
                }
            }
            ]
        }]
    },
    {
        h3Id: 'project-create',
        h3Titel: '构建项目',
        ul: [{
            pList: [{
                type: 'p',
                strong: {
                    text: '相关命令：',
                    sort: 0
                }
            },
            {
                type: 'p',
                str: {
                    text: '构建项目（名称demo）：vue init webpack demo',
                    sort: 0
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Project name (demo) ',
                    sort: 0
                },
                str: {
                    text: '输入项目名称或直接回车确认名称',
                    sort: 1
                }
            },
            {
                type: 'p',
                str: {
                    text: '输入项目描述或者直接回车确认',
                    sort: 1
                },
                code: {
                    text: '? Project description (A Vue.js project) ',
                    sort: 0
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Author Maker',
                    sort: 0
                },
                str: {
                    text: '输入作者名称或直接回车确认',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Vue build (Use arrow keys)',
                    sort: 0
                },
                str: {
                    text: '选择Runtime + Compiler或Runtime-only',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Install vue-router? (Y/n)',
                    sort: 0
                },
                str: {
                    text: '根据需要选择是否配置路由',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Use ESlint to lint your code? (Y/n)',
                    sort: 0
                },
                str: {
                    text: '根据需要选择是否添加eslint',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Set up unit tests (Y/n)',
                    sort: 0
                },
                str: {
                    text: '根据需要选择是否配置单元测试',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Setup e2e tests with Nightwatch? (Y/n)',
                    sort: 0
                },
                str: {
                    text: '根据需要选择是否配置e2e测试',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: '? Should we run "npm Install" for you after the project has been creactd? (Use arrow keys)',
                    sort: 0
                },
                str: {
                    text: '根据需要选择打包工具',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: 'vue-cli · Generated "demo".',
                    sort: 0
                },
                str: {
                    text: '等待项目初始化...',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: 'npm install',
                    sort: 0
                },
                str: {
                    text: '安装依赖',
                    sort: 1
                }
            },
            {
                type: 'p',
                code: {
                    text: 'npm run dev',
                    sort: 0
                },
                str: {
                    text: '本地运行项目',
                    sort: 1
                }
            }
            ]
        }]
    },
    {
        h3Id: 'project-list',
        h3Titel: '项目目录',
        ul: [{
            pList: [{
                type: 'p',
                strong: {
                    text: '项目目录结构概览：',
                    sort: 0
                }
            },
            {
                type: 'p',
                img: {
                    src: projectDetail,
                    text: '项目目录',
                    sort: 0
                }
            }
            ]
        }]
    }
    ]
};
// 数据模块数据
const datas = {
    h2Id: '选项-数据',
    h2Titel: '选项 / 数据',
    isH2Detail: true,
    h2Detail: [{
        href: 'https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE',
        name: 'API地址'
    }],
    subMenu: [{
        h3Id: 'data-基础用法',
        h3Titel: '基础用法',
        ul: [{
            pList: [{
                type: 'p',
                strong: {
                    text: 'data：',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeJs: {
                    text: 'export default {\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;data() {\n' +
                '\treturn {\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;data: \'I am data!\' // 此处的data为key\n' +
                '\t};\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '}',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeHtml: {
                    text: '&#60;p&#62;Vue实例的数据对象绑定的data：{{data}}&#60;/p&#62;',
                    sort: 0
                }
            }
            ]
        },
        {
            pList: [{
                type: 'p',
                strong: {
                    text: 'props：',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeJs: {
                    text: 'export default {\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;props: {\n' +
                '\tprop: {\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;type: String,\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;default() {\n' +
                '\t\treturn \'I am from father!\';\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '\t}\n' +
                '\t// props: [\'prop\'], // 不使用默认值的用法\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '}',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeHtml: {
                    text: '&#60;p&#62;props可以是数组或对象，用于接收来自父组件的数据：{{prop}}&#60;/p&#62;',
                    sort: 0
                }
            }
            ]
        },
        {
            pList: [{
                type: 'p',
                strong: {
                    text: 'propsData：',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeJs: {
                    text: 'export default {\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;mounted() {\n' +
                '\tvar FatherComponent = Vue.extend({\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;template: \'&#60;p&#62;子组件内部值：{{kidData}}，父组件传递的值：{{fatherData}}（模拟）&#60;/p&#62;\',\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;data() {\n' +
                '\t\treturn {\n' +
                '\t\t&nbsp;&nbsp;&nbsp;&nbsp;kidData: \'I am kid!\'\n' +
                '\t\t}\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;},\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;props: [\'fatherData\']\n' +
                '\t});\n' +
                '\tnew FatherComponent({\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;propsData: {\n' +
                '\t\tfatherData: \'I am father!\'\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '\t}).$mount(\'#propsData\');\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '}',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeHtml: {
                    text: '&#60;p id="propsData"&#62;&#60;/p&#62;',
                    sort: 0
                }
            }
            ]
        },
        {
            pList: [{
                type: 'p',
                strong: {
                    text: 'computed：',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeJs: {
                    text: 'export default {\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;data() {\n' +
                '\treturn {\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;compute: 665,\n' +
                '\t};\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;computed: {\n' +
                '\tplusOne() {\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;return this.compute + 1;\n' +
                '\t}\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '}',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeHtml: {
                    text: '&#60;p&#62;返回处理后的数据：{{plusOne}}&#60;/p&#62;',
                    sort: 0
                }
            }
            ]
        },
        {
            pList: [{
                type: 'p',
                strong: {
                    text: 'watch：',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeJs: {
                    text: 'export default {\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;watch: {\n' +
                '\tnewVal: function (val, oldVal) {\n' +
                '\t&nbsp;&nbsp;&nbsp;&nbsp;this.oldVal = oldVal;\n' +
                '\t}\n' +
                '&nbsp;&nbsp;&nbsp;&nbsp;}\n' +
                '}',
                    sort: 0
                }
            },
            {
                type: 'pre',
                codeHtml: {
                    text: '&#60;p&#62;&#60;el-input-number size="small" v-model="newVal"&#62;&#60;/el-input-number&#62;&#60;/p&#62;\n' +
                '&#60;p&#62;键是需要观察的表达式，值是对应回调函数，新值{{plusOne}}!，旧值{{oldVal}}!&#60;/p&#62;',
                    sort: 0
                }
            }
            ]
        }
        ]
    }]
};

export {
    projectData,
    datas
};

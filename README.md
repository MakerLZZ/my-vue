# API +

> vue api demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 组件库，插件等传送门
[guide](http://vuejs-templates.github.io/webpack/)
[docs for vue-loader](http://vuejs.github.io/vue-loader)
[docs for element-ui](http://element-cn.eleme.io/#/zh-CN)
[docs for vuex](https://vuex.vuejs.org/zh/)
***

## 项目信息

### 关于样式
1. 样式使用sass编写，使用私有样式（即scoped属性）
2. 初始化样式[地址](src/assets/css/base.css)

### 关于路径
1.  @ 等比[src](src/).
2. _v 等比[views](src/views/).

### 关于状态管理
1. 对仓库进行模块化[地址](src/store/index.js)
***

## 项目结构源码说明
- api 
    - content.js            * 主体内容project/data模块数据模拟[site](src/api/content.js)
    - shop.js               * 状态管理购物车数据模拟[site](src/api/shop.js)
- assets
    - css                   * 通用样式css文件
        - base.css                  * 公共根样式，样式初始化[site](src/assets/css/base.css)
        - content.css               * 主体部分样式[site](src/assets/css/content.css)
    - images                * 图片文件
        - demo                      * 生命周期和项目构建模块所用图片目录
        - logo.png                  * logo图片[site](src/assets/images/logo.png)
        - menu.png                  * 菜单图标[site](src/assets/images/menu.png)
- components
    - ContentItem.vue       * 模块内容组件 提取公共组件相关[site](src/components/ContentItem.vue)
    - ContentLi.vue         * 模块内容中li标签内容组件 提取公共组件相关[site](src/components/ContentLi.vue)
    - ProductList.vue       * 商品列表组件 状态管理模块相关[site](src/components/ProductList.vue)
    - ShoppingCart.vue      * 购物车列表组件 状态管理模块相关[site](src/components/ShoppingCart.vue)
- lib
    - currency.js           * 货币小数处理插件 状态管理模块相关[site](src/lib/currency.js)
    - util.js               * 生成日志相关方法 状态管理模块相关[site](src/lib/util.js)
- plugins
    - logger.js             * 生成日志打印在控制台方法 状态管理模块相关[site](src/plugins/logger.js)
- router
    - index.js              * 路由表[site](src/router/index.js)
- store
    - modules               * 各个模块文件
        - cart.js                   * 购物车 状态管理模块相关[site](src/store/modules/cart.js)
        - products.js               * 商品 状态管理模块相关[site](src/store/modules/products.js)
    - index.js              * 主仓库（仓库进行模块化）[site](src/store/index.js)
- views
    - demo                  * 模块案例
        - _component.vue            * 组件模块[site](src/views/demo/_component.vue)
        - data.vue                  * 选项数据模块[site](src/views/demo/data.vue)
        - dom.vue                   * 选项dom模块[site](src/views/demo/dom.vue)
        - ins.vue                   * 指令模块[site](src/views/demo/ins.vue)
        - lifecycle.vue             * 生命周期模块[site](src/views/demo/lifecycle.vue)
        - project.vue               * 构建项目模块[site](src/views/demo/project.vue)
        - router.vue                * 路由模块[site](src/views/demo/router.vue)
        - vuex.vue                  * 状态管理模块[site](src/views/demo/vuex.vue)
    - test                  * 模块案例测试代码
        - data.vue                  * 选项数据模块测试代码[site](src/views/test/data.vue)
        - ins.vue                   * 指令模块测试代码[site](src/views/test/ins.vue)
        - render-error.vue          * dom模块测试代码[site](src/views/test/render-error.vue)
    - content.vue           * 页面主体内容部分[site](src/views/content/content.vue)
    - main.vue              * 主页面载体[site](src/views/main.vue)
    - sidebar.vue           * 页面侧边菜单部分[site](src/views/sidebar.vue)
- App.vue
- main.js
***

## 项目待优化点

### 路由问题

#### 问题
点击侧边菜单项目跳转至对应位置，页面路由会改变，刷新将白屏

#### 期望目标
刷新页面正常显示并出现在对应位置

#### 解决方案
vue路由守卫

***
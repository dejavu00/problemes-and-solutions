import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Demo1 = resolve => require.ensure([], () => resolve(require('@/views/demo1.vue')), 'demo1-app');
const Demo2 = resolve => require.ensure([], () => resolve(require('@/views/demo2.vue')), 'demo2-app');
const SubDemo1 = resolve => require.ensure([], () => resolve(require('@/views/sub-demo1.vue')), 'sub-demo1-app');
const Demo3 = resolve => require.ensure([], () => resolve(require('@/views/demo3.vue')), 'demo3-app');
Vue.use(Router)


/**
 * 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param  {Object} AsyncView 需要加载的组件，如 import('@/components/home/Home.vue')
 * @return {Object} 返回一个promise对象
 */
function lazyLoadView (AsyncView) {
    const AsyncHandler = () => ({
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: AsyncView,
        // 异步组件加载时使用的组件
        loading: require('@/components/route-loading.vue').default,
        // 加载失败时使用的组件
        error: require('@/components/route-loading.vue').default,
        // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        delay: 200,
        // 如果提供了超时时间且组件加载也超时了，
        // 则使用加载失败时使用的组件。默认值是：`Infinity`
        timeout: 10000
    });
    return Promise.resolve({
        functional: true,
        render (h, { data, children }) {
            return h(AsyncHandler, data, children);
        }
    });
}

const modifiedDemo3 = () => lazyLoadView(import('@/views/demo3.vue'))
const modifiedDemo4 = () => lazyLoadView(import('@/views/demo4.vue'))

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            redirect: '/demo1'
        },
        {
            path: '/demo1',
            name: 'demo1',
            component: Demo1,
            children: [
                {
                    path: '/demo1/sub-demo1/:id',
                    name: 'sub-demo1',
                    component: SubDemo1,
                },
            ]
        },
        {
            path: '/demo2',
            name: 'demo2',
            component: Demo2,
        },
        {
            path: '/demo3',
            name: 'demo3',
            component: Demo3,
        },
        {
            path: '/demo4',
            name: 'demo4',
            component: modifiedDemo4,
        },
    ]
})

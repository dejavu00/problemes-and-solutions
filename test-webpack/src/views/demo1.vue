<template>
    <div>
        列表进入详情页的传参问题
        <router-link :to="{path: '/demo1/sub_demo1', query: { id: 1 }}">query传参</router-link>
        <router-link :to="{name: 'sub_demo1', params: { id: 1, token: 'dejavu' }}">params传参(id: 1, token: 'dejavu')</router-link>
        <!--<router-link to="//demo1/sub_demo1">params传参</router-link>-->
        <div>
            显示内容
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Demo1',
        mounted() {
            this.timer = setInterval(() => {
                console.log(1);
            },1000)
        },
        data() {
            return {
                timer: null,
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
</script>
<style scoped="">
    .el-main {
        background: red;
    }
</style>

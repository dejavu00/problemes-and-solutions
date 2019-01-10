<template>
    <div class="root">
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        queryId 是{{queryId}}<br/>
        paramsId 是{{paramsId}}，没有在路由定义的参数，第一次可以收到，刷新页面则没有该参数（一定要定义参数）
    </div>
</template>
<script>
    export default {
        name: 'SubDemo1',
        mounted() {
            console.log(this.$route);
            this.queryId = this.$route.query.id;
            this.paramsId = this.$route.params.id;
        },
        data() {
           return {
               queryId: '',
               paramsId: '',
           }
        }
    }
</script>
<style scoped="">
    .root {
        color: rebeccapurple;
    }
    .el-button-group .el-button {
        background-color: black;
    }
</style>

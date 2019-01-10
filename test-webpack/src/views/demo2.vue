<template>
    <div>
        使用 scoped 后，父组件的样式将不会渗透到子组件中。
        <el-input  class="text-box" v-model="text"></el-input>
        <sub-demo v-model="text"></sub-demo>
    </div>
</template>
<script>
    import SubDemo from './sub-demo2.vue'
    export default {
        name: 'Demo2',
        data() {
            return {
                text: 'Hello, Eric.'
            }
        },
        components: {
            SubDemo
        }
    }
</script>
<style lang="less" scoped>
    /*.text-box {*/
        /*.el-input {*/
            /*width: 166px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/
    .text-box /deep/ input{
            width: 166px;
            text-align: center;
        }

</style>

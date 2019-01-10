<template>
    <div class="root">
        测试v-model语法糖
        {{value}}}
        <el-button @click="switchColor">
            switchColor
        </el-button>
        <el-button @click="confirm">
            blue
        </el-button>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                default: false
            }
        },
        mounted() {
            console.log(this.value);
        },
        data() {
           return {
               queryId: '',
               paramsId: '',
           }
        },
        methods: {
            switchColor(){
                document.body.className = 'custom-theme'

            },
            confirm() {
                document.body.className = 'blue-theme'
//                var head = document.getElementsByTagName('head').item(0);
//                var style = document.createElement('link');
//                style.href = 'style.css';
//                style.rel = 'stylesheet';
//                style.type = 'text/css';
//                head.appendChild(style);
//                this.$emit('input', Math.floor(Math.random() * 10));
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

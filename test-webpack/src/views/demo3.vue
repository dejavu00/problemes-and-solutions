<template>
    <div class="page-demo3">
        <div data-step='1' data-intro="First">
                <el-button @click="getUser">
                    获取所有用户
                </el-button>
                <el-button data-step='4' data-intro="zuizuizuziuzzuuiziuz" type="primary" size="mini" style="float:right;">
                    right
                </el-button>
            </div>
        <div data-step='3' data-intro="last">
                <el-button @click="getGoods">
                    获取所有用户{{text}}
                </el-button>
            </div>
        <div data-step='2' data-intro="<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</span>">
                <span>Section One</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</span>
                <span>Section Two</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</span>
                <span>Section Three</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</span>
            </div>
    </div>
</template>
<script>
    var introJs = require('intro.js')
    console.log(introJs);
    export default {
        name: 'Demo3',
        data() {
            return {
                text: 'Hello, Eric.'
            }
        },
        mounted() {
            console.log('mounted');
            this.startGuide();

            new Promise(resolve => {
                setTimeout(() => {
                    console.log('正在加载中');
                    resolve()
                },5000)
            }).then(() => {
                this.text = 'hahhahah'
            })
        },
        methods: {
            startGuide() {
                // 如果已经引导过，则不会再次引导
                if (localStorage.getItem('complete-guide') === '1') {
                    return;
                }
                introJs().setOptions(
                    {
                        'exitOnOverlayClick': false,
                        'prevLabel': '← 上一步',
                        'nextLabel': '下一步 →',
                        'skipLabel': '跳过',
                        'doneLabel': '完成',
                        'showBullets': false,//隐藏直接跳转按钮(
                    }
                ).start().onexit(function() {//非常规退出
                    console.log('onexit');
                }).oncomplete(function() {//正常完成
                    console.log('oncomplete');
                    localStorage.setItem('complete-guide','1')
                }).onchange(function(obj) {//已完成当前一步
                    console.log(obj);
                    console.log('onchange');
                });
            },
            // 获取所有用户
            getUser() {

//                this.$api.User.getUser();
            },
            // 获取所有商品
            getGoods() {
                this.$api.Goods.getGoods();
            }
        },
        components: {
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
    .page-demo3{
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
</style>

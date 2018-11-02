<!--  -->
<template>
    <div class="mine">
        <div class="mineInfo">
            <div class="login">
                <div class="userImg">
                    <img src="" alt="">
                </div>
                <div class="txt">
                    <p class="tit">欢迎来到马里卡</p>
                    <p class="ico"><span class="iconfont icon-jiantou24"></span></p>
                </div>
                <div class="clear"></div>
                <div class="loginBtn">
                    登录 / 注册
                </div>
            </div>
            <div class="info border-1px-t">
                <div class="item">
                    <p>0</p>
                    <p>消息</p>    
                </div>   
                <div class="item">
                    <p>0</p>
                    <p>订单</p>    
                </div>
                <div class="item">
                    <p>￥ 0</p>
                    <p>余额</p>    
                </div>
                <div class="item">
                    <p>0</p>
                    <p>积分</p>    
                </div> 
            </div>            
        </div>
        <div class="func">
            <div class="funItem border-1px-t" v-for="(item,index) in funcs" :key="index">
                <div class="chldItem" v-for="(it,index) in item" :key="index">
                    <p class="ico"><span class="iconfont" :class="it.icoClass" :style="{'color':it.color}"></span></p>
                    <p class="txt">{{it.txt}}</p>
                </div>
            </div>
        </div>
        <div class="hander">
            <div class="item clearFloat border-1px-t">
                <span>优惠券</span>
                <em><i>还没有优惠券哦</i><i class="iconfont icon-jiantou"></i></em>                
            </div>
            <div class="item clearFloat border-1px-t">
                <span>意见反馈</span>
                <em><i class="iconfont icon-jiantou"></i></em>                
            </div>
            <div class="item clearFloat border-1px-t" @click="goCustomer">
                <span>联系客服</span>
                <em><i class="iconfont icon-jiantou"></i></em>                
            </div>
            <div class="item clearFloat border-1px-t">
                <span>设置</span>
                <em><i class="iconfont icon-jiantou"></i></em>                
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name:'',
    data () {
        return {
            funcs:[
                [
                    {
                        color:'#fdba00',
                        icoClass:'icon-huiyuan',
                        txt:'会员特权'
                    },
                    {
                        color:'#1FB5FC',
                        icoClass:'icon-gongsituandui',
                        txt:'企业版'
                    },
                    {
                        color:'#6ae36a',
                        icoClass:'icon-saoyisao20',
                        txt:'扫一扫'
                    },
                    {
                        color:'#fdba00',
                        icoClass:'icon-tongxunlu',
                        txt:'通讯录'
                    }
                ],
                [
                    {
                        color:'#6ae36a',
                        icoClass:'icon-yonghufangwenjilu',
                        txt:'访问记录'
                    },
                    {
                        color:'#fdba00',
                        icoClass:'icon-guanzhu',
                        txt:'我的关注'
                    },
                    {
                        color:'#1FB5FC',
                        icoClass:'icon-Processmonitoring',
                        txt:'我的监控'
                    },
                    {
                        color:'#6ae36a',
                        icoClass:'icon-bianji',
                        txt:'我的笔记'
                    }
                ],
                [
                   {
                        color:'#1FB5FC',
                        icoClass:'icon-information',
                        txt:'我的情报'
                    },
                    {
                        color:'#6ae36a',
                        icoClass:'icon-xiazai-tianchong',
                        txt:'我的下载'
                    },
                    {
                        color:'#fdba00',
                        icoClass:'icon-gongsi',
                        txt:'我的公司'
                    },
                    {
                        color:'#1FB5FC',
                        icoClass:'icon-fenxiang',
                        txt:'分享APP'
                    } 
                ]
            ]
        };
    },

    computed: {},
    methods: {
        goCustomer(){
            this.$router.push({path:'/cus'})
        }
    },
    components: {},
}
</script>

<style lang='less' scoped>
    @import "../../common/css/base.less";
    @import "../../assets/ico/iconfont.css";
    .mine{
        background-color: #f4f4f4;
        .mineInfo{            
            background-color: #fff;
            overflow: hidden;
            .login{
                position: relative;
                margin: .2rem 0;
                padding: 0 .1rem;
                .userImg{
                    float: left;
                    width: .5rem;
                    height: .5rem;
                    border-radius: .04rem;
                    background: url("../../assets/imgs/user.jpg") no-repeat;
                    background-size: cover;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .txt{
                    float: left;
                    margin-left: .1rem;
                    .tit{
                        line-height: .24rem;
                        font-weight: bold;
                        color: #333;
                        font-size: .16rem
                    }
                    .ico{
                        span{
                            display: inline-block;
                            width: .2rem;
                            height:.2rem;
                            text-align: center;
                            line-height: .2rem;                            
                            border: .01rem solid #333;
                            border-radius: 50%;
                        }
                    }
                }
                .loginBtn{
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 1rem;
                    height: .3rem;
                    color: #fff;
                    line-height: .3rem;
                    text-align: right;
                    padding-right: .1rem;
                    border-radius: .15rem 0 0 .15rem;
                    background-color: #1FB5FC;
                }
            }
            .info{
                display: flex;
                padding: .2rem 0;

                .item{
                    flex: auto;
                    >p{
                        text-align: center;
                        &:first-child{
                            color: #999;
                            font-size: .14rem;
                            margin-bottom: .1rem;
                        }
                        &:last-child{
                            color: #333;
                        }
                    }
                }
            }
            .clear{
                clear: both;
            }
        }
        .func{
            margin-top: .1rem;
            background-color: #fff;
            .funItem{
                display: flex;
                padding: .16rem 0;
                &.border-1px-t:first-child::after{
                    border: none;
                }
                >div{
                    flex: auto;
                    text-align: center;
                }
                .chldItem{
                    .ico{                        
                        margin-bottom: .1rem;
                        span{
                            font-size: .26rem;
                        }
                    }
                }
            }
        }
        .hander{
            background-color: #fff;
            margin-top: .1rem;
            .item{
                height: .5rem;
                font-size: .16rem;
                padding: 0 .1rem;
                line-height: .5rem;    
                &.border-1px-t:first-child::after{
                    border: none;
                }            
                span{
                    float: left;
                }
                em{
                    float: right;
                    i{
                        color:#999;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>
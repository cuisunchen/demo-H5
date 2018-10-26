<!-- home -->
<template>
    <div class="home">
        <div class="head">
            <p class="vip"><span>开通vip ></span></p>
            <div class="text">
                <p class="con">查企业，就上企查查</p>
                <p class="url">qichacha.com</p>
            </div>
            <div class="inputHandle">
                <div class="search"></div>
                <div class="placeholder"></div>
                <div class="speak"></div>
                <div class="scan"></div>
            </div>
            <div class="hot">
                <div class="tit">热点|</div>
                <div v-for="(item,index) in hotData" :key="index">长春长生</div>
            </div>
        </div>
        <div class="news">
            <p class="title">新闻阅读</p>
            <div class="con">
                <div class="newItem" v-for="(item,index) in news" :key="index" @click="godetail">
                    <div class="imgBox">
                        <img :src="item.imgUrl" alt="" srcset="">
                    </div>
                    <div class="newCon">
                        <p class="newTit">{{item.newTit}}</p>
                        <p class="info"><span>{{item.new_from}}</span> <em>{{item.new_date}}</em></p>
                    </div>
                </div>                
            </div>
        </div>
        <div class="hots">
            <p>热点唯独</p>
            <div class="hots_wrap">
                <div class="hot_item" v-for="(item,index) in hots" :key="index">
                    <div class="hot_item_wrap">
                        <div class="ico">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="name">企业名录</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="newCPY">
            <p class="title">新注册企业</p>
            <div class="itemWrap">
                <div class="item" v-for="(item,index) in newCpy" :key="index">
                    <p class="cpyName"><span class="dot"></span><em>{{item.name}}</em></p>
                    <p class="bossName">{{item.peo}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Panel } from 'vux'
import api from "../../common/js/api.js"
import fetch from "../../common/js/fetch.js"
 export default {
    name:'',
    data () {
        return {
            hotData:['长春长生','长春长生','长春长生','长春长生','长春长生','长春长生'],
            news:[],
            hots:[],
            newCpy:[],
        };
    },

    computed: {},
    created(){
        this.getNews();
    },
    methods: {
        godetail(){
            // fetch('/api/api/elm/home/news',{method:'post'})
            // .then( res => {
            //     console.log(res)
            // })
            fetch('/home/detail','POST',...{})
            .then( res => {
                console.log(res)
            })
        },
        // onImgError (item, $event) {
        //     console.log(item, $event)
        // },
        getNews(){
            api.getNews().then(ret => {
                console.log(ret)
                if( ret.data.status == 200 ){
                    this.news = ret.data.data.news
                    this.hots = ret.data.data.hot
                    this.newCpy = ret.data.data.newCpy
                }
            })
        }
    },
    components: {
        Panel
    },
}
</script>

<style lang='less' scoped>
    .home{        
        >div{
            margin-top: .1rem;
            &:first-child{
                margin-top: 0;
            }
        }
        .head{
            padding: .1rem .2rem 0;
            background-color: #1FB5FC;
            .vip{
                text-align: right;
                color: yellow;
            }
            .text{
                text-align: center;
                .con{
                    font-size:.24rem;
                    color: #fff;
                    line-height: .4rem;
                }
                .url{
                    font-size: .16rem;
                    color: #fff;
                }
            }
            .inputHandle{
                width: 100%;
                height: .34rem;
                margin-top: .3rem;
                border-radius: .06rem;
                background-color: #fff;
            }
            .hot{
                .tit{
                    font-size: .16rem;
                }
                >div{
                    display: inline-block;
                    color: #fff;
                    line-height: .4rem
                }
            }
        }
        .news{
            padding: .1rem .2rem 0;
            background-color: #fff;
            .title{
                font-size: .14rem;
                color: #666;
                line-height: .3rem;
            }
            .con{
                .newItem{
                    display: flex;
                    padding: .1rem 0;
                    .imgBox{
                        width: 1rem;
                        height: .6rem;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .newCon{
                        flex: auto;
                        padding-left: .1rem;
                        position: relative;
                        .newTit{
                            line-height: .3rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .info{
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            line-height: .2rem;
                            em{
                                float: right;
                                color: #666;
                            }
                            span{
                                display: inline-block;
                                color: #1FB5FC;
                                font-size: .12rem;
                                padding: .01rem .04rem;
                                background-color: rgb(220, 234, 240)
                            }
                        }
                    }
                }
            }
            
        }
        .hots{
            background-color: #fff;
            padding: .1rem;
            p{
                font-size: .14rem;
                color: #949494;
                text-align: center;
                line-height: .6rem;
            }
            .hots_wrap{
                font-size: 0;
                .hot_item{
                    display: inline-block;
                    width: 50%;
                    padding: 0 .1rem;
                    box-sizing: border-box;
                    margin-bottom: .1rem;
                    .hot_item_wrap{
                        background-color: #fcf8f8;
                        padding: .1rem .14rem;
                        font-size: 0;
                        >div{
                            display: inline-block;
                            font-size: .16rem;
                            vertical-align: middle;                            
                        }
                        .ico{
                            width: .4rem;
                            height: .4rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .name{
                            font-size: .16rem;
                            color: #666;
                            padding-left: .1rem;
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }
        .newCPY{
            padding: 0 .1rem;
            background-color: #fff;
            .title{
                color: #949494;
                line-height: .5rem;
            }
            .itemWrap{
                .item{
                    &:last-child{
                        margin: 0;
                    }
                    color: #333;
                    margin-bottom: .1rem;
                    .cpyName{                        
                        line-height: .12rem;
                        .dot{
                            display: inline-block;
                            width: .04rem;
                            height: .04rem;
                            background-color: #ccc;
                            border-radius: 50%;
                            vertical-align: middle;
                            margin-right: .06rem;
                        }
                        em{
                            vertical-align: middle;
                        }
                    }
                    .bossName{
                        text-indent: .1rem;
                        line-height: .24rem
                    }
                }
            }
        }
    }
</style>
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
                <div v-for="(item,index) in hotData">长春长生</div>
            </div>
        </div>
        <div class="news">
            <p class="title">新闻阅读</p>
            <div class="con">
                <div class="newItem" v-for="(item,index) in news" :key="index">
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
        <div class="hots"></div>
        <div class="newCPY"></div>
    </div>
</template>

<script>
import { Panel } from 'vux'
import api from "../../common/js/api.js"
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
        onImgError (item, $event) {
            console.log(item, $event)
        },
        getNews(){
            api.getNews().then(ret => {
                if( ret.data.status == 200 ){
                    console.log(ret)
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
    }
</style>
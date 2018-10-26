<!--  -->
<template>
    <div class="cpyStore">
        <div class="funcs">
            <div class="funItem" v-for="(item,index) in funcs" :key="index">
                <div class="item" v-for="(it,index) in item" :key="index">
                    <div class="imgBox"><img :src="it.imgUrl" alt=""></div>
                    <div class="name">{{it.name}}</div>
                </div>
            </div>
        </div>
        <div class="con">
            <tab :line-width="1" custom-bar-width="60px" v-model="selectedIndex" @on-before-index-change="switchTabItem">
                <tab-item v-for="(item,index) in tabs" :key="index">{{item.tab_txt}}</tab-item>
            </tab>
            <div class="content"> 
                <p style="text-align:center; line-height:.5rem;color:#666;" v-if="isLoadingShow"><inline-loading></inline-loading><span style="vertical-align:middle;">正在加载</span></p>     
                <parcel class="list">
                    <div class="rz" v-if="selectedIndex == 0">
                        <div class="rz_item  border-1px-b">
                            <div class="userImg">
                                <img src="./imgs/img7.png" alt="">
                            </div>
                            <div class="infos">
                                <div class="infoBox">
                                    <p class="p_info">
                                        <span class="cpyName">芝兰科技</span> <span class="rz_status">天使轮</span> <span class="time">今天</span>
                                    </p>
                                    <p class="p_type"><span class="cpyType">企业服务</span> <span class="addr">浙江</span></p>
                                </div>
                                <div class="contxt">
                                    芝兰科技活树百万元天使轮融资，为企业提供多场景底数无人驾驶解决方案
                                </div>
                            </div>
                        </div>
                        <div class="rz_item  border-1px-b">
                            <div class="userImg">
                                <img src="./imgs/img7.png" alt="">
                            </div>
                            <div class="infos">
                                <div class="infoBox">
                                    <p class="p_info">
                                        <span class="cpyName">芝兰科技</span> <span class="rz_status">天使轮</span> <span class="time">今天</span>
                                    </p>
                                    <p class="p_type"><span class="cpyType">企业服务</span> <span class="addr">浙江</span></p>
                                </div>
                                <div class="contxt">
                                    芝兰科技活树百万元天使轮融资，为企业提供多场景底数无人驾驶解决方案
                                </div>
                            </div>
                        </div>
                    </div>
                </parcel>
                <parcel class="list">
                    <div class="ss" v-if="selectedIndex == 1">
                        <div class="tab">
                            <span :class="{'active':currentIndex == 0}" @click="changeType">上市公司</span>
                            <span :class="{'active':currentIndex == 1}" @click="changeType">发审会公告</span>
                        </div>
                        <!-- 上市公司 -->
                        <div class="sscpy" v-show="currentIndex == 0">
                            <div class="rz_item  border-1px-b">
                                <div class="userImg">
                                    <img src="./imgs/img7.png" alt="">
                                </div>
                                <div class="infos">
                                    <div class="infoBox">
                                        <p class="p_info">
                                            <span class="cpyName">长城证券（002939.SZ）</span><span class="time">今天</span>
                                        </p>
                                        <p class="p_type">国内A股</p>
                                    </div>
                                    <div class="contxt">
                                        芝兰科技活树百万元天使轮融资，为企业提供多场景底数无人驾驶解决方案
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 发审会公告 -->
                        <div class="notice" v-show="currentIndex == 1">
                            <div class="rz_item  border-1px-b">
                                <div class="userImg">
                                    <img src="./imgs/img7.png" alt="">
                                </div>
                                <div class="infos">
                                    <div class="infoBox">
                                        <p class="p_info">
                                            <span class="cpyName">证监会</span><span class="time">2018-10-24</span>
                                        </p>
                                        <p class="p_type">发审会公告</p>
                                    </div>
                                    <div class="contxt">
                                        芝兰科技活树百万元天使轮融资，为企业提供多场景底数无人驾驶解决方案
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </parcel>
                <parcel class="list">
                    <div class="gs" v-if="selectedIndex == 2">
                        <div class="rz_item  border-1px-b">
                            <div class="userImg">
                                <img src="./imgs/img7.png" alt="">
                            </div>
                            <div class="infos">
                                <div class="infoBox">
                                    <p class="p_info">
                                        <span class="cpyName">芜湖荣基</span><span class="time">昨天</span>
                                    </p>
                                    <p class="p_type">芜湖荣基密封系统有限公司</p>
                                </div>
                                <div class="contxt">
                                    芝兰科技活树百万元天使轮融资，为企业提供多场景底数无人驾驶解决方案
                                </div>
                            </div>
                        </div>
                    </div>
                </parcel>    
            </div>
        </div>
    </div>
</template>

<script>
import { Tab, TabItem,InlineLoading  } from 'vux';
import Parcel from '../../base/parcel/parcel.vue'
 export default {
    name:'',
    data () {
        return {
            funcs:[
                [
                    {
                        imgUrl:require('./imgs/img1.png'),
                        name:'融资事件'
                    },
                    {
                        imgUrl:require('./imgs/img2.png'),
                        name:'投资机构'
                    },
                    {
                        imgUrl:require('./imgs/img3.png'),
                        name:'上市公司'
                    },
                    {
                        imgUrl:require('./imgs/img4.png'),
                        name:'新三板'
                    },
                ],
                [
                    {
                        imgUrl:require('./imgs/img5.png'),
                        name:'雷达监控'
                    },
                    {
                        imgUrl:require('./imgs/img6.png'),
                        name:'企业专辑'
                    },
                    {
                        imgUrl:require('./imgs/img7.png'),
                        name:'行研报告'
                    },
                    {
                        imgUrl:require('./imgs/img8.png'),
                        name:'招股书'
                    },
                ]
            ],
            tabs:[
                {tab_id:'01',tab_txt:'融资动态'},
                {tab_id:'02',tab_txt:'上市动态'},
                {tab_id:'03',tab_txt:'工商追踪'},
            ],
            selectedIndex: 0,
            currentIndex: 0,
            isLoadingShow:false,

        };
    },

    computed: {},
    methods: {
        changeType(){
            this.currentIndex = this.currentIndex == 0 ? 1 : 0;
        },
        switchTabItem(index){
            this.selectedIndex = index
        }
    },
    components: {
        Tab,
        TabItem,
        Parcel,
        InlineLoading 
    },
}
</script>

<style lang='less' scoped>
@import "../../common/css/base.less";
    .cpyStore{
        .funcs{
            padding: .2rem 0;
            background-color: #fff;
            .funItem{
                display: flex;
                &:first-child{
                    margin-bottom: .1rem;
                }
                .item{
                    flex: auto;
                    text-align: center;                    
                    
                    .imgBox{
                        margin-bottom: .1rem;
                        img{
                            display: inline-block;
                            height: .3rem;
                        }
                    }
                }
            }
        }
        .con{
            margin-top: .1rem;
            .vux-tab-selected{
                color: #1FB5FC;
            }
            .content{
                position: relative; 
                .list{
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;                    
                    padding: 0 .1rem;
                    background-color: #fff;
                    .rz_item{
                        display: flex;
                        padding: .16rem 0;
                        .userImg{
                            width: .6rem;
                            height: .6rem;
                            img{
                                display: inline-block;
                                width: .4rem;
                                height: .4rem;
                                margin: 0 auto;
                                border-radius: .04rem;
                            }
                        }                        
                        .infos{
                            flex: auto;
                            padding-left: .06rem;
                            .infoBox{
                                height: .4rem;
                                .p_info{
                                    line-height: .28rem;
                                    color: #000;
                                    >span{
                                        display: inline-block;
                                        vertical-align: middle;
                                    }
                                    .time{
                                        float: right;
                                        color: #999;
                                    }
                                    .rz_status{
                                        font-size: .1rem;
                                        color: #fff;
                                        line-height: .06rem;
                                        padding: 0.06rem .04rem;
                                        border-radius: .04rem;
                                        background-color: #1FB5FC;
                                    }
                                    .cpyName{
                                        font-size: .14rem;
                                        margin-right: .06rem;
                                    }
                                }
                                .p_type{
                                    color: #999;
                                }
                            }
                            .contxt{
                                color: #666;
                                line-height: .2rem;
                                margin-top: .1rem;
                                padding: .1rem .06rem;
                                border-radius: .06rem;
                                background-color: #e9e9e9;
                            }
                        }    
                        &.border-1px-b:last-child::after{
                            border: none;
                        }                    
                    }
                    .tab{
                        width:2rem;
                        height: .3rem;
                        margin: .14rem auto;
                        font-size: 0;
                        border-radius: .06rem;
                        overflow: hidden;
                        box-sizing: border-box;
                        .setBorder(@c: #56546971);                        
                        span{
                            display: inline-block;
                            width: 50%;
                            height: 100%;
                            color: rgb(75, 83, 90);
                            font-size: .14rem;
                            text-align: center;
                            line-height: .3rem;
                            &.active{
                                color: #fff;
                                background-color: #9bafaf71;
                            }
                        }
                    }
                }
                
            }
        }
    }
</style>
<style lang='less'>
    .vux-tab-ink-bar{
        background-color: #1FB5FC;
        .vux-tab-bar-inner{
            background-color: #1FB5FC;
        }
    }
</style>

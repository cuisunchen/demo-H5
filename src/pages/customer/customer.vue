<!-- 客服页面 -->
<template>
    <div class="customer">
        <div class="chats">
            <div class="chat_item">
                <div class="userIco"><img src="../../assets/imgs/dating@2x.png" alt=""></div>
                <div class="msg">按实际的话价格哈市大概暗示大家好按实际的话价格哈市大概暗示大家好</div>
            </div>
            <div class="chat_item myMsg">                
                <div class="msg">按实际的话价格哈市大概暗示大家好按实际的话价格哈市大概暗示大家好</div>
                <div class="userIco"><img src="../../assets/imgs/dating@2x.png" alt=""></div>
            </div>
        </div>
        <div class="sendBox">
            <input type="text" id="msgInput" class="msgInput" v-model="msg"><span class="iconfont icon-xiaolian"></span><span class="sendBtn" @click="sendMsg">发送</span>
        </div>
    </div>
</template>

<script>
 export default {
    name:'',
    data () {
        return {
            msg:'',
            webSocket:Function,
        };
    },

    computed: {},
    created(){
        // this.webSocket = this.createWebSocket("http://192.168.8.48");
        this.init("ws://192.168.8.48:9001");
    },
    methods: {
        init(url){
            this.webSocket = new WebSocket(url); 
            this.webSocket.onopen = this.WebsocketOpen()
            this.webSocket.onmessage = this.wsOnMsg()

        },
        WebsocketOpen(){
            console.log("WebSocket连接成功")
        },
        wsOnMsg(msg){
            console.log('服务器来的' + msg)
        },
        sendMsg(){
            console.dir(this.webSocket)
            debugger
            this.webSocket.send(this.msg)
        }

    },
    components: {},
}
</script>

<style lang='less' scoped>
    .customer{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 46px .1rem 0.48rem;
        .chats{
            .chat_item{
                display: flex;
                padding: .06rem 0;
                .userIco{
                    width: .36rem;
                    margin-right: .1rem;
                    border-radius: 50%;
                    img{
                        display: inline-block;
                        width: .36rem;
                        height: .36rem;
                        border-radius: 50%;
                        background-color: #1FB5FC;
                    }
                }
                .msg{
                    flex: auto;
                    color: #fff;
                    font-size: .14rem;
                    line-height: .23rem;
                    padding: .08rem .06rem;
                    border-radius: 0.04rem;
                    background-color: #1FB5FC;
                }
            }
            .myMsg{
                .userIco{
                    margin-right: 0;
                    margin-left: .1rem;
                }
                .msg{
                    background-color: rgb(43, 214, 129);
                }
            }
        }
        .sendBox{
            position: absolute;
            left: 0;
            right: 0;
            height: .36rem;
            bottom: 0.48rem;
            background-color: #e6e6e6;
            display: flex;
            padding: 0 .1rem;
            .msgInput{
                flex: auto;
                font-size: .14rem;
            }
            .iconfont{
                display: inline-block;
                width: .4rem;
                color: #666;
                text-align: center;
                line-height: .36rem;
                font-size: .3rem;
            }
            .sendBtn{
                display: inline-block;
                width: .5rem;
                height: .3rem;
                margin-top: .03rem;
                text-align: center;
                background-color: #1FB5FC;
                line-height: .3rem;
                border-radius: .04rem;
            }
        }
    }
</style>
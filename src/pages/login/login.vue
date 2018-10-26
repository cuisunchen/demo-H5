<!-- 登入页面 -->
<template>
    <div class="login">
        <div class="content">
            <h5>饿了么</h5>
            <p>饿了就上饿了么!</p>
            <div class="formBox border-1px-l">
                <div class="name">
                    <div class="useName">用户名</div>
                    <div class="nameInputBox"><input type="text" v-model="user.name"></div>
                </div>
                <div class="password">
                    <div class="usePassword">密<i>码</i></div>
                    <div class="usePasswordInputBox"><input type="password" v-model="user.password"></div>
                </div>
                <div class="loginBox">
                    <div class="empty"></div>
                    <div class="loginBtn"><x-button class="loginBut" @click.native="login">登入</x-button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { XButton } from 'vux'
import { mapMutations } from 'vuex';
import { sessionObj,localObj } from '../../common/js/tools.js'
import qs from "qs"
 export default {
    name:'',
    data () {
        return {
            user:{},
        };
    },
    computed: {
    },
    methods: {
        login(){            
            if(!this.user.name && !this.user.password){return}   
            if(!this.user.name){
                this.setTip('用户名不能为空')
                return
            }else if(!this.user.password){
                this.setTip('密码不能为空')
                return
            } 
            this.user.name = this.user.name.toLowerCase()
            this.user.password = this.user.password.toLowerCase()
            this.api.userLogin(this.user).then(res =>{
                if(res.data.status == 200){
                    sessionObj('userName',this.user.name)
                    localObj('token', res.data.token)
                    this.$router.push({path:'./home'})
                }else{
                    this.setTip(res.data.msg)
                }
            }).catch(error => {
                // throw new Error(error)
                this.setTip('请求错误')
            })
        },   
        ...mapMutations({
            setTip: 'SET_TIP'
        })     
    },
    components: {
        XButton 
    },
}
</script>

<style lang='less' scoped>
@import '../../common/css/base.less';
.login{
    height: 100%;
    background-color: #00a0dc;
        position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    .content{
        width: 100%;
        height: 3rem;
        position: absolute;
        top: 50%;
        margin-top: -2rem;
        color: #fff;
        text-align: center;
        h5{
            font-size: .3rem;            
        }
        p{
            font-size: .18rem;
            line-height: .6rem;
        }
        .formBox{
            padding: 0 .2rem;
            margin-top: .4rem;
            >div{
                display: flex;
                margin-bottom: .1rem;
            }
            .useName, .usePassword, .empty{
                font-size: .14rem;
                width: .6rem;
                line-height: .4rem;
                text-align: left;
                i{
                   text-indent: .1rem; 
                }
            }
            .nameInputBox, .usePasswordInputBox,.loginBtn{
                flex: auto;
                & input{
                    height: .4rem;
                    width: 100%;
                    font-size: .14rem;
                    border-radius: .04rem;
                    text-indent: .12rem
                } 
                .loginBut{
                    color: #fff;
                    border-color: #409EFF;
                    background-color: #409EFF
                }               
            }
            .loginBox{
                margin-top: .3rem;
            }
        }
    }
}
</style>
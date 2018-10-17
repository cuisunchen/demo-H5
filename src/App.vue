<template>
  <div id="app">
    <div class="head" v-if="hide">
        <x-Header :right-options="{showMore: true}" @on-click-more="showMenus = true">{{headCon}}</x-Header>
    </div>

    <div class="content">
        <router-view/>
    </div>
    
    <div class="foot" v-if="hide">      
      <router-link :to="item.pageUrl" tag="div" class="tab_item" v-for="(item,index) in tab" :key="index">{{item.name}}</router-link>
    </div>
    <toast v-model="tipSet.showPositionValue" type="text" :time="2000" is-show-mask :text="tip" :position="tipSet.position"></toast> 
  </div>
</template>

<script>
import { sessionObj } from './common/js/tools.js'
import { Toast } from "vux"
import { Tabbar, TabbarItem, XHeader } from 'vux'
import { mapGetters,mapMutations } from "vuex"
import { setTimeout } from 'timers';
import headConfig from './common/js/headConfig.js'
export default {
  name: 'App',
  data(){
    return{
      tipSet:{
        showPositionValue:false,
        position:'default'
      },
      hide:true,
      tab:[
        {name:'首页',icoUrl:'',pageUrl:'/home'},
        {name:'信息',icoUrl:'',pageUrl:'/infos'},
        {name:'新闻',icoUrl:'',pageUrl:'/news'},
        {name:'我的',icoUrl:'',pageUrl:'/mine'},
      ],
      defaultTabIndex:0,
    }
  },
  computed:{
    ...mapGetters([
      'tip',
      'headCon'
    ])
  },
  created(){
    if(this.$route.path == '/login'){
      this.hide = false;
    }
    if( !sessionObj('userName') ){
        this.$router.push('/login')
    }
    this.init();
  },
  methods:{
    init(){
      let path = this.$router.history.current.fullPath;
      if(path != '/login'){
        this.setHead(headConfig[path])
      }      
    },
    ...mapMutations({
      setTip:'SET_TIP',
      setHead:'SET_HEAD'
    })
  },
  watch:{
    tip(val){
      if(val.length > 0){
        this.tipSet.showPositionValue = true;
        setTimeout(()=>{
          this.tipSet.showPositionValue = false;
          this.setTip('')
        },2000)
      }
    },
    $route(to){
      if(to.path == '/login'){
        this.hide = false;
      }else{
        this.hide = true;
        this.setHead(headConfig[to.path])
        switch(to.path){
          case '/home':
              this.defaultTabIndex == 0;
              break;
          case '/infos':
              this.defaultTabIndex == 1;
              break;
          case '/news':
              this.defaultTabIndex == 2;
              break;
          case '/mine':
              this.defaultTabIndex == 3;
              break;
        }
      }
    }
  },
  components:{
    Toast,
    'tabber':Tabbar, 
    'tabbar-item':TabbarItem, 
    'x-Header':XHeader 
  }
}
</script>

<style lang="less">
html,body{
    height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  font-size: .12rem;
  .head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  >.content{
    padding: 46px 0 .5rem;
  }
  .foot{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    background-color: #000;
    .tab_item{
      flex: auto;
      text-align: center;
      color: #fff;
      font-size: .14rem;
      line-height: .5rem;
    }
    .router-link-exact-active{
      color: red;
    }
  }
  
}
</style>

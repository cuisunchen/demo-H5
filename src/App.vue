<template>
  <div id="app">
    <router-view/>
    <toast v-model="tipSet.showPositionValue" type="text" :time="2000" is-show-mask :text="tip" :position="tipSet.position"></toast> 
  </div>
</template>

<script>
import { sessionObj } from './common/js/tools.js'
import { Toast } from "vux"
import { mapGetters,mapMutations } from "vuex"
import { setTimeout } from 'timers';
export default {
  name: 'App',
  data(){
    return{
      tipSet:{
        showPositionValue:false,
        position:'default'
      }
    }
  },
  computed:{
    ...mapGetters([
      'tip'
    ])
  },
  created(){
    
    if( !sessionObj('userName') ){
        this.$router.push('/login')
    }
  },
  methods:{
    ...mapMutations({
      setTip:'SET_TIP'
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
    }
  },
  components:{
    Toast
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
}
</style>

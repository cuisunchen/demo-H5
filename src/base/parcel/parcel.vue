<!-- 组建向左滑动效果 -->
<template>
    <transition name="parcel">111
        <slot></slot>
    </transition>
</template>

<script>
 export default {
    name:'parcel',
    data () {
        return {
        };
    },

    computed: {},
    methods: {},
    components: {},
}
</script>

<style lang='less' scoped>
    .parcel-enter-active, .parcel-leave-active{
        transition: all 0.1s;
    }

  .parcel-enter,.parcel-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
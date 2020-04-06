<template>
  <div>
    <div class="tplShow">
      <div class="tplShowBox">
        <slot name="tplShow">

        </slot>

      </div>

      <div class="tplCodeBox" v-show="isCodeShow" ref="tplCode">
        <div class="tplInfo">
          <slot name="tplInfo">
          </slot>
        </div>
          <slot name="tplCode" v-if="isCode"></slot>
          {{newEscapedStr}}

      </div>

    </div>
    <div class="tplShowBtn" @click="showBtnEvent">
      <p>{{btnTxt}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "yum-main-tpl-show",
    data() {
      return {
        escapedStr: '',
        newEscapedStr: '',
        btnTxt: '展开代码',
        isCode: true,
        isCodeShow: false,
      }
    },
    methods:{
      showBtnEvent(){
        this.isCodeShow = !this.isCodeShow
      }
    },
    created() {
      setTimeout(() => {

      }, 0)
    }
  }
</script>

<style>

</style>

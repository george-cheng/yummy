<template>

  <div>
    <span class="link" @click="clickEvent">&nbsp;{{urlName}}&nbsp;</span>
  </div>

</template>

<script>
  export default {
    name: "yum-main-url-link",
    props: {
      url: {
        type: String,
        default: '#'
      },
      urlName: {
        type: String,
        default: ''
      }
    },
    methods: {
      clickEvent(){
        window.open(this.url)
      }
    }
  }
</script>

<style scoped lang="less">
  .link{
    cursor: pointer;
  }
</style>

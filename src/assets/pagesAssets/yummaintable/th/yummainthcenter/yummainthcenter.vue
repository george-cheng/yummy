<template>
  <th :style="getWidth" class="thMid">{{value}}</th>
</template>

<script>
  export default {
    name: "yum-main-th-center",
    props: {
      value: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      }
    },
    computed: {
      getWidth(){
        return this.width === "" ? "" : "width:" + this.width + "px"
      }
    }
  }
</script>

<style scoped>

</style>

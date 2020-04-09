<template>
    <th :style="getWidth" class="thLft">{{value}}</th>
</template>

<script>
  export default {
    name: "yum-main-th",
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

<template>
  <th :style="getWidth" class="tdMid">
    {{title}}
  </th>
</template>

<script>
  export default {
    name: "yum-main-th-center",
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      }
    },
    computed: {
      getWidth() {
        return this.width === "" ? "" : "width:" + this.width + "px"
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="tit">
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yum-main-title",
    props: {
      title: {
        type: String,
        default: '标题',
        required: true
      }
    }
  }
</script>

<style scoped>

</style>

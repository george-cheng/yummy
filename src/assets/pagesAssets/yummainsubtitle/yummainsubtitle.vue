<template>
  <div>
    <div class="smTit">
      <p>{{subTitle}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yum-main-sub-title",
    props: {
      subTitle: {
        type: String,
        default: '副标题',
        required: true
      }
    }
  }
</script>

<style scoped>

</style>

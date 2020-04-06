<template>
  <td>
    <div>
    {{value}}
    </div>
  </td>
</template>

<script>
  export default {
    name: "yum-main-td",
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>

<template>

  <div class="table">
    <table width="100%" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <slot name="listHead"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="listBody"></slot>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: "yum-main-show-table"
  }
</script>

<style scoped>

</style>

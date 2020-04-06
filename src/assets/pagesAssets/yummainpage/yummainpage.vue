<template>
  <div class="yumMain">
    <slot name="yumMain"></slot>


    <!--<div>-->
      <!--<table width="100%">-->
        <!--<thead>-->
          <!--<tr>-->
            <!--<slot name="tbListHead"></slot>-->
          <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
          <!--<slot name="tbListBody"></slot>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "yum-main-page",
    data() {
      return {
      }
    },

    methods: {


    },
    mounted() {
    },
    created() {

    }
  }
</script>

<style scoped>
  .yumMain {
  }
</style>

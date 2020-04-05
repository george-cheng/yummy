<template>

  <div class="btmSwitch">
    <div>
      <div v-if="getPrev" class="prev" @click="clickPrevEvent">
        <span class="i-lftArrow"></span>{{prevTit}}
      </div>
    </div>
    <div>
      <div v-if="getNext" class="next" @click="clickNextEvent">
        {{nextTit}}<span class="i-rgtArrow"></span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "yum-main-btm-switch",
    props: {
      prevTit: {
        type: String,
        default: '',
      },
      prevUrl: {
        type: String,
        default: '',
      },
      nextTit: {
        type: String,
        default: '',
      },
      nextUrl: {
        type: String,
        default: '',
      }
    },
    methods: {
      clickPrevEvent() {
        this.$router.push(this.prevUrl)
      },
      clickNextEvent() {
        this.$router.push(this.nextUrl)
      }
    },
    computed: {
      getPrev(){
        return this.prevTit !== '' || this.prevUrl !== ''
      },
      getNext(){
        return this.nextTit !== '' || this.nextUrl !== ''
      }
    }
  }
</script>

<style scoped>

</style>

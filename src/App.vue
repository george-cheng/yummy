<template>
  <div id="app">
    <router-view></router-view>

    <div
      id="live2d"
      :style="{ zIndex }"
      @mouseover="toolShow=true"
      @mouseout="toolShow=false">
      <div v-show="mainShow">
        <div id="live2d-tip" v-html="tipText" v-show="tipShow"></div>
        <canvas id="live2d-main" width="250" height="250"></canvas>
        <div id="live2d-tool" v-show="toolShow">
        <span
          class="fa fa-lg"
          v-for="(tool, index) in tools"
          :key="index"
          :class="tool.name"
          @click="tool.click"></span>
        </div>
      </div>
      <div id="live2d-toggle" v-show="!mainShow" @click="mainShow=true">
        <span>看板娘</span>
      </div>
    </div>


  </div>
</template>

<script>

import { live2dmixin } from "./assets/pagesAssets/live2d";

export default {
  name: 'App',
  mixins: [live2dmixin],
  created() {
  }
}
</script>

<style scoped>

</style>

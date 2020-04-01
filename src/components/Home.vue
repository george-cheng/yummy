<template>
  <div class="main">
    <div class="mainTop">

    </div>
    <div class="yummy">
      <div class="yumLft">
        <div v-for="(item,index) in leftList" :key="index">
          <div class="lftTit">{{item.title}}</div>
          <div class="lftAss">
            <p class="assList" :class="{assListOn: assListNum===items.num}" @click="leftMenuEvent(items,index)" v-for="(items,index) in item.lftData" :key="index">{{items.name}}</p>
          </div>
        </div>
      </div>
      <div class="yumrgt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        assListNum: "0",
        leftList: [
          {
            "title": "开发指南",
            "lftData": [
              {
                "num": "0",
                "name": "安装",
                "url": "/home/installation"
              },
              {
                "num": "1",
                "name": "快速上手",
                "url": "/home/quickstart"
              }
            ]

          },
          {
            "title": "组件",
            "lftData": [
              {
                "num": "2",
                "name": "Layout布局",
                "url": "/home/layout"
              },
              {
                "num": "3",
                "name": "Container布局容器",
                "url": "/home/container"
              },
              {
                "num": "4",
                "name": "Color色彩",
                "url": "/home/color"
              }
            ]

          }
        ]
      }
    },
    methods: {
      leftMenuEvent(items){
        this.assListNum = items.num;
        this.$router.push(items.url)
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>

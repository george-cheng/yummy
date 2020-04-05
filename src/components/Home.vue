<template>
  <div class="main">
    <div class="mainTop">

    </div>
    <div class="yummy">

      <div class="yumLft" ref="yumLft" :style="{height: scrollLftHeight}" @mouseover="mouseLftOver" @mouseout="mouseLftOut">
        <div v-for="(item,index) in leftList" :key="index">
          <div class="lftTit">{{item.title}}</div>
          <div class="lftAss">
            <p class="assList" :class="{assListOn: $router.history.current.path===items.url}"
               @click="leftMenuEvent(items,index)" v-for="(items,index) in item.lftData" :key="index">{{items.name}}</p>
          </div>
        </div>
      </div>

      <div class="yumRgt" ref="yumRgt" @scroll="scrollEvent"  :style="{height: scrollRgtHeight}">
        <router-view></router-view>
      </div>

      <div class="backTop" v-if="isBackTop" @click="backTopEvent">
        <p class="upArrow i-upArrow"></p>
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
        scrollLftH: '',
        scrollRgtH: '',
        isBackTop: false,
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
              },
              {
                "num": "5",
                "name": "Popover 弹出框",
                "url": "/component/popover"
              }
            ]
          },
        ]
      }
    },
    methods: {
      leftMenuEvent(items) {
        this.assListNum = items.num;
        this.$router.push(items.url)
      },
      mouseLftOver() {
        let clientLftHeight = document.documentElement.clientHeight;
        let offsetLftTop = this.$refs.yumLft.getBoundingClientRect();
        this.scrollLftH = clientLftHeight - offsetLftTop.y;
        if (clientLftHeight > this.scrollLftH) {
          $(".yumLft").css("overflow-y", "scroll")
        }
      },
      mouseLftOut() {
        $(".yumLft").css("overflow-y", "hidden")
      },
      scrollEvent(){
        let scroll = this.$refs.yumRgt.scrollTop;
        if(scroll > 100){
          this.isBackTop = true
        }else{
          this.isBackTop = false
        }
      },
      backTopEvent() {
        this.$refs.yumRgt.scrollTop = 0
      },
    },
    computed: {
      scrollLftHeight() {
        return this.scrollLftH + 'px'
      },
      scrollRgtHeight() {
        return this.scrollRgtH + 'px'
      },

    },
    created() {
      setTimeout(() => {
        let clientRgtHeight = document.documentElement.clientHeight;
        let offsetRgtTop = this.$refs.yumRgt.getBoundingClientRect();
        this.scrollRgtH = clientRgtHeight - offsetRgtTop.y;
        if (clientRgtHeight > this.scrollLftH) {
          $(".yumRgt").css("overflow-y", "scroll")
        }
      }, 0)
    }
  }
</script>

<style scoped lang="less">


</style>

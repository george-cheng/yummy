<template>
  <div class="popover">
    <yum-popover title="标题"
                  content="这是一个副标题这是一个副标题这是一个副标题这是一个副标题这是一个副标题"
                  width="200px"
                  direction="bottom"
                  @show="showAction"
                  @hide="hideAction"
    >
      <button slot="reference">点击事件</button>
    </yum-popover>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <yum-popover title="标题"
                  content="这是一个副标题这是一个副标题这是一个副标题这是一个副标题这是一个副标题"
                  width="200px"
                  direction="top"
                  trigger="focus"
    >
      <button slot="reference">点击事件</button>
    </yum-popover>
    <br>
    <yum-popover title="标题"
                  content="这是一个副标题这是一个副标题这是一个副标题这是一个副标题这是一个副标题"
                  width="200px"
                  direction="right"
                  trigger="hover"
    >
      <button slot="reference">点击事件</button>
    </yum-popover>
    <span>test test test test test test test test test test test test test test test test test test test test test</span>

    <yum-popover title="标题"
                  content="这是一个副标题这是一个副标题这是一个副标题这是一个副标题这是一个副标题"
                  width="200px"
                  direction="left"
                  trigger="focus"
    >
      <div slot="reference" style="margin-left: 300px">
        <input type="text" placeholder="这是一个输入框">
      </div>
    </yum-popover>
  </div>
</template>

<script>
  export default {
    name: "popover",
    methods: {
      showAction() {
        console.log('show')
      },
      hideAction() {
        console.log('hide')
      }
    }
  }
</script>

<style scoped>

</style>

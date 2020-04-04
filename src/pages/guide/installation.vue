<template>
  <div>
    <div class="yumMain">

      <yum-main-title title="安装"></yum-main-title>

      <yum-main-sub-title subTitle="npm安装"></yum-main-sub-title>

      <yum-main-sm-info>
        <template #mainSmInfo>
          <p>推荐使用 npm 的方式安装，它能更好地和
            <yum-main-url-link url="https://webpack.js.org/" urlName="webpack"></yum-main-url-link>
            打包工具配合使用。</p>
        </template>
      </yum-main-sm-info>


      <div class="infoCode">
        <pre class="exPrev">
          <code class="exCode">npm i element-ui -S</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "installation"
  }
</script>

<style scoped>

</style>

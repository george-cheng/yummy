<template>
  <div>
    <yum-main-page #yumMain>
      <yum-main-title title="安装"></yum-main-title>

      <yum-main-sub-title subTitle="npm安装"></yum-main-sub-title>

      <yum-main-sm-info>
        <template #mainSmInfo>
          <p>推荐使用 npm 的方式安装，它能更好地和
            <yum-main-url-link url="https://webpack.js.org/" urlName="webpack"></yum-main-url-link>
            打包工具配合使用。</p>
        </template>
      </yum-main-sm-info>

      <yum-main-code>
        <template #prevCode><p>未上传到npm仓库,此功能待定!  （o(￣┰￣*)ゞ</p></template>
      </yum-main-code>

      <yum-main-tip>
        <template #mainTip><p>我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看<yum-main-url-link url="https://unpkg.com/" urlName="unpkg.com"></yum-main-url-link></p></template>
      </yum-main-tip>

    <yum-main-btm-switch prevTit="上一级" prevUrl="/home/layout" nextTit="下一级" nextUrl="/home/container"></yum-main-btm-switch>

    </yum-main-page>
  </div>
</template>

<script>
  export default {
    name: "installation"
  }
</script>

<style scoped>

</style>

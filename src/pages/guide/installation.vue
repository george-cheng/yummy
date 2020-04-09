<template>
  <div>
    <yum-main-page #yumMain>
      <yum-main-title title="安装"></yum-main-title>

      <yum-main-sub-title subTitle="npm安装"></yum-main-sub-title>

      <yum-main-sm-info>
        <template #mainSmInfo>
          <p>推荐使用 npm 的方式安装，它能更好地和
            <yum-main-url-link url="https://webpack.js.org/" urlName="webpack"></yum-main-url-link>
            打包工具配合使用。
          </p>
        </template>
      </yum-main-sm-info>

      <yum-main-code>
        <template #prevCode>
          <p>cnpm install yummyui -S</p>
          <p>由于出现某种神秘情况,暂不能使用npm下载</p>
          <p>1.0.0版本出现路径错误,请手动修改,后续将会改正</p>
        </template>
      </yum-main-code>

      <yum-main-tip>
        <template #mainTip>
          <p>我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看
            <yum-main-url-link url="https://unpkg.com/" urlName="unpkg.com"></yum-main-url-link>
          </p>
        </template>
      </yum-main-tip>

      <yum-main-tpl-show>
        <template #tplShow>
          <input type="text" value="1111">
        </template>
        <template #tplInfo>

          组件说明

        </template>
        <template #tplCode>

          <div v-pre>&lt;div&gt; 11111 &lt;/div&gt;</div>
          <div v-pre>&lt;div&gt; 3222 &lt;/div&gt;</div>
          <div v-pre>&lt;div&gt; 333333 &lt;/div&gt;</div>

        </template>
      </yum-main-tpl-show>

      <yum-main-show-table>
        <template #listHead>
          <yum-main-th style="width: 100px" value="参数"></yum-main-th>
          <yum-main-th style="width: 300px" value="说明"></yum-main-th>
          <yum-main-th style="width: 100px" value="类型"></yum-main-th>
          <yum-main-th style="width: 200px" value="可选值"></yum-main-th>
          <yum-main-th style="width: 100px" value="默认值"></yum-main-th>
        </template>
        <template #listBody>
          <tr>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
          </tr>
          <tr>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
          </tr>
          <tr>
            <yum-main-td value="2222222222222222222222222222222222222222222222222"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
            <yum-main-td value="11"></yum-main-td>
          </tr>
        </template>


      </yum-main-show-table>


      <yum-main-btm-switch prevTit="上一级" prevUrl="/home/layout" nextTit="下一级" nextUrl="/home/container"></yum-main-btm-switch>

    </yum-main-page>
  </div>
</template>

<script>

</script>

<style>

</style>

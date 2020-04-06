# yummyUI组件

### yummy项目介绍:
  
    一款自定义程度较高的组件
    
    该项目使用vue开发
    开发人:彼岸,虾饺,书行天下
    开发周期: 一个半月至两个月

### 项目简介: 

     该项目是以elementUI为原型开发可复用性和可自定义UI组件,
      
### yummy日志:
  
    2020.03.29 彼岸  搭建vue项目并上传至github,地址: https://github.com/george-cheng/yummy
    2020.04.04 彼岸  新增音乐播放器和伴娘 主界面标题和副标题组件
    2020.04.05 彼岸  新增icon图标, 滚动, 上下组件切换, 回到顶部
    2020.04.06 彼岸  代码展示 和 表格功能(待完善)






### 项目目录说明:
    
    /assets/pagesAssets  ->  展示界面需要的组件放置位置
    /assets/yummy        ->  单独组件放置位置
    
    /static/pagesStatic  ->  展示界面需要的样式放置位置
    /static/yummy        ->  单独组件样式防止位置 
    
    /pages/              ->  展示界面vue文件放置位置
    
    /assets/pagesAssets/iconfont  ->  icon图标放置位置
    icon制作流程:  
      1 先去阿里图标库https://www.iconfont.cn/ 下载svg格式的图标,
      2 打开 https://icomoon.io/app/#/select 
          上传(import icons) /assets/pagesAssets/iconfont目录下的 selecttion.json文件 同步其他人做的图标,
      3 上传自己刚刚下载的svg图标, 点击Generate Font 然后donwload
      4 复制 /fonts/  selection.json  style.css 文件到/assets/pagesAssets/iconfont目录 全部覆盖
      4 去 /static/pagesStatic/fontstyle.css 添加刚刚制作的字体图标  按照格式 以 .i-xxx 开头
      5 之后,就可以在全局引用 格式为 <span class="i-xxx"><span>
      6 注意提交 /assets/pagesAssets/iconfont  和  static/pagesStatic/fontstyle.css 文件,以访冲突
      
       
  

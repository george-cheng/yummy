import axios from 'axios'
import '../../../static/pagesStatic/live2d.css'
import './live2d.min.js'
const tips = {
  copy: [{
    selector: 'document',
    text: ['你都复制了些什么呀，转载要记得加上出处哦！']
  }],
  visibilitychange: [{
    selector: 'document',
    text: ['哇，你终于回来了～']
  }],
  click: [{
    selector: '.veditor',
    text: ['要吐槽些什么呢？', '一定要认真填写喵～', '有什么想说的吗？']
  }, {
    selector: '.vsubmit',
    text: ['输入验证码就可以提交评论啦～']
  }],
  mouseover: [{
    selector: '#live2d #live2d-main',
    text: ['(ノ≧∇≦)ノ','biubiu / / /']
  }, {
    selector: '#live2d-tool .fa-comment',
    text: ['猜猜我要说些什么？', '欣赏一些有意思的短句？']
  }, {
    selector: '#live2d-tool .fa-user-circle',
    text: ['想看看我的朋友们吗？']
  }, {
    selector: '#live2d-tool .fa-street-view',
    text: ['变装！']
  }, {
    selector: '#live2d-tool .fa-camera-retro',
    text: ['一起拍照留念？']
  }, {
    selector: '#live2d-tool .fa-info-circle',
    text: ['(＾Ｕ＾)ノ~ＹＯ']
  }, {
    selector: '#live2d-tool .fa-times',
    text: ['就要说再见了吗？']
  }]
};

const live2dmixin = {
  data () {
    return {
      messageTimer: null,
      mainShow: true,
      tips: tips,
      tipText: '',
      tipShow: false,
      toolShow: false,
      modelId: 1,
      modelTexturesId: 53,
      tools: [{
        name: 'fa-comment',
        click: this.showHitokoto
      }, {
        name: 'fa-user-circle',
        click: this.loadOtherModel
      }, {
        name: 'fa-street-view',
        click: this.loadRandTextures
      }, {
        name: 'fa-camera-retro',
        click: this.takePhoto
      }, {
        name: 'fa-info-circle',
        click: this.openHomePage
      }, {
        name: 'fa-times',
        click: this.close
      }]
    }
  },
  props: {
    apiPath: {
      default: 'https://live2d.fghrsh.net/api',
      type: String
    },
    zIndex: {
      default: 1,
      type: Number
    },
    model: {
      default: () => [1, 53],
      type: Array
    },
    homePage: {
      default: 'https://github.com/evgo2017',
      type: String
    }
  },
  mounted () {
    this.modelId = this.model[0];
    this.modelTexturesId = this.model[1];
    this.loadModel();
    this.$nextTick(function () {
      this.loadEvent()
    })
  },

  methods: {
    loadModel () {
      const url = `${this.apiPath}/get/?id=${this.modelId}-${this.modelTexturesId}`;
      const callback = console.log(`Live2D 模型 ${this.modelId}-${this.modelTexturesId} 加载完成`);
      window.loadlive2d('live2d-main', url, callback)
    },
    loadOtherModel () {
      const url = `${this.apiPath}/switch/?id=${this.modelId}`;
      axios.get(url).then((res) => {
        let { id, message } = res.data.model;
        if (id === 5) id = 7;
        this.modelId = id;
        this.showMessage(message, 4000);
        this.loadOtherTextures();
        this.loadModel()
      }).catch(function (err) {
        console.log(err)
      })
    },
    loadOtherTextures () {
      const url = `${this.apiPath}/rand_textures/?id=${this.modelId}-${this.modelTexturesId}`;
      axios.get(url).then((res) => {
        const { id } = res.data.textures;
        this.modelTexturesId = id;
        this.loadModel()
      }).catch(function (err) {
        console.log(err)
      })
    },
    loadRandTextures () {
      this.loadOtherTextures();
      this.showMessage('我的新衣服好看嘛？', 4000)
    },
    loadEvent () {
      for (const event in this.tips) {
        for (const obj of this.tips[event]) {
          const selector = obj.selector;
          let dom = null;

          if (selector === 'document') {
            dom = document
          } else if (document.querySelector(selector)) {
            dom = document.querySelector(selector)
          }

          if (dom == null) continue;
          dom.addEventListener(event, () => {
            const arr = obj.text;
            const msg = arr[Math.floor(Math.random() * arr.length)];
            this.showMessage(msg, 2000)
          })
        }
      }
    },
    showMessage (msg = '', timeout = 6000) {
      if (this.messageTimer) {
        clearTimeout(this.messageTimer);
        this.messageTimer = null
      } else {
        this.tipShow = true
      }
      this.tipText = msg;
      this.messageTimer = setTimeout(() => {
        this.tipShow = false;
        this.messageTimer = null
      }, timeout)
    },
    takePhoto () {
      this.showMessage('照好了嘛，留个纪念吖~');
      window.Live2D.captureName = 'photo.png';
      window.Live2D.captureFrame = true
    },
    showHitokoto () {
      const url = 'https://v1.hitokoto.cn';
      axios.get(url).then((res) => {
        const { hitokoto, id, creator } = res.data;
        this.showMessage(`${hitokoto} <br> - by <a href="https://hitokoto.cn?id=${id}">${creator}</a> from 《${res.data.from} 》`)
      }).catch(function (err) {
        console.log(err)
      })
    },
    openHomePage () {
      open(this.openHomePage)
    },
    close () {
      this.showMessage('下次见~', 2000);
      this.mainShow = false
    }
  }
};

export {
  live2dmixin
}

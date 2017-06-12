import Component from 'vue-class-component'
@Component({
  props: {
    src: {
      type: String
    },
    style: {
      type: Object
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  }
})
// See Component style guide
// https://github.com/pablohpsilva/vuejs-component-style-guide#how-6
export default class LeafComponent extends Vue {
  name = 'LayerComponent'
  defaultStyle = {
    position: absolute,
    left: this.x,
    top: this.y
  }

  get template() {
    `<div :style="styleData">
      <img v-if="imageSrc" width="100%" height="100%" :src="mediaSrc"></img>
      <span v-if="text" :style="text.style">{{text.caption}}</span>
    </div>`
  }

  data() {
    return {
      text: {
        mediaSrc: this.mediaSrc,
        caption: 'Hello World',
        style: {
          font: 'bold',
          color: 'blue'
        }
      }
    }
  }

  get mediaSrc() {
    return this.src || this.defaultSrc
  }

  get defaultSrc() {
    return `http://lorempixel.com/400/200/${this.width}/${this.height}`
  }

  get styleData() {
    return Object.assign({}, this.defaultStyle, this.style)
  }
}

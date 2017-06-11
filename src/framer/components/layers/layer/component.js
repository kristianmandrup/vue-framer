import Component from 'vue-class-component'
@Component({
  props: {
    cdata: {
      type: Object
    },
    src: {
      type: String
    },
    style: {
      type: Object
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
export default class ImageComponent extends Vue {
  name = 'ImageComponent'
  defaultStyle = {
    position: absolute
  }

  get template() {
    `<div :style="styleData">
      <img v-if="imageSrc" width="100%" height="100%" :src="imageSrc"></img>
      <span v-if="text" :style="text.style">{{text.caption}}</img>
    </div>`
  }

  data() {
    return {
      text: {
        imageSrc: this.defaultImage,
        caption: 'Hello World',
        style: {
          font: 'bold',
          color: 'blue'
        }
      }
    }
  }

  get imageSrc() {
    return this.src || this.defaultImage
  }

  get defaultImage() {
    return `http://lorempixel.com/400/200/${this.width}/${this.height}`
  }

  get styleData() {
    return Object.assign({}, this.defaultStyle, this.style)
  }
}

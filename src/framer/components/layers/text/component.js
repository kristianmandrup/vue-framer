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
export default class TextComponent extends Vue {
  name = 'TextComponent'

  // inherited?
  defaultStyle = {
    position: absolute,
    left: this.x,
    top: this.y,
  }

  get template() {
    `<div :style="styleData">
      {{text.caption}}
    </div>`
  }

  data() {
    return {
      text: {
        caption: 'Hello World',
        style: {
          font: 'bold',
          color: 'blue'
        }
      }
    }
  }

  get styleData() {
    return Object.assign({}, this.defaultStyle, this.style)
  }
}

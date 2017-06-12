import LayerComponent from '../layer/component'
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
export default class VideoComponent extends LayerComponent {
  name = 'VideoComponent'

  // inherited?
  defaultStyle = {
    position: absolute,
    left: this.x,
    top: this.y
  }

  // <video width="480" controls
  //   poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
  //   <source
  //     src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
  //     type="video/webm">
  //   <source
  //     src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
  //     type="video/mp4">
  //   <source
  //     src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
  //     type="video/ogg">
  //   Your browser doesn't support HTML5 video tag.
  // </video>
  get template() {
    `<div :style="styleData">
      <video v-if="media.src" :poster="video.poster" width="100%" height="100%">
        <source :src="media.src" :type="media.type"></source>
      </video>
    </div>`
  }

  data() {
    return {
      media: {
        src: this.mediaSrc,
        type: 'video/mp4'
      },
      text: {
        style: {}
      }
    }
  }

  get mediaSrc() {
    return this.src || this.defaultSrc
  }

  get defaultSrc() {
    return `https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4`
  }

  get styleData() {
    return Object.assign({}, this.defaultStyle, this.style)
  }
}

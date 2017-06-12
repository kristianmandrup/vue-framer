import VideoComponent from './component'
import Layer from '../layer'

// Framer Layer to Vue component wrapper
export class VideoLayer extends Layer {
  constructor(config = {}) {
    super(config)
  }

  createComponent() {
    this.component = new VideoComponent({
      propsData: this.config.data || {}
    })
  }
}

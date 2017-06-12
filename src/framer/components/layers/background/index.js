// mounted on body

// All other layers are appended to this one (ie. base layer)

import BgLayerComponent from './component'
import Layer from '../layer'

// Framer Layer to Vue component wrapper
export class BackgroundLayer extends Layer {
  constructor(config = {}) {
    super(config)
    this.configure()
  }

  createComponent() {
    this.component = new BgLayerComponent({
      propsData: this.config.data || {}
    })
  }
}

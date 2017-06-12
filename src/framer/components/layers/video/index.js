// mounted on body

// All other layers are appended to this one (ie. base layer)

import Layer from '../layer'

// Framer Layer to Vue component wrapper
export class TextLayer extends Layer {
  constructor(config = {}) {
    super(config)
  }

  createComponent() {
    this.component = new TextComponent({
      propsData: this.config.data || {}
    })
  }
}

import LayerComponent from './component'

// Framer Layer to Vue component wrapper
export class Layer {
  constructor(config = {}) {
    this.config = config
    this.parent = config.parent || 'body'
    this.component = new LayerComponent({
      propsData: config.data || {}
    })
  }

  render() {
    this.component.$mount().appendTo(this.parent)
  }
}

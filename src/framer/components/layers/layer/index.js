import ContainerComponent from './component'
import LeafLayer from '../leaf'

function isLayer(obj) {
  return obj instanceof Layer
}

// Framer Layer to Vue component wrapper
export class Layer extends LeafLayer {
  constructor(config = {}) {
    super(config)
    this.configure()
  }

  addChild(child) {
    this.children.push(child)
  }

  removeChild(child) {
    let index = this.children.indexOf(child)
    this.children.slice(index, 1)
    return this
  }

  set children(children) {

  }

  childrenWithName(name) {

  }

  set siblings(siblings) {

  }

  siblingsWithName(name) {

  }

  set descendants(descendants) {

  }

  set ancestors(ancestors) {

  }


  configure() {
    super.configure()
    this.config.data.children = this.config.data.children || []
  }

  createComponent() {
    this.component = new LayerComponent({
      propsData: this.config.data || {}
    })
  }
}

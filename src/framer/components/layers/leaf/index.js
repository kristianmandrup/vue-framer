import LeafComponent from './component'

// Framer Layer to Vue component wrapper
export class LeafLayer {
  defaultParent = 'body'

  constructor(config = {}) {
    this.config = config
    this.configure()
  }

  set parent(parent) {
    if (!isLayer(parent)) {
      this.handleError('Invalid parent layer', parent)
    }
    parent.addChild(this)
  }

  placeBefore(layer) {}

  placeBehind(layer) {}

  bringToFront() {

  }

  sendToBack() {

  }

  center() {

  }

  centerX() {

  }

  centerY() {

  }

  pixelAlign() {

  }

  set screenFrame(frame) {

  }

  contentFrame() {

  }

  centerFrame() {

  }

  set backgroundColor(bgColor) {

  }

  set color(color) {

  }

  set image(img) {

  }

  set visible(visibility) {

  }

  set opacity(opacity) {

  }


  handleError(msg, data) {
    console.error(msg, data)
    throw new Error(msg)
  }

  configure() {
    this.parent = config.parent || this.defaultParent
    this.config.data = this.config.data || {}
  }

  createComponent() {
    this.component = new LayerComponent({
      propsData: this.config.data || {}
    })
  }

  render() {
    this.component.$mount().appendTo(this.parent)
  }
}

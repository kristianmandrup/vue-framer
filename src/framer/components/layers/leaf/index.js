import mixins from 'es6-mixins'
import LeafComponent from './component'

// Framer Layer to Vue component wrapper
export class LeafLayer {
  defaultParent = 'body'

  // TODO: conditionally add mixins: Stateful, Animation, ...
  constructor(config = {}) {
    // mixins([TestMixin1, TestMixin2], this);
    this.config = config
    this.configure()
    this.postConfigure()
  }

  handleError(msg, data) {
    console.error(msg, data)
    throw new Error(msg)
  }

  configure() {
    this.name = this.config.name
    this.clazz = 'Layer'
    this.parent = config.parent || this.defaultParent
  }

  postConfigure() {
    this.validateConfig()
    this.register()
  }

  validateConfig() {}

  // register instance as a (global, reusable) component
  register() {
    Vue.component(this.name, this)
  }

  createComponent() {
    this.component = new LayerComponent({
      propsData: this.propsData
    })
  }

  get propsData() {
    return Object.assign({}, this.config, {})
  }

  render() {
    this.component.$mount().appendTo(this.parent)
  }

  // TODO: group in mixins by category
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
}

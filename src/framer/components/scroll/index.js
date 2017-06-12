import ContainerComponent from './component'
import {
  Layer
} from '../layers'
import {
  isLayer
} from '../utils'

export class ScrollComponent extends Layer {
  constructor(config = {}) {
    super(config)
  }
}

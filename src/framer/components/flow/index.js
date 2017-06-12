import ContainerComponent from './component'
import {
  Layer
} from '../layers'
import {
  isLayer
} from '../utils'

export class FlowComponent extends Layer {
  constructor(config = {}) {
    super(config)
  }
}

import ContainerComponent from './component'
import {
  Layer
} from '../layers'
import {
  isLayer
} from '../utils'

export class PageComponent extends Layer {
  constructor(config = {}) {
    super(config)
  }
}

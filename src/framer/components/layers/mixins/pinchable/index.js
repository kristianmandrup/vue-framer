// https://framer.com/docs/#layer.pinchable

// mixin
export class Pinchable {
  constructor(config = {}) {
    super(config)
  }

  set centerOrigin(origin) {
    this._origin = origin
  }

  set scale(scale) {
    this._scale = scale
  }

  set scaleIncrements(inc) {
    this._scaleIncrements = inc
  }

  set minScale(scale) {
    this._minScale = scale
  }

  set maxScale(scale) {
    this._maxScale = scale
  }

  set scaleFactor(factor) {
    this._scaleFactor = factor
  }

  set rotate(rotation) {
    this._rotate = rotation
  }

  set rotateIncrements(inc) {
    this.rotateIncrements = inc
  }

  set rotateFactor(factor) {
    this._rotateFactor = factor
  }
}

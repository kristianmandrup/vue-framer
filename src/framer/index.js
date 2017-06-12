import components from 'components'

Object.keys(components).map(key => {
  window[key] = components[key]
})

// configures window.Layer = Layer etc.

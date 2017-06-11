import test from 'ava'
import Vue from 'vue'
import App from '../src/components/App.vue'

import {
  Layer
} from '../src/layer'

test('renders', t => {
  const vm = new Vue(App).$mount()
  const tree = {
    $el: vm.$el.outerHTML
  }
  t.snapshot(tree)
})

test('Layer: appends to body', t => {
  let hello = new Layer()
  layer.render()
})

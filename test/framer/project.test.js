import test from 'ava'
import Vue from 'vue'
import App from '../src/components/App.vue'

import '../src/framer'

import project from 'ecma-framer'

// TODO: iterate layers in project and wrap for Vue-Framer bridge

test('renders', t => {
  const vm = new Vue(App).$mount()
  const tree = {
    $el: vm.$el.outerHTML
  }
  t.snapshot(tree)
})

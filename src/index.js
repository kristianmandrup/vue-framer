import Vue from 'vue'
import App from './components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

import Component from 'vue-class-component'
import {
  createDecorator
} from 'vue-class-component'

// Register router hooks
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave'
])


// data, render and all Vue lifecycle hooks can be directly declared
// as class member methods as well

@Component({
  props: {
    propMessage: String
  }
})

class Hello extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  beforeRouteEnter() {
    console.log('beforeRouteEnter')
  }

  beforeRouteLeave() {
    console.log('beforeRouteLeave')
  }

  // lifecycle hook
  mounted() {
    this.greet()
  }

  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }

  // method
  greet() {
    alert('greeting: ' + this.msg)
  }
}

// Framer Layer to Vue component wrapper
class Layer {
  constructor(config = {}) {
    this.config = config
    // this.component = new Hello()
  }
}

let hello = new Hello()
hello.$mount().appendTo('body')

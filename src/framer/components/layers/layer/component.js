import Vue from 'vue'
import Component from 'vue-class-component'
// import {
//   createDecorator
// } from 'vue-class-component'

// Register router hooks
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave'
])

// Style binding
// https://vuejs.org/v2/guide/class-and-style.html
// Inline styles
// https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles

// data, render and all Vue lifecycle hooks can be directly declared
// as class member methods as well

// For detailed inner workings:
// - https://github.com/vuejs/vue-class-component/blob/master/test/test.ts

// example: https://github.com/vuejs/vue-class-component/tree/master/example
@Component({
  props: {
    children: {
      type: Array,
      default: []
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    style: {
      type: Object
    }
  }
})
// See Component style guide
// https://github.com/pablohpsilva/vuejs-component-style-guide#how-6
export default class ContainerComponent extends Vue {
  name = 'ContainerComponent'

  defaultStyle = {
    position: absolute
  }

  // todo: use Adapter approach
  // https://jsfiddle.net/simplesmiler/v6w8tzae/
  get template() {
    `<div :style="styleData">
      <ul class="child-container">
        <li v-for="child in children">
          <component :is="child.type" :cdata="child.data" keep-alive></component>
        <li>
      <ul>
    </div>`
  }

  data() {
    return {
      children: [{
        type: 'fr-layer',
        data: {
          x: 10,
          y: 20,
          height: 100,
          width: 200
        }
      }]
    }
  }

  // computed
  get styleData() {
    return Object.assign({}, this.defaultStyle, this.style)
  }

  beforeRouteEnter() {
    console.log('beforeRouteEnter')
  }

  beforeRouteLeave() {
    console.log('beforeRouteLeave')
  }

  // lifecycle hooks
  created() {}

  mounted() {}

  // methods
  greet() {
    alert('greeting: ' + this.msg)
  }
}

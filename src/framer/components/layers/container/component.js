import Component from 'vue-class-component'
import {
  createDecorator
} from 'vue-class-component'

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
    components: {
      type: Array,
      default: []
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

  // todo: use list
  get template() {
    `<div :style="styleData">
      <ul>
        <li v-for="comp in components">
          <component :is="comp.type" :cdata="comp.data" keep-alive></component>
        <li>
      <ul>
    </div>`
  }

  data() {
    return {
      components: [{
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

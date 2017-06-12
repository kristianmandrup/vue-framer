import Vue from 'vue'

export function Adapter(Adapted) {
  var propString = Adapted.options.props.map(function (prop) {
    return prop.name + '="{{ props.' + prop.name + ' }}"';
  }).join(' ');
  return Vue.extend({
    template: '<component is="adapted" ' + propString + '></component>',
    components: {
      'adapted': Adapted
    },
    props: {
      props: Object,
    }
  });
}

// Demo
var Circle = Vue.extend({
  template: '<p>Area of circle with radius {{ radius }} is {{ area }}</p>',
  props: {
    radius: {
      type: Number,
      required: true
    }
  },
  computed: {
    area: function () {
      return this.radius * Math.PI * 2;
    }
  },
});

var Rect = Vue.extend({
  template: '<p>Area of rect of {{ width }}x{{ height }} is {{ area }}</p>',
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    area: function () {
      return this.width * this.height;
    }
  },
});

new Vue({
  el: '#demo',
  data: function () {
    return {
      items: [{
          type: 'circle',
          props: {
            radius: 5
          }
        },
        {
          type: 'rect',
          props: {
            width: 2,
            height: 3
          }
        }
      ]
    };
  },
  components: {
    'circle': Adapter(Circle),
    'rect': Adapter(Rect)
  }
});

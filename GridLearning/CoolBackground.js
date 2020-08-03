new Vue({
  el: '#app',

  data: {
    attachedBottom: false
  },

  methods: {
    attachedAlign: function() {
      this.attachedBottom = !this.attachedBottom
    }

  }

})

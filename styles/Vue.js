new Vue({
  el: '#app',

  data: {
    color: 'green',
    color1: 'blue',
    changeState: false
  },

  computed: {
    divClasses: function() {
      return {
        red: this.changeState,
        blue: !this.changeState
      }
    },
    myStyle: function () {
      return{
        backgroundColor: this.color
        };
    },
    myStyle1: function () {
      return{
        backgroundColor: this.color1
        };
    }
  },

  methods: {
    randColor: function() {
      var letters = "0123456789ABCDEF";
      var hex = '#';
      for (var i = 0; i < 6; i++)
        hex += letters[(Math.floor(Math.random() * 16))];
      return hex;
    }
  }
})

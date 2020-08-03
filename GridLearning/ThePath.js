var vm1 = new Vue({
  el: '#app',

  data: {
    color1: 'blue',
    color2: 'orange',
    color3: 'green'
  },

  methods: {

    randWord: function() {
      var vm = this;
      setInterval(function() {
        vm.randColor();
      }, 2000);
    },

    randColor: function() {
      var letters = "0123456789ABCDEF";
      var hex = '#';
      for (var i = 0; i < 6; i++)
        hex += letters[(Math.floor(Math.random() * 16))];
      return hex;
    }
  }
})

setInterval(function() {
  vm1.color1 = randColor();
  vm1.color2 = randColor();
  vm1.color3 = randColor();
}, 2000)

randColor = function() {
  var letters = "0123456789ABCDEF";
  var hex = '#';
  for (var i = 0; i < 6; i++)
    hex += letters[(Math.floor(Math.random() * 16))];
  return hex;
}

// NOTE:  proof-of-concept...
//
const app = new Vue({
  el: "#app",
  data: {
    value: 1,
    event: null,
    codes: [
      48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 95, 61, 45, 43
    ],
    plus: false,
    minus: false,
    right: false
  },
  methods: {
    processKey: function(evt) {
      evt = (evt) ? evt : window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (!this.codes.includes(charCode)) {
        evt.preventDefault()
      } else {
        switch(charCode) {
          case 61:
          case 43:
            // works for + or =
            this.up()
            evt.preventDefault()
            break
          case 95:
          case 45:
            // works for - or _
            this.down()
            evt.preventDefault()
            break
          default:
            return true
        }
      }
    },
    over: function(tag) {
      this[tag] = true    
    },
    out: function(tag) {
      this[tag] = false
    },
    reset: function() {
      if (!this.value) {
        this.value = 1        
      }
    },
    up: function() {
      this.value++
    },
    down: function() {
      if (this.value > 1) {
        this.value--
      }
    },
    gotcha: function() {
      // just for testing...
    }
  },
  computed: {
    colorPlus: function() {
      return this.plus ? 'cRed' : 'cBlack'
    },
    colorMinus: function() {
      return this.minus ? 'cRed' : 'cBlack'
    },
    colorRight: function() {
      return this.right ? 'bgRed' : 'bgGrey'
    }
  }
})

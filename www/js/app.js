(function() {

'use strict';

// Let's define a simple app
window.app = {
  init: function() {
    // Our initialization script will bind some events
    this.bindEvents();
  },

  bindEvents: function() {
    // We'll know when our machine is ready to rock
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function(ev) {
    // Awesome things can happen here
    // Let paint our title with a red background
    document.querySelector('h1').style.background = 'red';
  }
};

// Awakening the beast
app.init();

}());

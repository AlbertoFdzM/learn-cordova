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
    cordova.plugins.notification.local.schedule({
      id: 1,
      text: 'Single Notification'
    });
  }
};

// Awakening the beast
app.init();

}());

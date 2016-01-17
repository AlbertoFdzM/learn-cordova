(function() {

'use strict';

function changeView(ctx, next) {
  var $viewEl = $('#' + ctx.pathname.substr(1));

  $('main > section').hide();

  if ($viewEl.length) {
    $viewEl.show();
  } else {
    $('#index').show();
  }

  next();
}

page.redirect('/index.html', '/');

page('*', changeView);

page('/', function(ctx) {
});

page('/about', function(ctx) {
});

page();

}());

$(document).ready(function(){
  var $nav = $('#nav');
  $nav.scrollspy({ offset: 20, animate: true, onChange: function(current, next, position){
      var $elem = $('a[href="' + current.selector + '"]');
      var $color = $elem.attr('data-color');
      $elem.css('border-color', $color);
    }
  });
  //$('.ui.sidebar').sidebar('toggle');
  $('.ui.sidebar').sidebar({ transition: 'overlay' }).sidebar('attach events', '.launch.sidebar');
});

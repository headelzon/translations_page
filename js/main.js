// JavaScript Document

$( document ).ready( function() {
	var viewportHeight = $( window ).height();
	
	$( window ).resize( function() {
		viewportHeight = $( window ).height();
	});
	
	$( "li.nav-item" ).click( function() {
		$( "li.nav-item" ).removeClass( "active" );
		$( this ).addClass( "active" );
	});
	
	var oldScroll = $( this ).scrollTop();
	
	$( window ).scroll( function() {
		
		var newScroll = $( this ).scrollTop();
		
		if((newScroll > oldScroll) && (oldScroll <= 100) && (newScroll > 100)) {
			$( ".navbar" ).addClass("inverted");
			$( "#phone-nav path" ).css("fill", "#000");
			$( "#logo-nav path" ).css("fill", "#000");
		} else if((newScroll < oldScroll) && (newScroll <= 100)){
			$( ".navbar" ).removeClass("inverted");
			$( "#phone-nav path" ).css("fill", "#fff");
			$( "#logo-nav path" ).css("fill", "#fff");
		}
		
		oldScroll = newScroll;
	});
	
	$( "#translations-button" ).click(function() {
		$('html, body').animate({
			scrollTop: $( ".translations-categories" ).offset().top
		}, 800);
	});
});


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);
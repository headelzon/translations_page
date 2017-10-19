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
			$( ".navbar .logo" ).attr("data", "./assets/black-logo.svg");
			$( ".navbar .phone" ).attr("data", "./assets/black-phone.svg");
		} else if((newScroll < oldScroll) && (newScroll <= 100)){
			$( ".navbar" ).removeClass("inverted");
			$( ".navbar .logo" ).attr("data", "./assets/white-logo.svg");
			$( ".navbar .phone" ).attr("data", "./assets/white-phone.svg");
		}
		
		oldScroll = newScroll;
	});
	
	$( "#translations-button" ).click(function() {
		$('html, body').animate({
			scrollTop: $( ".translations-categories" ).offset().top
		}, 800);
	});
	
//	$('#fullpage').fullpage({
//		//Navigation
//		menu: '#menu',
//		lockAnchors: false,
//		anchors:['firstPage', 'secondPage'],
//		navigation: false,
//		navigationPosition: 'right',
//		navigationTooltips: ['firstSlide', 'secondSlide'],
//		showActiveTooltip: false,
//		slidesNavigation: false,
//		slidesNavPosition: 'bottom',
//
//		//Scrolling
//		css3: true,
//		scrollingSpeed: 700,
//		autoScrolling: true,
//		fitToSection: true,
//		fitToSectionDelay: 1000,
//		scrollBar: false,
//		easing: 'easeInOutCubic',
//		easingcss3: 'ease',
//		loopBottom: false,
//		loopTop: false,
//		loopHorizontal: true,
//		continuousVertical: false,
//		continuousHorizontal: false,
//		scrollHorizontally: false,
//		interlockedSlides: false,
//		dragAndMove: false,
//		offsetSections: false,
//		resetSliders: false,
//		fadingEffect: false,
//		normalScrollElements: '#element1, .element2',
//		scrollOverflow: false,
//		scrollOverflowReset: false,
//		scrollOverflowOptions: null,
//		touchSensitivity: 15,
//		normalScrollElementTouchThreshold: 5,
//		bigSectionsDestination: null,
//
//		//Accessibility
//		keyboardScrolling: true,
//		animateAnchor: true,
//		recordHistory: true,
//
//		//Design
//		controlArrows: true,
//		verticalCentered: true,
//		sectionsColor : ['#ccc', '#fff'],
//		paddingTop: '3em',
//		paddingBottom: '10px',
//		fixedElements: '#header, .footer',
//		responsiveWidth: 0,
//		responsiveHeight: 0,
//		responsiveSlides: false,
//		parallax: false,
//		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
//
//		//Custom selectors
//		sectionSelector: '.section',
//		slideSelector: '.slide',
//
//		lazyLoading: true,
//
//		//events
//		onLeave: function(index, nextIndex, direction){},
//		afterLoad: function(anchorLink, index){},
//		afterRender: function(){},
//		afterResize: function(){},
//		afterResponsive: function(isResponsive){},
//		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
//		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
//	});
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
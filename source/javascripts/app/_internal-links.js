(function (global) {
	'use strict';
	$(function(){

		$('table a').on('click', function(e) {
			var $a = $(this);
			e.preventDefault();
	    // Scroll the window, stop any previous animation, stop on user manual scroll
	    // Check https://github.com/flesler/jquery.scrollTo for more customizability
	    	var href = $a.attr('href');
	    	var $elm = $a.closest('table').nextAll(href);
	    	console.log($elm);
	    	$(window).stop(true).scrollTo($elm[0], {duration:600, interrupt:true});
		});
	})
	
})(window);
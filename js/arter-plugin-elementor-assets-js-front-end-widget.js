(function ($) {
	"use strict";

	/* Init Elementor Front Scripts */
	$(window).on('elementor/frontend/init', function () {

		// Widgets
		elementorFrontend.hooks.addAction( 'frontend/element_ready/arter-started-section.default', function() {
			
		} );

		// Global
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			
		} );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
			
		} );
	});
})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */

/************************************************/
/* lightbox setup                               */
/************************************************/
$('.site, .picture').magnificPopup({
	
	// main options
	type: 'iframe',
	showCloseBtn: false,
	
	// if not an iframe alter type to image
	callbacks: {
		elementParse: function(item) {
			
			//the class name
			if (item.el.context.className == 'site') {
				item.type = 'iframe';
			} else {
				item.type = 'image';
			}
		}
	},
				
	// options for iframe
	iframe: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'<div class="mfp-title">Some caption</div>'+
				'</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,
	},
	callbacks: {
		
		// this adds the title to the lightbox.
		markupParse: function(template, values, item) {
			values.title = item.el.attr('title');
		}
	},
		
	// options for image
	image: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<div class="mfp-img"></div>'+
					'<div class="mfp-bottom-bar">'+
						'<div class="mfp-title"></div>'+
					'</div>'+
				'</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,
	}
});

// setup plugin mixitup
var mixer = mixitup('.container', {
	selectors: {
		target: '.mix'
	},
	animation: {
		enable: true
	}
});

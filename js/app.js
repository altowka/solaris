(function ($) {
	$(document).foundation();

	// $(function() {
	// 	$('.p-in-slider').matchHeight();
	// 	$('.slider-h2').matchHeight();
	// });
	

$(document).ready(function () {
	$('.p-in-slider').matchHeight();
	$('.slider-h2').matchHeight();
	$(".owl-1").owlCarousel({

		responsive:{ 
			0:{
				items:2
            },
            960: {
                items:3
            }
        },
        nav: true,
        loop: true,
        margin: 10,
        autoplay : 2000,
        stopOnHover : true,
        animateOut: 'ease',
        animateIn: 'ease',
        smartSpeed:450,
        slideTransition: 'ease-in-out',
        // animateOut: ease,
        // autoplayTimeout:1000,
	// 	navText:[`<svg xmlns="http://www.w3.org/2000/svg" width="10.038" height="17.247" viewBox="0 0 10.038 17.247">
	// 	<g id="Group_113" data-name="Group 113" transform="translate(1.414 1.414)" opacity="0.4">
	// 	  <g id="Group_130" data-name="Group 130" transform="translate(0 0)">
	// 		<g id="Group_111" data-name="Group 111">
	// 		  <line id="Line_9" data-name="Line 9" x1="7.209" y2="7.209" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 		  <line id="Line_10" data-name="Line 10" x1="7.209" y1="7.209" transform="translate(0 7.209)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 		</g>
	// 	  </g>
	// 	</g>
	//   </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="10.037" height="17.246" viewBox="0 0 10.037 17.246">
	//   <g id="Group_131" data-name="Group 131" transform="translate(1.414 1.414)">
	// 	<g id="Group_130" data-name="Group 130" transform="translate(0 0)">
	// 	  <g id="Group_111" data-name="Group 111">
	// 		<line id="Line_9" data-name="Line 9" x2="7.209" y2="7.209" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 		<line id="Line_10" data-name="Line 10" y1="7.209" x2="7.209" transform="translate(0 7.209)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 	  </g>
	// 	</g>
	//   </g>
    // </svg>`],
        dots: true,
		autoHeight: true
	});

	$(".owl-2").owlCarousel({

		responsive:{ 
			0:{
				items:1
            }
		},
        loop: true,
        margin: 10,
        autoplay : 2000,
        stopOnHover : true,
        // animateOut: 'ease',
        // animateIn: 'ease',
        smartSpeed:850,
        slideTransition: 'ease-in-out',
        // animateOut: ease,
        // autoplayTimeout:1000,
	// 	navText:[`<svg xmlns="http://www.w3.org/2000/svg" width="10.038" height="17.247" viewBox="0 0 10.038 17.247">
	// 	<g id="Group_113" data-name="Group 113" transform="translate(1.414 1.414)" opacity="0.4">
	// 	  <g id="Group_130" data-name="Group 130" transform="translate(0 0)">
	// 		<g id="Group_111" data-name="Group 111">
	// 		  <line id="Line_9" data-name="Line 9" x1="7.209" y2="7.209" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 		  <line id="Line_10" data-name="Line 10" x1="7.209" y1="7.209" transform="translate(0 7.209)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 		</g>
	// 	  </g>
	// 	</g>
	//   </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="10.037" height="17.246" viewBox="0 0 10.037 17.246">
	//   <g id="Group_131" data-name="Group 131" transform="translate(1.414 1.414)">
	// 	<g id="Group_130" data-name="Group 130" transform="translate(0 0)">
	// 	  <g id="Group_111" data-name="Group 111">
	// 		<line id="Line_9" data-name="Line 9" x2="7.209" y2="7.209" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 		<line id="Line_10" data-name="Line 10" y1="7.209" x2="7.209" transform="translate(0 7.209)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
	// 	  </g>
	// 	</g>
	//   </g>
    // </svg>`],
        dots: true,
		autoHeight: true
	});

	
});




	



})(jQuery);
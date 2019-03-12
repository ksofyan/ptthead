


new fullpage('#fullpage', {

	licenseKey: 'YOUR_KEY_HERE',
	autoScrolling:true,
	css3: true,
	easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
	scrollingSpeed: '1000',

	onLeave: function(index, nextIndex, direction) {

		var bgPrev = index.item.querySelectorAll('.background');
		var bgNext = nextIndex.item.querySelectorAll('.background');
		var itemPrev = index.item.querySelectorAll('.rev_item');
		var itemNext = nextIndex.item.querySelectorAll('.rev_item');
		

		// ----- Next Slide ----- //

		if (index.index < nextIndex.index) {

			// current slide animation

			TweenMax.fromTo(
	      bgPrev,1, 
	      {alpha:.8, scale:1.1, yPercent:0},
	      {alpha:.2, scale:1, yPercent:40, ease:Power2.easeInOut}
	    );

	    // new slide animation

			TweenMax.fromTo(
	      bgNext,1, 
	      {alpha:.2, scale:1.2, yPercent:-40},
	      {alpha:.8, scale:1.1, yPercent:0, ease:Power1.easeInOut}
	    );

	    // new slide texts animation

	    TweenMax.staggerFromTo(
			  itemNext,1, 
			  {alpha:0, y:20},
			  {alpha:1, y:0, ease:Power2.easeOut, delay:.65},0.15
			);
		}

		// ----- Prev Slide ----- //

		else {

			// current slide animation

			TweenMax.fromTo(
	      bgPrev,1, 
	      {alpha:.8, scale:1.1, yPercent:0},
	      {alpha:.2, scale:1, yPercent:-40, ease:Power2.easeInOut}
	    );

	    // new slide animation

			TweenMax.fromTo(
	      bgNext,1, 
	      {alpha:.2, scale:1.2, yPercent:40},
	      {alpha:.8, scale:1.1, yPercent:0, ease:Power1.easeInOut}
	    );

	    // new slide texts animation

	    TweenMax.staggerFromTo(
			  itemNext,1, 
			  {alpha:0, y:-20},
			  {alpha:1, y:0, ease:Power2.easeOut, delay:.65},0.15
			);
		}

		

  },
  /*
  onSlideLeave: function(section, origin, destination, direction) {

		var bgPrev = origin.item.querySelectorAll('.background');
		var bgNext = destination.item.querySelectorAll('.background');
		var itemPrev = origin.item.querySelectorAll('.rev_item');
		var itemNext = destination.item.querySelectorAll('.rev_item');

		

		TweenMax.staggerFromTo(
		  itemNext,1, 
		  {alpha:0, y:30},
		  {alpha:1, y:0, ease:Expo.easeOut, delay:.65},0.15
		);
		

		if (origin.index < destination.index) {
			TweenMax.set(bgPrev,{alpha:.2, xPercent:-50});


			TweenMax.fromTo(
	      bgPrev,1, 
	      {alpha:.8, xPercent:0},
	      {alpha:.2, xPercent:40, ease:Expo.easeInOut}
	    );

			TweenMax.fromTo(
	      bgNext,1, 
	      {alpha:.2, xPercent:-40},
	      {alpha:.8, xPercent:0, ease:Expo.easeInOut}
	    );
		}

		else {
			TweenMax.set(bgNext,{alpha:.2, xPercent:50});

			TweenMax.fromTo(
	      bgPrev,1, 
	      {alpha:.8, xPercent:0},
	      {alpha:.2, xPercent:-40, ease:Expo.easeInOut}
	    );

			TweenMax.fromTo(
	      bgNext,1, 
	      {alpha:.2, xPercent:40},
	      {alpha:.8, xPercent:0, ease:Expo.easeInOut}
	    );
		}

  },
	*/

});







// ---------- Custom Cursor + Section Tilt (Mousemove event) ---------- //



function qCursor() {

  var w = window;
  const b = document.getElementsByTagName("body")[0];
        b.addEventListener("mousemove", mouseMove);
  var cursor = document.getElementById('cursor');
  var icon = document.getElementById('icon');

  cursorUnhover();

  function mouseMove(e) { 
    // Custom Cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }

  function cursorHoverNext(e) {   
    
		TweenMax.to(icon, 0.3, {
      rotation: 0,
      scale: 1,
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    });
	}
   
  function cursorHoverPrev(e) { 

  		TweenMax.to(icon, 0.3, {
        rotation: -180,
        scale: 1,
        opacity: 1,
        ease: Back.easeOut.config(1.7)
      });
  }


  function cursorUnhover(e) {   
    

    TweenMax.to(icon, .3, {
      rotation: -135,
      opacity: 0,
      scale: 0.5
    });
    
  }


  var hovers = document.querySelectorAll(".fp-controlArrow");

  for (var i = hovers.length - 1; i >= 0; i--) {
    var hover = hovers[i];
    hoverHandler(hover);

  };

  function hoverHandler(hover) {

  	if ( hover.classList.contains('fp-next') ) {
  		hover.addEventListener("mouseover", cursorHoverNext);
  	} else {
  		hover.addEventListener("mouseover", cursorHoverPrev);
  	}
    hover.addEventListener("mouseout", cursorUnhover);

  	

    
  }

};

qCursor()












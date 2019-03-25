


new fullpage('#fullpage', {

	licenseKey: 'YOUR_KEY_HERE',
	autoScrolling:true,
	css3: true,
	easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
	scrollingSpeed: '1000',

	onLeave: function(index, nextIndex, direction) {

		navBarChange(nextIndex.item);

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

		var threeBoxes = nextIndex.item.querySelectorAll('.slide.three-box');
    	var threeBox = nextIndex.item.classList.contains('three-box');

    	if (threeBoxes && threeBoxes.length > 0 || threeBox) {
    		if (threeBox) {
    			var items = nextIndex.item.querySelectorAll('.event-info');
    			animateBoxes(items)
	    		
    		} else {
    			for (var i = threeBoxes.length - 1; i >= 0; i--) {
				    var threeBox = threeBoxes[i]; 
	    			var items = threeBox.querySelectorAll('.event-info');
	    			animateBoxes(items)
				  };
    		}

    		function animateBoxes(items) {
    			TweenMax.staggerFromTo(
				  items,.5, 
				  {alpha:0, y:100},
				  {alpha:1, y:0, ease:Power2.easeOut, delay:.35},0.1
				);
    		}
    	}


  },
  
  onSlideLeave: function(section, origin, destination, direction) {

  		navBarChange(destination.item);

  }
	

});



// ---------- Navbar Colour Change ---------- //



function navBarChange(item) {



	var navBar = document.getElementById('navbar');
	var cont = document.getElementById('fullpage');
	

	setTimeout(function(){ 
		if (item.classList.contains('white')) {
			navBar.classList.add('white');
	    } else {
	    	navBar.classList.remove('white');
	    }
		
	}, 500);

}



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

qCursor();


function togglePopupSearch(value) {
	var popup = document.querySelector('.popup-container');	

	if(!popup) return

	if(value) {
		popup.classList.add('active')
	} else {
		popup.classList.remove('active');
	}
}


function togglePopupNavbar(value) {
	var navpop = document.querySelector('.popup-navbar');

	if(!navpop) return
		if(value) {
			navpop.classList.add('active')
		} else {
			navpop.classList.remove('active');
		}
}

function togglePopupBooknow(value) {
	var bookPop = document.querySelector('.popup-booknow');

	if(!bookPop) return
		if(value) {
			bookPop.classList.add('active')
		} else {
			bookPop.classList.remove('active');
		}
}








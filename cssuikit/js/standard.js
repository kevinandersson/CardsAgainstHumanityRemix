// getPageScroll() by quirksmode.com
function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
}

// Adapted from getPageSize() by quirksmode.com
function getPageHeight() {
    var windowHeight
    if (self.innerHeight) { // all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight
}



jQuery( 'div.view').live( 'pageinit',function(event){
	
	//if ($(".select_body").is(":hidden")) 

	// TAP EVENTS
	/* Action Sheet */
	alert("data")
	$(".open-alert-bar").on('click',function(event) {
		
		alert("tapped");
		if($(this).find("blue-label")){
			$(this).find("span.blue-label").html("Clicked");

		}
		$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");
		
		if($(".alert-bar-overlay").hasClass("invisible")){
			$(".alert-bar-overlay").removeClass("invisible")
		}
	});
	
	$(".alert-bar-overlay .button").on('tap',function(event) {
		$(".alert-bar-overlay").addClass("slide-down").removeClass("slide-up");

	});
	
	
});



$(document).ready(function() {
	
		/* Spinner START */
		var opts = {
		lines: 12, // The number of lines to draw
		length: 4, // The length of each line
		width: 2, // The line thickness
		radius: 5, // The radius of the inner circle
		color: '#000', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
		};
		var target = document.getElementById('spinner');
		var spinner = new Spinner(opts).spin(target);
		/* Spinner END */
		
		$( ".slider" ).slider({
			range: "min",
			value: 50,
			min: 1,
			max: 100});

		$('.slider').draggable();
		$('.dragable').draggable();
		
		 if (!$.browser.webkit) {
			alert( "You need webkit to enjoy this site. Please have a look in Safari or Google Chrome.");
		  }
	
		
		/* Action Sheet */

	  // if (navigator.userAgent.indexOf('iPhone') == -1) {
			// not iphone
			$(".open-alert-bar").click(function(){
				if($(this).find("blue-label")){
					$(this).find("span.blue-label").html("Clicked");
				}
				$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");
			});
			
			$(".alert-bar-overlay .button").click(function(e){
				$(".alert-bar-overlay").removeClass("slide-up").addClass("slide-down");
			});
			
		//}
		
		
		
		
		
		$(window).scroll(function(){
	        /*
	        if  ($(window).scrollTop() == $(document).height() - $(window).height()){
    	       lastPostFunc();
        	}
        	*/
        	var scrollposY = getPageScroll()[1];
			var pageHeight   = getPageHeight();
        	$(".scrollpos").html("y:"+scrollposY);
        	//$(".pagepos").html("y:"+pageHeight);			
			

        	  	
        	if(scrollposY >= 40){
	        
        		 $('.headlines').removeClass('hidden');
        		 if(scrollposY <= $(document).height() - $(window).height()-60){
				 	$('.footer').addClass('tonedown');
				 }
        	}

        	
        	if(scrollposY >= $(document).height() - $(window).height()-60){
        		 $('.footer').removeClass('tonedown');
        	}
        	
		});
		
		
			
		
		
		   if (navigator.userAgent.indexOf('iPad') != -1) {
				
					setTimeout(hideURLbar, 0);
				}
				
				function hideURLbar() {
						window.scrollTo(0, 1);
						//alert('Welcome iPad');
				}								   
				
								   
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";
              $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
			  
			  var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
			  
			  var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});			  
			  
		 
              setInterval( function() {
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;

              var srotate = "rotate(" + sdegree + "deg)";
              
              $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
                  
              }, 100 );
              
         
              setInterval( function() {
              var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              
              $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
                  
              }, 500 );
        
        
              setInterval( function() {
              var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
                  
              }, 500 );




// set up hover panels
			// although this can be done without JavaScript, we've attached these events
			// because it causes the hover to be triggered when the element is tapped on a touch device
			$('.hover').hover(function(){
				$(this).addClass('flip');
			},function(){
				$(this).removeClass('flip');
			});
			
			
			
			$(".submit").click(function(){
				if($("#subForm").valid()){
				 // alert("Valid: " + $("#myform").valid());
					$("#subForm").submit();
					

				}
			});
			
			
	 $('#subForm').submit(function (e) {
            e.preventDefault();
            $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function (data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    //alert("Success: " + data.Message);
                    //$('.click').removeClass('flip');
                    $('.signup').html('<h2 style="margin-top:20px;">Thank you.</h2><p>We will hurry up!</p>')
                }
            });
        });			
			
			$('.tabbed-buttons label').click(function(){
				
				$(this).closest("div").siblings().removeClass("active");
				$(this).closest("div").addClass("active");	
			});
			$('.tabbed-buttons-large label').click(function(){
				$(this).closest("div").siblings().removeClass("active");
				$(this).closest("div").addClass("active");	
			});
			
			$('.close_button').click(function(){
				$('.click').removeClass('flip');
			});
				
			// set up click/tap panels
			$('.click').toggle(function(){
				$(this).addClass('flip');
			},function(){

				//$(this).removeClass('flip');
			});
			
						
			

			/* Dragging */
			/*
			$(".dragable").drag();
			$(".dragable").click(function(){
				//alert('d');
			});
			*/
			/*
			$(".dragable").mousedown(function (b) {
			alert(b.which);
			});*/


});
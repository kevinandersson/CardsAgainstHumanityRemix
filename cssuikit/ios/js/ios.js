

$(document).ready(function() {


	/* confirm */
	var confirmuri = "";
	
	function dialog(url, title, description, disapprove, approve){
		
	}

	$('a.open-dialog').on("click",function(evt){
		$(".dialog-overlay").removeClass("invisible").fadeIn();
		
		$(".dialog-overlay .dialog").addClass("bouncein");		
		//alert($(this).attr("href"));
		confirmuri = $(this).attr("rel");
		$(".dialog-overlay .dialog h2").html("Remember to share");
		$(".dialog-overlay .dialog p").html("Be sure to let your Twitter followers know about this site.");
		
		evt.preventDefault();			
	});
	
	$('.cancel').click(function(){
		$(this).parent().parent().fadeOut();	
		$(".dialog-overlay .dialog").removeClass("bouncein");

	});
	$('.confirm').click(function(){
		if(confirmuri != ""){
			//window.location = confirmuri;
			//$.mobile.changePage(confirmuri, null, true, true);
		}		
		$(this).parent().parent().fadeOut();	
		$(".dialog-overlay .dialog").removeClass("bouncein");		
	});	


	// http://code.google.com/p/jquery-ui-for-ipad-and-iphone/
	
	// trigger keyboard on input fields
	$('input').click(function(){
		$(this).focus().select();	
	});
	
	$('.swipeable').draggable({ axis: "x" });

	/* Swipe */

	var currentview = 0;
	var min_position = 0;
	var max_position = $('.swipeable > .swipe-view').size()*$('.swipeable').parent().width();	
	
	var mouse_start = 0;
	var mouseX, mouseY;
//	alert(max_position);
	
	
	
	$('.swipeable .swipe-view').width($('.swipeable').parent().width());
	
	function animatePosition(){
			console.log("animate: "+currentview);
			if($(".page-control")){
				$(".page-control").find("li").removeClass("active");
				if($(".page-control li").eq(currentview).hasClass("search")){
					// add background fade, add
					//alert("blck")
				}
				$(".page-control li").eq(currentview).addClass("active");
			}
			var animateTo = -1*(currentview*$('.swipeable').parent().width());
			console.log(animateTo)
			$('.swipeable').animate({ 
							left: animateTo+"px",
						  }, 500, "easeOutQuart" );	
	}
	
	var mX, mY;

	
	 $('.swipeable').live('swipeleft swiperight mouseup mousedown',function(event){
		//console.log(event.type);	
		
		 if (event.type == "mouseup") {
			//console.log("Mouse Up: "+currentview+" Disatance: "+( mX - event.pageX));
	        //console.log("mX - mouseX: "+Math.abs(mX - event.pageX));
			if(currentview >= $('.swipeable > .swipe-view').size()-1 && mX - event.pageX > 0){
				console.log(currentview);
				currentview = $('.swipeable > .swipe-view').size()-1;
				animatePosition();
			}
			
			if(currentview <= 0 && mX - event.pageX < 0){
				animatePosition();
			}else{
				if(currentview == 0 && mX - event.pageX < 0){

				}

				if(currentview == $('.swipeable > .swipe-view').size()){
					console.log("current");
					animatePosition();		
				}
				
				// swipe stuff
				//if(){}	
			}
			 
		}
		if (event.type == "mousedown") {
			mX = event.pageX;	 
	        console.log("mousedown: "+mX);						
		}
		
        if (event.type == "swipeleft") {
			if(currentview +1 <= $('.swipeable > .swipe-view').size()-1){
					currentview++;
					console.log("swipe left: "+$('.swipeable > .swipe-view').size());
					animatePosition();

				}	 			

         }
         if (event.type == "swiperight") {
			if(currentview -1 >= 0){
				currentview--;
				console.log("swipe right: "+$('.swipeable > .swipe-view').size());
				animatePosition();

			}else{
				currentview  = 0;
			}	             
         }
     });
	

});
jQuery.fn.extend({
  drag: function(params){
    var jQ = jQuery;
    return this.each(function(){
			var clicked = false;
			var start_x;
			var start_y;	
			var drag_div = this;
			

			//mouse down
			$(this).mousedown(function(e){
				//$(this).css('cursor', 'move');
				clicked = true;
				start_x = Math.round(e.pageX - $(this).eq(0).offset().left);
				//start_y = Math.round(e.pageY - $(this).eq(0).offset().top);
			});
			//mouse up
			$(this).mouseup(function(e){
				//$(this).css('cursor', 'default');
				clicked = false;
				console.log($(this).css('background-position'));	
				e.preventDefault();
				this.onclick = function() {
       				// I will do nothing at all
    			}				

			});
			//mouse move
			$(this).mousemove(function(e){
				console.log($(this).css('background-position'));					

				if(clicked){ //as we only want this to work while they have clicked	
					bg = $(this).css('background-position');					
					if(bg.indexOf('%')>1){
						leftpos = ($(this).width()/2) - (imgx/2);
						toppos = ($(this).height()/2) - (imgy/2);
					}else{
						bg = bg.replace("px", "").replace("px", "").split(" ");
						leftpos = parseInt(bg[0]);
						toppos = parseInt(bg[1]);	
					}
					var mouse_x = Math.round(e.pageX - $(this).eq(0).offset().left) - start_x;
					var mouse_y = Math.round(e.pageY - $(this).eq(0).offset().top) - start_y;					
					var x = leftpos + (mouse_x);
					var y = toppos ;					
					start_x = Math.round(e.pageX - $(this).eq(0).offset().left);
					//start_y = Math.round(e.pageY - $(this).eq(0).offset().top);	
									
					$(drag_div).css('background-position', x+ "px " + y + "px");					
				}
			});			
    });
  }
});
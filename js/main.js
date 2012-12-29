var selectedcards 	= [];
var playercards 	= [];
var currentcard 	= 0;
var	points  	= 0;

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

function shuffle(sourceArray) {
	var tmpArray = [];
    for (var n = 0; n < sourceArray.length - 1; n++) {
        var k = n + Math.floor(Math.random() * (sourceArray.length - n));

        var temp = sourceArray[k];
        sourceArray[k] = sourceArray[n];
        sourceArray[n] = temp;
    }
    
}




document.ontouchmove = function(e){ e.preventDefault(); }

$(document).ready(function() {

	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
		   window.mySwipe.prev();
	       return false;
	    }
	    if (e.keyCode == 39) { 
		    window.mySwipe.next();// right
	       return false;
	    }	    
	});

	$('.cahapp a').live("click", function(e){
	    e.preventDefault();
	    //window.location = $(this).attr('href');
	    //$(this).attr('href')
	    if($(this).attr('href') != "#"){
		    loadView($(this).attr('href'));
	    }
	    return false;
	});
	
	
	

	$('.player #pick_card').live('click', function(e){

		//alert(window.mySwipe.getPos());
		id_tag = window.mySwipe.getPos();
		$('#slider li:eq('+id_tag+')').find('.card').toggleClass('selected');		
		position = selectedcards.indexOf(id_tag);
		if ( ~position ){ 
			selectedcards.splice(position, 1);
		}else{
			selectedcards.push(window.mySwipe.getPos());		
		}
		$('.cardcount').html(selectedcards.length);
		$('.card_icon').html($('.player .card').size());
		if(selectedcards.length == 0){
			$('#playhand').addClass('disabled');
		}else{
			$('#playhand').removeClass('disabled');
		}
		
	});
	
	loadView('/home');
	//loadView('/player');
	
		
	//window.mySwipe.next();
});

function showCardPlayedOptions(){

	
	if(selectedcards.length > 1){
		$('#getpoints').html('Receive '+selectedcards.length+' points, and draw '+selectedcards.length);
		$('#dealcards').html('Draw '+selectedcards.length+' new cards'); // $('.player .card').size()
	}else{
		$('#getpoints').html('Receive '+selectedcards.length+' point and draw '+selectedcards.length);
		$('#dealcards').html('Draw '+selectedcards.length+' new card'); // $('.player .card').size()
	}

	$(".alert-bar.options").hide();
	$(".alert-bar.card_played").show();	
	$(".alert-bar-overlay").show();	
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		

	
	
	

}

function checkCard(clicked_card){

	$(".alert-bar.options").show();
	$(".alert-bar.card_played").hide();		
	$(".alert-bar-overlay").show();	
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		

	// Change text						
	id_tag = window.mySwipe.getPos()
	position = selectedcards.indexOf(id_tag);
	console.log('checkCard: Position: '+id_tag+' card: '+clicked_card+' In selected stack: '+position);	
	/*
	if ( ~position ){ 
		$("#pick_card").html('Unpick card');
	}else{
		$("#pick_card").html('Pick card');
	}*/
	
	if(clicked_card.hasClass("selected")){
		$("#pick_card").html('Unpick card');
	}else{
		$("#pick_card").html('Pick card');
	}

}

var drawcards = 0;

function continuePlayer(){
	 console.log('cards: '+playercards.length);
	 
	 for(var i = 0; i<selectedcards.length; i++)
		{
			if(currentcard+1 <= cards.length){
			currentcard++;
			 playercards.push(cards[currentcard]);
			$('#slider li:eq('+selectedcards[i]+')').html('<div class="card" rel="'+cards[currentcard].id+'"><p>'+cards[currentcard].data+'</p><span class="new_badge">New</span></div>');
		
		
		$(".player .card").on('tap',function(event) {
				checkCard($(this));
				
		});
		$('.player .card').click(function(e){
				checkCard($(this));
		});
		}else{
			$('#slider li:eq('+selectedcards[i]+')').html('<div class="blankcard">No more replacement cards...</div>');
		}
		
		}
		selectedcards = [];
		
		$('.card_icon').html($('.player .card').size());
		$('.cardcount').html(selectedcards.length);				
		if(selectedcards.length == 0){
			$('#playhand').addClass('disabled');
		}else{
			$('#playhand').removeClass('disabled');
		}
}

function setupCzar(){
	$('#shufflestack').on('click', function(){
			loadView('/czar');
				/*
			$('#slider').fadeOut(200, function(){
				$('#slider ul').html('');
				$('#slider').fadeIn();
				setupCzar();

				
			});*/
	});
	$('#nextcard').on('click', function(){	
		window.mySwipe.next();
	});
	

	currentcard = 1;
	shuffle(cards);
	console.log(cards);
	for(var i = 0; i<cards.length; i++){
		playercards[i] = cards[i];
		
		var extra = "";
		console.log(cards[i].cards);
		if(cards[i].cards == 2){
			extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">2</span></span>';
		}
		if(i == 0){
			$('#slider ul').append('<li style="display:block"><div class="card black" rel="'+cards[i].id+'"><p>'+cards[i].data+'</p>'+extra+'</div></li>');
		}
		else{
			 $('#slider ul').append('<li style="display:none"><div class="card black" rel="'+cards[i].id+'"><p>'+cards[i].data+'</p>'+extra+'</div></li>');
		}

	}

	$(".point_icon").html(cards.length);
	$(".cardcount").html(cards[0].cards);	   
	
	// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
		 	$(".point_icon").html(cards.length-index);
		 	$(".cardcount").html(cards[index].cards);	   
	    }
	});

}
function setupPlayer(){
	playercards = [];
	selectedcards = [];
	
	$('#getpoints').click(function(e){	
	
		console.log('Get points: '+selectedcards);
		points += selectedcards.length;
		drawcards = selectedcards.length;
		$('.point_icon').html(points);		
		
	});
	
	$('.card_played .button').click(function(e){
		my_timer = setTimeout(function () {
	        continuePlayer();
        }, 1000);
		
	});	

	$('.card_icon').on('click',function(){
		alert("You have "+$(this).html()+" cards left, and there are "+(cards.length-currentcard)+" cards left in the stack");
	});
	$('.cardcount').on('click',function(){
		alert("You have picked "+$(this).html()+" cards");
	});	

	$('#pickedcards').hide();	
	$('#pickedcards').on('click',function(){
		$('#pickedcards').fadeOut(500);	
		$('#pickedcards .cards').html('');
		showCardPlayedOptions();
	});	
	
	shuffle(cards);
	console.log(cards);
	for(var i = 0; i<10; i++){
		playercards[i] = cards[i];
		if(i == 0){
			$('#slider ul').append('<li style="display:block"><div class="card" rel="'+cards[i].id+'"><p>'+cards[i].data+'</p><span class="new_badge">New</span></div></li>');
		}
		else{
			 $('#slider ul').append('<li style="display:none"><div class="card" rel="'+cards[i].id+'"><p>'+cards[i].data+'</p><span class="new_badge">New</span></div></li>');
		}
		currentcard = i+1;
	}
	$('.card_icon').html(playercards.length);
	console.log('player cards: '+playercards);
	

		
	$("#playhand").live('click', function(e){
		//console.log('play hand');
		//$('#pickedcards').html('');
		if(selectedcards.length > 0){
			$("#slider .new_badge").remove();
			$('#pickedcards .cards').html('');
			for(var i = 0; i<selectedcards.length; i++)
			{
				$('#pickedcards .cards').append($('#slider li:eq('+selectedcards[i]+')').find('.card').clone().removeClass('selected'));					
			
			}
			$('#pickedcards').show();	
			}
		//continuePlayer();
		//$('#pickedcards').show();
	})
	
	// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
	
	      // do something cool
	
	    }
	});	

	
}

function setupOther(){
		// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
	
	      // do something cool
	
	    }
	});	
}

function loadView(url){
	
	$(".cahapp").fadeOut(200, function(){
	
		selectedcards 	= [];
		points  	= 0;
		
	$('.cahapp').load(url, function() {
  $(".cahapp").fadeIn(200);
		

	$("#player").click(function(){
		loadView("/player");
	});
	
	$("#czar").click(function(){
		loadView("/czar");
	});	
	
	console.log('url: '+url);
	switch(url){
		case "/player":
			 setupPlayer();
		 break;
		case "/czar":
			 setupCzar();
		 break;		
		 default:
		 	setupOther();
		 break; 
	}
	
	$(".inforounded").delay(6000).fadeOut(200);

	/*
	$('a').click(function(e){
	    e.preventDefault();
	    //window.location = $(this).attr('href');
	    //$(this).attr('href')
	    if($(this).attr('href') != "#"){
	    loadView($(this).attr('href'));
	    }
	    return false;
	});
	*/
	
	
	/*
	$(".open-alert-bar").on('click',function(event) {
		if($(this).find("blue-label")){
			$(this).find("span.blue-label").html("Clicked");

		}
		$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		
		$(".alert-bar-overlay").show();
		if($(".alert-bar-overlay").hasClass("invisible")){
			$(".alert-bar-overlay").removeClass("invisible");
		}
	});
	
	*/
	$(".alert-bar-overlay .button").on('tap',function(event) {
		$(".alert-bar-overlay").addClass("slide-down").removeClass("slide-up");

		my_timer = setTimeout(function () {
            $(".alert-bar-overlay").hide();
        }, 500);
	});
	
	 // if (navigator.userAgent.indexOf('iPhone') == -1) {
			// not iphone
	/*
	$(".open-alert-bar").on('click',function(){
		if($(this).find("blue-label")){
			$(this).find("span.blue-label").html("Clicked");
		}
		$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");
	});
	*/
	
	$(".alert-bar-overlay .button").on('click',function(e){
		$(".alert-bar-overlay").removeClass("slide-up").addClass("slide-down");
		my_timer = setTimeout(function () {
            $(".alert-bar-overlay").hide();
        }, 500);	});


	
	$(".player .card").on('tap',function(event) {
		checkCard($(this));
	});
	$('.player .card').click(function(e){
		checkCard($(this));

	});

	
	});
});
	
}
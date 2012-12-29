var selectedcards 	= [];
var playercards 	= [];
var currentcard 	= 0;
var	points  	= 0;
var currentlocationcard = 0;

var headers = [
			'Kevin<sup>®</sup> is still coding this sucker<sup>™</sup>. Cats.',
			'Mr. Andersson <sup>®</sup> is still building this website. Fruitcake.',			
			'Coding is still happening<sup>®</sup>.',
			'Sword +2<sup>®</sup> is used to build til website.',			
			'Kevin<sup>®</sup> is still coding this sucker<sup>™</sup>. Codez.',
			'0100100001000101010011000100110001001111. Binary.',	
			'Coding.',
			'Le Code still in progress.',			
			'Kevin<sup>®</sup> is using his wicked mind powerz.'			
			];

function setHeader(){
	var headline = Math.floor((Math.random()*headers.length)+1);
	$("h2.online").html(headers[headline]);
	//console.log($("h2.online").html())
	//console.log(headers[headline]);	
}


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

	$('#help-block').hide().fadeIn();	

		
	console.log('Document ready.');

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
	
	$('#help-block').fastClick(function(){
		$(this).fadeToggle();
	});
	
	/*
	$('#help').fastClick(function(){
		$('.overlay-block').fadeToggle();
	})*/;	

	$('.cahapp a').live("click", function(e){
		if(!$(this).hasClass('external')){
		    e.preventDefault();
		    //window.location = $(this).attr('href');
		    //$(this).attr('href')
		    if($(this).attr('href') != "#"){
			    loadView($(this).attr('href'));
		    }
		    return false;
	    }
	});
	
	
	

		
	loadView('/home');
	//loadView('/player');
	
		
	//window.mySwipe.next();
});

function showCardPlayedOptions(){

	
	if(selectedcards.length > 1){
		$('#getpoints').html('Receive '+selectedcards.length+' points');
		$('#dealcards').html('Draw '+selectedcards.length+' new cards'); // $('.player .card').size()
	}else{
		$('#getpoints').html('Receive '+selectedcards.length+' point');
		$('#dealcards').html('Draw '+selectedcards.length+' new card'); // $('.player .card').size()
	}

	$(".alert-bar.options").hide();
	$(".alert-bar.card_played").show();	
	$(".alert-bar-overlay").show();	
	$('.footer').addClass('hidden');	
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		

	
	
	

}

function checkCard(clicked_card){
	$(clicked_card).addClass('clicked');
	$(".alert-bar.options").show();
	$(".alert-bar.card_played").hide();		
	$(".alert-bar-overlay").show();	
	$('.footer').addClass('hidden');		
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
	currentlocationcard = 0;
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

function addCzarcard(){

	//$('.nav-panel').fadeIn();
	if(currentcard+1 < cards.length){
		currentcard++;
	}else{
		alert('No more cards in deck.')
	}
	playercards.push(cards[currentcard]);
	
	var extra = "";	
	if(cards[currentcard].cards == 2){
		extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">2</span></span>';
	}	
	$('#slider ul').append('<li style="display:none"><div class="card black" rel="'+cards[currentcard].id+'"><p>'+cards[currentcard].data+'</p>'+extra+'</div></li>');


	
	// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
		 	$(".cardcount").html(cards[currentcard].cards);	   
		 	
		    $('.page-control li').removeClass('active');
		    $('.page-control li:eq('+index+')').addClass('active');		 	
	    }
	});
	
	$(".player .card").on('tap',function(event) {
			checkCard($(this));
			
	});
	$('.player .card').click(function(e){
			checkCard($(this));
	});	
	window.mySwipe.slide(currentcard);
	$(".point_icon").html(currentcard+1);
}

function setupCzar(){
	$('.nav-panel').hide();
	$('#shufflestack').fastClick(function(){
			loadView('/czar');
				/*
			$('#slider').fadeOut(200, function(){
				$('#slider ul').html('');
				$('#slider').fadeIn();
				setupCzar();

				
			});*/
	});
	
	$('.nav-panel #nextbtn').fastClick(function(){	
		window.mySwipe.next();
	});
	$('.nav-panel #prevbtn').fastClick( function(){	
		window.mySwipe.prev();
	});	
	
	$('#nextcard').fastClick( function(){	
		addCzarcard();
		// 		window.mySwipe.next();
	});
	

	currentcard = 1;
	shuffle(cards);
	//console.log(cards);
	
	var maxcards = 1; //cards.length
	for(var i = 0; i<maxcards; i++){
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
		currentcard = i;

	}

	$(".point_icon").html(currentcard+1);
	$(".cardcount").html(cards[0].cards);	   
	
	// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
		 	//$(".point_icon").html(cards.length-index);
		 	$(".cardcount").html(cards[index].cards);	   
		 	
		    $('.page-control li').removeClass('active');
		    $('.page-control li:eq('+index+')').addClass('active');		 	
	    }
	});
	
	$(".player .card").on('tap',function(event) {
			checkCard($(this));
			
	});
	$('.player .card').click(function(e){
			checkCard($(this));
	});	

}

function getnextposition(){
	if(currentlocationcard+1 < selectedcards.length){
			currentlocationcard++;
		}else{
			currentlocationcard = 0;
		}
}

function setupPlayer(){
	currentlocationcard = 0;
	playercards = [];
	selectedcards = [];
	
	$('#getpoints').fastClick(function(e){	
	
		console.log('Get points: '+selectedcards);
		points += selectedcards.length;
		drawcards = selectedcards.length;
		$('.point_icon').html(points);		
		
	});
	
	$('.card_played .button').fastClick(function(e){
		my_timer = setTimeout(function () {
	        continuePlayer();
        }, 1000);
		
	});	

	$('.card_icon').fastClick(function(){
		alert("You have "+$(this).html()+" cards left, and there are "+(cards.length-currentcard)+" cards left in the stack");
	});
	$('.cardcount').fastClick(function(){
		//alert("You have picked "+$(this).html()+" cards");
		if($(this).html() != "0"){
		getnextposition();
		if(window.mySwipe.getPos == currentlocationcard){
			getnextposition();
		}
		window.mySwipe.slide(selectedcards[currentlocationcard]);
		}else{
			console.log('No cards');
		}

		
	});	

	$('#pickedcards').hide();	
	$('#pickedcards').fastClick(function(){
		$('#pickedcards').fadeOut(500);	
		$('#pickedcards .cards').html('');
		showCardPlayedOptions();
	});	
	
	shuffle(cards);
	console.log(cards);
	for(var i = 0; i<10; i++){
		playercards[i] = cards[i];

		if(i == 0){
			$('.page-control').append('<li class="active">'+i+'</li>');		
			$('#slider ul').append('<li style="display:block"><div class="card" rel="'+cards[i].id+'"><p>'+cards[i].data+'</p><span class="new_badge">New</span></div></li>');
		}
		else{
			$('.page-control').append('<li>'+i+'</li>');		
			 $('#slider ul').append('<li style="display:none"><div class="card" rel="'+cards[i].id+'"><p>'+cards[i].data+'</p><span class="new_badge">New</span></div></li>');
		}
		currentcard = i+1;
	}
	$('.card_icon').html(playercards.length);
	console.log('player cards: '+playercards);
	

		
	$("#clearhand").fastClick(function(e){
			//for(var i = 0; i<selectedcards.length; i++){}
			$('#slider .card').removeClass('selected');
			selectedcards = [];
			$('.cardcount').html(selectedcards.length);
			$('#playhand').addClass('disabled');		
	});
		
	$("#playhand").fastClick(function(e){
		//console.log('play hand');
		//$('#pickedcards').html('');
		if(selectedcards.length > 0){
			$("#slider .selected").fadeOut();
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
			    $('.page-control li').removeClass('active');
		    $('.page-control li:eq('+index+')').addClass('active');
	      // do something cool
	
	    }
	});	


	$('.player .card').click(function(e){
		checkCard($(this));

	});
	
$('.player #pick_card').fastClick(function(e){

		//alert(window.mySwipe.getPos());

		id_tag = window.mySwipe.getPos();

		$('#slider li:eq('+id_tag+') .card').toggleClass('selected');		
		console.log('#pick_card: '+id_tag+' card: '+$('#slider li:eq('+id_tag+') .card').html());
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
	


	
}

function setupOther(){
		// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
		    $('.page-control li').removeClass('active');
		    $('.page-control li:eq('+index+')').addClass('active');
	      // do something cool
	
	    }
	});	
}

function loadView(url){
	$('.spinner-block').show();
	$("body").addClass('spinner');
	
	$(".cahapp").fadeOut(200, function(){
	
		selectedcards 	= [];
		points  	= 0;
		
	$('.cahapp').load(url, function() {
		$(".cahapp").fadeIn(200);
		$("body").removeClass('spinner'); 

		my_timer = setTimeout(function () {
		$('.spinner-block').hide();
        }, 1000);				

		

	$("#player").click(function(){
		loadView("/player");
	});
	
	$("#czar").click(function(){
		loadView("/czar");
	});	
	
	console.log('url: '+url);
	switch(url){
		case "/player":
				my_timer = setTimeout(function () {
				 setupPlayer();
		        }, 1000);				
		 break;
		case "/czar":
			my_timer = setTimeout(function () {
				 setupCzar();
	        }, 1000);		

		 break;	
		 case "/home":
		 	setHeader();
		 	setupOther()
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
            $('.footer').fadeIn();
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
	
	$(".alert-bar-overlay .button").fastClick(function(e){
		$('.footer').removeClass('hidden');
		$(".alert-bar-overlay").removeClass("slide-up").addClass("slide-down");
		my_timer = setTimeout(function () {
            $(".alert-bar-overlay").hide();
        }, 500);	});


	
		
	});
});
	
}
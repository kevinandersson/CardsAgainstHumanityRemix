// ! # Player Variables
var selectedcards 	= [];
var playercards 	= [];
var carddeck = [];
var czarcarddeck = [];
var currentcard 	= -1;
var current_czar_card_count = 0;
var max_picked_cards = 1;
var	points  	= 0;
var currentlocationcard = 0;
var game_key = 0;
var drawcards = 0;
var game_token = "No Key";
var swipe_text = "";
var current_page = "index";
var user = new Date().getTime();
var currentdeck = 1;
var SAVE_SESSION = false;

// console.log('User: '+user);

// ! # Cookie  management
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 86400 * 1000); // plus 30 days





//setCookie("playercards", []);

function getCookie(c_name)
{
/*
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{

		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x==c_name)
		{
			console.log('Cookie : ');		
			//console.log(unescape(y));
			var obj = unescape(y);
			return obj;
			//return unescape(y);
		}
	}
	*/
}

function setCookie(name, value)
{
/*
	value = JSON.stringify(value);
	console.log('setCookie() :: '+name+' : '+value.length); 
	document.cookie = name + "=" + escape(value) + "; expires=" + expiry.toGMTString() + "; path=/";
	//console.log('setCookie() :: getCookie('+name+') : '+getCookie(name).length);
*/
}



function getPrefs()
{	
	//setCookie(player_carddeck, carddeck);
	//console.log(getCookie("player_carddeck"));
	
	/*
	// JSON
	if (getCookie("player_carddeck")) 
	{
		console.log('Deck exists. Carddeck:'); 
		carddeck = getCookie("player_carddeck");
		console.log(getCookie("player_carddeck")); 				
	}else{
		console.log('getPrefs() :: No deck'); 
	}
	*/
}

function setPrefs()
{	
	//prefs['fontfamily'] = form.fontfamily.options[form.fontfamily.selectedIndex].value;
	//prefs['overflow'] = form.overflow.options[form.overflow .selectedIndex].value;
	/*
	if(carddeck.length > 0){
		console.log('setPrefs() :: Deck saved  '+carddeck.length); 	
		setCookie("player_carddeck", carddeck);
	}else{
		console.log('setPrefs() :: No deck to save'); 			
	}
	*/
}


// ! Document Ready    
$(document).ready(function() {

$("#generate_join").click(function(){
	
		$(".loading").fadeIn();
		$("#key_input").prop('disabled', true);
		$("#key_input").removeClass('connection_error');

		
		if( $("#key_input").val() == ""){

			my_timer = setTimeout(function () {
			$.ajax({
				type: "POST", 
				url: "/index.php/server/api/create_game/", 
				dataType: "JSON",
			
			    complete: function(data){
				    $("#key_input").val(jQuery.parseJSON(data.responseText).key);
				    $("#key_input").addClass('locked');				    
			        console.log(data.responseText);        
			        $(".loading").fadeOut();
			        $("#generate_join").html('Join game');		        
			    },
			    success: function(data){      
			    },
			    error: function(e){
			    	//console.log(e);
			    }
		    });    
	
	        }, 1000);	
        }else{
	        // check if game exists
	        my_timer = setTimeout(function () {
	        var token_key = $("#key_input").val();
			game_token = token_key;

			$.ajax(
				{url: "/index.php/server/api/join_game/"+token_key,
				data: {"key": token_key},
			    complete: function(data){
			    	if(jQuery.parseJSON(data.responseText).key){
				    	game_key = jQuery.parseJSON(data.responseText).game;
				    	
				    	//showInfo('<p>'+game_token+'</p><span class="game_key"></span>');
				    	$(".loading").hide();
				    	
				    	$("#key-block").fadeOut();
				    	//loadView('/player/game_session/'+game_key);				    	
				    	
				    	console.log('Join game: '+jQuery.parseJSON(data.responseText));
			    	}else{
				    	console.log(jQuery.parseJSON(data.responseText));			    	
				    	$("#key_input").prop('disabled', false);	
				    	$("#key_input").removeClass('locked');
				    	$("#key_input").addClass('connection_error');
			    	}
				    
			        console.log(data.responseText);        
			        $(".loading").fadeOut();		        
			    },
			    success: function(data){      
			    },
			    error: function(e){
			    	//console.log(e);
				    $("#key_input").prop('disabled', false);				    				    	
			    }
		    });  
		    /*
		    $.post("/index.php/server/api/join_game/",
			    {"key":token_key},
		    	function(data,status){
			    	console.log("Data: " + data + "\nStatus: " + status);
			    	if(jQuery.parseJSON(data).key){
				    	console.log('Join game: '+jQuery.parseJSON(data));
			    	}else{
				    	console.log(jQuery.parseJSON(data));			    	
				    	$("#key_input").prop('disabled', false);	
				    	$("#key_input").removeClass('locked');					    				    	
			    	}
				    
			        console.log(data.responseText);        
			        $(".loading").fadeOut();		        			    	
			    });  
			    */
	
	        }, 1000);	
        }				      

	});
	$("#online_cancel").click(function(){
	
		showInfo(null, 200);
		$("#key-block").fadeOut();	
		my_timer = setTimeout(function () {	
			$("#key_input").prop('disabled', false);
			$("#key_input").removeClass('locked');	
			$("#key_input").val('');					    				
			$("#generate_join").html('Generate Key');		
		}, 1000);						
	});	
	$(['/img/cardsleft.png','/img/card.png','/img/connectionerror.png','/img/key.png','/img/link.png','/img/lock.png','/img/swipe-down.png','/img/swipe-left.png','/img/swipe-right.png','/img/swipe-up.png','/img/tap.png','/img/cah-logo.svg']).preload();

	swipe_text = $(".inforounded").html();
	/*	
	$.ajax({
	  url: '/server/api/get_cards/1',
	  dataType: 'json',
	  data: data,
	  success: callback
	});
	*/

	$(document).keydown(function(e){
		console.log('KeyDown: '+e.keyCode);
	    if (e.keyCode == 68) {
		    // d - deal czar card
		    player_deal_czar_card();
	    }						
	    if (e.keyCode == 67) {
		    // c - show czar card
		    player_get_czar_card();
	    }				
	    if (e.keyCode == 38) {
		    // up
		    pickCards();
	    }		
	    if (e.keyCode == 40) {
		    // down
			if(selectedcards.length > 0){	
				playHand();
			}		    

	    }			    
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
	
	$('.development-header').fastClick(function(){
		$(this).fadeOut();
	});	
	
	my_timer = setTimeout(function () {
		$('.development-header').fadeOut();
	}, 2000);	
	
	$('#help').fastClick(function(){
		$('#help-block').fadeToggle();
	});	

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
	
	
	
	// INIT LOAD VIEW
	// ! --- > LOAD STANDARD VIEW
	//loadView("/czar");
	loadView('/decks');		
	//loadView('/home/online');
	//loadView('/player');	
	//window.mySwipe.next();
});

// ! --- PLAYER ---

function player_get_czar_card(){
	loading(true);
	$.ajax({
				type: "POST", 
				url: "/index.php/server/api/get_czar_card/"+game_key, 
				dataType: "JSON",
			
			    complete: function(data){
			        console.log(data.responseText);
			        loading(false);
			        if(jQuery.parseJSON(data.responseText).error){
				        showInfo('<p>No Czar cards played</p><span class="cardsleft"></span>', 0, true);
				        
			        }else{
				        var card = jQuery.parseJSON(data.responseText);
				        showInfo('<p>Pick '+card.cards+'</p><span class="cardsleft"></span>', 200, false);
				        max_picked_cards = card.cards;				        
				        //$(".loading").fadeOut();
				        var extra = "";	
						if(card.cards <= 10){
							extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">'+card.cards+'</span></span>';
						}					        
				        $('#czar_card').html('<div class="card black mini" rel="'+card.id+'"><p>'+card.data+'</p><span class="serial">'+Number(card.id)+'</span>'+extra+'</div>');
				        $('#czar_card').show();
				        $('#czar_card').removeClass('hidden');				
				        
				        $('#czar_card').fastClick(function(){
					        bring_to_front(this);
						});					        
	
						$('#czar_card').fastClick(function(){
							//$(this).hide();
						});			        		        
					}

			    },
			    success: function(data){      
			    },
			    error: function(e){
			    	//console.log(e);
			    }
		    });   

	
}

function bring_to_front(element){
	$('.bring_to_front').not(element).removeClass('bring_to_front');
	$(element).toggleClass('bring_to_front');
}

function player_deal_czar_card(){
	loading(true);
	$.ajax({
				type: "POST", 
				url: "/index.php/server/api/save_game_hand/"+game_key+"/-1/"+currentdeck, 
				dataType: "JSON",
			
			    complete: function(data){
			        console.log(data.responseText);
			        loading(false);
			        var card = jQuery.parseJSON(data.responseText);
			        //$(".loading").fadeOut();
			        var extra = "";	
					if(carddeck[currentcard].cards <= 10){
						extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">'+carddeck[currentcard].cards+'</span></span>';
					}	

			        
			        $('#czar_card').html('<div class="card black mini" rel="'+card.id+'"><p>'+card.data+'</p><span class="serial">'+Number(card.id)+'</span>'+extra+'</div>');
			        $('#czar_card').show();
			        $('#czar_card').removeClass('hidden');

			        showInfo('<p>Pick '+card.cards+'</p><span class="cardsleft"></span>', 200, false);
			        max_picked_cards = card.cards;
			        
					$('#czar_card').fastClick(function(){
						//$(this).hide();
						//showInfo('<p>Pick '+card.cards+'</p><span class="cardsleft"></span>', 200, false);
					});			        		        

			    },
			    success: function(data){      
			    },
			    error: function(e){
			    	//console.log(e);
			    }
		    });   

	
}




function setupPlayer(){

	currentlocationcard = 0;
	//getPrefs();
	// 
	if(getCookie("playercards") && getCookie("playercards").lenght <= 10){
		playercards = getCookie("playercards");
		console.log('playercards.cookie :: cards : '+playercards.length);		
	}else{
		console.log('playercards.cookie :: no cards');
		playercards = [];		
	}

	selectedcards = [];
	
	$('#getpoints').fastClick(function(e){	
		
		resetSelectedCards();
		console.log('Get points: '+selectedcards.length);
		points += selectedcards.length;
		drawcards = selectedcards.length;
		//$('.point_icon').html(points);		
		setPointIcon(points);
		my_timer = setTimeout(function () {
	        continuePlayer();
        }, 1000);
		
	});
	
	
	$('#dealcards').fastClick(function(e){
        resetSelectedCards();
		my_timer = setTimeout(function () {
	        continuePlayer();
        }, 1000);

		
	});	
	

	$('.point_icon').fastClick(function(){
		//alert("You have "+$(this).html()+" cards left, and there are "+(carddeck.length-currentcard)+" cards left in the stack");
		//
		showCzarCardOptions();
	});
	
	$('#get_czar_card').fastClick(function(){
		//alert("You have "+$(this).html()+" cards left, and there are "+(carddeck.length-currentcard)+" cards left in the stack");
		//player_get_czar_card();
		player_get_czar_card();		
	});
	
	$('#deal_czar_card').fastClick(function(){
		player_deal_czar_card();		
	});	
		
	

	$('.card_icon').fastClick(function(){
		showInfo('<p>'+(carddeck.length-currentcard)+' Cards Left</p><span class="cardsleft"></span>', 0, true);
		//alert("You have "+$(this).html()+" cards left, and there are "+(carddeck.length-currentcard)+" cards left in the stack");
	});

	$('.cardcount').fastClick(function(){
		//alert("You have picked "+$(this).html()+" cards");
		showInfo('<p>'+(selectedcards.length)+' cards picked </p><span class="cardsleft"></span>', 0, true);
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


	//shuffle(carddeck);

	//console.log(carddeck);

	if(carddeck.length > 0){	
		var max = 10;
		if(carddeck.length < max){
			max = carddeck.length;
		}
		

				
		for(var i = 0; i<10; i++){

			//console.log(carddeck[i].id);
			var card = eval(carddeck[i]);
			
			if(card){
				playercards[i] = eval(carddeck[i]);
				if(i == 0){
					$('.page-control').append('<li class="active">dot</li>');		
					$('#slider ul').append('<li style="display:block"><div class="card" rel="'+card.id+'"><p>'+card.data+'</p><span class="serial">'+Number(card.id)+'</span><span class="new_badge">New</span><span class="pickcard">Pick Card.<span></div></li>');
				}else{
					$('.page-control').append('<li>dot</li>');		
					$('#slider ul').append('<li style="display:none"><div class="card" rel="'+card.id+'"><p>'+card.data+'</p><span class="serial">'+Number(card.id)+'</span><span class="new_badge">New</span><span class="pickcard">Pick Card.<span></div></li>');
				}
//				alert('Card: '+i+' card: '+carddeck[i]);				
				//console.log(card);
				//alert(carddeck);
				
			}else{
				console.log('Card error: '+i+' card: '+card);
				//alert('Card error: '+i);
				//alert(card);				
			}
			
			currentcard = i+1;
		}
		
		setCookie("playercards", playercards);
		player_get_czar_card();				

	}else{
		showInfo('<p>No cards?</p><span class="cardsleft"></span>', 0, true);
	}
	//$('.card_icon').html(playercards.length);

	setCardIcon(playercards.length);
	//console.log('player cards: '+playercards);
	

		
	$("#clearhand").fastClick(function(e){
			//for(var i = 0; i<selectedcards.length; i++){}
			$('#slider .card').removeClass('selected');
			selectedcards = [];
			//$('.cardcount').html(selectedcards.length);
	 		setCardCount(selectedcards.length);
			$('#playhand').addClass('disabled');		
	});
		
	$("#playhand").fastClick(function(e){
				//continuePlayer();
		//$('#pickedcards').show();
		playHand();
	})
	
	


/*	
	$('.player .card').swipeEvents().bind("swipeUp", function(){ 
		pickCards();
//		checkCard($(this));
	});		
	*/
		
	$('.player #pick_card').fastClick(function(e){
		pickCards();		
	});
	

	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
			$('.page-control li').removeClass('active');
		    $('.page-control li:eq('+index+')').addClass('active');
			//showInfo('<p>Swipe event</p><span class="swipe-left"></span>', 0, true);
	      // do something cool
	
	    }
	});	
	//alert(window.mySwipe.getPos());	
	//console.log('add events');	
	
	//displayEvents($('.player .card'));
	$('.player .card .pickcard').click(function(e){
		checkCard($(this).parent());
		//showInfo('<p>Tap</p><span class="tap"></span>', 0, true);
	});	
}


// Removes current hand, after point selection
function resetSelectedCards(){
	$('#pickedcards').fadeOut(500, function(){
		$('#pickedcards .cards').html('');
	});	

}

function playHand(){
	//console.log('play hand');
		//$('#pickedcards').html('');
		if(selectedcards.length > 0){
			//$("#slider .selected").fadeOut();
			$("#slider .new_badge").remove();
			$('#pickedcards .cards').html('');
			

			
			$(".card.selected").addClass('card-slide-up');
			
			
			my_timer = setTimeout(function () {
			
				//$('#pickedcards').attr('rel',selectedcards.length);
				if(selectedcards.length > 2){
					$('#pickedcards').addClass('many_cards');
				}else{
					$('#pickedcards').removeClass('many_cards');
				}
				
				
				
				for(var i = 0; i<selectedcards.length; i++)
				{
					//!# SAVE GAME CARD (PLAYER)
					save_game_card(i, selectedcards[i]);
					console.log('selectedcards[i]: '+selectedcards[i]+' carddeck :');
					console.log(carddeck[selectedcards[i]]);
					//$('#pickedcards .cards').append($('#slider li:eq('+selectedcards[i]+')').find('.card').clone().removeClass('selected'));			
					$('#pickedcards .cards').append($('#slider .card[rel="'+selectedcards[i]+'"]').clone().removeClass('selected'));					
				}
				/*
				var i = 0;
				$('.card.selected').each(){
					
					save_game_card(i, $(this).attr('rel'));
					console.log('selectedcards[i]: '+selectedcards[i]+' carddeck :');
	
					$('#pickedcards .cards').append($('#slider li:eq('+selectedcards[i]+')').find('.card').clone().removeClass('selected'));										
				}
				*/
				
				$('#pickedcards .card').fastClick(function(){
					bring_to_front(this);
				});		
				$('#pickedcards .pickcard').fastClick(function(){

					showCardPlayedOptions();
				});	
								
				$(".card.selected").removeClass('selected');
				$('#pickedcards .cards').show();				
				$('#pickedcards').fadeIn();	
				$('#slider .card-slide-up').hide();
	        }, 1000);				
	
			$('.footer').addClass('hidden');			
			$('#czar_card').addClass('hidden');			
			}
			player_get_czar_card();
}

function getnextposition(){
	if(currentlocationcard+1 < selectedcards.length){
			currentlocationcard++;
		}else{
			currentlocationcard = 0;
		}
}


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
	$(".alert-bar.czar_panel").hide();		
	$('.footer').addClass('hidden');	
	//$('#czar_card').addClass('hidden');	
	$('#czar_card').hide();		
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		

}

function checkCard(clicked_card){

// pickCards



	$(clicked_card).addClass('clicked');
	$(".alert-bar.options").show();
	$(".alert-bar.card_played").hide();	
	$(".alert-bar.czar_panel").hide();
	$(".alert-bar-overlay").show();	
	$('.footer').addClass('hidden');		
	$('#czar_card').addClass('hidden');		
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		

	// Change text						
	id_tag = window.mySwipe.getPos()
	position = selectedcards.indexOf(id_tag);
	console.log('checkCard: Position: '+id_tag+' card: '+clicked_card+' In selected stack: '+position+' max_picked_cards: '+max_picked_cards);	
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




	setupAlertBarOverlay(clicked_card);

}

function setupAlertBarOverlay(clicked_card){
	
	
	if(max_picked_cards == 1){
		$('#playhand').html('Play Card');
		$('#playhand').removeClass('disabled');
		
		if(!clicked_card.hasClass('selected') && selectedcards.length+1 <= max_picked_cards){
			pickCards();
			$('#pick_card').parent().hide(); // hide pick card button
		}
	}else{
		$('#playhand').html('Play Hand');
		$('#pick_card').parent().show(); // hide pick card button	
		if(selectedcards.length != max_picked_cards){
			$('#playhand').addClass('disabled');
		}
	}
	if(selectedcards.length+1 > max_picked_cards){
		//id_tag = window.mySwipe.getPos();
		//$('#slider li:eq('+id_tag+') .card').toggleClass('selected');
		if(!clicked_card.hasClass('selected')){
			$('#playhand').html('Play Hand');
			//$('#playhand').addClass('disabled');		
			//$('#pick_card').parent().show(); // hide pick card button				
		}
	}
	if(selectedcards.length > max_picked_cards){
		$('#playhand').addClass('disabled');
		$('#pick_card').parent().show(); // hide pick card button					
	    showInfo('<p>Unpick '+(selectedcards.length-max_picked_cards)+'</p><span class="cardsleft"></span>', 0,true);	            	            		
	}	

}



function continuePlayer(){
	currentlocationcard = 0;
	 console.log('cards: '+playercards.length);
	 
	 for(var i = 0; i<selectedcards.length; i++)
		{
			console.log('Current card: '+currentcard+' Total cards: '+carddeck.length);
			if(currentcard+1 < carddeck.length){
			currentcard++;
			playercards.push(carddeck[currentcard]);
			
			$('#slider .card[rel="'+selectedcards[i]+'"]').parent().html('<div class="card" rel="'+carddeck[currentcard].id+'"><p>'+carddeck[currentcard].data+'</p><span class="serial">'+Number(carddeck[currentcard].id)+'</span><span class="new_badge">New</span><span class="pickcard">Pick Card.<span></div>');
		
		
		$(".player .card").on('tap',function(event) {
				checkCard($(this));
				
		});
		
		/*
		$('.player .card').swipeEvents().bind("swipeUp", function(){ 
//			checkCard($(this));
			pickCards()
		});
		*/
		$('.player .card .pickcard').click(function(e){
				checkCard($(this).parent());
		});
		
		}else{
			$('#slider li:eq('+selectedcards[i]+')').html('<div class="blankcard">No more replacement cards...</div>');
		}
		
		}
		setCookie("playercards", playercards);

		selectedcards = [];
		
		//$('.card_icon').html($('.player .card').size());
		setCardIcon($('.player .card').size());		
		//$('.cardcount').html(selectedcards.length);				
		setCardCount(selectedcards.length);
		if(selectedcards.length == 0){
			$('#playhand').addClass('disabled');
		}else{
			$('#playhand').removeClass('disabled');
		}
		player_get_czar_card();				
}


// ! --- CZAR ---

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

	
	
	$('#checkanswers').fastClick( function(){	
		setupCzarResult();
	});	


	
	$.ajax({
				type: "POST", 
				url: "/index.php/server/api/get_czar_card/"+game_key, 
				dataType: "JSON",
			
			    complete: function(data){
			        console.log(data.responseText);
			        if(jQuery.parseJSON(data.responseText).error){
				        currentcard = -1;
				        current_czar_card_count = 0;
				        setPointIcon(current_czar_card_count);
				        addCzarcard();
				        
			        }else{
				        var card = jQuery.parseJSON(data.responseText);
				        //$(".loading").fadeOut();
				        var extra = "";	
				        if(card.cards <= 10){
							extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">'+card.cards+'</span></span>';
						}	
									        
				        $('#slider ul').append('<li style="display:block"><div class="card black mini" rel="'+card.id+'"><p>'+card.data+'</p><span class="serial">'+Number(card.id)+'</span>'+extra+'</div></li>');
				        currentcard = -1;
				        current_czar_card_count = card.current_czar_card_count;
				        setPointIcon(current_czar_card_count);
						czarloadcomplete();

												
					}

			    },
			    success: function(data){      
			    },
			    error: function(e){
			    	//console.log(e);current_czar_card
			    }
		    });   

	
}

function showCzarCardOptions(){
	$(".alert-bar.options").hide();
	$(".alert-bar.czar_panel").show();	
	$(".alert-bar.card_played").hide();	
	$(".alert-bar-overlay").show();	
	$('.footer').addClass('hidden');
	$('#czar_card').addClass('hidden');				
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");			
}

function showCzarPlayedOptions(){


	$(".alert-bar.options").hide();
	$(".alert-bar.czar_panel").hide();	
	$(".alert-bar.card_played").show();	
	$(".alert-bar-overlay").show();	
	$('.footer').addClass('hidden');
	$('#czar_card').addClass('hidden');		
	if($(".alert-bar-overlay").hasClass("invisible")){
		$(".alert-bar-overlay").removeClass("invisible");
	}	
	$(".alert-bar-overlay").removeClass("slide-down").addClass("slide-up");		
}


function czarloadcomplete(){
	setCardCount(0);
	setupCzarClickEvents();			
}


function setupCzarClickEvents(){
	$(".player .card").on('tap',function(event) {
			checkCard($(this));
			
	});
	/*
	$('.player .card').swipeEvents().bind("swipeUp", function(){ 
		//checkCard($(this));
		//pickCards()		
		if($(this).hasClass('starter')){}else{
			//checkCard($(this));
			addCzarcard();
		}
	});	
	*/
	/*
	$('.player .card').swipeEvents().bind("swipeDown", function(){ 
		setupCzarResult();
	});		
	*/

	$('.point_icon').fastClick( function(){});
	
	$('.player .card').click(function(e){
			checkCard($(this));
	});	
}

//  Add Czar Card
function addCzarcard(){
	// get eller save czar card
	console.log('Add Czar Card')	
	console.log('Current card: '+carddeck[currentcard])
	//currentcard = carddeck[window.mySwipe.getPos];
	
		
	//$('.nav-panel').fadeIn();
	if(currentcard == -1){
		currentcard++;
	}
		
	if(currentcard+1 < carddeck.length){

		currentcard++;
	}else{
		alert('No more cards in deck. Shuffleling.')
		//shuffle(currentdeck);
		currentcard = 0;
		playercards =[];
	}
	playercards.push(carddeck[currentcard]);
    var extra = "";	
	if(carddeck[currentcard].cards <= 10){
		extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">'+carddeck[currentcard].cards+'</span></span>';
	}	
	$('#slider ul').append('<li style="display:block"><div class="card black" rel="'+carddeck[currentcard].id+'"><p>'+carddeck[currentcard].data+'</p><span class="serial">'+Number(carddeck[currentcard].id)+'</span>'+extra+'</div></li>');


	
	// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
		 	//$(".cardcount").html(carddeck[currentcard].cards);	   
 			setCardCount(carddeck[currentcard].cards);
		    $('.page-control li').removeClass('active');
		    $('.page-control li:eq('+index+')').addClass('active');		 	
	    }
	});
	
	if(currentcard != null && carddeck != null){
		if(currentcard == -1){
			console.log('addCzarcard(): First card, already saved.');
			
		}else{
			if(currentcard != undefined){
				console.log('addCzarcard(): Save card: '+currentcard+' carddeck[currentcard].id'+carddeck[currentcard].id);			
				save_game_hand(carddeck[currentcard].id); // carddeck[currentcard].id);
				//save_game_hand(currentcard); // carddeck[currentcard].id);
				
			}else{
				
			}
		}
	}else{
		console.log('not able to save hand. currentcard: '+currentcard+' carddeck: '+carddeck)
	}
	
	setupCzarClickEvents();
	window.mySwipe.slide(currentcard);
	//$(".point_icon").html(currentcard+1);
	current_czar_card_count++;
	setPointIcon(current_czar_card_count);
	
	
}





function pickCards(){

		id_tag = window.mySwipe.getPos();
		var selected_card_id = $('#slider li:eq('+window.mySwipe.getPos()+') .card').attr('rel');

		$('#slider li:eq('+id_tag+') .card').toggleClass('selected');
		if($('#slider li:eq('+id_tag+') .card').hasClass('selected')){
			$('#slider li:eq('+id_tag+') .card').addClass('clicked');	
		}
		//console.log('#pick_card: '+id_tag+' card: '+$('#slider li:eq('+id_tag+') .card').html());
		position = selectedcards.indexOf(selected_card_id);
		if ( ~position ){ 
			selectedcards.splice(position, 1);
		}else{
			console.log('position: '+window.mySwipe.getPos());
			//console.log('Card ID: '+$('#slider li:eq('+window.mySwipe.getPos()+') .card').attr('rel'));
			//selectedcards.push(window.mySwipe.getPos());		
			selectedcards.push($('#slider li:eq('+window.mySwipe.getPos()+') .card').attr('rel'));
		}
		//$('.cardcount').html(selectedcards.length);
		setCardCount(selectedcards.length);		
		//$('.card_icon').html($('.player .card').size());
		setCardIcon($('.player .card').size());
		if(selectedcards.length == 0){
			$('#playhand').addClass('disabled');
		}else{
			$('#playhand').removeClass('disabled');
		}

}

function setupOther(){
	setHeader();
	addPageControl($('#slider li').size());
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


function loading(load){
	if(load){
		$('.spinner-block').show();
		$("body").addClass('spinner');
	}else{
		$("body").removeClass('spinner'); 
		my_timer = setTimeout(function () {
		$('.spinner-block').hide();
        }, 1000);						
		
	}
	
}

// ! --- Serverside ---
var picked_hand = 0;
//  Setup Czar Result
function setupCzarResult(){
	console.log('setupCzarResult()');
	
	//showInfo('Get hands, key: '+game_key, 0,true);
	
	loading(true);	
	data = [];
	$.ajax({
	
        url: "/index.php/server/api/get_game_hands/"+game_key,
        type: "post",
        data: data,
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR){
        
            
        },
        // callback handler that will be called on error
        error: function(jqXHR, textStatus, errorThrown){
            // log the error to the console
            showInfo(textStatus, 0,true);            
            console.log(
                "The following error occured: "+
                textStatus, errorThrown
            );
        },
        // callback handler that will be called on completion
        // which means, either on success or error
        complete: function(data){
            // enable the inputs
            console.log(jQuery.parseJSON(data.responseText));
            if(jQuery.parseJSON(data.responseText).error){
	            	//showInfo('Error. Hand: '+jQuery.parseJSON(data.responseText).game_hand, 0,true);	            
	            	showInfo('<p>No Cards picked</p><span class="cardsleft"></span>'+jQuery.parseJSON(data.responseText).game_hand, 0,true);	            	            
	            	$('#player_cards_slider').hide();		            		
            }else{
	            var return_cards = jQuery.parseJSON(data.responseText);
	            // log a message to the console
	            
	            $('#current_czar_card').html($('#slider .card.clicked').parent().html());
	            $('#current_czar_card').removeClass('size_1');
	            $('#current_czar_card').removeClass('size_2');
	            $('#current_czar_card').removeClass('size_3');	            

	            
	            $('#player_cards_slider').html('');

	            if(return_cards.length > 1){
			        showInfo('<p>'+String(return_cards.length)+' Hands</p><span class="cardsleft"></span>', 0,true);	            	            
	            }else{
		            showInfo('<p>'+String(return_cards.length)+' Hand</p><span class="cardsleft"></span>', 0,true);	            	            
	            }

				

				$('#player_cards_slider').append('<ul></ul>');
				for(i = 0; i<return_cards.length; i++){
					$('#player_cards_slider ul').append('<li><div class="mini_wrap size_'+return_cards[i].length+'"></div></li>');				
					$('#current_czar_card').addClass('size_'+return_cards[i].length);	            	            					
					//console.log('i: '+i);
//					$('#player_cards_slider ul').append('');				
					for(k = 0; k<return_cards[i].length ; k++){
						$('#player_cards_slider ul li:eq('+i+') .mini_wrap').append('<div class="card mini" rel="'+return_cards[i][k].player_hand+'"><p>'+return_cards[i][k].data+'</p></div>');		
						
					}
				}
	
			
				$('#player_cards_slider').show();	
				$('#slider').hide();
				$('.page-controls').hide();			
				$('#current_czar_card').show();
				
				
				// ! Show info panel instead
				$('#player_cards_slider .card').fastClick( function(){
					picked_hand = $(this).attr('rel');
					 showCzarPlayedOptions();				

				});
				
				
				$('#czar_back').fastClick(function(){
					$('#player_cards_slider').hide();
					$('.page-controls').show();
					$('#slider').show();
					$('#slider .card.clicked').removeClass('clicked');	
					$('#current_czar_card').html('');
				});				
				
				$('#pick_this_hand').fastClick(function(){
					showInfo('<p>Hand '+(picked_hand)+' Picked</p><span class="cardsleft"></span>', 0, true);				
					$('#player_cards_slider').hide();
					$('.page-controls').show();
					$('#slider').show();
					$('#slider .card.clicked').removeClass('clicked');	
					$('#current_czar_card').html('');
				});
				
				
	            $('#current_czar_card').fastClick(function(){
	            
		            showCzarPlayedOptions();				
	            });


				
				
				
				// Swipe: https://github.com/bradbirdsall/Swipe/blob/master/README.md
				window.mySwipe = new Swipe(document.getElementById('player_cards_slider'), {
				    startSlide: 0,
				    speed: 400,
				    callback: function(event, index, elem) {

				    }
				});
				
			}
            loading(false);            
            
            

        }
        
    });

	

	
	window.mySwipe = new Swipe(document.getElementById('player_cards_slider'), {
	    startSlide: 0,
	    speed: 400,
	    callback: function(event, index, elem) {
	
	    }
	});	

	

}
function save_game_hand(card_id){
	//	save_game_hand
	if(game_key){
	data = [];
	console.log('Save card: '+card_id+' with key: '+game_key );
	$.ajax({
	
        url: "/index.php/server/api/save_game_hand/"+game_key+"/"+card_id+"/"+currentdeck,
        type: "post",
        data: data,
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR){
            // log a message to the console

        },
        // callback handler that will be called on error
        error: function(jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.log(
                "save_game_hand :: The following error occured: "+
                textStatus, errorThrown
            );
        },
        // callback handler that will be called on completion
        // which means, either on success or error
        complete: function(data){
            // enable the inputs
            console.log(jQuery.parseJSON(data.responseText));
        }
        
    });
    }else{
	  showInfo('<p>No key!</p><span class="game_key"></span>', 0, true);
    }
	
}

function save_game_card(_index, _card_id){
	//console.log("save_game_card() - Key:"+game_key+" index: "+_index+" : "+_card_id+" : "+carddeck[_card_id].id)
	console.log("save_game_card("+game_key+")")	
	console.log("save_game_card() - Key:"+game_key+" index: "+_index+" : "+_card_id)
	//$('#slider:eq('+_card_id+') .card').attr('rel');
//		card 	: carddeck[_card_id].id,	
	console.log('Save card: '+_card_id);
	var data = {
		card 	: _card_id,
	    index 	: _index,
	    user_id 	: 0

	};

	$.ajax({
	
        url: "/index.php/server/api/save_game_card/"+game_key,
        type: "post",
        data: data,
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR){
            // log a message to the console
        },
        // callback handler that will be called on error
        error: function(jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.log(
                "The following error occured: "+
                textStatus, errorThrown
            );
        },
        // callback handler that will be called on completion
        // which means, either on success or error
        complete: function(data){
            // enable the inputs
            console.log(jQuery.parseJSON(data.responseText));
            
            

        }
        
    });
}


function loadPlayerCards(){
	loading(true);
	my_timer = setTimeout(function () {
		var time = new Date();
		 $.ajax({
		type: "POST", 
		url: "/index.php/server/api/get_cards/"+currentdeck+"/1/?"+time.getTime(), 
		dataType: "JSON",
	
	    complete: function(data){
		    carddeck = eval(jQuery.parseJSON(data.responseText));
		    setPrefs();		    
		    //console.log(carddeck);
	        console.log('Cards loaded: '+carddeck.length);		    
	        //console.log(data.responseText);
	        setupPlayer();
	        loading(false);
	    },
	    success: function(data){
	        //console.log(data);        
	    },
	    error: function(e){
	    	//console.log(e);
	    }
	    });    
	 //
    }, 1000);
}

function loadCzarCards(){
	loading(true);
	my_timer = setTimeout(function () {
		 $.ajax({
		type: "POST", 
		url: "/index.php/server/api/get_cards/"+currentdeck+"/2/"+currentdeck, 
		dataType: "JSON",
	
	    complete: function(data){
		    carddeck = jQuery.parseJSON(data.responseText);
		    czarcarddeck = jQuery.parseJSON(data.responseText);
   	        console.log('Czar cards loaded: '+jQuery.parseJSON(data.responseText).length);
		    //console.log(carddeck);
	        //console.log(data.responseText);
	        setupCzar();
	        loading(false);
	    },
	    success: function(data){
	
	        //console.log(data.responseText);
	        //console.log(data);        
	    },
	    error: function(e){
	    	//console.log(e);
	    }
	    });    
	 //
    }, 1000);
}

// ! --- Helpers ---


function loadView(url){

	loading(true);

	
	$(".cahapp").fadeOut(200, function(){
	
		selectedcards 	= [];
		points  	= 0;
		
	$('.cahapp').load(url, function() {
		$(".cahapp").fadeIn(200);
		loading(false);
		

		$("#player").click(function(e){
	
			//loadView("/player");
			if(!game_key){
				$("#key-block").fadeIn();
			}else{

				showInfo('<p>'+game_token+'</p><span class="game_key"></span>');
//					alert()
				loadView('/player/game_session/'+game_key+'/'+$(this).attr('rel'));				    			
			}

		});
	
	$("#join").click(function(){
		//$("#key-block").fadeIn();
	});


	$("#key_input").keyup(function() {
		$("#key_input").removeClass('connection_error');	
		if($(this).val() == ""){
			$("#generate_join").html('Generate Key');
		}else{
			$("#generate_join").html('Join Game');
		}
	});
		
	
	$("#czar").click(function(){
		showInfo('<p>'+game_token+'</p><span class="game_key"></span>');			
		loadView("/czar");
	});	
	
	
	
	
	
	
	console.log('url: '+url.split('/')[1]);
	current_page = url.split('/')[1];

	switch(url.split('/')[1]){
		case "player":

				console.log('Setting up player');
				//getPrefs();				
				loadPlayerCards();		
				
				/*
				if(getCookie("player_carddeck") == 0){
					loadPlayerCards();		
					setPrefs();
				}else{
					carddeck = getCookie("player_carddeck");
			        setupPlayer();
					setPrefs();			        
				}*/		
		 break;
		case "czar":
			carddeck = [];
			my_timer = setTimeout(function () {
				 loadCzarCards()
				 //setupCzar();
	        }, 1000);		

		 break;		
		case "decks":
			$(".decks .card").click(function(){
				currentdeck = $(this).attr('rel');
				console.log('current deck: '+currentdeck);
			});	
			setupOther();

		 break;		
		case "home":
			setupOther();
		break;		 		 
		 default:
		 	showInfo('<p>Current page '+current_page+'<span class="link"></span></p>');		 	
		 	setupOther();
		 	
		 break; 
	}
	
	//$(".inforounded").delay(6000).fadeOut(200);

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
		//$('#czar_card').removeClass('hidden');
		$(".alert-bar-overlay").removeClass("slide-up").addClass("slide-down");
		my_timer = setTimeout(function () {
            $(".alert-bar-overlay").hide();
        }, 500);	});


	
		
	});
});
	
}


function displayEvents(target){
	target.click(function(e){
		checkCard($(this));
		showInfo('<p>Tap</p><span class="tap"></span>', 0, true);
	});	


	target.swipeEvents()
      .bind("swipeLeft",  function(){ showInfo('<p>Swipe left</p><span class="swipe-left"></span>', 0, true); })
      .bind("swipeRight", function(){ showInfo('<p>Swipe right</p><span class="swipe-right"></span>', 0, true); })
      .bind("swipeDown",  function(){ showInfo('<p>Swipe down</p><span class="swipe-down"></span>', 0, true); })
      .bind("swipeUp",    function(){ showInfo('<p>Swipe up</p><span class="swipe-up"></span>', 0, true); });

}

function addPageControl(amount){
	$('.page-control').html('');
	for(var i = 0; i<amount; i++){
		if(i == 0){
			$('.page-control').append('<li class="active">dot</li>');		
		}else{
			$('.page-control').append('<li>dot</li>');		
		}		
	}
}


function setCardCount(point){
	$(".cardcount").html(point);

	$(".cardcount").addClass('glow');
	my_timer = setTimeout(function () {
		$(".cardcount").removeClass('glow');
    }, 1000);	
	//console.log('Added point. '+point);

}




function setCardIcon(point){
	$(".card_icon").html(point);

	$(".card_icon").addClass('glow');
	my_timer = setTimeout(function () {
		$(".card_icon").removeClass('glow');
    }, 1000);	
	//console.log('Added point. '+point);
}

function setPointIcon(point){
	$(".point_icon").html(point);

	$(".point_icon").addClass('glow');
	my_timer = setTimeout(function () {
		$(".point_icon").removeClass('glow');
    }, 1000);	
	/*
	if($(".point_icon").hasClass('glow')){
	}
	$(".point_icon").addClass('glow');		
	*/
	//console.log('Added point. '+point);
}

var headers = [
			'Kevin<sup>®</sup> is still coding this sucker<sup>™</sup>. Cats.',
			'Getting a helping hand from @AtomicEdge. Thanks.',			
			];


// ! -- Remove iOS 6 Cache
$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    // you can use originalOptions.type || options.type to restrict specific type of requests
    options.data = jQuery.param($.extend(originalOptions.data||{}, { 
      timeStamp: new Date().getTime()
    }));
});


function setHeader(){
	var headline = Math.floor((Math.random()*headers.length)+1);
	$("h2.online").html(headers[headline]);
	//console.log($("h2.online").html())
	//console.log(headers[headline]);	
}


$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
        console.log('Preloading: '+this);
    });
}

// ! -- Remove scroll
document.ontouchmove = function(e){ e.preventDefault(); }

// ! -- Orientation stuff
$(window).bind('orientationchange', function(e, onready){
   if(onready){
       //$(document.body).addClass('portrait-onready');
   }
   if (Math.abs(window.orientation) != 0){

       $(document.body).removeClass('portrait').removeClass('portrait-onready');
   } 
   else {

       $(document.body).addClass('portrait');
   }

   if(!isNaN(Math.abs(window.orientation))){
   	console.log('Orientation: '+Math.abs(window.orientation));   
	//showInfo('<p>'+'Orientation: '+Math.abs(window.orientation)+'</p>', 0, true);   		
	}
});
$(window).trigger('orientationchange', true);


function showInfo(text, delay, force){

	if($('.inforounded').css("display") == "block" && force != true){
//		$('.inforounded').stop().fadeOut(100);
		$('.inforounded').stop().hide();
		//console.log('opacity: '+$('.inforounded').css("display"));		
	}else{
		if(force != true){
			$('.inforounded').hide();	
		}
		if(text){
			$(".inforounded").html(text);
			if(force == true){
				$(".inforounded").show().delay(3000).fadeOut(200);	
			}
		}else{
			$(".inforounded").html(swipe_text);
		}
		if(force != true){
			$('.inforounded').stop().delay(delay).fadeIn().delay(3000).fadeOut(200);	
//			$('.inforounded').stop().animate({opacity:0},delay).animate({opacity:1},200).animate({opacity:1},3000).fadeOut(200);				
//			$('.inforounded').stop(true,false).animate({opacity:0},delay,'').animate({opacity:1},200).animate({opacity:1},3000,'').animate({opacity:0},200);
		}
	}
	
	// $('#element').stop(true,false).animate({opacity:1},200,'easeOutExpo').animate({opacity:1},2000).animate({opacity:0},1000,'easeInQuint');

}    

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(sourceArray) {
	/*
	var tmpArray = [];
    for (var n = 0; n < sourceArray.length - 1; n++) {
        var k = n + Math.floor(Math.random() * (sourceArray.length - n));

        var temp = sourceArray[k];
        sourceArray[k] = sourceArray[n];
        sourceArray[n] = temp;
    }
    */
    
}


/*
    $(function(){
        $('#swipebox')
          .swipeEvents()
          .bind("swipeLeft",  function(){ $('#swipebox').html("Swipe Left"); })
          .bind("swipeRight", function(){ $('#swipebox').html("Swipe Right"); })
          .bind("swipeDown",  function(){ $('#swipebox').html("Swipe Down"); })
          .bind("swipeUp",    function(){ $('#swipebox').html("Swipe Up"); });
      });
*/




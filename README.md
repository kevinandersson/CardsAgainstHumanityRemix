Unofficial CardsAgainstHumanityRemix
=========================

A Cards Against Humanity Clone for the phone and browsers

This code is available under a Creative Commons BY-NC-SA 2.0 license. 
That means you can use and remix the code for free, but you can’t sell it. 

# TEAM

    Developer, Designer, Troll.
    Kevin Andersson @kevinandersson
    
    Cardmaster, Admin.
    James GH Bray @atomicedge
    http://www.jamesghbray.com/
    

# THANKS

    CardsAgainstHumanity
    http://www.CardsAgainstHumanity.com
    
    Code available at GITHub
    https://github.com/kevinandersson/CardsAgainstHumanityRemix

# THANKS FOR THE CODE    
    
    CSSUIkit
    http://www.cssuikit.com/
    Kevin Andersson
    
    Swipe
    http://bradbirdsall.com/swipe-js-a-lightweight-mobile-web-slider
    Brad Birdsall, Prime
    
    jQuery Swipe Events (Edited for card swipes, and touchevents)
    https://github.com/eikes/jquery.swipe-events.js
    Eike Send @eikes http://eike.se/nd
    
    Jquery-Fast-Click
    http://dave1010.github.com/jquery-fast-click/
    Dave Hulbert @dave1010
    
    Jquery
    http://www.jquery.com/
    
    HTML5 Boilerplate
    http://html5boilerplate.com/
    Nicolas Gallagher, Hans Christian Reinl, Cãtãlin Mari, Mathias Bynens, Paul Irish @paul_irish, and Divya Manian.
    
#THANKS FOR THE ICONS

  Tabsicons.com
	http://www.tabsicons.com
	Kevin Andersson @kevinandersson http://www.kevinandersson.dk/
	
	Gestures
	http://www.prekesh.com/Gestures
	Prekesh Chavda @prekesh http://www.prekesh.com/

# TECHNOLOGY COLOPHON

    HTML5, CSS3
    jQuery, Modernizr, Swipe, CSSUikit



#CHANGELOG

# 	----------------------------------------------------------------------	
	December 29th 2012
# 	----------------------------------------------------------------------

	Forgot to changelog
	Added splashscreen to let people know this is not an official webapp
	Added the code to GIT: https://github.com/kevinandersson/CardsAgainstHumanityRemix
	Added button on cards, for older phones (swipe problems)
	Added a new menu if only one card can be played
	Added a new menu if more than one card can be played
	Added Czar card preview on player hands
	Added layering on player played hand cards; you can now tap the cards to show the lower cards
	Tapping the czar card when a hand is played, zooms the czar card
	Czar mode: Player hands are now displayed correctly

	TODO: 
	Add zoom to czar preview card 
	Point management, if the czar has appointed points add a new menu for player	
	

# 	----------------------------------------------------------------------	
	December 21th 2012
# 	----------------------------------------------------------------------
	Added server callback when clicking black cards as player
	Big cleanup in JS
	Saving Czar cards in session
	Retrieving last czar card in session
	

# 	----------------------------------------------------------------------	
	December 21th 2012
# 	----------------------------------------------------------------------
	Key session build
	Added client / server connect
	iOS 6 caches all ajax requests, if I knew I could have spared myself for hours of work
	Added selected cards overlay on czar
	Removed shuffle function, DB returns shuffeled decks
	Added serverside code for retrieving cards, czar hand and game keys
	Added serial numbers to cards
	

# 	----------------------------------------------------------------------	
	December 20th 2012
# 	----------------------------------------------------------------------
	Added Deck selection
	Added card count on deck cards
	Added dynamic cards to decks
	Administration, deck creator

# 	----------------------------------------------------------------------	
	December 19th 2012
# 	----------------------------------------------------------------------
	Added cards left info panel
	Added page load info panel
	Animation ques on info panel
	Setup forum
	

# 	----------------------------------------------------------------------	
	December 18th 2012
# 	----------------------------------------------------------------------
	New database card administration
		Card decks
		Add cards
		Edit cards
		Delete cards
	Added all standard playing cards, thanks to @AtomicEdge
	Online mode
		Token system backend code
		Token generation CSS / Animation / HTML
		Added in-development indicator
	Dynamic white-card feed from database
	Dynamic black-card feed from database
	Swipe controls 
	New code for displaying info boxes
	New code for displaying loading screens
	Added dynamic random header
	Started implementing Get-Black-Bard-Code®
	Forum added (/forum)
	
	TODO: 
	Picked cards, player, stack selected cards (%/amount)
	Load round black card, player
	Save round hand, player
	Save card, czar
	Player, $var, current round reference (db id)
	Czar, $var, current round reference (db id)
	
	IDEAS:
	Submit new card
	Submit new deck
	Card voting
	Tweet card / combo
	User signup
	
	
	
# 	----------------------------------------------------------------------	

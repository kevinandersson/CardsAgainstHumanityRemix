        <!-- info panel -->
        <div class="info-panel">
        	<a href="/home/deck/<?=$deck->id;?>" class="navigation-button" ontouchstart="">Home</a>
	        <p class="text"><span class="card_icon">0</span></p>
	        <p class="text"><span class="point_icon">0</span></p>
	        <p><span class="cardcount">0</span></p>
	        <p><!--<a href="#settings" class="button">Settings</a>--></p>
        </div>

        <!-- Actionsheet -->
        <div class="alert-bar-overlay invisible player">
	      	<div class="alert-bar options">
        		<span class="button-inset"><a href="#" class="button green disabled" id="playhand" ontouchstart="">Play Hand</a></span>
    	    	<span class="button-inset"><a href="#" class="button red disabled" id="clearhand"  ontouchstart="">Clear Hand</a></span> <!-- loose / win + pick card(s) -->        
    	    	<span class="button-inset"><a href="#" class="button grey" id="pick_card"  ontouchstart="">Pick Card</a></span> <!-- loose / win + pick card(s) -->
	        	<span class="button-inset"><a href="#" class="button dark-grey"  ontouchstart="">Cancel</a></span>
		    </div>
		    
	      	<div class="alert-bar card_played">
    	    	<span class="button-inset"><a href="#" class="button grey" id="getpoints"  ontouchstart="">Get 1 Point(s)</a></span> <!-- loose / win + pick card(s) -->
	        	<span class="button-inset"><a href="#" class="button green"  id="dealcards" ontouchstart="">Deal xx new cards</a></span>
	        	<span class="button-inset"><a href="#" class="button dark-grey"  ontouchstart="">Cancel</a></span>	        	
		    </div>		    
		    
		    <div class="alert-bar czar_panel">
    	    	<span class="button-inset"><a href="#" class="button grey" id="get_czar_card"  ontouchstart="">Show Czar Card</a></span> 
	        	<span class="button-inset"><a href="#" class="button red"  id="deal_czar_card" ontouchstart="">Deal Czar Card</a></span>
	        	<span class="button-inset"><a href="#" class="button dark-grey"  ontouchstart="">Cancel</a></span>	        	
		    </div>		    		    
		    
    	    </div>
        <!-- End Actionsheet -->
        
        
        
<div id="slider" class="player">
  <ul>

  </ul>
</div>

			<ul class="page-control">
			</ul>	

<div id="pickedcards" class="picker">
	<div class="cards"></div>
</div>

<div id="czar_card">
	
</div>

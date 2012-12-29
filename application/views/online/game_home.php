        <div class="info-panel">
        	<a href="/decks" class="navigation-button" ontouchstart="">Decks</a>
        	<!--
	        <p class="text"><span class="card_icon">0</span></p>
	        <p class="text"><span class="point_icon">0</span></p>
	        <p><span class="cardcount">0</span></p>
	        -->
        </div>
        
			<!--<h2 class="header-info">Online Development<sup>®</sup> Two-Point-O<sup>™</sup>.</h2>-->
			<div id='slider'>
			  <ul>
			    <li style='display:block'><div class="card-wrap">
			    		<div class="card" id="player" rel="<?=$deck->id;?>"><p>Player.</p><em><?=$deck->card->where('type_id', 1)->count();?> Cards, v.0.1</em></div>
			    </div></li>
			    <li style='display:none'>
			    	<div class="card-wrap">
			    		<div class="card black" id="czar" rel="$<?=$deck->id;?>"><p>Card Czar.</p><em><?=$deck->card->where('type_id', 2)->count();?> Cards</em></div>
			    </div></li>
			    <li style='display:none'>
			    	<div class="card-wrap">
			    		<div class="card black">
				    		<p class="copy">
				    			<small style="float:left; clear: both; width: 100%;">Web app by</small><a href="http://www.twitter.com/kevinandersson" class="external">Kevin Andersson</a>.<br>
				    			<span class="split"></span>
				    			<a href="http://s3.amazonaws.com/cah/CAH_Rules.pdf" class="external">Official rules</a>.
				    			<small>Cards Against Humanity™<br/><a href="http://www.cardsagainsthumanity.com" class="external">www.cardsagainsthumanity.com</a></small>
				    							    			<span class="split"></span>
				    			<a href="https://twitter.com/share" class="twitter-share-button external" data-url="http://www.cahapp.com/" data-text="Got no #cardsagainsthumanity cards? Play with your friends using #cahapp!" data-via="kevinandersson">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
				    		</p>
			    		</div>
			    	</div></li>
			  </ul>
			</div>
			<ul class="page-control">
				<li class="active">x</li>
				<li>x</li>
				<li>x</li>
			</ul>			
			
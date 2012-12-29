<?php

//Detect special conditions devices
$iPod = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
$iPhone = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$iPad = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
$Android= stripos($_SERVER['HTTP_USER_AGENT'],"Android");
$webOS= stripos($_SERVER['HTTP_USER_AGENT'],"webOS");

//do something with this information
if( $iPod || $iPhone ){
        //were an iPhone/iPod touch -- do something here
}else if($iPad){
        //were an iPad -- do something here
}else if($Android){
        //were an Android device -- do something here
}else if($webOS){
        //were a webOS device -- do something here
}


 if($iPod || $iPhone || $iPad){ 
 $text = '<p>Swipe to navigate.</p><span class="swipe">Swipe</span>';
  }else{
	   $text = '<p>Use arrow keys to navigate</p><span class="arowkeys">Arrowkeys</span>';
  } ?>
			<div class="inforounded">
				<?=$text;?>
			</div>

			<div id='slider'>
			  <ul>
			    <li style='display:block'><div class="card" id="player"><p>Start new Player.</p><em>Version 0.0.1</em></div></li>
			    <li style='display:none'><div class="card black" id="czar"><p>Start new Czar.</p><em>Yay, cards!</em></div></li>
			    <li style='display:none'><div class="card"><p class="copy">Webapp by <br><a href="http://www.twitter.com/kevinandersson">Kevin Andersson</a>.<small>Cards Against Humanity™<br/><a href="">www.cardsagainsthumanity.com</a></small></p></div></li>
			  </ul>
			</div>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
    
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta id="viewport" name="viewport" content="width=320.1, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="format-detection" content="telephone=no">
        <!--
        <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
        <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
        -->

        <title>CAHApp: The Unofficial Cards Against Humanity web app for iPhone, iPad, PC & Mac</title>
        <meta name="description" content="">

        <!-- Place favicon.ico and /img/apple-touch-icon.png in the root directory -->
        <link rel="stylesheet" href="/js/vendor/swipe/style.css">
        <link rel="stylesheet" href="/css/normalize.css">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" type="text/css" media="all" href="/cssuikit/ios/css/import.css" />        
        <link rel="stylesheet" href="/css/cah.css?<?=time();?>">        
        
<!-- iPhone -->
<link rel="apple-touch-icon-precomposed" href="/img/apple-touch-icon-57x57-precomposed-dev.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/img/apple-touch-icon-72x72-precomposed-dev.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/img/apple-touch-icon-144x144-precomposed-dev.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/img/apple-touch-icon-144x144-precomposed-dev.png" />

<link href="apple-touch-startup-image-320x460.png"
      media="(device-width: 320px) and (device-height: 480px)
         and (-webkit-device-pixel-ratio: 1)"
      rel="apple-touch-startup-image">
<!-- iPhone (Retina) -->
<link href="apple-touch-startup-image-640x920.png"
      media="(device-width: 320px) and (device-height: 480px)
         and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image">
<!-- iPhone 5 -->
<link href="apple-touch-startup-image-640x1096.png"
      media="(device-width: 320px) and (device-height: 568px)
         and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image">
<!-- iPad (portrait) -->
<link href="apple-touch-startup-image-768x1004.png"
      media="(device-width: 768px) and (device-height: 1024px)
         and (orientation: portrait)
         and (-webkit-device-pixel-ratio: 1)"
      rel="apple-touch-startup-image">
<!-- iPad (landscape) -->
<link href="apple-touch-startup-image-748x1024.png"
      media="(device-width: 768px) and (device-height: 1024px)
         and (orientation: landscape)
         and (-webkit-device-pixel-ratio: 1)"
      rel="apple-touch-startup-image">
<!-- iPad (Retina, portrait) -->
<link href="apple-touch-startup-image-1536x2008.png"
      media="(device-width: 768px) and (device-height: 1024px)
         and (orientation: portrait)
         and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image">
<!-- iPad (Retina, landscape) -->
<link href="apple-touch-startup-image-1496x2048.png"
      media="(device-width: 768px) and (device-height: 1024px)
         and (orientation: landscape)
         and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image">        

        
        <script src="/js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body class="ios spinner">
    	<div class="development-header">Development Page. Click to hide.</div>

        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->


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
        <div class="cahapp">

        <!-- Add your site or application content here -->
        <!-- info panel -->

		</div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>
        <script src="/js/vendor/swipe/swipe.min.js"></script>        
        <script src="/js/vendor/jquery.swipe-events.js-master/js/jquery.swipe-events.js"></script>                
        <script src="/js/vendor/jquery-fast-click-master/jQuery.fastClick.js"></script>                
        <script src="/js/plugins.js"></script>
        <script src="/js/main_online.js?<?=time();?>"></script>
        <!-- CSSUIkit -->
        <script src="/cssuikit/js/cssuikit.js"></script>        

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-37087502-1']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		
		</script>
    
    <div class="copyright footer">
	    <p>This is an unofficial remix of Cards Against Humanity, Cards Against Humanity is a trademark of <a href="http://cardsagainsthumanity.com/">Cards Against Humanity LLC</a>. Designed in-house. </p>
	    <p>Website & Webapp by <a href="http://www.kevinandersson.dk">Kevin Andersson</a> · <a href="#" id="help">Help</a><!-- · <a href="/forum" rel="external" id="help">Forum</a>--> · <a href="/humans.txt">Humans.txt</a></p><br>
	    				    			<a href="https://twitter.com/share" class="twitter-share-button external" data-url="http://www.cahapp.com/" data-text="Got no #cardsagainsthumanity cards? Play with your friends using #cahapp!" data-via="kevinandersson">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    </div>
    

 
    <div class="spinner-block"></div>    
    <div class="overlay-block" id="key-block">
	    <div class="wrapper">

	    	<div class="input_container">
	    		<input type="text" placeholder="Enter Key"  pattern="\d*" id="key_input" class="_key" maxlength="7" />
	    		<span class="loading"></span>
	    	</div>
	    	
<!--	    	<span class="button-inset"><a href="#" id="join" class="button grey">Join game</a></span>-->
	    	<span class="button-inset"><a href="#" id="generate_join"  class="button grey">Generate Key</a></span>
	    	<span class="button-inset"><a href="#" id="online_cancel"  class="button dark-grey">Cancel</a></span>
	    </div>
    </div>    
    
    <div class="overlay-block" id="rotate-device">
    		<div class="inforounded">Rotate Device</div>
    </div>
		 
    <div class="overlay-block" id="help-block">
	    <div class="wrapper">
		    <h1>How this works.</h1>
		    <ol>
			    <li><span class="olicon friends"></span>Find two geeky friends.<li/>
				<li><span class="olicon device"></span>Visit this site on your device.<li/>
				<li><span class="olicon addhome"></span>Add the app to your homescreen.<li/>
				<li><span class="olicon icocards"></span>Tap the Player Card to start.<li/>				
		    </ol>
		    
	    </div>
    </div>        
    </body>
    
</html>

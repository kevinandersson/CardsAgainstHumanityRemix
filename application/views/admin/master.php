<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>CAHapp administration</title>



<link rel="stylesheet" type="text/css" media="all" href="/system_style/css/master/css/import.css" />
<link rel="stylesheet" type="text/css" media="print" href="/system_style/css/master/css/print.css" />
<link rel="stylesheet" type="text/css" media="all" href="/system_style/css/master/css/flick/jquery-ui-1.8.23.custom.css" />
<style>
	.card-wrap{
	width: 100%;
	height: 100%;
}
.card-wrap .card{
	margin: 0 auto;

	position: relative;
	margin-bottom: 30px;
}
.card{
   font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
   font-weight: 300;

	border: 2px solid rgba(27,128,236,0.0);
	-webkit-transform-style: preserve-3d;

    -webkit-transform-origin: center center;
	position: relative;
	
	
	-webkit-animation:hidecard 100ms,loadcard 1.2s ease-out;
	-webkit-animation-delay:0ms, 100ms;		
	-webkit-transition: all 0.7s ease-out;		

	display: block;
	width: 280px;
	min-height: 400px;
	margin: 0 auto;
	margin-top: -20px;		
	background: #fff;
	box-sizing: content-box;

	
	background-image: url('/img/cah-logo.svg'),-webkit-linear-gradient(#ffffff 0%, #f7f7f7 100%);;
	background-position: 10% 98%;
	background-size: 70% auto, 100% 100%;
	background-repeat: no-repeat;
	border-radius: 1.2em;

	box-shadow: 0px 2px 2px rgba(0,0,0,0.3),0px 2px 20px rgba(0,0,0,0.07), 0px 1px 0px rgba(255,255,255,0.1) inset,	0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.02) inset;;
	overflow: hidden;
	box-sizing: border-box;

}
sup{
	font-size: 60%;
}


.card.black{
	background-color: #18181b;

	background-image: url('/img/cah-logo-black.svg'),-webkit-linear-gradient(#18181b 0%, #070707 100%);
	background-repeat: no-repeat;	
	background-position: 10% 98%;
	background-size: 70% auto, 100% 100%;;	
	-webkit-font-smoothing: antialiased;	
}
.card.black a{
	color: #fff;
}
.card p.copy{
	font-size: 28px;

	float: left;
}
.card p sup{
	font-size: 20px;
}
.card p small sup{
	font-size: 10px;
}
.card p.copy small{
	margin-top: 20px;
	float: left;
	font-size: 14px;
	line-height: 18px;
	
}
.card.black p,
.content_container .half .card.black textarea{
color: #fff;
text-shadow: none;
font-size: 22px;
}

.card p{
	font-size: 30px;
	line-height: 1.2em;
   font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
   font-weight: 300;
	padding: 0.5em !important;   

}
.content_container .half .card textarea{
	width: 100%;
	margin: 0;
	min-height: 300px;
	display: block;
	padding: 0.5em !important;
	border: none;
	text-align: left;
	box-sizing: border-box;
	font-size: 30px;
	line-height: 1.2em;
   font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
   font-weight: 300;
   -webkit-appearance: none;	
   background: none;
   box-shadow: none!important;
}

.card p .small{
	font-size: 26px;
	
}


</style>
<!--<link rel="stylesheet" type="text/css" media="all" href="/system_style/js/prettyPhoto_uncompressed_3.1.4/css/prettyPhoto.css" />-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<!--<script type="text/javascript" src="/system_style/js/tablesorter/jquery.metadata.js"></script>-->
<script type="text/javascript" src="/system_style/js/tablesorter/jquery.tablesorter.min.js"></script>
<script type="text/javascript" src="/system_style/css/master/js/jquery-ui-1.8.23.custom.min.js"></script>
<!--<script src="/system_style/css/master/system_style/js/ui/jquery.ui.draggable.js"></script>-->

<script type="text/javascript" src="/system_style/js/prettyPhoto_uncompressed_3.1.4/js/jquery.prettyPhoto.js"></script>

<script type="text/javascript" src="/system_style/js/standard.js"></script>
</head>

<body>
<div id="wrapper">
  <div id="header"> 
    <div class="divider"></div>
  </div>
  <div id="main_wrap">
    <div id="sidebar">
      <div class="sidebar_header"> </div>	    
      <ul>
        <!--<li><a href="/admin/decks"><span class="sidebaricon ico_1"></span>Something</a></li>-->
        <li><a href="/admin/cards/decks/">
        	<span class="sidebaricon ico_9"></span>Decks</a>
        	<!--
        	<ul>
	        	<li><a href="/admin/settings/content/"><span class="_sidebaricon"></span>New Deck</a></li>

        	</ul>
        	-->

        </li>                
      </ul>
    </div>
    <div id="content">
	    <div class="wrap" style="margin-bottom: 120px;">
	      <?=$current_function_view?>
	    </div>
	    <br class="clear" />
    </div>
  </div>
</div>
</body>
</html>

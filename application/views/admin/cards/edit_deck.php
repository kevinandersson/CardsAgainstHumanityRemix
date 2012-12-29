

<h1><em>Deck</em> <? if($deck->exists()) strip_tags($deck->title);?></h1>

<div class="subhead">
	<ul class="breadcrum">
		<li><a href="/admin/cards">All Decks</a></li>
		<? if($deck->exists()){?>
			<li><?=strip_tags($deck->title)?></li>	
		<? }else{ ?>
			<li>New Deck</li>	
		<? } ?>	
	</ul>
</div>

<div class="content_container _themes">
	<?
	if($error){
	?>
	<p class="error"><?
		if(is_array($error)){
			foreach($error as $e){
				echo $e."<br />";	
			
			}	
		
		}else{
			echo $error;	
		
		}
	
	?></p>
	<?
	}
	?>
	<form action="" method="post" enctype="multipart/form-data" name="form1" id="form1">
	<h2>Deck</h2>

<? 
		  function br2nl($string){
		return PREG_REPLACE('#<br\s*?/?>#i', "", $string); 
		}
?>
	<div class="half">  
	  <p>
	    <label for="title" class="floatleft">Content</label>
	    <textarea name="title" id="title" class="long_description"><?=br2nl($deck->title);?></textarea>
	  </p>
	  <? 

		  if($deck->type_id == 2){?>
		  	  <p>
	    <label for="Deck_amount" class="floatleft">Deck Value</label>
	    <? 
		    if($deck->Deck_amount == 0){
			    $deck->Deck_amount = 1;
		    }
	    ?>

	  </p>
	  
		  <? }
	  ?>
	  <p>
	  	<label for="enabled" class="no-indent">Enabled
	  	  <? 
		  	  $extra = "";
		  	  if($deck->enabled == 1){
			  	  $extra = 'checked="checked"';
		  	  }
	  	  ?>
	  		
		  <input type="checkbox" name="enabled" <?=$extra;?> value="1" class="nopadding">
		  
	  	</label>

	  </p>
	  <div style="padding-left:20px;">
		  <p>Line breaks will be created automatically. <sup>©</sup> & <sup>™</sup> can be created with these tags:</p>
		  <code>
			  &lt;sup&gt;©&lt;/sup&gt;<br />
			  &lt;sup&gt;™&lt;/sup&gt;<br />

		  </code>
	  </div>
	  	  	  
	</div> 
	
	
	<div class="half">
		<? if($deck->id != 0){
		
			
			
		?>
			<div class="Deck-wrap">

				<div class="Deck" id="player"><p><?=$deck->title;?></p></div>

			</div>		
		<? } ?>
	</div>
	



	  <div class="submit_container">
	
	  	 <a href="/admin/cards/delete_Deck/<?=$deck->id?>" class="button large red delete" title="Deck">Delete</a>
	  	 <input name="Deck_id" value="<?=$deck->id?>"; type="hidden" />
	
	    <input type="submit" name="submit" id="submit" class="button" value="Save Deck" />
	  	 <a href="/admin/cards" class="button large grey">Cancel</a>             
	  </div>
	</form>

</div>

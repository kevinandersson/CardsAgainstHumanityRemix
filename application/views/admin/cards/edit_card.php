<script>
$(document).ready(function() {

function getCaret(el) {

  if (el.selectionStart) {
     return el.selectionStart;
  } else if (document.selection) {
     el.focus();

   var r = document.selection.createRange();
   if (r == null) {
    return 0;
   }

    var re = el.createTextRange(),
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }  
  return 0;
}

$('textarea').keyup(function (event) {

	//console.log(getCaret(this));
       if (event.keyCode == 13 && event.shiftKey) {
           event.stopPropagation();
           event.preventDefault();           
           var content = $(this).val();
           var caret;
           caret = getCaret($(this));
           $(this).value = content.substring(0,caret)+"\n"+content.substring(caret,content.length-1);

           
      }else if(event.keyCode == 13)
      {
          event.preventDefault();
          $('#form1').submit();
          //$(this).parents('form').submit();
          
      }
});

});

</script>

<h1><em>Card</em> <?=strip_tags($card->data);?></h1>

<div class="subhead">
	<ul class="breadcrum">
		<li><a href="/admin/cards/list_cards/<?=$card->deck_id;?>">All Cards</a></li>
		<? if($card->exists()){?>
			<li><?=strip_tags($card->data)?></li>	
		<? }else{ ?>
			<li>New Card</li>	
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
	<h2>Card</h2>

<? 
		  function br2nl($string){
		return PREG_REPLACE('#<br\s*?/?>#i', "", $string); 
		}
?>
	<div class="half">  
	  <p>
	    <label for="data" class="floatleft">Content</label>
			<div class="card-wrap">
				<? if($card->type_id == 1){?>
				<div class="card" id="player"><p>
					<textarea name="data" id="data" class="long_description"><?=br2nl($card->data);?></textarea>
				</p></div>
				<? }else{?> 
				<div class="card black" rel="'+carddeck[currentcard].id+'"><p>
					<textarea name="data" id="data" class="long_description"><?=br2nl($card->data);?></textarea>
				</p></div>
				<? }?>
			</div>			    

	  </p>
	  <? 

		  if($card->type_id == 2){?>
		  	  <p>
	    <label for="card_amount" class="floatleft">Card Value</label>
	    <? 
		    if($card->card_amount == 0){
			    $card->card_amount = 1;
		    }
	    ?>
	    <input type="text" name="card_amount" id="card_amount" value="<?=$card->card_amount;?>" placeholder="1" />
	  </p>
		  <? }
	  ?>
	  <div style="padding-left:20px;">
		  <p>Line breaks will be created automatically. <sup>©</sup> & <sup>™</sup> can be created with these tags:</p>
		  <code>
			  &lt;sup&gt;©&lt;/sup&gt;<br />
			  &lt;sup&gt;™&lt;/sup&gt;<br />
			  &lt;sup&gt;®&lt;/sup&gt;<br />			  
			  &lt;span class="small"&gt;CONTENT&lt;/span&gt;<br />			  
			  &lt;span class="small micro"&gt;CONTENT&lt;/span&gt;<br />			  			  

		  </code>
	  </div>
	  	  	  
	</div> 
	
	
	<div class="half">
		<? if($card->id != 0){
			$extra = "";
			if($card->card_amount == 2){
				$extra = '<span class="pick_two"><span class="tx">Pick</span><span class="count">2</span></span>';
			}	
			
		?>
			<div class="card-wrap">
				<? if($card->type_id == 1){?>
				<div class="card" id="player"><p><?=$card->data;?></p></div>
				<? }else{?> 
				<div class="card black" rel="'+carddeck[currentcard].id+'"><p><?=$card->data;?></p><?=$extra;?></div>
				<? }?>
			</div>		
		<? } ?>
	</div>
	



	  <div class="submit_container">
	
	  	 <a href="/admin/cards/delete_card/<?=$card->id?>" class="button large red delete" title="card">Delete</a>
	  	 <input name="card_id" value="<?=$card->id?>"; type="hidden" />
	
	    <input type="submit" name="submit_form" id="submit_form" class="button" value="Save Card" />
	  	 <a href="/admin/cards/list_cards/<?=$card->deck_id;?>" class="button large grey">Cancel</a>             
	  </div>
	</form>

</div>






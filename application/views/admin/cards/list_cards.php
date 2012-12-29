

<h1><em>All Decks</em> </h1>
<ul class="breadcrum">
	<li><a href="/admin/cards/decks">All Decks</a></li>
	<li><?=$deck->title;?></li>	
	
</ul>



<div class="content_container themes">
	<h2>White Cards</h2>
	<!-- !Table start  -->
	<table border="0" cellpadding="5" class="sortable">
    <thead>
     <tr>
       <th align="center" scope="col" width="80">Serial</th>     
       <th align="center" scope="col" width="">Name</th>       
       <th align="center" scope="col" width=""></th>              

     </tr>
    </thead>
 
     <tbody>
     <?
  //   print_r($cardroducts);

     foreach($white_cards as $card){
     
     ?>
       <tr> 
       <td align="center"><span class="badge"><?=$card->id;?></span></td>              

       <td align="left"><?=strip_tags($card->data);?></td>                   
       <td>
	       <div class="approval">
		       <a href="/admin/cards/edit_card/<?=$card->id?>/1/<?=$deck->id?>" class="sidebaricon ico_11"  title="Edit">Edit</a> 	       	       	       
	       </div>
       </td>

       
    </tr>
     
     <?
     }
     ?>
  
    </tbody>

    </table>
	<!-- !Table end  -->    
    <br class="clear" />
	 <div class="submit_container">
	
	    <a href="/admin/cards/edit_card/0/1/<?=$deck->id?>" class="button large right">New Card</a>
	  </div>


</div>


<div class="content_container themes">
	<h2>Black Cards</h2>
	<!-- !Table start  -->
	<table border="0" cellpadding="5" class="sortable">
    <thead>
     <tr>
       <th align="center" scope="col" width="80">Serial</th>     
       <th align="center" scope="col" width="">Points</th>              
       <th align="center" scope="col" width="">Name</th>   
       <th align="center" scope="col" width=""></th>              


     </tr>
    </thead>
 
     <tbody>
     <?
  //   print_r($cardroducts);

     foreach($black_cards as $card){
     
     ?>
       <tr> 
       <td align="center"><span class="badge"><?=$card->id;?></span></td>                            
       <td align="center"><span class="badge"><?=$card->card_amount;?></span></td>              
       <td align="left"><?=$card->data;?></td>                   
       <td>
	       <div class="approval">
		       <a href="/admin/cards/edit_card/<?=$card->id?>/2/<?=$deck->id?>" class="sidebaricon ico_11"  title="Edit">Edit</a> 	       	       	       
	       </div>
       </td>

       
    </tr>
     
     <?
     }
     ?>
  
    </tbody>

    </table>
	<!-- !Table end  -->    
    <br class="clear" />
	 <div class="submit_container">
	
	    <a href="/admin/cards/edit_card/0/2/<?=$deck->id?>" class="button large right">New Card</a>
	  </div>


</div>


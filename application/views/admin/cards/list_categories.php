

<h1><em>All Decks</em> </h1>
<ul class="breadcrum">
	<li>All Decks</li>
</ul>



<div class="content_container themes">
	<h2>Decks</h2>
	<!-- !Table start  -->
	<table border="0" cellpadding="5" class="sortable">
    <thead>
     <tr>
       <th align="center" scope="col" width="80">Black Cards</th>     
       <th align="center" scope="col" width="80">White Cards</th>
       <th align="center" scope="col" width="">Name</th>       
       <th align="center" scope="col" width="60"></th>                    

     </tr>
    </thead>
 
     <tbody>
     <?
  //   print_r($droducts);

     foreach($decks as $d){
     
     ?>
       <tr> 
       <td align="center"><span class="badge"><?=$d->cards->get()->where('type_id',2)->count();?></span></td>              
       <td align="center"><span class="badge"><?=$d->cards->get()->where('type_id',1)->count();?></span></td>       
       <td align="left"><?=$d->title;?></td>                   
       <td>
	       <div class="approval">
		       <a href="/admin/cards/list_cards/<?=$d->id?>" class="sidebaricon ico_11"  title="Edit">Edit</a> 
		       <a href="/admin/cards/edit_deck/<?=$d->id?>" class="sidebaricon ico_11"  title="Edit">Edit</a> 		       
		       
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
	
	    <a href="/admin/cards/edit_deck/0" class="button large right">New Deck</a>
	  </div>


</div>


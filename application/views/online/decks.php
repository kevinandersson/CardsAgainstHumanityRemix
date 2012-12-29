			<h2 class="header-info">Deck Selection.</h2>
			<div id='slider' class="decks">
			  <ul>

 <?
     foreach($decks as $d){
     if($d->cards->count() > 1 && $d->enabled == 1){
     ?>
     <li style='display:block'>
     		<div class="card-wrap">
     			
     			<a class="card" href="/home/deck/<?=$d->id;?>" rel="<?=$d->id;?>" >
     				<p><?=$d->title;?></p>
     				<em><?=$d->cards->count();?> Cards, v.0.1</em>
     			</a>
     		</div>
     </li>

     <?
     }
     }
     ?>			
	

			  </ul>
			</div>
			<ul class="page-control">
				<li class="active">x</li>

			</ul>			
			
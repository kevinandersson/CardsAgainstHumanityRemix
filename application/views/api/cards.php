<? 
$count = 0;
foreach($cards as $card){ ?>
{id : <?=$card->id?>,data : <?=$card->data?>;} 
<? 
if($count+1 < $cards->count()) echo ","; 
$count ++;
?>	
<? } ?>

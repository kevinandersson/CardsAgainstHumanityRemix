<?php
class Player_hand extends DataMapper {
	
	var $has_one = array('card', 'game_hand');
	
	function __construct($id = NULL){
		parent::__construct($id);
	}
	
	function Player_hand(){
		
	} 	
}

?>
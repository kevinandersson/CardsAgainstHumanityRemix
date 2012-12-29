<?php
class Game_hand extends DataMapper {
	
	var $has_one = array('card', 'game_session');
	var $has_many = array('player_hand');
	
	function __construct($id = NULL){
		parent::__construct($id);
	}
	
	function Game_hand(){
		
	} 	
}

?>
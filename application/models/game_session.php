<?php
class Game_session extends DataMapper {
	
	var $has_many = array('card', 'game_hand');
	
	function __construct($id = NULL){
		parent::__construct($id);
	}
	
	function Game_session(){
		
	} 	
}

?>
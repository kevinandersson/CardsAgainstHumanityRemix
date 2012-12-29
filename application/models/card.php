<?php
class Card extends DataMapper {
	
	var $has_one = array('type','deck');
	var $has_many = array('game_hand','player_hand');
	
	function __construct($id = NULL){
		parent::__construct($id);
	}
	
	function Card(){
		
	} 	
}

?>
<?php
class Type extends DataMapper {
	
	var $has_many = array('card');
	
	function __construct($id = NULL){
		parent::__construct($id);
	}
	
	function Type(){
		
	} 	
}

?>
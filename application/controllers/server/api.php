<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Api extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->data[] = "";
		header("Cache-Control: no-cache"); // HTTP/1.1
		header('Content-Type: application/json');		
		
	} 
	 	
	public function index()
	{

		$c = new Card();
		/*
		$this->data['current_function_view'] 	=  $this->load->view(STYLE_FOLDER.'teams/list_teams', $this->data, true);
		$this->load->view(STYLE_FOLDER.'master', $this->data);
		*/
		
		/*
		$ref = $_SERVER['HTTP_REFERER'];
		redirect($ref);	
		*/
		
		/*
		foreach($_POST as $key=>$val){
			if($key != 'password' && $key!= 'diet_id'){
				
				$user->{$key} = strip_tags($val);
			}
		}
		*/
		
	}
	
	function _randLetter()
	{
	    $int = rand(0,61);
	    $a_z = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	    $rand_letter = $a_z[$int];
	    return $rand_letter;
	}
	
	public function create_game(){
		$gs = new Game_session();
		$gs->token = $this->_randLetter().$this->_randLetter().$this->_randLetter();
		$gs->save();		

		echo json_encode(array('key'=>$gs->id));
	}
	
	
	public function join_game($game_key = -1){
		//$gs = new Game_session(substr($game_token, 3));
		$gs = new Game_session($game_key);
		//$user = new User();
		//$gs->save();		
		if($gs->exists()){
			echo json_encode(array('key'=>$gs->id, 'game'=>$gs->id));
		}else{
			//echo json_encode(array('error'=>'Game does not exist ('.$this->input->post().')'));		
			echo json_encode(array('error'=>'Game does not exist ('.$game_token.')'));		
		}

	}	
	
	public function save_game_hand($game_key = -1, $czar_card_id = -1, $deck_id = 3){
		//$czar_card_id = 1099;
		if($czar_card_id == -1){
			$card = new Card();

			// ! Tjek om kortet allerede er trukket
			
			$card->where('type_id', 2)->where('deck_id', $deck_id)->order_by('id', 'RANDOM')->limit(1)->get();
		}else{
		$card = new Card($czar_card_id);
		}
//		echo $card->id;
		$gs = new Game_session($game_key);

//		echo $gs->token;
		$gh = new Game_hand();
		$gh->card_id 			= $card->id;
		$gh->game_session_id 	= $gs->id;		
		$gh->save();
		
		$gs->save($gh);
		if($czar_card_id == -1){
			echo json_encode(array('id'=> $card->id, 'data'=>$card->data, 'cards'=>$card->card_amount, 'current_czar_card_count'=>$gs->game_hand->get()->count(), 'deck_id'=>$deck_id)); 			
		}else{
			echo json_encode(array('key'=> $gs->id, 'card'=>$card->id, 'game_hand'=>$gh->id, 'cards'=>$card->card_amount)); 					
		}
	}
	
	public function get_game_hands($game_key = -1, $pretty = -1){
	
		$gs = new Game_session($game_key);

		$gh = new Game_hand();
		$gh->where('game_session_id', $gs->id)->order_by('id', 'desc')->limit(1)->get();
		
		$ph = new Player_hand();
		$hands = $ph->where('game_hand_id', $gh->id)->get();
		
		$hand_array = array();				
		$card_array = array();	
		
		$czar_card = new Card($gh->card_id);
		
		$count = 0;				
		//die('id'.$gh->id);
		foreach($hands as $hand){
		
			
			$cards = $hand->card->get();
			foreach($cards as $card){
				array_push($card_array,array('id'=> $card->id, 'data'=>$card->data, 'cards'=>$card->card_amount,'index'=>$hand->index, 'player_hand'=>$hand->id, 'game_hand'=>$gh->id )); 
				if($count == ($czar_card->card_amount)-1){
					array_push($hand_array, $card_array);
					$card_array = array();
					$count = 0;
				}else{
					$count++;
				}										
			}
				
		}
		if(count($hand_array) == 0){

				echo json_encode(array('error'=>'error','response'=>'No cards','game_session'=> $gs->id, 'game_hand'=>$gh->id)); 					

		}else{
			if($pretty == 1){
				echo '<pre>';
				print_r($hand_array);
				echo '</pre>';				
			}else{
			echo json_encode($hand_array);   
			}
		}
//			if($hand->index == 0){

	}	
	
	public function save_game_card($game_session_id = -1){
		// ! ## SAVE PLAYER CARD
		//echo json_encode(array($this->input->post()));		
		$string = "";
		foreach($_POST as $key =>$value){
			$string .= $key.": ".$value;
		}
		
		$gh = new Game_hand();
		$gh->where('game_session_id', $game_session_id)->order_by('id', 'desc')->limit(1)->get();
		
		$ph = new Player_hand();
		$ph->card_id = $this->input->post('card');
		$ph->index = $this->input->post('index');
		
		$ph->save($gh);

		$card = new Card($ph->card_id);
//		echo json_encode(array('response'=>'','total_players'=>$gh->Player_hand->where('index', 0)->count()));				
//		echo json_encode(array('id'=> $card->id, 'data'=>$card->data, 'cards'=>$card->card_amount)); 			
		echo json_encode(array('response'=>'success','player_hand'=> $ph->id, 'card'=>$card->id, 'game_hand'=>$gh->id)); 					
	}
	
	// player asks for question
	public function get_czar_card($game_session_id = -1){
		$gs = new Game_session($game_session_id);
		
		$gh = new Game_hand();
		$gh->where('game_session_id', $gs->id)->order_by('id', 'desc')->limit(1)->get();

		$card = $gh->card->get();
		//$this->data['current_function_view'] 	=  $this->load->view(STYLE_FOLDER.'teams/list_teams', $this->data, true);
		if($card->exists()){
			echo json_encode(array('id'=> $card->id, 'data'=>$card->data, 'cards'=>$card->card_amount, 'current_czar_card_count'=>$gs->game_hand->get()->count())); 			
		}else{
			echo json_encode(array('error'=>'No card played ('.$game_session_id.')'));					
		}
		//$this->load->view('/api/czar_card.php', $this->data);		
		
	}
	
	public function get_cards($deck_id = 3, $type_id = 1){
		$cards = new Card();
		$cards->where('deck_id', $deck_id)->order_by('id', 'RANDOM')->where('type_id', $type_id)->get();

		$this->data['cards'] = $cards;
		$array = array();
		foreach($cards as $card){

			array_push($array,array('id'=> $card->id, 'data'=>$card->data, 'cards'=>$card->card_amount)); 			
		}
		echo json_encode($array);   
		
		
	}
	
	public function updatecards(){
	/*
		$cards = new Card();
		$cards->where('id >', 554)->get();
		foreach($cards as $card){
		$card->deck_id = 3;
		$card->save();
		}
		*/
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cards extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->data[] = "";
		$this->data['error'] = "";		
		
        $ip= $_SERVER['REMOTE_ADDR'];  

        if($ip == 'IP'){
	        
        }else{
	        die('Sorry duder, no access: '.$ip);
        }		
	} 
	 	
	public function index()
	{
		redirect('/admin/cards/decks');		
	}
	
	public function decks(){
		
		$decks = new Deck();
		$this->data['decks'] = $decks->get();
		$this->data['current_function_view'] 	=  $this->load->view('admin/cards/list_categories', $this->data, true);
		$this->load->view('admin/master', $this->data);
	}
	
	public function list_cards($deck_id = 0)
	{
		$decks = new Deck($deck_id);
		$this->data['deck'] = $decks;
		$white_cards = new Card();
		$white_cards = $white_cards->where('deck_id', $deck_id)->where('type_id', 1)->get();

		$black_cards = new Card();
		$black_cards = $black_cards->where('deck_id', $deck_id)->where('type_id', 2)->get();
		
		$this->data['white_cards'] = $white_cards;
		$this->data['black_cards'] = $black_cards;		
		$this->data['current_function_view'] 	=  $this->load->view('admin/cards/list_cards', $this->data, true);
		$this->load->view('admin/master', $this->data);		
		
		
	}	
	public function edit_card($card_id = 0, $type_id = 1, $deck_id = 1, $repeating = 0)
	{
		if($repeating == 1){
			$this->data['error'] = "New Card Added.";
		}
		$card = new Card($card_id);
		$card->type_id = $type_id;
		$card->deck_id = $deck_id;		
		
		if($_POST){
			$repeat = FALSE;
			if($card_id == 0){
				$repeat = TRUE;
			}
			foreach($this->input->post() as $key=>$val){
				$card->{$key} = nl2br($val);
			}
			$card->save();
			if($repeat){

				redirect('/admin/cards/edit_card/0/'.$type_id.'/'.$deck_id.'/1');
			}
		}

		$this->data['card'] = $card;		
		$this->data['current_function_view'] 	=  $this->load->view('admin/cards/edit_card', $this->data, true);
		$this->load->view('admin/master', $this->data);				
		
	}	
	public function delete_card($card_id = 0){

		$card = new Card($card_id);
		$deck_id = $card->deck_id;		
		$card->delete();
		/*
		$ref = $_SERVER['HTTP_REFERER'];
		redirect($ref);			
		*/
		redirect('/admin/cards/list_cards/'.$deck_id);
	}
	
	public function edit_deck($deck_id = 0, $repeating = 0)
	{
		if($repeating == 1){
			$this->data['error'] = "New Deck Added.";
		}
		$deck = new Deck($deck_id);


		
		if($_POST){
			$repeat = FALSE;
			/*
			if($deck_id == 0){
				$repeat = TRUE;
			}*/
			
			foreach($this->input->post() as $key=>$val){
				$deck->{$key} = nl2br($val);
			}
			if($this->input->post('enabled')){
				$deck->enabled = 1;
			}else{
				$deck->enabled = 0;
			}			

			$deck->save();
			if($repeat){

				redirect('/admin/cards/edit_deck/');
			}
		}

		$this->data['deck'] = $deck;		
		$this->data['current_function_view'] 	=  $this->load->view('admin/cards/edit_deck', $this->data, true);
		$this->load->view('admin/master', $this->data);				
		
	}			
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
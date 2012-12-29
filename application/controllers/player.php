<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Player extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('/offline/player');
	}
	
	public function game_session($game_session_id = 0, $deck_id = 0)
	{  
		$this->data['deck'] = new Deck($deck_id);
		$this->load->view('/online/player', $this->data);
	}	
	
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
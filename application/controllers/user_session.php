<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class User_session extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
        //If the request does not come from the commandline redirect
		if (!$this->input->is_cli_request()) {
			redirect('index');
		}
	}

	public function decrypt($session_id)
	{
		$this->load->library('encrypt');
		$session_id = urldecode($session_id);
		echo $this->encrypt->decode($session_id);
	}
}
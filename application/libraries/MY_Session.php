<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class MY_Session extends CI_Session {

	public function __construct()
	{
		$CI = get_instance();
		//Extend the session class so that it doesnt create a session cookie and row in db if the request comes from commandline
		if ($CI->input->is_cli_request())
		{
			return;
		}

		parent::__construct();
	}
}
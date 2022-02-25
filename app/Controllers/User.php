<?php

namespace App\Controllers;

use App\Libraries\Sso;
use Respect\Validation\Validator as v;

class User extends BaseController
{
   	private $sso;

	public function __construct()
	{
		$this->sso = new Sso();
	}

   	public function login()
	{
		if (session_status() == PHP_SESSION_NONE) {
			session_start();
		}
		$userInfo = $this->sso->userInfo();
		if ($userInfo) {
			print_r($userInfo);
			// $domain = $_SESSION['clientInfo']['domain'];
			// header("Location:http://" . $domain);
			// die();
		} else {
			$data['pagefile'] = 'login';
			return view('login2/login2', $data);
		}
	}

   	public function auth()
	{
		$d = json_decode(file_get_contents("php://input"), TRUE);
		$valid = v::key(
			'data',
			v::key('username', v::notEmpty()->noWhitespace()->alnum('.', '_'))
				->key('password', v::notEmpty())
				->key('action', v::notEmpty()->noWhitespace()->alnum())
		)->validate($d);
		if ($valid) {
			$this->sso->login($d['data']['username'], $d['data']['password']);
			$userInfo = $this->sso->userInfo();
			return json_encode($userInfo);
		} else {
			return json_encode('Data tidak valid');
		}
	}

	public function logout()
	{
		// session_destroy();
		$this->sso->logout();
		return redirect()->to('user/login');
	}
}

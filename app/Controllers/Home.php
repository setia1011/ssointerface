<?php

namespace App\Controllers;
use App\Libraries\Sso;

class Home extends BaseController
{
    private $sso;

	public function __construct()
	{
		$this->sso = new Sso();
	}

    public function index()
    {
        if (session_status() == PHP_SESSION_NONE) {
			session_start();
		}

        $userInfo = $this->sso->userInfo();

        $domain = $_SESSION['clientInfo']['domain'] ?? "intra.siroleg.xyz";
        if ($userInfo) {
            header("Location:http://" . $domain);
            die();
        } else {
            return redirect()->to('user/login');
        }
    }
}

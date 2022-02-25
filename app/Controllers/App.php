<?php

namespace App\Controllers;
use App\Models\AppModel;

class App extends BaseController
{
   public function index()
   {
      $domain = $_SESSION['clientInfo']['domain'];
      header("Location:http://" . $domain);
   }

   public function error() {
		$data['pagename'] = "404";
		$data['pagefile'] = '404';
		return view('pages/404');
	}

   public function client($clientId = null) {
      if (!empty($clientId) && $clientId > 0) {
         if (session_status() == PHP_SESSION_NONE) {
            session_start();
         }
         $appModel = new AppModel();
         $clientInfo = $appModel->validateClient($clientId);
         if (count($clientInfo) > 0) {
            $_SESSION['clientInfo']['domain'] = $clientInfo[0]['domains'];
            $_SESSION['clientInfo']['name'] = $clientInfo[0]['name'];
            $_SESSION['clientInfo']['id'] = $clientId;
            // print_r($_SESSION);
            return redirect()->to('user/login');
         } else {
            echo "Client ID is not valid!";
         }
      } else {
         echo "Hmm..";
      }
   }
}

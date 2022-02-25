<?php

namespace App\Libraries;

use Jasny\SSO\Broker\Broker;

class Sso
{
   public $broker;

   public function __construct()
   {
      $this->broker = new Broker('http://localhost:8006/', '4', 'd60010e0c19ec64abbdaab986cca764a');
   }

   public function userInfo()
   {
      try {
         $userInfo = $this->broker->request('GET', '/api/info.php');
         if (!$userInfo) {
            if (session_status() == PHP_SESSION_NONE) {
               session_start();
            }
            // session_destroy();
            return null;
         } else {
            $_SESSION['userInfo'] = $userInfo;
            return $_SESSION;
         }
      } catch (\RuntimeException $exception) {
         throw new \CodeIgniter\Router\Exceptions\RedirectException('/app/error');
         // throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
         // echo $exception->getMessage();
      }
   }

   public function login($username, $password)
   {
      try {
         $credentials = [
            'username' => $username,
            'password' => $password
         ];
         $userInfo = $this->broker->request('POST', '/api/login.php', $credentials);
         if ($userInfo) {
            if (session_status() == PHP_SESSION_NONE) {
               session_start();
            }
            $_SESSION['userInfo'] = $userInfo;
         }
      } catch (\RuntimeException $exception) {
         $error = $exception->getMessage();
         echo $error;
         die();
      }
   }

   public function passw($opassword, $npassword)
   {
      try {
         $credentials = [
            'opassword' => $opassword,
            'npassword' => $npassword
         ];
         $uinfo = $this->broker->request('POST', '/api/passw.php', $credentials);
         if ($uinfo) {
            return json_encode($uinfo);
         } else {
            return json_encode(['msg' => "username invalid"]);
         }
      } catch (\RuntimeException $exception) {
         $error = $exception->getMessage();
         echo $error;
         die();
      }
   }

   public function logout()
   {
      try {
         $this->broker->request('POST', '/api/logout.php');
         if (session_status() == PHP_SESSION_NONE) {
            session_start();
         }
         // session_destroy();
      } catch (\RuntimeException $exception) {
         $error = $exception->getMessage();
         echo $error;
         die();
      }
   }
}

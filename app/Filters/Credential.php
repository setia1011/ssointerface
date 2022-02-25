<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;
use App\Libraries\Sso as MySso;

class Credential implements FilterInterface
{
   public function before(RequestInterface $request, $arguments = null)
   {
      $mySso = new MySso();
      $userInfo = $mySso->userInfo();
      if (!$userInfo) {
         return redirect()->to('/user/login');
      }
   }

   //--------------------------------------------------------------------

   public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
   {
   }
}

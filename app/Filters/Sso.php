<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;
use App\Libraries\Sso as MySso;
use App\Libraries\DomainStatus;

class Sso implements FilterInterface
{
   public function before(RequestInterface $request, $arguments = null)
   {
      $ds = new DomainStatus();

      if ($ds->isDomainAvailible('http://localhost:8006')) {

         $mySso = new MySso();
         $broker = $mySso->broker;

         // Handle error from SSO server
         if (isset($_GET['sso_error'])) {
            echo $_GET['sso_error'];
            // die();
         }

         // Handle verification from SSO server
         if (isset($_GET['sso_verify'])) {
            $broker->verify($_GET['sso_verify']);

            $url = (!empty($_SERVER['HTTPS']) ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            $redirectUrl = preg_replace('/sso_verify=\w+&|[?&]sso_verify=\w+$/', '', $url);
            return redirect()->to($redirectUrl);
         }

         // Attach through redirect if the client isn't attached yet.
         if (!$broker->isAttached()) {
            $returnUrl = (!empty($_SERVER['HTTPS']) ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            $attachUrl = $broker->getAttachUrl(['return_url' => $returnUrl]);
            return redirect()->to($attachUrl);
         }
      } else {
         // echo "The server could not be reached!<br>";
      }
   }

   //--------------------------------------------------------------------

   public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
   {
   }
}

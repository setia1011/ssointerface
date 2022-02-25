<?php namespace App\Models;

use CodeIgniter\Model;

class AppModel extends Model {
    public function index() {
        print_r($_SESSION);
    }

    public function validateClient($clientId) {
        $db = \Config\Database::connect();
        return $db->query("SELECT * FROM aplikasi WHERE id = '$clientId'")->getResultArray();
    }
}
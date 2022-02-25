<?php echo view('templates/header.php'); ?>
<?php echo view('templates/header-top.php'); ?>
<?php 
// echo view('templates/notification.php'); ?>
<?php echo view('templates/userinfo.php'); ?>
<?php echo view('templates/sidebar.php'); ?>
<?php echo view('templates/page.php'); ?>

<?php $this->renderSection('contents'); ?>

<?php 
// echo view('templates/notif.php'); ?>
<?php echo view('templates/footer.php'); ?>

<?php

if (isset($pagefile)) {
    if (file_exists(realpath(APPPATH . '/Views/pages/'.$pagefile.'_js.php'))) {
        echo view('pages/'.$pagefile.'_js.php');
    } 
}

?>

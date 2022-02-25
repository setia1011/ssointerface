<?php $this->extend('templates/main'); ?>

<?php $this->section('contents') ?>

<style>
.bg-sso {
   background: transparent no-repeat center/cover !important;
}
.myapp {
   width: 100%;
   height: 100%;
   /* background-color: black; */
   /* color: white; */
}
</style>

<div class="section-body">
   <div class="container-fluid">
      <div class="row row-cards">
         <?php if (isset($_SESSION['userInfo']['roleInfo'])) {
            $roleInfo = $_SESSION['userInfo']['roleInfo'];
            foreach ($roleInfo as $k => $app) { ?>
               <div class="col-sm-3 col-lg-3">
                  <div class="card p-3">
                     <a href="<?php echo "http://".$app[0]['domains']; ?>" rel="noreferrer" target="_blank" class="mb-3">
                        <!-- <img src="../assets/images/gallery/16.jpg" class="rounded"> -->
                        <span class="iconify myapp" data-icon="wpf:qr-code" data-inline="false"></span>
                     </a>
                     <div class="d-flex align-items-center px-2">
                        <img class="avatar avatar-md mr-3 bg-sso" src="../assets/images/sso-verified.png" alt="">
                        <div>
                           <div><?php echo $k; ?></div>
                           <small class="d-block text-muted"><?php echo $app[0]['description'] ?></small>
                        </div>
                     </div>
                  </div>
               </div>
         <?php }
         } ?>
      </div>
   </div>
</div>

<!-- <script>
   function myJsFunc(link) {
      location.href = "http://" + link;
   }
</script> -->

<?php $this->endSection() ?>
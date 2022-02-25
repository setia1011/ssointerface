<?php $this->extend('templates/main'); ?>

<?php $this->section('contents') ?>

<div class="section-body">
   <div class="container-fluid">
      <div id="vueForm" class="row">
         <!-- notif -->
         <?php echo view('templates/notif.php'); ?>
         <!-- end of notif -->

         <div class="col-lg-6 col-md-12">
            <div class="card">
               <div class="card-body">
                  <form>
                     <div class="form-group">
                        <label class="form-label">Old Password</label>
                        <input class="form-control" type="password" v-model="opassword" required>
                     </div>
                     <div class="form-group">
                        <label class="form-label">New Password</label>
                        <input class="form-control" type="password" v-model="npassword" required>
                     </div>
                     <div class="form-group">
                        <label class="form-label">Confirm New Password</label>
                        <input class="form-control" type="password" v-model="cpassword" required>
                     </div>
                     <div class="form-footer d-md-flex justify-content-between">
                        <button type="button" class="btn btn-primary btn-sm" v-on:click="passw($event)">Submit</button>
                        <a type="button" href="javascript:history.back()" class="btn btn-outline-danger btn-sm">Back</a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<?php $this->endSection() ?>
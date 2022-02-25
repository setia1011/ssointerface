<?php $this->extend('templates/main'); ?>

<?php $this->section('contents') ?>

<div class="section-body">
   <div class="container-fluid">
      <div id="vueForm">
         <div class="row clearfix">
            <div class="col-lg-4 col-md-12">
               <div class="card">
                  <!-- <img class="card-img-top" src="../assets/images/gallery/6.jpg" alt="Card image cap"> -->
                  <div class="card-body">
                     <h4 class="card-title"><?php echo $userinfo['userInfo']['detil']['nama']; ?></h4>
                     <ul class="social-links list-inline mb-4">
                        <li class="list-inline-item"><a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="1234567890"><i class="fa fa-phone"></i></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="@skypename"><i class="fa fa-skype"></i></a></li>
                     </ul>
                     <p class="card-text card-text-custom"><?php echo $userinfo['userInfo']['group']; ?></p>
                     <p class="card-text card-text-custom">NIP <?php echo $userinfo['userInfo']['detil']['nip']; ?></p>
                     <p class="card-text card-text-custom-last"><?php echo $userinfo['userInfo']['detil']['pangkat']; ?></p>
                     <h5 class="card-title"><?php echo $userinfo['userInfo']['detil']['kantor']; ?></h5>
                     <div class="row">
                        <div class="col-4">
                           <h6><strong>0</strong></h6>
                           <span>Post</span>
                        </div>
                        <div class="col-4">
                           <h6><strong>0</strong></h6>
                           <span>Followers</span>
                        </div>
                        <div class="col-4">
                           <h6><strong>0</strong></h6>
                           <span>Likes</span>
                        </div>
                     </div>
                  </div>
                  <ul class="list-group list-group-flush">
                     <li class="list-group-item">email@example.com</li>
                     <li class="list-group-item">+6281213893497</li>
                  </ul>
               </div>
            </div>
            <div class="col-lg-8 col-md-12">
               <div class="tab-content" id="pills-tabContent">
                  
                  <div class="tab-pane fade active show">
                     <div class="card">
                        <div class="card-body">
                           <div class="row clearfix">
                              <div class="col-md-5">
                                 <div class="form-group">
                                    <label class="form-label">Company</label>
                                    <input type="text" class="form-control" disabled="" placeholder="Company" value="">
                                 </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                 <div class="form-group">
                                    <label class="form-label">Username</label>
                                    <input type="text" class="form-control" placeholder="Username" value="">
                                 </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                 <div class="form-group">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder="">
                                 </div>
                              </div>
                              <div class="col-sm-6 col-md-6">
                                 <div class="form-group">
                                    <label class="form-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="Company" value="">
                                 </div>
                              </div>
                              <div class="col-sm-6 col-md-6">
                                 <div class="form-group">
                                    <label class="form-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name" value="">
                                 </div>
                              </div>
                              <div class="col-md-12">
                                 <div class="form-group">
                                    <label class="form-label">Address</label>
                                    <input type="text" class="form-control" placeholder="Home Address" value="">
                                 </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                 <div class="form-group">
                                    <label class="form-label">City</label>
                                    <input type="text" class="form-control" placeholder="City" value="">
                                 </div>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                 <div class="form-group">
                                    <label class="form-label">Postal Code</label>
                                    <input type="number" class="form-control" placeholder="">
                                 </div>
                              </div>
                              <div class="col-md-5">
                                 <div class="form-group">
                                    <label class="form-label">Country</label>
                                    <select class="form-control custom-select">
                                       <option value="">Indonesia</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="col-md-12">
                                 <div class="form-group mb-0">
                                    <label class="form-label">About Me</label>
                                    <textarea rows="5" class="form-control" placeholder="Here can be your description">Oh so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions.</textarea>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="card-footer text-right">
                           <button type="submit" class="btn btn-primary" disabled>Update Profile</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<?php $this->endSection() ?>
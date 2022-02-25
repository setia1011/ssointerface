<!-- start User detail -->
<div class="user_div">
    <h5 class="brand-name mb-4">User Info<a href="javascript:void(0)" class="user_btn"><i class="icon-close"></i></a></h5>
    <div class="card">
        <img class="card-img-top" src="<?php echo base_url('assets/images/gallery/16.jpg'); ?>" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">
                <?php echo (isset($_SESSION['userInfo']['detil']['nama'])) ? $_SESSION['userInfo']['detil']['nama'] : ''; ?>
            </h5>
            <p class="card-text card-text-custom">
                <?php echo (isset($_SESSION['userInfo']['group'])) ? $_SESSION['userInfo']['group'] : ''; ?>
            </p>
            <p class="card-text card-text-custom">
                <?php echo (isset($_SESSION['userInfo']['detil']['nip'])) ? "NIP " . $_SESSION['userInfo']['detil']['nip'] : ''; ?>
            </p>
            <p class="card-text card-text-custom-last">
                <?php echo (isset($_SESSION['userInfo']['detil']['pangkat'])) ? $_SESSION['userInfo']['detil']['pangkat'] : ''; ?>
            </p>
            <h5 class="card-title">
                <?php echo (isset($_SESSION['userInfo']['detil']['kantor'])) ? $_SESSION['userInfo']['detil']['kantor'] : ''; ?>
            </h5>
            <div class="row">
                <div class="col-4">
                    <h6><strong>3265</strong></h6>
                    <small>Login</small>
                </div>
                <div class="col-4">
                    <h6><strong>1358</strong></h6>
                    <small>Logout</small>
                </div>
                <div class="col-4">
                    <h6><strong>10K</strong></h6>
                    <small>Oke</small>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="d-block">Performance <span class="float-right">77%</span></label>
        <div class="progress progress-sm">
            <div class="progress-bar" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
        </div>
        <button type="button" class="btn btn-primary btn-block mt-3 text-left d-block w-auto">Update UserInfo</button>
    </div>
</div>
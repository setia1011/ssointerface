<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta name="description" content="Crush it Able The most popular Admin Dashboard template and ui kit">
<meta name="author" content="PuffinTheme the theme designer">

<link rel="icon" type="image/png" href="<?php echo base_url('assets/images/3d.png'); ?>" type="image/x-icon"/>

<title>:: intra. :: Login</title>

<!-- Bootstrap Core and vandor -->
<link rel="stylesheet" href="<?php echo base_url('assets/plugins/bootstrap/css/bootstrap.min.css'); ?>" />

<!-- Core css -->
<link rel="stylesheet" href="<?php echo base_url('assets/css/main.css'); ?>"/>
<link rel="stylesheet" href="<?php echo base_url('assets/css/theme4.css'); ?>" id="stylesheet"/>
<style>
   /* .card-body-custom {
      border: 4px solid #607d8b;
      border-radius: 3px;
   } */
   .style2 {
      margin-bottom: 13px !important;
      border-radius: 0 !important;
      padding: 10px 10px !important;
   }
   .form-label {
      margin-bottom: 0 !important;
   }
   .btn-custom {
      cursor: pointer;
   }
   .auth-message {
      margin-bottom: 5px;
      color: #ff9800;
   }
</style>
</head>
<body class="font-opensans">

<div id="auth" class="auth">
    <div class="card">
        <div class="text-center mb-5 mt-1">
            <a class="header-brand" href="javascript:void(0)">
               <img src="<?php echo base_url('assets/images/3d.svg'); ?>" style="width:2em;">
            </a>
        </div>
        <div class="card-body card-body-custom">
            <div class="card-title">Login to your account</div>
            <div class="form-group style2">
                <label class="form-label">USERNAME</label>
                <input type="text" v-model="username" class="form-control" placeholder="Username">
            </div>
            <div class="form-group style2">
                <label class="form-label">PASSWORD</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>
            <div class="auth-message" v-model="message" v-if="message !== null">
               &#33; Invalid credentials
            </div>
            <div class="form-footer">
                <span 
                  class="btn btn-primary btn-square btn-lg d-inline btn-custom"
                  v-on:click="authLogin($event, 'login')">Login</span>
            </div>
            <br>
            <br>
            <div class="text-muted text-white">
               For further information, contact
               <a href="javascript:void(0)">Customs Intelligence and Targetting Centre</a>
         </div>
        </div>
        
        <div class="card-footer text-center mt-3">
            <button type="button" class="btn btn-icon btn-facebook"><i class="fa fa-facebook"></i></button>
            <button type="button" class="btn btn-icon btn-twitter"><i class="fa fa-twitter"></i></button>
            <button type="button" class="btn btn-icon btn-google"><i class="fa fa-google"></i></button>
            <button type="button" class="btn btn-icon btn-youtube"><i class="fa fa-youtube"></i></button>
        </div>
    </div>

</div>

<!-- jQuery and bootstrtap js -->
<script src="<?php echo base_url('assets/bundles/lib.vendor.bundle.js'); ?>"></script>

<!-- Start core js and page js -->
<script src="<?php echo base_url('assets/js/core.js'); ?>"></script>

<!-- # -->
<script src="<?php echo base_url('assets/plugins/vue/vue.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/plugins/axios/axios.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/plugins/lodash/lodash.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/pages/login.js'); ?>"></script>

</body>
</html>
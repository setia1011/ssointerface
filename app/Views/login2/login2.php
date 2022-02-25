<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>SSO :: Login</title>
        <link href="<?php echo base_url('assets/login2/css/bootstrap.min.css'); ?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/login2/css/common.css'); ?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/login2/css/theme-07.css'); ?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/login2/css/custom.css'); ?>" rel="stylesheet">
    </head>
    <body>
        <div id="auth" class="forny-container">
            <div class="forny-inner">
                <div class="forny-two-pane">
                    <div id="form-login">
                        <div class="forny-form">
                            <div class="mb-8 forny-logo">
                                <img width="80" src="<?php echo base_url('assets/login2/img/logo-01.svg'); ?>">
                            </div>
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active bg-transparent">
                                        <span>Login - </span>
                                        <span ref="clientName"><?php echo $name = strtoupper(isset($_SESSION['clientInfo']['name'])) ? strtoupper($_SESSION['clientInfo']['name']): ''; ?></span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active">
                                    <p class="mt-6 mb-6"> Use your credentials to login into account. </p>
                                    <form>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend"><span class="input-group-text">
                                                    <span class="iconify" data-icon="bx:user-circle"></span>
                                                </span>
                                            </div>
                                            <input required="" class="form-control" v-model="username" type="text" placeholder="Username">
                                        </div>
                                    </div>
                                    <div class="form-group password-field">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <span class="iconify" data-icon="ri:lock-password-line"></span>
                                                </span>
                                            </div>
                                            <input required="" class="form-control" v-model="password" type="password" placeholder="Password">
                                            <div class="input-group-append cursor-pointer">
                                                <span class="input-group-text">
                                                    <span class="iconify" data-icon="clarity:eye-show-line"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="auth-message" v-model="message" v-if="message !== null">
                                    &#33; Invalid credentials
                                    </div>
                                    <div class="row mt-10">
                                        <div class="col-6">
                                            <button class="btn btn-primary btn-block" v-on:click="authLogin($event, 'login')">Login</button>
                                        </div>
                                    </div>
                                    <div class="mt-10 mb-4 text-left">
                                        <div class="text-muted text-white">
                                            &copy; <?php echo date('Y'); ?>
                                            <a href="javascript:void(0)">Customs Intelligence and Targetting Centre</a> - Directorate General of Customs and Excise (Indonesia)
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Jangan dihapus line di bawah ini -->
                <div></div>
            </div>
        </div>
    </div>
    <script src="<?php echo base_url('assets/login2/js/jquery.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/login2/js/bootstrap.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/login2/js/main.js'); ?>"></script>
    <script src="<?php echo base_url('assets/login2/js/demo.js'); ?>"></script>
    <script src="<?php echo base_url('assets/plugins/iconify/iconify.min.js'); ?>"></script>

    <!-- # -->
    <script src="<?php echo base_url('assets/plugins/vue/vue.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/plugins/axios/axios.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/plugins/lodash/lodash.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/js/pages/login.js'); ?>"></script>
</body>
</html>
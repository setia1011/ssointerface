<!-- start Main menu -->
<div id="left-sidebar" class="sidebar">
    <div class="d-flex justify-content-between brand_name">
        <h5 class="brand-name">intra.</h5>
        <div class="theme_btn">
            <?php $theme1 = base_url("assets/css/theme1.css"); ?>
            <?php $theme2 = base_url("assets/css/theme2.css"); ?>
            <?php $theme3 = base_url("assets/css/theme3.css"); ?>
            <?php $theme4 = base_url("assets/css/theme4.css"); ?>
            <a class="theme1" data-toggle="tooltip" title="Theme Radical" href="#" onclick='setStyleSheet("<?php echo $theme1; ?>", 0);'></a>
            <a class="theme2" data-toggle="tooltip" title="Theme Turmeric" href="#" onclick='setStyleSheet("<?php echo $theme2; ?>", 0);'></a>
            <a class="theme3" data-toggle="tooltip" title="Theme Caribbean" href="#" onclick='setStyleSheet("<?php echo $theme3; ?>", 0);'></a>
            <a class="theme4" data-toggle="tooltip" title="Theme Cascade" href="#" onclick='setStyleSheet("<?php echo $theme4; ?>", 0);'></a>
        </div>
    </div>
    <div class="input-icon">
        <span class="input-icon-addon">
            <i class="fe fe-search"></i>
        </span>
        <input type="text" class="form-control" placeholder="Search...">
    </div>
    <div class="tab-content">
        <div id="vuemenu" class="tab-pane fade active show">
            <nav class="sidebar-nav">
                <ul class="metismenu ci-effect-2">
                    <li class="g_heading">Menus</li>
                    <li>
                        <a href="<?php echo base_url('/'); ?>">
                            <i class="icon-home"></i><span data-hover="Dashboard">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo base_url('user/profil'); ?>">
                            <i class="icon-doc"></i><span data-hover="Profil">Profil</span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo base_url('user/password'); ?>">
                            <i class="icon-doc"></i><span data-hover="Password">Password</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
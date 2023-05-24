<div class="user-account mx-3 my-4 text-start">
	<div class="d-flex">
		<img src="<?php echo Utilizr::image(AaceUtil::sessionUser('dp'), 'DP'); ?>" class="rounded-circle user-photo me-3" alt="Profile Photo">
		<div class="dropdown">
			<span class="d-block">Welcome,</span>
			<a href="#" class="dropdown-toggle user-name" data-bs-toggle="dropdown"><strong><?php echo AaceUtil::sessionUser('firstname'); ?></strong></a>
			<ul class="dropdown-menu account">
				<li><a href="page-profile2.php"><i class="fa fa-user"></i>My Profile</a></li>
				<li><a href="app-inbox.php"><i class="fa fa-envelope-open"></i>Messages</a></li>
				<li><a href="javascript:void(0);"><i class="fa fa-cog"></i>Settings</a></li>
				<li class="divider"></li>
				<li><a href="<?php AaceUtil::linkTo('auth/logout'); ?>"><i class="fa fa-power-off"></i>Logout</a></li>
			</ul>
		</div>
	</div>

	<?php #require (ORIG['PIECE'].'sidebar'.PS.'user'.DS.'stats.php');?>

</div>
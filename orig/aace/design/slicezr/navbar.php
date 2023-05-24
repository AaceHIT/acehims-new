<nav class="navbar navbar-fixed-top p-0">
	<div class="container-fluid">
		<div class="navbar-btn p-0">
			<button type="button" class="btn-toggle-offcanvas"><i class="fa fa-bars"></i></button>
		</div>
		<div class="navbar-brand">
			<a href="<?php AaceUtil::linkTo(AuthModel::static()->sessionUserAppLanding()); ?>" class="logo" title="<?php echo Env::property('config')['project']['brand']; ?>"> </a>
		</div>
		<div class="navbar-right">
			<?php require(ORIG['PIECE'] . 'navbar' . DS . 'search.php'); ?>
			<div id="navbar-menu" class="float-end">
				<ul class="navbar-nav flex-row align-items-center">
					<?php
					require(ORIG['PIECE'] . 'navbar' . DS . 'additional.php');
					require(ORIG['PIECE'] . 'navbar' . DS . 'notification.php');
					require(ORIG['PIECE'] . 'navbar' . DS . 'setting.php');
					?>
					<li class="d-md-inline-block"><a href="<?php AaceUtil::linkTo('auth/logout'); ?>" class="icon-menu"><i class="fa fa-sign-out"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
</nav>
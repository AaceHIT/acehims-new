<nav class="sidebar-nav">
	<ul class="main-menu metismenu list-unstyled">
		<li class="<?php AaceUtil::isActiveCSS(AaceUtil::link('USER_DASHBOARD')); ?>"><a href="<?php AaceUtil::linkTo('USER_DASHBOARD'); ?>"><i class="fa-solid fa-gauge me-4"></i><span>Dashboard</span></a></li>
		<?php
		$piece = ORIG['PIECE'] . 'sidebar' . DS . 'menu' . DS;

		if (AaceUtil::sessionUserHasAdmin() || AaceUtil::sessionUserHasDoctor() || AaceUtil::sessionUserHasNurse()) {
			require($piece . 'encounter.php');
		}
		if (AaceUtil::sessionUserHasAdmin() || AaceUtil::sessionUserHasReception() || AaceUtil::sessionUserHasNurse()) {
			require($piece . 'appointment.php');
			require($piece . 'patient.php');
		}

		if (AaceUtil::sessionUserHasAdmin()) {
			require($piece . 'company.php');
			require($piece . 'family.php');
			require($piece . 'vip.php');
			require($piece . 'hmo.php');
			require($piece . 'laboratory.php');
			require($piece . 'radiology.php');
			require($piece . 'medicine.php');
			require($piece . 'ward.php');
			// require($piece . 'blood.php');
			// require($piece . 'inventory.php');
			require($piece . 'staff.php');
			// require($piece . 'finance.php');
			// require($piece . 'report.php');
			// require($piece . 'email.php');
			// require($piece . 'sms.php');
			// require($piece . 'notice.php');
		}
		if (AaceUtil::sessionUserIsMaster()) {
			require($piece . 'master.php');
		}
		require($piece . 'setting.php');
		?>
		<li><a href="<?php AaceUtil::linkTo('auth/logout'); ?>"><i class="fa-solid fa-power-off fa-fw me-2"></i> Logout</a></li>
	</ul>
</nav>
<li class="<?php AaceUtil::isGroupCSS('staff', true, 'active mm-active'); ?>">
	<a href="#staff" class="has-arrow"><i class="fa-solid fa-users fa-fw me-4"></i><span>Staff</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('hr'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('staff/create') ?>"><a href="<?php AaceUtil::linkTo('staff/create'); ?>"><i class="fa-solid fa-user-plus fa-fw me-2"></i> Create Staff</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list') ?>"><a href="<?php AaceUtil::linkTo('staff/list'); ?>"><i class="fa-solid fa-users fa-fw me-2"></i> All Staff</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-doctor') ?>"><a href="<?php AaceUtil::linkTo('staff/list-doctor'); ?>"><i class="fa-solid fa-user-doctor fa-fw me-2"></i> Doctor</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-nurse') ?>"><a href="<?php AaceUtil::linkTo('staff/list-nurse'); ?>"><i class="fa-solid fa-user-nurse fa-fw me-2"></i> Nurse</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-pharmacist') ?>"><a href="<?php AaceUtil::linkTo('staff/list-pharmacist'); ?>"><i class="fa-solid fa-prescription-bottle fa-fw me-2"></i> Pharmacist</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-laboratorist') ?>"><a href="<?php AaceUtil::linkTo('staff/list-laboratorist'); ?>"><i class="fa-solid fa-vials fa-fw me-2"></i> Laboratorist</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-radiologist') ?>"><a href="<?php AaceUtil::linkTo('staff/list-radiologist'); ?>"><i class="fa-solid fa-file-prescription fa-fw me-2"></i> Radiologist</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-accountant') ?>"><a href="<?php AaceUtil::linkTo('staff/list-accountant'); ?>"><i class="fa-solid fa-money-bill-transfer fa-fw me-2"></i> Accountant</a></li>
		<li class="<?php AaceUtil::isActiveCSS('staff/list-receptionist') ?>"><a href="<?php AaceUtil::linkTo('staff/list-receptionist'); ?>"><i class="fa-solid fa-person-shelter fa-fw me-2"></i> Receptionist</a></li>
	</ul>
</li>
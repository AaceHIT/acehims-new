<li class="<?php AOUtil::isGroupCSS('staff', true, 'active mm-active'); ?>">
	<a href="#staff" class="has-arrow"><i class="fa-solid fa-users fa-fw me-4"></i><span>Staff</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('hr'); ?>">
		<li class="<?php AOUtil::isActiveCSS('staff/list') ?>"><a href="<?php AOUtil::linkTo('staff/list'); ?>"><i class="fa-solid fa-users fa-fw me-2"></i> All Staff</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/doctor') ?>"><a href="<?php AOUtil::linkTo('staff/doctor'); ?>"><i class="fa-solid fa-user-doctor fa-fw me-2"></i> Doctor</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/nurse') ?>"><a href="<?php AOUtil::linkTo('staff/nurse'); ?>"><i class="fa-solid fa-user-nurse fa-fw me-2"></i> Nurse</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/pharmacist') ?>"><a href="<?php AOUtil::linkTo('staff/pharmacist'); ?>"><i class="fa-solid fa-prescription-bottle fa-fw me-2"></i> Pharmacist</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/laboratorist') ?>"><a href="<?php AOUtil::linkTo('staff/laboratorist'); ?>"><i class="fa-solid fa-vials fa-fw me-2"></i> Laboratorist</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/radiologist') ?>"><a href="<?php AOUtil::linkTo('staff/radiologist'); ?>"><i class="fa-solid fa-file-prescription fa-fw me-2"></i> Radiologist</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/accountant') ?>"><a href="<?php AOUtil::linkTo('staff/accountant'); ?>"><i class="fa-solid fa-money-bill-transfer fa-fw me-2"></i> Accountant</a></li>
		<li class="<?php AOUtil::isActiveCSS('staff/receptionist') ?>"><a href="<?php AOUtil::linkTo('staff/receptionist'); ?>"><i class="fa-solid fa-person-shelter fa-fw me-2"></i> Receptionist</a></li>
	</ul>
</li>
<li class="<?php AaceUtil::isGroupCSS('setting', true, 'active mm-active'); ?>">
	<a href="#setting" class="has-arrow"><i class="fa-solid fa-gear fa-fw me-4"></i><span>Setting</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('setting'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('setting/photo-upload') ?>"><a href="<?php AaceUtil::linkTo('setting/photo-upload'); ?>"><i class="fa-solid fa-image fa-fw me-2"></i> Upload Photo</a></li>
		<li class="<?php AaceUtil::isActiveCSS('setting/profile-update') ?>"><a href="<?php AaceUtil::linkTo('setting/profile-update'); ?>"><i class="fa-solid fa-user-pen fa-fw me-2"></i> Update Profile</a></li>
		<li class="<?php AaceUtil::isActiveCSS('setting/profile-update-nok') ?>"><a href="<?php AaceUtil::linkTo('setting/profile-update-nok'); ?>"><i class="fa-solid fa-user-lock fa-fw me-2"></i> Update NOK</a></li>
		<li class="<?php AaceUtil::isActiveCSS('setting/profile-update-guardian') ?>"><a href="<?php AaceUtil::linkTo('setting/profile-update-guardian'); ?>"><i class="fa-solid fa-user-tag fa-fw me-2"></i> Update Guardian</a></li>
		<li class="<?php AaceUtil::isActiveCSS('setting/profile-update-medical') ?>"><a href="<?php AaceUtil::linkTo('setting/profile-update-medical'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> Update Medical</a></li>
		<li class="<?php AaceUtil::isActiveCSS('setting/profile-update-signature') ?>"><a href="<?php AaceUtil::linkTo('setting/profile-update-signature'); ?>"><i class="fa-solid fa-signature fa-fw me-2"></i> Update Signature</a></li>
		<li class="<?php AaceUtil::isActiveCSS('setting/change-password') ?>"><a href="<?php AaceUtil::linkTo('setting/change-password'); ?>"><i class="fa-solid fa-key fa-fw me-2"></i> Change Password</a></li>
	</ul>
</li>
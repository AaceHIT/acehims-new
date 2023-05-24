<li class="<?php AOUtil::isGroupCSS('vip', true, 'active mm-active'); ?>">
	<a href="#vip" class="has-arrow"><i class="fa-solid fa-user-ninja fa-fw me-4"></i><span>VIP</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('vip'); ?>">
		<li class="<?php AOUtil::isActiveCSS('vip/create'); ?>"><a href="<?php AOUtil::linkTo('vip/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create VIP</a></li>
		<li class="<?php AOUtil::isActiveCSS('vip/list'); ?>"><a href="<?php AOUtil::linkTo('vip/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage VIP</a></li>
		<li class="<?php AOUtil::isActiveCSS('vip/search'); ?>"><a href="<?php AOUtil::linkTo('vip/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search VIP</a></li>
		<li class="<?php AOUtil::isActiveCSS('vip/patient'); ?>"><a href="<?php AOUtil::linkTo('vip/patient'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> VIP Patient</a></li>
	</ul>
</li>
<li class="<?php AOUtil::isGroupCSS('company', true, 'active mm-active'); ?>">
	<a href="#company" class="has-arrow"><i class="fa-solid fa-building fa-fw me-4"></i><span>Company</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('company'); ?>">
		<li class="<?php AOUtil::isActiveCSS('company/create'); ?>"><a href="<?php AOUtil::linkTo('company/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Company</a></li>
		<li class="<?php AOUtil::isActiveCSS('company/list'); ?>"><a href="<?php AOUtil::linkTo('company/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage Company</a></li>
		<li class="<?php AOUtil::isActiveCSS('company/search'); ?>"><a href="<?php AOUtil::linkTo('company/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search Company</a></li>
		<li class="<?php AOUtil::isActiveCSS('company/patient'); ?>"><a href="<?php AOUtil::linkTo('company/patient'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> Company Patient</a></li>
	</ul>
</li>
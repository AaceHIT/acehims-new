<li class="<?php AaceUtil::isGroupCSS('company', true, 'active mm-active'); ?>">
	<a href="#company" class="has-arrow"><i class="fa-solid fa-building fa-fw me-4"></i><span>Company</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('company'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('company/create'); ?>"><a href="<?php AaceUtil::linkTo('company/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Company</a></li>
		<li class="<?php AaceUtil::isActiveCSS('company/list'); ?>"><a href="<?php AaceUtil::linkTo('company/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage Company</a></li>
		<li class="<?php AaceUtil::isActiveCSS('company/search'); ?>"><a href="<?php AaceUtil::linkTo('company/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search Company</a></li>
	</ul>
</li>
<li class="<?php AaceUtil::isGroupCSS('laboratory', true, 'active mm-active'); ?>">
	<a href="#laboratory" class="has-arrow"><i class="fa-solid fa-flask-vial fa-fw me-4"></i><span>Laboratory</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('laboratory'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('laboratory/create') ?>"><a href="<?php AaceUtil::linkTo('laboratory/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Laboratory</a></li>
		<li class="<?php AaceUtil::isActiveCSS('laboratory/list') ?>"><a href="<?php AaceUtil::linkTo('laboratory/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> List Laboratory</a></li>
		<li class="<?php AaceUtil::isActiveCSS('laboratory/search') ?>"><a href="<?php AaceUtil::linkTo('laboratory/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for Laboratory</a></li>
		<li class="<?php AaceUtil::isActiveCSS('laboratory/unlisted') ?>"><a href="<?php AaceUtil::linkTo('laboratory/unlisted'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlisted Laboratory</a></li>
	</ul>
</li>
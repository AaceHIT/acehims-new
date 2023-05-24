<li class="<?php AaceUtil::isGroupCSS('family', true, 'active mm-active'); ?>">
	<a href="#family" class="has-arrow"><i class="fa-solid fa-people-group fa-fw me-4"></i><span>Family</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('family'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('family/create'); ?>"><a href="<?php AaceUtil::linkTo('family/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Family</a></li>
		<li class="<?php AaceUtil::isActiveCSS('family/list'); ?>"><a href="<?php AaceUtil::linkTo('family/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage Family</a></li>
		<li class="<?php AaceUtil::isActiveCSS('family/search'); ?>"><a href="<?php AaceUtil::linkTo('family/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search Family</a></li>
	</ul>
</li>
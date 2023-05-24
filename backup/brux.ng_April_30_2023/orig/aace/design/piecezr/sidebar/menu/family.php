<li class="<?php AOUtil::isGroupCSS('family', true, 'active mm-active'); ?>">
	<a href="#family" class="has-arrow"><i class="fa-solid fa-people-group fa-fw me-4"></i><span>Family</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('family'); ?>">
		<li class="<?php AOUtil::isActiveCSS('family/create'); ?>"><a href="<?php AOUtil::linkTo('family/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Family</a></li>
		<li class="<?php AOUtil::isActiveCSS('family/list'); ?>"><a href="<?php AOUtil::linkTo('family/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage Family</a></li>
		<li class="<?php AOUtil::isActiveCSS('family/search'); ?>"><a href="<?php AOUtil::linkTo('family/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search Family</a></li>
		<li class="<?php AOUtil::isActiveCSS('family/patient'); ?>"><a href="<?php AOUtil::linkTo('family/patient'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> Family Patient</a></li>
	</ul>
</li>
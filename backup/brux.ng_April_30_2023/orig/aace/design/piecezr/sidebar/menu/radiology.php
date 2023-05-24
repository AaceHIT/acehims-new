<li class="<?php AOUtil::isGroupCSS('radiology', true, 'active mm-active'); ?>">
	<a href="#radiology" class="has-arrow"><i class="fa-solid fa-x-ray fa-fw me-4"></i><span>Radiology</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('radiology'); ?>">
		<li class="<?php AOUtil::isActiveCSS('radiology/create') ?>"><a href="<?php AOUtil::linkTo('radiology/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Radiology</a></li>
		<li class="<?php AOUtil::isActiveCSS('radiology/list') ?>"><a href="<?php AOUtil::linkTo('radiology/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> List Radiology</a></li>
		<li class="<?php AOUtil::isActiveCSS('radiology/search') ?>"><a href="<?php AOUtil::linkTo('radiology/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for Radiology</a></li>
		<li class="<?php AOUtil::isActiveCSS('radiology/unlisted') ?>"><a href="<?php AOUtil::linkTo('radiology/unlisted'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlisted Radiology</a></li>
	</ul>
</li>
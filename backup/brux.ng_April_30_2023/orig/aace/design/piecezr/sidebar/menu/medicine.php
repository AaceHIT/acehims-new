<li class="<?php AOUtil::isGroupCSS('medicine', true, 'active mm-active'); ?>">
	<a href="#medicine" class="has-arrow"><i class="fa-solid fa-capsules fa-fw me-4"></i><span>Medicine</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('medicine'); ?>">
		<li class="<?php AOUtil::isActiveCSS('medicine/create') ?>"><a href="<?php AOUtil::linkTo('medicine/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Medicine</a></li>
		<li class="<?php AOUtil::isActiveCSS('medicine/list') ?>"><a href="<?php AOUtil::linkTo('medicine/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> List Medicine</a></li>
		<li class="<?php AOUtil::isActiveCSS('medicine/search') ?>"><a href="<?php AOUtil::linkTo('medicine/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for Medicine</a></li>
		<li class="<?php AOUtil::isActiveCSS('medicine/unlisted') ?>"><a href="<?php AOUtil::linkTo('medicine/unlisted'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlisted Medicine</a></li>
	</ul>
</li>
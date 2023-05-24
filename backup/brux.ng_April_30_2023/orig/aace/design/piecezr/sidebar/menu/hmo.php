<li class="<?php AOUtil::isGroupCSS('hmo', true, 'active mm-active'); ?>">
	<a href="#hmo" class="has-arrow"><i class="fa-solid fa-square-h fa-fw me-4"></i><span>HMO</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('hmo'); ?>">
		<li class="<?php AOUtil::isActiveCSS('hmo/create'); ?>"><a href="<?php AOUtil::linkTo('hmo/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create HMO</a></li>
		<li class="<?php AOUtil::isActiveCSS('hmo/list'); ?>"><a href="<?php AOUtil::linkTo('hmo/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> List All HMO</a></li>
		<li class="<?php AOUtil::isActiveCSS('hmo/search'); ?>"><a href="<?php AOUtil::linkTo('hmo/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for HMO</a></li>
		<li class="<?php AOUtil::isActiveCSS('hmo/unlisted'); ?>"><a href="<?php AOUtil::linkTo('hmo/unlisted'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlisted HMO</a></li>
		<li class="<?php AOUtil::isActiveCSS('hmo/patient'); ?>"><a href="<?php AOUtil::linkTo('hmo/patient'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> HMO Patient</a></li>
	</ul>
</li>
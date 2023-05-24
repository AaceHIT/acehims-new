<li class="<?php AaceUtil::isGroupCSS('hmo', true, 'active mm-active'); ?>">
	<a href="#hmo" class="has-arrow"><i class="fa-solid fa-square-h fa-fw me-4"></i><span>HMO</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('hmo'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('hmo/create'); ?>"><a href="<?php AaceUtil::linkTo('hmo/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create HMO</a></li>
		<li class="<?php AaceUtil::isActiveCSS('hmo/list'); ?>"><a href="<?php AaceUtil::linkTo('hmo/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> List All HMO</a></li>
		<li class="<?php AaceUtil::isActiveCSS('hmo/search'); ?>"><a href="<?php AaceUtil::linkTo('hmo/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for HMO</a></li>
		<li class="<?php AaceUtil::isActiveCSS('hmo/unlisted'); ?>"><a href="<?php AaceUtil::linkTo('hmo/unlisted'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlisted HMO</a></li>
	</ul>
</li>
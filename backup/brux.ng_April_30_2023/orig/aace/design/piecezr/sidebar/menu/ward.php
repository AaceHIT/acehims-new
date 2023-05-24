<li class="<?php AOUtil::isGroupCSS('ward', true, 'active mm-active'); ?>">
	<a href="#ward" class="has-arrow"><i class="fa-brands fa-hive fa-fw me-4"></i><span>Ward</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('ward'); ?>">
		<li class="<?php AOUtil::isActiveCSS('ward/create'); ?>"><a href="<?php AOUtil::linkTo('ward/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Ward</a></li>
		<li class="<?php AOUtil::isActiveCSS('ward/manage'); ?>"><a href="<?php AOUtil::linkTo('ward/manage'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage Ward</a></li>
		<li class="<?php AOUtil::isActiveCSS('ward/bed-create'); ?>"><a href="<?php AOUtil::linkTo('ward/bed-create'); ?>"><i class="fa-solid fa-plus fa-fw me-2"></i> Create Bed</a></li>
		<li class="<?php AOUtil::isActiveCSS('ward/bed-manage'); ?>"><a href="<?php AOUtil::linkTo('ward/bed-manage'); ?>"><i class="fa-solid fa-bed fa-fw me-2"></i> Manage Bed</a></li>
		<li class="<?php AOUtil::isActiveCSS('ward/bed-allotment'); ?>"><a href="<?php AOUtil::linkTo('ward/bed-allotment'); ?>"><i class="fa-solid fa-bed-pulse fa-fw me-2"></i> Bed Allotment</a></li>
	</ul>
</li>
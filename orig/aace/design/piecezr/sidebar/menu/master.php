<li class="<?php AaceUtil::isGroupCSS('master', true, 'active mm-active'); ?>">
	<a href="#master" class="has-arrow"><i class="fa-solid fa-square-h fa-fw me-4"></i><span>Master</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('master'); ?>">

		<li class="<?php AaceUtil::isActiveCSS('master/practice-create'); ?>"><a href="<?php AaceUtil::linkTo('master/practice-create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Practice</a></li>
		<li class="<?php AaceUtil::isActiveCSS('master/practice-list'); ?>"><a href="<?php AaceUtil::linkTo('master/practice-list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> List Practice</a></li>

	</ul>
</li>
<li class="<?php AaceUtil::isGroupCSS('notice', true, 'active mm-active'); ?>">
	<a href="#notice" class="has-arrow"><i class="fa-solid fa-bell fa-fw me-4"></i><span>Notice</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('notice'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('notice/post') ?>"><a href="<?php AaceUtil::linkTo('notice/post'); ?>"><i class="fa-solid fa-list-alt fa-fw me-2"></i> Post Notice</a></li>
		<li class="<?php AaceUtil::isActiveCSS('notice/manage') ?>"><a href="<?php AaceUtil::linkTo('notice/manage'); ?>"><i class="fa-solid fa-bell fa-fw me-2"></i> Manage Notice</a></li>
	</ul>
</li>
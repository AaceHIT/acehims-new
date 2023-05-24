<li class="<?php AOUtil::isGroupCSS('notice', true, 'active mm-active'); ?>">
	<a href="#notice" class="has-arrow"><i class="fa-solid fa-bell fa-fw me-4"></i><span>Notice</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('notice'); ?>">
		<li class="<?php AOUtil::isActiveCSS('notice/post') ?>"><a href="<?php AOUtil::linkTo('notice/post'); ?>"><i class="fa-solid fa-list-alt fa-fw me-2"></i> Post Notice</a></li>
		<li class="<?php AOUtil::isActiveCSS('notice/manage') ?>"><a href="<?php AOUtil::linkTo('notice/manage'); ?>"><i class="fa-solid fa-bell fa-fw me-2"></i> Manage Notice</a></li>
	</ul>
</li>
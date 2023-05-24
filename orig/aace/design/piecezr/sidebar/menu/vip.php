<li class="<?php AaceUtil::isGroupCSS('vip', true, 'active mm-active'); ?>">
	<a href="#vip" class="has-arrow"><i class="fa-solid fa-user-ninja fa-fw me-4"></i><span>VIP</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('vip'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('vip/create'); ?>"><a href="<?php AaceUtil::linkTo('vip/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create VIP</a></li>
		<li class="<?php AaceUtil::isActiveCSS('vip/list'); ?>"><a href="<?php AaceUtil::linkTo('vip/list'); ?>"><i class="fa-solid fa-file-lines fa-fw me-2"></i> Manage VIP</a></li>
		<li class="<?php AaceUtil::isActiveCSS('vip/search'); ?>"><a href="<?php AaceUtil::linkTo('vip/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search VIP</a></li>
	</ul>
</li>
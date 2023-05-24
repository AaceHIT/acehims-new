<li class="<?php AaceUtil::isGroupCSS('blood', true, 'active mm-active'); ?>">
	<a href="#blood" class="has-arrow"><i class="fa-solid fa-droplet fa-fw me-4"></i><span>Blood Bank</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('blood'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('blood/bank') ?>"><a href="<?php AaceUtil::linkTo('blood/bank'); ?>"><i class="fa-solid fa-tint fa-fw me-2"></i> Blood Bank</a></li>
		<li class="<?php AaceUtil::isActiveCSS('blood/donor') ?>"><a href="<?php AaceUtil::linkTo('blood/donor'); ?>"><i class="fa-solid fa-user fa-fw me-2"></i> Manage Donor</a></li>
	</ul>
</li>
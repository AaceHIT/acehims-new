<li class="<?php AOUtil::isGroupCSS('blood', true, 'active mm-active'); ?>">
	<a href="#blood" class="has-arrow"><i class="fa-solid fa-droplet fa-fw me-4"></i><span>Blood Bank</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('blood'); ?>">
		<li class="<?php AOUtil::isActiveCSS('blood/bank') ?>"><a href="<?php AOUtil::linkTo('blood/bank'); ?>"><i class="fa-solid fa-tint fa-fw me-2"></i> Blood Bank</a></li>
		<li class="<?php AOUtil::isActiveCSS('blood/donor') ?>"><a href="<?php AOUtil::linkTo('blood/donor'); ?>"><i class="fa-solid fa-user fa-fw me-2"></i> Manage Donor</a></li>
	</ul>
</li>
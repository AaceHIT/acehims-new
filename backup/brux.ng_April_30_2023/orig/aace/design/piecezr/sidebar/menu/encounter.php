<li class="<?php AOUtil::isGroupCSS('encounter', true, 'active mm-active'); ?>">
	<a href="#encounter" class="has-arrow"><i class="fa-solid fa-clipboard-user fa-fw me-4"></i><span>Encounter</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('encounter'); ?>">
		<li class="<?php AOUtil::isActiveCSS('encounter/today') ?>"><a href="<?php AOUtil::linkTo('encounter/today'); ?>"><i class="fa-solid fa-users-rectangle fa-fw me-2"></i> Today</a></li>
		<li class="<?php AOUtil::isActiveCSS('encounter/search') ?>"><a href="<?php AOUtil::linkTo('encounter/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
		<li class="<?php AOUtil::isActiveCSS('encounter/all') ?>"><a href="<?php AOUtil::linkTo('encounter/all'); ?>"><i class="fa-solid fa-users-between-lines fa-fw me-2"></i> Encounter</a></li>
	</ul>
</li>

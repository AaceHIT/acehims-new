<li class="<?php AaceUtil::isGroupCSS('encounter', true, 'active mm-active'); ?>">
	<a href="#encounter" class="has-arrow"><i class="fa-solid fa-clipboard-user fa-fw me-4"></i><span>Encounter</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('encounter'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('encounter/today') ?>"><a href="<?php AaceUtil::linkTo('encounter/today'); ?>"><i class="fa-solid fa-users-rectangle fa-fw me-2"></i> Today</a></li>
		<li class="<?php AaceUtil::isActiveCSS('encounter/list') ?>"><a href="<?php AaceUtil::linkTo('encounter/list'); ?>"><i class="fa-solid fa-users-between-lines fa-fw me-2"></i> Encounter</a></li>
	</ul>
</li>

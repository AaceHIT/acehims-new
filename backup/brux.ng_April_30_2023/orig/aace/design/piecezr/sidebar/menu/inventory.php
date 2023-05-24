<li class="<?php AOUtil::isGroupCSS('inventory', true, 'active mm-active'); ?>">
	<a href="#inventory" class="has-arrow"><i class="fa-solid fa-cart-flatbed fa-fw me-4"></i><span>Inventory</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('inventory'); ?>">
		<li class="<?php AOUtil::isActiveCSS('inventory/search') ?>"><a href="<?php AOUtil::linkTo('inventory/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
	</ul>
</li>
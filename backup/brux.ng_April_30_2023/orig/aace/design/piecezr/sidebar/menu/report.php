<li class="<?php AOUtil::isGroupCSS('report', true, 'active mm-active'); ?>">
	<a href="#report" class="has-arrow"><i class="fa-solid fa-file-lines fa-fw me-4"></i><span>Report</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('report'); ?>">
		<li class="<?php AOUtil::isActiveCSS('report/search') ?>"><a href="<?php AOUtil::linkTo('report/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
	</ul>
</li>
<li class="<?php AaceUtil::isGroupCSS('report', true, 'active mm-active'); ?>">
	<a href="#report" class="has-arrow"><i class="fa-solid fa-file-lines fa-fw me-4"></i><span>Report</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('report'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('report/search') ?>"><a href="<?php AaceUtil::linkTo('report/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
	</ul>
</li>
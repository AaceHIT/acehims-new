<li class="<?php AOUtil::isGroupCSS('appointment', true, 'active mm-active'); ?>">
	<a href="#appointment" class="has-arrow"><i class="fa-solid fa-calendar fa-fw me-4"></i><span>Appointment</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('appointment'); ?>">
		<li class="<?php AOUtil::isActiveCSS('appointment/create') ?>"><a href="<?php AOUtil::linkTo('appointment/create'); ?>"><i class="fa-regular fa-calendar-plus fa-fw me-2"></i> Create</a></li>
		<li class="<?php AOUtil::isActiveCSS('appointment/search') ?>"><a href="<?php AOUtil::linkTo('appointment/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
		<li class="<?php AOUtil::isActiveCSS('appointment/today') ?>"><a href="<?php AOUtil::linkTo('appointment/today'); ?>"><i class="fa-solid fa-calendar-day fa-fw me-2"></i> Today</a></li>
		<li class="<?php AOUtil::isActiveCSS('appointment/upcoming') ?>"><a href="<?php AOUtil::linkTo('appointment/upcoming'); ?>"><i class="fa-solid fa-calendar-week fa-fw me-2"></i> Upcoming</a></li>
		<li class="<?php AOUtil::isActiveCSS('appointment/requested') ?>"><a href="<?php AOUtil::linkTo('appointment/requested'); ?>"><i class="fa-solid fa-calendar-days fa-fw me-2"></i> Requested</a></li>
	</ul>
</li>
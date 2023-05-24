<li class="<?php AaceUtil::isGroupCSS('appointment', true, 'active mm-active'); ?>">
	<a href="#appointment" class="has-arrow"><i class="fa-solid fa-calendar fa-fw me-4"></i><span>Appointment</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('appointment'); ?>">
		<!-- <li class="<?php AaceUtil::isActiveCSS('appointment/schedule') ?>"><a href="<?php AaceUtil::linkTo('appointment/schedule'); ?>"><i class="fa-regular fa-calendar-plus fa-fw me-2"></i> Schedule</a></li> -->
		<!-- <li class="<?php AaceUtil::isActiveCSS('appointment/search') ?>"><a href="<?php AaceUtil::linkTo('appointment/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li> -->
		<li class="<?php AaceUtil::isActiveCSS('appointment/list') ?>"><a href="<?php AaceUtil::linkTo('appointment/list'); ?>"><i class="fa-solid fa-calendar fa-fw me-2"></i> List Appointment</a></li>
		<li class="<?php AaceUtil::isActiveCSS('appointment/today') ?>"><a href="<?php AaceUtil::linkTo('appointment/today'); ?>"><i class="fa-solid fa-calendar-day fa-fw me-2"></i> Today</a></li>
		<li class="<?php AaceUtil::isActiveCSS('appointment/requested') ?>"><a href="<?php AaceUtil::linkTo('appointment/requested'); ?>"><i class="fa-solid fa-calendar-days fa-fw me-2"></i> Requested</a></li>
		<li class="<?php AaceUtil::isActiveCSS('appointment/confirmed') ?>"><a href="<?php AaceUtil::linkTo('appointment/confirmed'); ?>"><i class="fa-solid fa-calendar-days fa-fw me-2"></i> Confirmed</a></li>
		<li class="<?php AaceUtil::isActiveCSS('appointment/completed') ?>"><a href="<?php AaceUtil::linkTo('appointment/completed'); ?>"><i class="fa-solid fa-calendar-days fa-fw me-2"></i> Completed</a></li>
	</ul>
</li>
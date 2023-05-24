<li class="<?php AaceUtil::isGroupCSS('finance', true, 'active mm-active'); ?>">
	<a href="#finance" class="has-arrow"><i class="fa-solid fa-money-check-dollar fa-fw me-4"></i><span>Finance</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('finance'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('finance/search') ?>"><a href="<?php AaceUtil::linkTo('finance/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
		<li class="<?php AaceUtil::isActiveCSS('finance/salary') ?>"><a href="<?php AaceUtil::linkTo('finance/salary'); ?>"><i class="fa-solid fa-person-shelter fa-fw me-2"></i> Manage Salary</a></li>
		<li class="<?php AaceUtil::isActiveCSS('finance/payroll') ?>"><a href="<?php AaceUtil::linkTo('finance/payroll'); ?>"><i class="fa-solid fa-money-check fa-fw me-2"></i> Manage Payroll</a></li>
	</ul>
</li>
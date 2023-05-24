<li class="<?php AOUtil::isGroupCSS('finance', true, 'active mm-active'); ?>">
	<a href="#finance" class="has-arrow"><i class="fa-solid fa-money-check-dollar fa-fw me-4"></i><span>Finance</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('finance'); ?>">
		<li class="<?php AOUtil::isActiveCSS('finance/search') ?>"><a href="<?php AOUtil::linkTo('finance/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search</a></li>
		<li class="<?php AOUtil::isActiveCSS('finance/salary') ?>"><a href="<?php AOUtil::linkTo('finance/salary'); ?>"><i class="fa-solid fa-person-shelter fa-fw me-2"></i> Manage Salary</a></li>
		<li class="<?php AOUtil::isActiveCSS('finance/payroll') ?>"><a href="<?php AOUtil::linkTo('finance/payroll'); ?>"><i class="fa-solid fa-money-check fa-fw me-2"></i> Manage Payroll</a></li>
	</ul>
</li>
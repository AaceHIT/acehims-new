<li class="<?php AaceUtil::isGroupCSS('patient', true, 'active mm-active'); ?>">
	<a href="#patient" class="has-arrow"><i class="fa-solid fa-user fa-fw me-4"></i><span>Patient</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('patient'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('patient/create') ?>"><a href="<?php AaceUtil::linkTo('patient/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Patient</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/list') ?>"><a href="<?php AaceUtil::linkTo('patient/list'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> List Patient</a></li>
		<!-- <li class="<?php AaceUtil::isActiveCSS('patient/search') ?>"><a href="<?php AaceUtil::linkTo('patient/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for Patient</a></li> -->
		<li class="<?php AaceUtil::isActiveCSS('patient/ipd') ?>"><a href="<?php AaceUtil::linkTo('patient/ipd'); ?>"><i class="fa-solid fa-bed fa-fw me-2"></i> In-Patient (IPD)</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/opd') ?>"><a href="<?php AaceUtil::linkTo('patient/opd'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> Out-Patient (OPD)</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/antenatal') ?>"><a href="<?php AaceUtil::linkTo('patient/antenatal'); ?>"><i class="fa-solid fa-person-breastfeeding fa-fw me-2"></i> Antenatal (ANT)</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/company'); ?>"><a href="<?php AaceUtil::linkTo('patient/company'); ?>"><i class="fa-solid fa-building fa-fw me-2"></i> Company Patient</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/family'); ?>"><a href="<?php AaceUtil::linkTo('patient/family'); ?>"><i class="fa-solid fa-people-group fa-fw me-2"></i> Family Patient</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/vip'); ?>"><a href="<?php AaceUtil::linkTo('patient/vip'); ?>"><i class="fa-solid fa-user-ninja fa-fw me-2"></i> VIP Patient</a></li>
		<li class="<?php AaceUtil::isActiveCSS('patient/hmo'); ?>"><a href="<?php AaceUtil::linkTo('patient/hmo'); ?>"><i class="fa-solid fa-square-h fa-fw me-2"></i> HMO Patient</a></li>
		<?php
		if (AaceUtil::sessionUserHasAdmin()) { ?>
			<!-- <li class="<?php AaceUtil::isActiveCSS('patient/unlisted') ?>"><a href="<?php AaceUtil::linkTo('patient/unlisted'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlisted Patient</a></li> -->
		<?php } ?>
	</ul>
</li>
<li class="<?php AOUtil::isGroupCSS('patient', true, 'active mm-active'); ?>">
	<a href="#patient" class="has-arrow"><i class="fa-solid fa-user fa-fw me-4"></i><span>Patient</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('patient'); ?>">
		<li class="<?php AOUtil::isActiveCSS('patient/create') ?>"><a href="<?php AOUtil::linkTo('patient/create'); ?>"><i class="fa-solid fa-file-circle-plus fa-fw me-2"></i> Create Patient</a></li>
		<li class="<?php AOUtil::isActiveCSS('patient/list') ?>"><a href="<?php AOUtil::linkTo('patient/list'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> List Patient</a></li>
		<li class="<?php AOUtil::isActiveCSS('patient/search') ?>"><a href="<?php AOUtil::linkTo('patient/search'); ?>"><i class="fa-solid fa-magnifying-glass fa-fw me-2"></i> Search for Patient</a></li>
		<li class="<?php AOUtil::isActiveCSS('patient/ipd') ?>"><a href="<?php AOUtil::linkTo('patient/ipd'); ?>"><i class="fa-solid fa-bed fa-fw me-2"></i> In-Patient (IPD)</a></li>
		<li class="<?php AOUtil::isActiveCSS('patient/opd') ?>"><a href="<?php AOUtil::linkTo('patient/opd'); ?>"><i class="fa-solid fa-hospital-user fa-fw me-2"></i> Out-Patient (OPD)</a></li>
		<li class="<?php AOUtil::isActiveCSS('patient/antenatal') ?>"><a href="<?php AOUtil::linkTo('patient/antenatal'); ?>"><i class="fa-solid fa-person-breastfeeding fa-fw me-2"></i> Antenatal (ANT)</a></li>
		<li class="<?php AOUtil::isActiveCSS('patient/unlist') ?>"><a href="<?php AOUtil::linkTo('patient/unlist'); ?>"><i class="fa-solid fa-ban fa-fw me-2"></i> Unlist Patient</a></li>
	</ul>
</li>
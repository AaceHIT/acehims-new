<li class="<?php AOUtil::isGroupCSS('sms', true, 'active mm-active'); ?>">
	<a href="#sms" class="has-arrow"><i class="fa-solid fa-envelopes-bulk fa-fw me-4"></i><span>SMS</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('sms'); ?>">
		<li class="<?php AOUtil::isActiveCSS('sms/compose') ?>"><a href="<?php AOUtil::linkTo('sms/compose'); ?>"><i class="fa-solid fa-paper-plane fa-fw me-2"></i> Compose</a></li>
		<li class="<?php AOUtil::isActiveCSS('sms/sent') ?>"><a href="<?php AOUtil::linkTo('sms/sent'); ?>"><i class="fa-solid fa-envelope-circle-check fa-fw me-2"></i> Sent</a></li>
		<li class="<?php AOUtil::isActiveCSS('sms/draft') ?>"><a href="<?php AOUtil::linkTo('sms/draft'); ?>"><i class="fa-solid fa-inbox fa-fw me-2"></i> Draft</a></li>
		<li class="<?php AOUtil::isActiveCSS('sms/template') ?>"><a href="<?php AOUtil::linkTo('sms/template'); ?>"><i class="fa-solid fa-list-alt fa-fw me-2"></i> Template</a></li>
		<li class="<?php AOUtil::isActiveCSS('sms/setting') ?>"><a href="<?php AOUtil::linkTo('sms/setting'); ?>"><i class="fa-solid fa-gears fa-fw me-2"></i> Settings</a></li>
	</ul>
</li>
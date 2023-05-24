<li class="<?php AOUtil::isGroupCSS('email', true, 'active mm-active'); ?>">
	<a href="#email" class="has-arrow"><i class="fa-solid fa-envelopes-bulk fa-fw me-4"></i><span>Email</span></a>
	<ul class="list-unstyled <?php AOUtil::isGroupCSS('email'); ?>">
		<li class="<?php AOUtil::isActiveCSS('email/compose') ?>"><a href="<?php AOUtil::linkTo('email/compose'); ?>"><i class="fa-solid fa-paper-plane fa-fw me-2"></i> Compose</a></li>
		<li class="<?php AOUtil::isActiveCSS('email/sent') ?>"><a href="<?php AOUtil::linkTo('email/sent'); ?>"><i class="fa-solid fa-envelope-circle-check fa-fw me-2"></i> Sent</a></li>
		<li class="<?php AOUtil::isActiveCSS('email/draft') ?>"><a href="<?php AOUtil::linkTo('email/draft'); ?>"><i class="fa-solid fa-inbox fa-fw me-2"></i> Draft</a></li>
		<li class="<?php AOUtil::isActiveCSS('email/template') ?>"><a href="<?php AOUtil::linkTo('email/template'); ?>"><i class="fa-solid fa-list-alt fa-fw me-2"></i> Template</a></li>
		<li class="<?php AOUtil::isActiveCSS('email/setting') ?>"><a href="<?php AOUtil::linkTo('email/setting'); ?>"><i class="fa-solid fa-gears fa-fw me-2"></i> Settings</a></li>
	</ul>
</li>
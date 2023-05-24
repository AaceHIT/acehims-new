<li class="<?php AaceUtil::isGroupCSS('email', true, 'active mm-active'); ?>">
	<a href="#email" class="has-arrow"><i class="fa-solid fa-envelopes-bulk fa-fw me-4"></i><span>Email</span></a>
	<ul class="list-unstyled <?php AaceUtil::isGroupCSS('email'); ?>">
		<li class="<?php AaceUtil::isActiveCSS('email/compose') ?>"><a href="<?php AaceUtil::linkTo('email/compose'); ?>"><i class="fa-solid fa-paper-plane fa-fw me-2"></i> Compose</a></li>
		<li class="<?php AaceUtil::isActiveCSS('email/sent') ?>"><a href="<?php AaceUtil::linkTo('email/sent'); ?>"><i class="fa-solid fa-envelope-circle-check fa-fw me-2"></i> Sent</a></li>
		<li class="<?php AaceUtil::isActiveCSS('email/draft') ?>"><a href="<?php AaceUtil::linkTo('email/draft'); ?>"><i class="fa-solid fa-inbox fa-fw me-2"></i> Draft</a></li>
		<li class="<?php AaceUtil::isActiveCSS('email/template') ?>"><a href="<?php AaceUtil::linkTo('email/template'); ?>"><i class="fa-solid fa-list-alt fa-fw me-2"></i> Template</a></li>
		<li class="<?php AaceUtil::isActiveCSS('email/setting') ?>"><a href="<?php AaceUtil::linkTo('email/setting'); ?>"><i class="fa-solid fa-gears fa-fw me-2"></i> Settings</a></li>
	</ul>
</li>
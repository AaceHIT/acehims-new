<div class="row clearfix">
	<div class="col-12">
		<div class="card mb-4">
			<div class="card-header<?php Utilizr::cssNotifyBG(); ?>">
				<strong><?php Vars::show($meta->breadcrumb->secondary); ?></strong>
			</div>
			<?php
			if (Vars::hasData($frontend->form)) {
				$form = DesignQ::isForm($frontend->form);
				if (Vars::hasData($form)) {
					require($form);
				}
			} ?>
		</div>
	</div>
</div>
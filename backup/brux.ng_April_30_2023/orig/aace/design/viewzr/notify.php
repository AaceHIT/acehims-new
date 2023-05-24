<div class="row clearfix">
	<div class="col-12">
		<div class="card mb-4">
			<div class="card-header bg-success text-white">
				<strong><?php echo Vars::safe($meta->breadcrumb->secondary); ?></strong>
			</div>

			<?php
			if (isset($frontend->notify)) {
				if (StringX::end($frontend->notify, 'deleted')) {
					$label = StringX::cropEnd($frontend->notify, '_deleted');
					if (Vars::noData($label)) {
						$label = 'Your record';
					} else {
						$label = ucwords($label);
					}
					$label = AOUtil::cleanTitle($label);
					require(ORIG['PIECE'] . 'notify' . DS . 'deleted.php');
				} elseif (StringX::end($frontend->notify, 'updated')) {
					$label = StringX::cropEnd($frontend->notify, '_updated');
					if (Vars::noData($label)) {
						$label = 'Your record';
					} else {
						$label = ucwords($label);
					}
					$label = AOUtil::cleanTitle($label);
					require(ORIG['PIECE'] . 'notify' . DS . 'updated.php');
				}
			} ?>

		</div>
	</div>
</div>
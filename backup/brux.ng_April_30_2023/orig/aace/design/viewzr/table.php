<div class="row clearfix">
	<div class="col-12">
		<div class="card mb-4">
			<div class="card-header">
				<strong><?php echo Vars::safe($meta->breadcrumb->secondary); ?></strong>
			</div>

			<?php
			if (isset($logic->norecord) && $logic->norecord === true) {
				require(ORIG['TABLE'] . 'norecord.php');
			} elseif (Vars::hasData($frontend->table)) {
				$table = DesignQ::isTable($frontend->table);
				if (Vars::hasData($table)) {
					$content = $content->record;
					require($table);
				}
			} ?>

		</div>
	</div>
</div>
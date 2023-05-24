<form name="oForm" id="oForm" method="POST" enctype="multipart/form-data" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('Sorry, the record was not updated');
		Utilizr::notifySuccess('The record has been successfully updated');
		if (!Utilizr::isLinkStatus('success')) {
			$row = $content->record;
			$formChunk = ORIG['FORM'] . 'chunk' . DS;
			?>
			<div class="row">
				<div class="col-md-6">
					<?php
					require $formChunk . 'practice.php';
					?>
				</div>
			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="d-grid gap-2 d-md-block col-4">
					<button type="submit" class="btn btn-primary btn-lg">UPDATE</button>
				</div>
			</div>
		<?php } ?>
	</div>
</form>
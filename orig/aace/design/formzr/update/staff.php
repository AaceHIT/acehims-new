<form name="oForm" id="oForm" method="POST" enctype="multipart/form-data" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('Sorry, the staff record was not updated');
		Utilizr::notifySuccess('The staff record has been successfully updated');
		if (!Utilizr::isLinkStatus('success')) {
			$row = ObjectX::make();
			$formChunk = ORIG['FORM'] . 'chunk' . DS;
			?>
			<?php
			require $formChunk . 'personal.php';
			require $formChunk . 'personal-staff.php';
			require $formChunk . 'separator.php';
			?>

			<div class="row g-4 clearfix">
				<div class="col-md-6">
					<?php require $formChunk . 'personal-authentication.php'; ?>
				</div>
				<div class="col-md-6">
					<?php require $formChunk . 'personal-photo.php'; ?>
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
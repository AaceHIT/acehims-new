<form name="oForm" id="oForm" method="POST" enctype="multipart/form-data" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('The patient profile was not created');
		Utilizr::notifySuccess('The patient profile has been created successfully');
		if (!Utilizr::isLinkStatus('success')) { ?>

			<?php
			$row = ObjectX::make();
			$formChunk = ORIG['CHUNK'];
			require $formChunk . 'personal.php';
			require $formChunk . 'personal'.DS.'patient.php';
			require $formChunk . 'separator.php';
			?>
			<div class="row">
				<div class="col-md-6">
					<?php
					require $formChunk . 'nok.php';
					require $formChunk . 'separator.php';
					require $formChunk . 'guardian.php';
					?>
				</div>
				<div class="col-md-6">
					<?php require $formChunk . 'photo.php'; ?>
				</div>
			</div>

			<?php require $formChunk . 'separator.php';?>
			<div class="row">
				<div class="col-md-6">
					<?php
					require $formChunk . 'hmo.php';
					?>
				</div>
				<div class="col-md-6">
					<?php require $formChunk . 'additional.php'; ?>
				</div>
			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="d-grid gap-2 d-md-block col-4">
					<button type="submit" class="btn btn-primary btn-lg">CREATE PATIENT</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>
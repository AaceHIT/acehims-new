<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('Your record was not updated');
		Utilizr::notifySuccess('Your record has been updated successfully');
		$row = RecordQ::toObject($logic->sessionUser);
		if (!Utilizr::isLinkStatus('success')) {
			$formChunk = ORIG['FORM'] . 'chunk' . DS;
			require $formChunk . 'nok.php';
			?>
			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="d-grid gap-2 d-md-block col-4">
					<button type="submit" class="btn btn-primary btn-lg">UPDATE NOK</button>
				</div>
			</div>
		<?php } ?>
	</div>
</form>
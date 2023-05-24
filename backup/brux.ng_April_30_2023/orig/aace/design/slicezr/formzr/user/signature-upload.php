<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>" enctype="multipart/form-data">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Signature Upload</h4>
		<?php if (Utilizr::notifySuccess('Your signature has been updated successfully') === false) { ?>

			<div class="row g-4 clearfix mt-2">
				<div class="col-md-2 col-sm-12">
					<div class="form-floating">
						<input type="file" id="signatureFile" name="sign" class="dropify" accept="image/*" data-height="200" data-max-file-size="2M" data-allowed-formats="portrait square landscape" data-allowed-file-extensions="jpg jpeg png" required onchange="imageUploadWithPreview('signatureFile', 'signaturePreview')">
					</div>
				</div>

				<div class="col-md-2 d-flex justify-content-center align-items-center">
					<img src="<?php echo Utilizr::image(AOUtil::sessionUser('sign'), 'SIGN'); ?>" class="me-3" alt="Signature" id="signaturePreview">
				</div>
			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Upload Signature</button>
				</div>
			</div>

		<?php } ?>

	</div>
</form>
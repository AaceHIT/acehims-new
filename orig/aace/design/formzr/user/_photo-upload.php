<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>" enctype="multipart/form-data">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Photo Upload</h4>
		<?php if (Utilizr::notifySuccess('Your photo has been uploaded successfully') === false) { ?>

			<div class="row g-4 clearfix mt-2">
				<div class="col-md-3 col-sm-12">
					<div class="form-floating">
						<input type="file" id="photoFile" name="dp" class="dropify" accept="image/*" data-height="200" data-max-file-size="2M" data-allowed-formats="portrait square" data-allowed-file-extensions="jpg jpeg png" required onchange="imageUploadWithPreview('photoFile', 'photoPreview')">
					</div>
				</div>

				<div class="col-md-2 d-flex justify-content-center align-items-center">
					<img src="<?php echo Utilizr::image(AaceUtil::sessionUser('dp'), 'DP'); ?>" class="me-3" alt="Profile Photo" id="photoPreview">
				</div>
			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Update Photo</button>
				</div>
			</div>

		<?php } ?>

	</div>
</form>
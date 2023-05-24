<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>" enctype="multipart/form-data">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('Your photo was not uploaded');
		Utilizr::notifySuccess('Your photo has been uploaded successfully');
		if (!Utilizr::isLinkStatus('success')) { ?>
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



			<div class="row g-4 clearfix mt-2">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-2">
							<div class="row">
								<div class="col-md-12 text-center">
									<div id="CameraView"></div>
									<input type="hidden" id="cameraPhoto" name="cameraPhoto" value="NONE">
								</div>
								<div class="col-md-12 text-center">
									<button class="btn btn-primary mt-2 mb-2" type="button" onclick="browsePhoto('photoFile', 'CameraView');">Browse Photo</button>
									<button class="btn btn-default mt-2 mb-2 fw-bold">OR</button>
									<button class="btn btn-primary mt-2 mb-2" type="button" onclick="useCamera('photoPreview');">Snap Photo</button>
								</div>
							</div>
						</div>




					</div>
				</div>

				<div class="col-md-12">
					<p class="text-primary">You can select a photo on your device or take a picture using your device camera</p>
				</div>




				<div class="col-md-2">
					<div class="row">
						<div class="col-md-12 text-center">
						</div>

					</div>
				</div>
			</div>






			<div class="row g-4 clearfix mt-5 mb-5">

				<div class="col-md-6 text-center">
					<div class="row">

						<div class="col-md-4">
							<input type="file" id="photoFile" name="dp" class="dropify" accept="image/*" data-height="100" data-max-file-size="2M" data-allowed-formats="portrait square" data-allowed-file-extensions="jpg jpeg png" onchange="imageUploadWithPreview('photoFile', 'photoPreview', 'cameraPhoto')">
						</div>

						<div class="col-md-4">
							<img src="<?php echo Utilizr::image(null, 'DP'); ?>" class="me-3" alt="Profile Photo" id="photoPreview">
						</div>

						<div class="col-md-4 text-left">
									<div id="CameraView"></div>
									<input type="hidden" id="cameraPhoto" name="cameraPhoto" value="NONE">
								</div>

						<div class="col-md-12">
							<button class="btn btn-primary mt-2 mb-2" type="button" onclick="browsePhoto('photoFile', 'CameraView');">Browse Photo</button>
							<button class="btn btn-default mt-2 mb-2 fw-bold">OR</button>
							<button class="btn btn-primary mt-2 mb-2" type="button" onclick="useCamera('photoPreview');">Snap Photo</button>
						</div>

						<div class="col-md-12">
							<button type="submit" class="btn btn-primary btn-lg ao-btn">Upload Photo</button>
						</div>

					</div>
				</div>


			</div>


		<?php } ?>
	</div>
</form>
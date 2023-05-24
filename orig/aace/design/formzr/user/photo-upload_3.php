<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>" enctype="multipart/form-data">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('Your photo was not uploaded');
		Utilizr::notifySuccess('Your photo has been uploaded successfully');
		if (!Utilizr::isLinkStatus('success')) { ?>
			<div class="row g-4 clearfix mt-2">

				<!--
				<div class="col-md-4">
					<div id="cameraArea">
						<div id="cameraPreview">Camera Preview</div>
						<div id="cameraStream">Camera Stream</div>
					</div>

					<div id="uploadArea">
						<div id="uploadStream">
							<input type="file" id="photoFile" name="dp" class="form-control" accept="image/*" data-height="218" data-max-file-size="2M" data-allowed-formats="portrait square" data-allowed-file-extensions="jpg jpeg png" onchange="imageUploadPreview('photoFile', 'photoPreview');">
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<button id="useCameraBtn" class="btn btn-primary mt-2 mb-2" type="button" onclick="photoViaCamera();"> <i class="fa-solid fa-camera me-1"></i> Switch to Camera</button>
					<button id="useGalleryBtn" class="btn btn-primary mt-2 mb-2" type="button" onclick="photoViaGallery();"> <i class="fa-solid fa-image me-1"></i> Switch to Upload</button>
				</div>

				<div class="col-md-4">
					<div class="row">
						<div class="col-md-offset-4 col-md-4">
							<div id="uploadPreview">
							</div>
						</div>
					</div>
				</div> -->




				<div class="col-md-4 text-center">

					<div class="row">
						<div class="col-md-12">
							<div id="photoFilePreview">
								<img src="<?php echo Utilizr::image(null, 'DP'); ?>" class="me-3" alt="Profile Photo" id="photoPreview">
							</div>

							<div id="cameraPreview">
							</div>
						</div>
					</div>

					<div class="row mt-4 align-middle">
						<div class="col-md-4 text-end">
							<button id="useGalleryBtn" class="btn btn-secondary btn-block me-1" type="button" onclick="useGallery();"> <i class="fa-solid fa-image me-1"></i>Browse Photo</button>
							<button id="useCameraBtn" class="btn btn-secondary btn-block ms-1" type="button" onclick="useCamera();"><i class="fa-solid fa-camera me-1"></i>Use Camera</button>
						</div>

						<div class="col-md-4">
							<input type="file" id="photoFile" name="dp" class="form-control" accept="image/*" onchange="photoViaGallery('photoFile', 'photoPreview');">
							<button id="takeShot" class="btn btn-info btn-block w-100 ms-1" type="button" onclick="photoViaCamera();"><i class="fa-solid fa-bolt-lightning me-1"></i>Take Photo</button>
						</div>

						<div class="col-md-4 text-start">
							<button type="submit" class="btn btn-primary ao-btn" id="savePhotoBtn">Save Photo</button>
						</div>
					</div>











				</div>
			<?php } ?>
		</div>
</form>
<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>" enctype="multipart/form-data">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('The staff profile was not created');
		Utilizr::notifySuccess('The staff profile has been created successfully');
		if (!Utilizr::isLinkStatus('success')) { ?>

			<h6 class="mb-4 mt-4 small ao-text-header">Personal Information</h6>
			<div class="row g-4 clearfix">
				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="First Name" name="firstname" required tabindex="1">
						<label>First Name</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Other Name" name="middlename" tabindex="2">
						<label>Other Name</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Last Name" name="lastname" required tabindex="3">
						<label>Last Name</label>
					</div>
				</div>

				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Phone Number" name="phone" required tabindex="4">
						<label>Phone Number</label>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="gender" required tabindex="5">
							<option value="">- Select -</option>
							<?php FormQ::selectOption('GENDER'); ?>
						</select>
						<label>Gender</label>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<div class="form-floating">
						<input type="date" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="birthdate" required tabindex="6">
						<label>Date of Birth</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="email" class="form-control" placeholder="Email Address" name="email" required tabindex="7">
						<label>Email Address</label>
					</div>
				</div>

				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Home Town" name="origin[hometown]" required tabindex="8">
						<label>Home Town</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="nationality" required tabindex="9">
							<option value="">- Select -</option>
							<?php FormQ::selectOption('COUNTRY', 'Nigeria'); ?>
						</select>
						<label>Nationality</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="origin[state]" required tabindex="10">
							<option value=""> - Select - </option>
							<?php FormQ::selectOption('NIGERIAN_STATE'); ?>
						</select>
						<label>State of Origin</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="relationship" required tabindex="11">
							<option value=""> - Select - </option>
							<?php FormQ::selectOption('RELATIONSHIP'); ?>
						</select>
						<label>Relationship Status</label>
					</div>
				</div>

				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="NIN (National ID)" name="nin" tabindex="12">
						<label>NIN (National ID)</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Religion" name="religion" tabindex="13">
						<label>Religion</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Role" name="role" tabindex="14">
						<label>Role</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="department" required tabindex="16">
							<option value=""> - Select - </option>
							<?php FormQ::select(AaceUtil::formOption('DEPARTMENT'), 'PROFESSIONAL'); ?>
						</select>
						<label>Department</label>
					</div>
				</div>

				<div class="col-md-6">
					<div class="form-floating">
						<textarea placeholder="Address" class="form-control" rows="8" name="address"></textarea>
						<label>Address</label>
					</div>
				</div>


				<div class="col-md-2">
					<div class="row">
						<div class="col-md-12">
							<input type="file" id="photoFile" name="dp" class="dropify" accept="image/*" data-height="160" data-max-file-size="2M" data-allowed-formats="portrait square" data-allowed-file-extensions="jpg jpeg png" required onchange="imageUploadWithPreview('photoFile', 'photoPreview')">
						</div>
						<div class="col-md-12 text-center">
							<button class="btn btn-primary mt-2 mb-2" type="button" onclick="browsePhoto('photoFile', 'CameraView');">Browse Photo</button>
						</div>
					</div>
				</div>

				<div class="col-md-2">
					<div class="row">
						<div class="col-md-12 text-center">
							<img src="<?php echo Utilizr::image(null, 'DP'); ?>" class="me-3" alt="Profile Photo" id="photoPreview">
						</div>
						<div class="col-md-12 text-center">
							<button class="btn btn-default mt-2 mb-2 fw-bold">Photo Preview</button>
						</div>
					</div>
				</div>

				<div class="col-md-2">
					<div class="row">
						<div class="col-md-12 text-center">
							<div id="CameraView"></div>
						</div>
						<div class="col-md-12 text-center">
							<button class="btn btn-primary mt-2 mb-2" type="button" onclick="useCamera('photoPreview');">Use Webcam</button>
						</div>
					</div>
				</div>

				<input type="hidden" id="cameraPhoto" name="cameraPhoto" value="NONE">

			</div>



			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Create Staff</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>





<script language="javascript">
	Webcam.set({
		width: 200,
		height: 200,
		image_format: 'jpeg',
		jpeg_quality: 90
	});
	Webcam.attach('#CameraView');

	function useCamera(PreviewID) {
		Webcam.snap(function (data_uri) {
			$("#" + PreviewID).attr("src", data_uri);
			$('#cameraPhoto').val(data_uri);
		});
	}
</script>
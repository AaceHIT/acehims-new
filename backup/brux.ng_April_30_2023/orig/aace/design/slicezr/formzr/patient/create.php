<form name="oForm" id="oForm" method="POST" enctype="multipart/form-data" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Personal Information</h4>

		<div class="row g-4 clearfix">
			<div class="col-md-8 col-sm-12">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Name" name="name">
					<label>Name</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="MID" name="mid" value="<?php echo 'MID' . RandomQ::digit(7); ?>" readonly>
					<label>MID</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Phone Number" name="phone">
					<label>Phone Number</label>
				</div>
			</div>
			<div class="col-md-2 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="gender" required>
						<option value="">- Select -</option>
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
					<label>Gender</label>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="dob">
					<label>Date of Birth</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="email" class="form-control" placeholder="Email Address" name="email">
					<label>Email Address</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Home Town" name="hometown">
					<label>Home Town</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="nationality" required>
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('COUNTRY'), 'Nigeria'); ?>
					</select>
					<label>Nationality</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="state">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('NIGERIAN_STATE')); ?>
					</select>
					<label>State of Origin</label>
				</div>
			</div>


			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="NIN (National ID)" name="nin">
					<label>NIN (National ID)</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Occupation" name="occupation">
					<label>Occupation</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Religion" name="religion">
					<label>Religion</label>
				</div>
			</div>


			<div class="col-md-6">
				<div class="form-floating">
					<textarea placeholder="Address" class="form-control" rows="7" name="address"></textarea>
					<label>Address</label>
				</div>
			</div>

			<div class="col-md-4">
				<div class="form-floating">
					<input type="file" id="photoFile" accept="image/*" class="dropify" name="dp">
				</div>
			</div>
			<div class="col-md-2">
				<div class="form-floating">
					<img id="photoPreview" class="img-fluid img-thumbnail rounded-circle" src="<?php echo AssetQ::path('IMAGE'); ?>/dp.png" alt="Photo Preview" style="max-height:160px;">
				</div>
			</div>


		</div>

	</div>



	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Additional Information</h4>
		<div class="row g-4 clearfix">

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="bloodgroup">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('BLOOD_GROUP')); ?>
					</select>
					<label>Blood Group</label>
				</div>
			</div>
			<div class="col-md-8">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Known Allergies" name="allergies">
					<label>Known Allergies</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="hmo">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('HMO')); ?>
					</select>
					<label>Insurance (HMO)</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="hmoplan">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('HMO_PLAN')); ?>
					</select>
					<label>HMO Package</label>
				</div>
			</div>


			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Insurance Number" name="insuranceid">
					<label>Insurance Number</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="insurancevalidity">
					<label>Insurance Validity</label>
				</div>
			</div>



			<div class="col-md-5 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="nok">
					<label>Next of Kin (NOK)</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="nokphone">
					<label>NOK Phone Number</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="nokrelationship">
						<option value="">- NOK is my... -</option>
						<option value="Father">Father</option>
						<option value="Mother">Mother</option>
						<option value="Child">Child</option>
						<option value="Spouse">Spouse</option>
						<option value="Sibling">Sibling</option>
						<option value="Family">Family</option>
						<option value="Distant Family">Distant Family</option>
						<option value="Friend">Friend</option>
						<option value="Acquaintance">Acquaintance</option>
					</select>
					<label>Relationship with NOK</label>
				</div>
			</div>

			<div class="col-md-5 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Referred By" name="referrer">
					<label>Referred By</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="guardian">
					<label>Guardian Name</label>
				</div>
			</div>
			<div class="col-md-3 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="group">
						<option value="">- Select Group -</option>
						<?php FormQ::select(FormUtil::option('GROUP')); ?>
					</select>
					<label>Patient Group</label>
				</div>
			</div>

		</div>
	</div>

	<div class="card-body">
		<div class="row g-4 clearfix mb-4 mt-2">
			<div class="col-sm-12">
				<button type="submit" class="btn btn-primary btn-lg ao-btn">Create Patient</button>
			</div>
		</div>
	</div>
</form>
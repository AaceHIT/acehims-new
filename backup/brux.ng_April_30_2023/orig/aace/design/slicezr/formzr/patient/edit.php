<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Personal Information</h4>

		<div class="row g-4 clearfix">
			<div class="col-md-8 col-sm-12">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Name" name="name" value="<?php echo Vars::safe($content->firstname) . ' ' . Vars::safe($content->middlename) . ' ' . Vars::safe($content->lastname); ?>">
					<label>Name</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="MID" name="mid" value="<?php echo Vars::safe($content->mid); ?>">
					<label>MID</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Phone Number" name="phone" value="<?php echo Vars::safe($content->phone); ?>">
					<label>Phone Number</label>
				</div>
			</div>
			<div class="col-md-2 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="gender" required>
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('GENDER'), Vars::safe($content->gender)); ?>
					</select>
					<label>Gender</label>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<?php
					if (isset($content->dob)) {
						$dob = TimeX::is('DATE_HTML_FORM', $content->dob);
					} ?>
					<input type="text" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="dob" value="<?php echo Vars::safe($dob); ?>">
					<label>Date of Birth</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="email" class="form-control" placeholder="Email Address" name="email" value="<?php echo Vars::safe($content->email); ?>">
					<label>Email Address</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Home Town" name="hometown" value="<?php echo Vars::safe($content->hometown); ?>">
					<label>Home Town</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="nationality" required>
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('COUNTRY'), Vars::safe($content->nationality)); ?>
					</select>
					<label>Nationality</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="state">
						<option value=""> - - Select - - </option>
						<?php FormQ::select(FormUtil::option('NIGERIAN_STATE'), Vars::safe($content->state)); ?>
					</select>
					<label>State of Origin</label>
				</div>
			</div>


			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="NIN (National ID)" name="nin" value="<?php echo Vars::safe($content->nin); ?>">
					<label>NIN (National ID)</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Occupation" name="occupation" value="<?php echo Vars::safe($content->occupation); ?>">
					<label>Occupation</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Religion" name="religion" value="<?php echo Vars::safe($content->religion); ?>">
					<label>Religion</label>
				</div>
			</div>


			<div class="col-md-5">
				<div class="form-floating">
					<textarea placeholder="Address" class="form-control" rows="5" name="address"><?php echo Vars::safe($content->address); ?></textarea>
					<label>Address</label>
				</div>
			</div>

			<div class="col-md-7">
				<div class="form-floating">
					<!-- <label>Photo</label> -->
					<input type="dp" class="dropify">
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
						<?php FormQ::select(FormUtil::option('BLOOD_GROUP'), Vars::safe($content->bloodgroup)); ?>
					</select>
					<label>Blood Group</label>
				</div>
			</div>
			<div class="col-md-8">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Known Allergies" name="allergies" value="<?php echo Vars::safe($content->religion); ?>">
					<label>Known Allergies</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="hmo">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('HMO'), $content->hmo); ?>
					</select>
					<label>Insurance (HMO)</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="hmoplan">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('HMO_PLAN'), $content->hmoplan); ?>
					</select>
					<label>HMO Package</label>
				</div>
			</div>


			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Insurance Number" name="insuranceid" value="<?php echo Vars::safe($content->insuranceid); ?>">
					<label>Insurance Number</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<?php
					if (isset($content->insurancevalidity)) {
						$insurancevalidity = TimeX::is('DATE_HTML_FORM', $content->insurancevalidity);
					} ?>
					<input type="text" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="insurancevalidity" value="<?php echo Vars::safe($content->insurancevalidity); ?>">
					<label>Insurance Validity</label>
				</div>
			</div>



			<div class="col-md-5 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="nok" value="<?php echo Vars::safe($content->nok); ?>">
					<label>Next of Kin (NOK)</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="nokphone" value="<?php echo Vars::safe($content->nokphone); ?>">
					<label>NOK Phone Number</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="nokrelationship">
						<option value="">- NOK is my... -</option>
						<?php FormQ::select(FormUtil::option('NOK_RELATIONSHIP'), Vars::safe($content->nokrelationship)); ?>
					</select>
					<label>Relationship with NOK</label>
				</div>
			</div>

			<div class="col-md-5 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Referred By" name="referrer" value="<?php echo Vars::safe($content->referrer); ?>">
					<label>Referred By</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="guardian" value="<?php echo Vars::safe($content->guardian); ?>">
					<label>Guardian Name</label>
				</div>
			</div>
			<div class="col-md-3 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="group">
						<option value="">- Select Group -</option>
						<?php FormQ::select(FormUtil::option('GROUP'), Vars::safe($content->group)); ?>
					</select>
					<label>Patient Group</label>
				</div>
			</div>

		</div>
	</div>

	<div class="card-body">
		<div class="row g-4 clearfix mb-4 mt-2">
			<div class="col-sm-12">
				<button type="submit" class="btn btn-primary btn-lg ao-btn">Save Patient</button>
			</div>
		</div>
	</div>
</form>
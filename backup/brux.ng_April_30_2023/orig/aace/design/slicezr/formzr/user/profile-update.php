<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Personal Information</h4>
		<?php
		Utilizr::notifyFailure('Your profile was not updated');
		Utilizr::notifySuccess('Your profile has been updated successfully');
		$row = RecordQ::toObject($logic->sessionUser);
		if (!Utilizr::isLinkStatus('success')) { ?>

			<div class="row g-4 clearfix">
				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="First Name" name="firstname" value="<?php echo Vars::safe($row->firstname); ?>">
						<label>First Name</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Other Name" name="middlename" value="<?php echo Vars::safe($row->middlename); ?>">
						<label>Other Name</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Last Name" name="lastname" value="<?php echo Vars::safe($row->lastname); ?>">
						<label>Last Name</label>
					</div>
				</div>

				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Phone Number" name="phone" value="<?php echo Vars::safe($row->phone); ?>">
						<label>Phone Number</label>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="gender" required>
							<option value="">- Select -</option>
							<?php FormQ::selectOption('GENDER', Vars::safe($row->gender)); ?>
						</select>
						<label>Gender</label>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="form-floating">
						<?php
						if (isset($row->dob)) {
							$dob = TimeX::is('DATE_HTML_FORM', $row->dob);
						} ?>
						<input type="date" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="birthdate" value="<?php echo Vars::safe($dob); ?>">
						<label>Date of Birth</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="email" class="form-control" placeholder="Email Address" name="email" value="<?php echo Vars::safe($row->email); ?>">
						<label>Email Address</label>
					</div>
				</div>

				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Home Town" name="origin[hometown]" value="<?php echo Vars::safe($row->origin, 'hometown'); ?>">
						<label>Home Town</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="nationality" required>
							<option value="">- Select -</option>
							<?php FormQ::selectOption('COUNTRY', Vars::safe($row->nationality)); ?>
						</select>
						<label>Nationality</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="origin[state]">
							<option value=""> - Select - </option>
							<?php FormQ::selectOption('NIGERIAN_STATE', Vars::safe($row->origin, 'state')); ?>
						</select>
						<label>State of Origin</label>
					</div>
				</div>

				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="NIN (National ID)" name="nin" value="<?php echo Vars::safe($row->nin); ?>">
						<label>NIN (National ID)</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Occupation" name="occupation" value="<?php echo Vars::safe($row->occupation); ?>">
						<label>Occupation</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Religion" name="religion" value="<?php echo Vars::safe($row->religion); ?>">
						<label>Religion</label>
					</div>
				</div>

				<div class="col-md-8">
					<div class="form-floating">
						<textarea placeholder="Address" class="form-control" rows="5" name="contact[address]"><?php echo Vars::safe($row->contact, 'address'); ?></textarea>
						<label>Address</label>
					</div>
				</div>

			</div>


			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Update Profile</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>
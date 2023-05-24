<h6 class="mb-3 mt-2 small ao-text-header">Personal Information</h6>
<div class="row g-4 clearfix pb-4">
	<div class="col-md-4 col-sm-12">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="First Name" name="firstname" tabindex="1">
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
			<input type="text" class="form-control" placeholder="Last Name" name="lastname" tabindex="3">
			<label>Last Name</label>
		</div>
	</div>
	<div class="col-md-4 col-sm-6">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Phone Number" name="phone" tabindex="4">
			<label>Phone Number</label>
		</div>
	</div>
	<div class="col-md-2 col-sm-6">
		<div class="form-floating">
			<select class="form-select" name="gender" tabindex="5">
				<option value="">- Select -</option>
				<?php FormQ::selectOption('GENDER'); ?>
			</select>
			<label>Gender</label>
		</div>
	</div>
	<div class="col-md-2 col-sm-6">
		<div class="form-floating">
			<input type="date" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="birthdate" tabindex="6">
			<label>Date of Birth</label>
		</div>
	</div>
	<div class="col-md-4 col-sm-6">
		<div class="form-floating">
			<input type="email" class="form-control" placeholder="Email Address" name="email" tabindex="7">
			<label>Email Address</label>
		</div>
	</div>
	<div class="col-md-3 col-sm-6">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Home Town" name="origin[hometown]" tabindex="8">
			<label>Home Town</label>
		</div>
	</div>
	<div class="col-md-3 col-sm-6">
		<div class="form-floating">
			<select class="form-select" name="nationality" tabindex="9">
				<option value="">- Select -</option>
				<?php FormQ::selectOption('COUNTRY', 'Nigeria'); ?>
			</select>
			<label>Nationality</label>
		</div>
	</div>
	<div class="col-md-3 col-sm-6">
		<div class="form-floating">
			<select class="form-select" name="origin[state]" tabindex="10">
				<option value=""> - Select - </option>
				<?php FormQ::selectOption('NIGERIAN_STATE'); ?>
			</select>
			<label>State of Origin</label>
		</div>
	</div>
	<div class="col-md-3 col-sm-6">
		<div class="form-floating">
			<select class="form-select" name="relationship" tabindex="11">
				<option value=""> - Select - </option>
				<?php FormQ::selectOption('RELATIONSHIP'); ?>
			</select>
			<label>Relationship Status</label>
		</div>
	</div>
</div>
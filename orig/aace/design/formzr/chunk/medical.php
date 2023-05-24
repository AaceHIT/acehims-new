<h6 class="mb-3 mt-2 small ao-text-header">Medical Information</h6>
<div class="row g-4 clearfix pb-4">

	<div class="col-md-12">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Guardian Fullname" name="guardian[person]" value="<?php echo Vars::safe($row->guardian, 'person'); ?>">
			<label>Guardian Fullname</label>
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Phone Number" name="guardian[phone]" value="<?php echo Vars::safe($row->guardian, 'phone'); ?>">
			<label>Phone Number</label>
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-floating">
			<input type="email" class="form-control" placeholder="Email Address" name="guardian[email]" value="<?php echo Vars::safe($row->guardian, 'email'); ?>">
			<label>Email Address </label>
		</div>
	</div>

</div>
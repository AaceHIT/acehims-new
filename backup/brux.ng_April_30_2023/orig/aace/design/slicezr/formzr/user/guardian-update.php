<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Guardian Information</h4>
		<?php
		Utilizr::notifyFailure('Your record was not modified');
		Utilizr::notifySuccess('Your record has been updated successfully');
		$row = RecordQ::toObject($logic->sessionUser);
		if (!Utilizr::isLinkStatus('success')) { ?>

			<div class="row g-4 clearfix">
				<div class="col-md-12 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Guardian Fullname" name="guardian[person]" value="<?php echo Vars::safe($row->guardian, 'person'); ?>">
						<label>Guardian Fullname</label>
					</div>
				</div>

				<div class="col-md-6 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Phone Number" name="guardian[phone]" value="<?php echo Vars::safe($row->guardian, 'phone'); ?>">
						<label>Phone Number</label>
					</div>
				</div>
				<div class="col-md-6 col-sm-6">
					<div class="form-floating">
						<input type="email" class="form-control" placeholder="Email Address" name="guardian[email]" value="<?php echo Vars::safe($row->guardian, 'email'); ?>">
						<label>Email Address </label>
					</div>
				</div>
			</div>


			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Update Guardian</button>
				</div>
			</div>
		<?php } ?>
	</div>
</form>
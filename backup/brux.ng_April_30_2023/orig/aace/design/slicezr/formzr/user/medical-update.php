<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Medical Information</h4>
		<?php
		Utilizr::notifyFailure('Your profile was not modified');
		Utilizr::notifySuccess('Your profile has been updated successfully');
		$row = RecordQ::toObject($logic->sessionUser);
		if (!Utilizr::isLinkStatus('success')) { ?>
			<div class="row g-4 clearfix">

				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<select class="form-select" name="medical[bloodgroup]">
							<option value="">- Select -</option>
							<?php FormQ::selectOption('BLOOD_GROUP', Vars::safe($row->medical, 'bloodgroup')); ?>
						</select>
						<label>Blood Group</label>
					</div>
				</div>
				<div class="col-md-8">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Known Allergies" name="medical[allergy]" value="<?php echo Vars::safe($row->medical, 'allergy'); ?>">
						<label>Known Allergies</label>
					</div>
				</div>

			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Update Medical</button>
				</div>
			</div>
		<?php } ?>
	</div>
</form>
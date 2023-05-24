<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">NOK Information</h4>
		<?php
		Utilizr::notifyFailure('Your record was not updated');
		Utilizr::notifySuccess('Your record has been updated successfully');
		$row = RecordQ::toObject($logic->sessionUser);
		if (!Utilizr::isLinkStatus('success')) { ?>
			<div class="row g-4 clearfix">
				<div class="col-md-12 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="NOK Fullname" name="nok[person]" value="<?php echo Vars::safe($row->nok, 'person'); ?>">
						<label>NOK Fullname</label>
					</div>
				</div>

				<div class="col-md-4 col-sm-12">
					<div class="form-floating">
						<select class="form-select" name="nok[relationship]">
							<option value="">- NOK is my... -</option>
							<?php FormQ::selectOption('PERSON_RELATIONSHIP', Vars::safe($row->nok, 'relationship')); ?>
						</select>
						<label>Relationship with NOK</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Phone Number" name="nok[phone]" value="<?php echo Vars::safe($row->nok, 'phone'); ?>">
						<label>Phone Number</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="email" class="form-control" placeholder="Email Address" name="nok[email]" value="<?php echo Vars::safe($row->nok, 'email'); ?>">
						<label>Email Address </label>
					</div>
				</div>

			</div>


			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Update NOK</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>
<h6 class="mb-3 mt-2 small ao-text-header">Next of KIN Information</h6>
<div class="row g-4 clearfix pb-4">

	<div class="col-md-12">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="NOK Fullname" name="nok[person]" value="<?php echo Vars::safe($row->nok, 'person'); ?>">
			<label>NOK Fullname</label>
		</div>
	</div>

	<div class="col-md-4">
		<div class="form-floating">
			<select class="form-select" name="nok[relationship]">
				<option value="">- NOK is my... -</option>
				<?php FormQ::selectOption('PERSON_RELATIONSHIP', Vars::safe($row->nok, 'relationship')); ?>
			</select>
			<label>Relationship with NOK</label>
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="NOK Phone Number" name="nok[phone]" value="<?php echo Vars::safe($row->nok, 'phone'); ?>">
			<label>NOK Phone Number</label>
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-floating">
			<input type="email" class="form-control" placeholder="NOK Email Address" name="nok[email]" value="<?php echo Vars::safe($row->nok, 'email'); ?>">
			<label>NOK Email Address </label>
		</div>
	</div>

</div>
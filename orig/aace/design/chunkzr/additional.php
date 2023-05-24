<h6 class="mb-3 mt-2 small ao-text-header">Additional Information</h6>
<div class="row g-4 clearfix pb-4">

	<div class="col-md-3">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Patient ID" name="mid" value="<?php echo 'MID' . RandomQ::digit(7); ?>" readonly>
			<label>Patient Id</label>
		</div>
	</div>
	<div class="col-md-3">
		<div class="form-floating">
			<select class="form-select" name="medical[bloodgroup]">
				<option value="">- Select -</option>
				<?php FormQ::selectOption('BLOOD_GROUP'); ?>
			</select>
			<label>Blood Group</label>
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-floating">
			<select class="form-select" id="referrer" name="referrer">
				<option value="">- Select -</option>
				<option value="" selected>No Referrer</option>
				<?php FormQ::select(AaceUtil::formOptionReferrer()); ?>
			</select>
			<label>Referred By</label>
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-floating">
			<textarea class="form-control" placeholder="Known Allergies" name="medical[allergy]"></textarea>
			<label>Known Allergies</label>
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-floating">
			<textarea class="form-control" placeholder="Summary Remark" name="medical[remark]"></textarea>
			<label>Summary Remark</label>
		</div>
	</div>

</div>
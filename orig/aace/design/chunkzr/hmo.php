<h6 class="mb-3 mt-2 small ao-text-header">HMO Information</h6>
<div class="row g-4 clearfix pb-4">

	<div class="col-md-6">
		<div class="form-floating">
			<select class="form-select" name="hmo[firm]">
				<option value="">- Select -</option>
				<?php FormQ::select(AaceUtil::formOptionHMO()); ?>
			</select>
			<label>HMO Firm</label>
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-floating">
			<select class="form-select" name="hmo[coverage]">
				<option value="">- Select -</option>
				<?php FormQ::select(AaceUtil::formOption('HMO_PLAN')); ?>
			</select>
			<label>HMO Coverage</label>
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Insurance Number" name="hmo[insuranceid]">
			<label>Insurance Number</label>
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-floating">
			<input type="date" class="form-control" placeholder="Insurance Validity" aria-label="Start" data-provide="datepicker" name="hmo[validity]">
			<label>Insurance Validity</label>
		</div>
	</div>

</div>
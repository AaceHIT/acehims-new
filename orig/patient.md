
			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="hmo">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('HMO'), $userData->hmo); ?>
					</select>
					<label>Insurance (HMO)</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<select class="form-select" name="hmoplan">
						<option value="">- Select -</option>
						<?php FormQ::select(FormUtil::option('HMO_PLAN'), $userData->hmoplan); ?>
					</select>
					<label>HMO Package</label>
				</div>
			</div>


			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Insurance Number" name="insuranceid" value="<?php echo Vars::safe($userData->insuranceid); ?>">
					<label>Insurance Number</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<?php
					if (isset($userData->insurancevalidity)) {
						$insurancevalidity = TimeX::is('DATE_HTML_FORM', $userData->insurancevalidity);
					} ?>
					<input type="text" class="form-control" placeholder="Date of Birth" aria-label="Start" data-provide="datepicker" name="insurancevalidity" value="<?php echo Vars::safe($userData->insurancevalidity); ?>">
					<label>Insurance Validity</label>
				</div>
			</div>


			<div class="col-md-5 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Referred By" name="referrer" value="<?php echo Vars::safe($userData->referrer); ?>">
					<label>Referred By</label>
				</div>
			</div>


			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Next of Kin" name="guardian" value="<?php echo Vars::safe($userData->guardian); ?>">
					<label>Guardian Name</label>
				</div>
			</div>


			<div class="col-md-3 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="group">
						<option value="">- Select Group -</option>
						<?php FormQ::select(FormUtil::option('GROUP'), Vars::safe($userData->group)); ?>
					</select>
					<label>Patient Group</label>
				</div>
			</div>

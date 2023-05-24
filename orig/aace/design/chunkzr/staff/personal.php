<div class="row g-4 clearfix pb-4">
	<div class="col-md-6">
		<div class="form-floating">
			<textarea placeholder="Address" class="form-control" rows="5" name="contact[address]" tabindex="12"></textarea>
			<label>Address</label>
		</div>
	</div>
	<div class="col-md-6">
		<div class="row g-4">
			<div class="col-md-6 col-sm-12">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="NIN (National ID)" name="nin" tabindex="13">
					<label>NIN (National ID)</label>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Religion" name="religion" tabindex="14">
					<label>Religion</label>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="practice" tabindex="15">
						<option value=""> - Select - </option>
						<?php FormQ::select(AaceUtil::formOptionPractice()); ?>
					</select>
					<label>Practice</label>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="form-floating">
					<select class="form-select" name="role" tabindex="16">
						<option value=""> - Select - </option>
						<?php FormQ::select(AaceUtil::formOptionRole()); ?>
					</select>
					<label>Role</label>
				</div>
			</div>
		</div>
	</div>
</div>
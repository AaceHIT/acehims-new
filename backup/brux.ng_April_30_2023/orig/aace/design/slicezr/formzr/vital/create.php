<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Vital Information</h4>

		<div class="row g-4 clearfix">
			<div class="col-md-8 col-sm-12">
				<div class="form-floating">
					<input type="Date" class="form-control" placeholder="Date" name="date" value="<?php echo TimeX::is('SQL_DATE'); ?>">
					<label>Date</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="time" class="form-control" placeholder="time" name="time" value="<?php echo TimeX::is('SQL_TIME'); ?>">
					<label>Time</label>
				</div>
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Pulse" name="pulse">
					<label>Pulse Rate (/min)</label>
				</div>
			</div>
			<div class="col-md-2 col-sm-6">
				<div class="form-floating">
				<input type="text" class="form-control" placeholder="BP" name="bp">
					<label>Blood Pressure (mm/Hg)</label>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Temperature" aria-label="Start" name="temperature">
					<label>temperature (C)</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Respiration" name="respiration">
					<label>Respiration (/min)</label>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Height" name="height">
					<label>Height (CM)</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="weight" name="weight">
					<label>Weight (Kg)</label>
				</div>
			</div>






			<div class="col-md-4 col-sm-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Others" name="others">
					<label>Others</label>
				</div>
			</div>



			<div class="col-md-5">
				<div class="form-floating">
					<textarea placeholder="Nurse Note" class="form-control" rows="5" name="nursenote"></textarea>
					<label>Nurse Note</label>
				</div>
			</div>



		</div>

	</div>


	<div class="card-body">
		<div class="row g-4 clearfix mb-4 mt-2">
			<div class="col-sm-12">
				<button type="submit" class="btn btn-primary btn-lg ao-btn">Record Vitals</button>
			</div>
		</div>
	</div>
</form>
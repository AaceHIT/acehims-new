<form name="oForm" id="oForm" method="POST" enctype="multipart/form-data" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<?php
		Utilizr::notifyFailure('The patient profile was not created');
		Utilizr::notifySuccess('The patient profile has been created successfully');
		if (!Utilizr::isLinkStatus('success')) {
			$patient = [];
			$filter = DataQ::isGet(['patient']);
			if (DataQ::isRowColumn($filter, 'patient')) {
				$tuid = DataQ::stackOne($filter, 'patient');
				$patient = PatientModel::static()->oFindByBIND($tuid);
				if ($patient !== 'NO_RESULT' && Vars::isNotEmptyArray($patient)) {
					$patient = RecordQ::read($patient);
					$patient = RecordQ::toObject($patient);
					$patient->fullname = RecordQ::name($patient->firstname, $patient->lastname, $patient->middlename);
				}
			}
			?>

			<h6 class="mb-3 mt-2 small ao-text-header">Schedule Appointment</h6>
			<div class="row g-4 clearfix pb-4">
				<div class="col-md-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Patient Information" name="patientinfo" value="<?php Vars::reveal($patient, 'fullname'); ?> <?php Vars::reveal($patient, 'mid'); ?>" readonly>
						<input type="hidden" class="form-control" name="patient" value="<?php Vars::reveal($patient, 'bind'); ?>">
						<label>Patient</label>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-floating">
						<select class="form-select" id="referrer" name="referrer" tabindex="9">
							<option value="">- Select -</option>
							<option value="" selected>No Referrer</option>
							<?php FormQ::select(AaceUtil::formOptionReferrer()); ?>
						</select>
						<label>Referred By</label>
					</div>
				</div>


				<div class="col-md-4">
					<div class="form-floating">
						<select class="form-select" name="practice">
							<option value=""> - Select - </option>
							<?php FormQ::select(AaceUtil::formOptionPractice()); ?>
						</select>
						<label>Practice</label>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-floating">
						<select class="form-select" name="appointee">
							<option value="">- Select -</option>
							<?php FormQ::select(AaceUtil::formOptionDoctor()); ?>
						</select>
						<label>Doctor</label>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-floating">
						<input type="datetime-local" class="form-control" name="schedule" value="<?php echo TimeX::is('DATETIME_HTML_FORM', '+10 mins'); ?>">
						<label>Schedule</label>
					</div>
				</div>

				<div class="col-md-6">
					<div class="form-floating">
						<textarea class="form-control" placeholder="Complaint" name="complaint"></textarea>
						<label>Complaint</label>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-floating">
						<textarea class="form-control" placeholder="Summary Remark" name="remark"></textarea>
						<label>Summary Remark</label>
					</div>
				</div>

			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="d-grid gap-2 d-md-block col-4">
					<button type="submit" class="btn btn-primary btn-lg">SCHEDULE APPOINTMENT</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>
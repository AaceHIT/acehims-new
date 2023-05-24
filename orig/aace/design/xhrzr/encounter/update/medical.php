<?php $patient = $content->record;
if (!Utilizr::isNoResultAlert($patient)) { ?>
	<form name="oForm" id="oFormMedical" method="POST" action="/encounter/patient-medical-save?patient=<?php Vars::show($patient->puid); ?>">
		<div class="row g-4 clearfix pb-4">
			<div class="col-md-12">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Known Allergies" name="medical[allergy]"><?php Vars::show($patient->medical, 'allergy'); ?></textarea>
					<label>Known Allergies</label>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Warnings" name="medical[warning]"><?php Vars::show($patient->medical, 'warning'); ?></textarea>
					<label>Warnings</label>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Social History" name="medical[social]"><?php Vars::show($patient->medical, 'social'); ?></textarea>
					<label>Social History</label>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Family History" name="medical[family]"><?php Vars::show($patient->medical, 'family'); ?></textarea>
					<label>Family History</label>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Personal History" name="medical[personal]"><?php Vars::show($patient->medical, 'personal'); ?></textarea>
					<label>Personal History</label>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Past History" name="medical[past]"><?php Vars::show($patient->medical, 'past'); ?></textarea>
					<label>Past History</label>
				</div>
			</div>

			<div class="col-md-12">
				<div class="d-grid gap-2 d-md-block">
					<button type="button" class="btn btn-primary" onclick="submitContentXHR('oFormMedical', 'medicalArea', '/encounter/patient-medical-record?patient=<?php Vars::reveal($patient->tuid); ?>');"> <i class="fa-solid fa-floppy-disk"></i> Save Record</button>
					<button type="button" class="btn btn-secondary" onclick="loadContentXHR('medicalArea', '/encounter/patient-medical-record?patient=<?php Vars::show($patient->tuid); ?>');"> <i class="fa-solid fa-chevron-left"></i> Cancel</button>
				</div>
			</div>
		</div>
	</form>
<?php } ?>
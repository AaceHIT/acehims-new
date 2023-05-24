<form name="oForm" id="oFormCreateVital" method="POST" action="/encounter/patient-vital-create">
	<div class="row g-4 clearfix pb-4">
		<div class="col-md-12">
			<div class="form-floating">
				<label>Known Allergies</label>
			</div>
		</div>

		<div class="col-md-12">
			<div class="d-grid gap-2 d-md-block col-4">
				<button type="button" class="btn btn-primary" onclick="submitContentXHR('oFormCreateVital', 'vitalArea', '/encounter/patient-vital-record?encounter=<?php Vars::reveal($patient->puid); ?>');">Save Record</button>
				<button type="button" class="btn btn-danger" onclick="loadContentXHR('medicalArea', '/encounter/patient-medical-record?patient=<?php Vars::show($patient->puid); ?>');">Cancel</button>
			</div>
		</div>

	</div>
</form>
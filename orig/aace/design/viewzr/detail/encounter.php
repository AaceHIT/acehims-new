<?php
$encounter = $content->record;
// Vars::trace($encounter);
// $patient = ObjectX::make();
// $patientBIND = Vars::safe($row, 'patient');
// if (Vars::hasData($patientBIND)) {
// 	$patient = PatientModel::static()->oFindByBIND($row->patient);
// }
// if (Vars::isNotEmptyArray($patient)) {
// 	$patient = ArrayX::toObj($patient);
// }
$chunk = ORIG['CHUNK'];
// $encounterChunk = $chunk . 'encounter' . DS;
// $encounterPatientChunk = $encounterChunk . 'patient' . DS;
?>
<div class="row clearfix">
	<div class="col-md-3">
		<div class="card mb-4">
			<div class="card-header"><strong>Patient Information</strong></div>
			<div class="card-body" id="patientArea">
			</div>
		</div>

		<?php require $chunk . 'separator.php'; ?>

		<div class="card mb-4">
			<div class="card-header"><strong>Medical Information</strong></div>
			<div class="card-body" id="medicalArea">
			</div>
		</div>
	</div>

	<div class="col-md-2">
		<div class="card mb-4">
			<div class="card-header"><strong>Folder</strong></div>
			<div class="card-body">
				<div class="list-group">
					<a href="#" class="list-group-item list-group-item-action active" onclick="loadFolderContentXHR('/encounter/practice?encounter=<?php Vars::reveal($encounter->tuid); ?>');">Department/Practice</a>
					<a href="#" class="list-group-item list-group-item-action" onclick="loadFolderContentXHR('/encounter/vital?encounter=<?php Vars::reveal($encounter->tuid); ?>');">Patient Vitals</a>
				</div>
			</div>
		</div>
	</div>

	<div class="col-md-7">
	<div class="card mb-4" id="folderArea">

	</div>
</div>
	<!-- <div class="col-md-9">
		<div class="card">
			<div class="card-body">
				<ul class="nav nav-tabs nav-tabs-new">
					<li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#vitals"> VITALS</a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Diagnosis">Diagnosis</a></li>
				</ul>
			</div>
		</div>

		<div class="tab-content pt-4 p-0">
			<div class="tab-pane active" id="vitals">
				<div class="card">
					<div class="card-header"><strong><i class="fa-solid fa-heart-pulse"></i> Patient Vitals</strong></div>
					<div class="card-body" id="vitalArea">
					</div>
				</div>
			</div>
			<div class="tab-pane" id="Diagnosis">
				<div class="card">
					<div class="card-body">
						<h6>Diagnosis Data</h6>
					</div>
				</div>
			</div>
		</div>
	</div> -->
</div>

<script>
	$(document).ready(function () {
		loadContentXHR('patientArea', '/encounter/patient-record?patient=<?php Vars::reveal($encounter->patient); ?>');
		loadContentXHR('medicalArea', '/encounter/patient-medical-record?patient=<?php Vars::reveal($encounter->patient); ?>');
		loadContentXHR('folderArea', '/encounter/practice?encounter=<?php Vars::reveal($encounter->tuid); ?>');
	});
</script>
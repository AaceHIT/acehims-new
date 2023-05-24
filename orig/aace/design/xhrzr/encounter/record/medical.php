<?php $patient = $content->record;
if (!Utilizr::isNoResultAlert($patient)) { ?>
	<table class="table table-hover table-borderless">
		<tbody>
			<tr>
				<th class="text-nowrap col-md-4"> Known Allergies</th>
				<td><?php Vars::reveal($patient->medical, 'allergy'); ?></td>
			</tr>
			<tr>
				<th class="text-nowrap"> Warnings </th>
				<td><?php Vars::reveal($patient->medical, 'warning'); ?></td>
			</tr>
			<tr>
				<th class="text-nowrap"> Social History </th>
				<td><?php Vars::reveal($patient->medical, 'social'); ?></td>
			</tr>
			<tr>
				<th class="text-nowrap"> Family History </th>
				<td><?php Vars::reveal($patient->medical, 'family'); ?></td>
			</tr>
			<tr>
				<th class="text-nowrap"> Personal History </th>
				<td><?php Vars::reveal($patient->medical, 'personal'); ?></td>
			</tr>
			<tr>
				<th class="text-nowrap"> Past Medical History </th>
				<td><?php Vars::reveal($patient->medical, 'past'); ?></td>
			</tr>
		</tbody>
	</table>
	<div class="row g-4 clearfix mb-2 mt-2 text-end">
		<div class="col-md-12">
			<a href="#" class="btn btn-outline-primary" onclick="loadContentXHR('medicalArea', '/encounter/patient-medical-update?patient=<?php Vars::reveal($patient->tuid); ?>');"><i class="fa-regular fa-pen-to-square"></i> Update Record</a>
		</div>
	</div>
<?php } ?>
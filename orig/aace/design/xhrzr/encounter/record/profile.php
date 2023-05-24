<?php
$patient = $content->record;
if (!Utilizr::isNoResultAlert($patient)) {
	$patientName = RecordQ::name($patient->firstname, $patient->lastname, $patient->middlename);
	$patientBirthDate = TimeX::is('BIRTHDATE', strtotime($patient->dob));
	?>

	<div class="row text-center">
		<div class="col-md-12">
			<img src="<?php echo Utilizr::image($patient->dp, 'DP'); ?>"" class=" mb-2 mt-3 img-fluid img-thumbnail rounded-circle ao-photo-medium" style="max-height:140px;">
			<h4 class="mb-0">
				<strong><?php Vars::revealOnRow($patientName); ?></strong>
			</h4>
			<span><?php Vars::reveal($patient, 'mid'); ?></span>
		</div>
	</div>

	<div class="row mt-4">
		<table class="table table-hover table-borderless">
			<tbody>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> NIN </th>
					<td><?php Vars::reveal($patient->nin); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Gender </th>
					<td><?php Vars::output(RecordQ::gender($patient->gender)); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Date of Birth </th>
					<td><?php Vars::revealOnRow($patientBirthDate); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Phone Number </th>
					<td><?php Vars::reveal($patient->phone); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Email Address </th>
					<td><?php Vars::reveal($patient->email); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Religion </th>
					<td><?php echo nl2br(Vars::safe($patient->religion)); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Relationship Status </th>
					<td><?php Vars::reveal($patient->relationship); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Occupation </th>
					<td><?php echo nl2br(Vars::safe($patient->occupation)); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Nationality </th>
					<td><?php Vars::reveal($patient->nationality); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Home Town </th>
					<td><?php Vars::reveal($patient->origin, 'hometown'); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> State of Origin </th>
					<td><?php Vars::reveal($patient->origin, 'state'); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Address </th>
					<td>
						<?php
						$address = Vars::safe($patient->contact, 'address');
						echo nl2br($address);
						?>
					</td>
				</tr>
				<tr>
					<th class="text-nowrap text-end me-2 col-md-4"> Referred By </th>
					<td>
						<?php
						$referrerName = AaceUtil::userRecordName($patient->referrer);
						Vars::reveal($referrerName);
						?>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

<?php } ?>
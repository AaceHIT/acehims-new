<div class="table-responsive">
	<table class="table table-sm table-hover center-aligned-table align-middle">

		<thead class="table-dark">
			<tr>
				<th colspan="1" class="ps-2 pe-2">S/N</th>
				<th colspan="1" class="col-md-3">Patient</th>
				<th colspan="1" class="w-auto">Patient ID</th>
				<th colspan="1" class="w-auto">Gender</th>
				<th colspan="1" class="col-md-2">Doctor</th>
				<th colspan="1" class="w-auto">Practice</th>
				<th colspan="1" class="w-auto">Schedule</th>
				<th colspan="1" class="col-md-1">Remark</th>
				<th colspan="1" class="w-auto">Status</th>
				<th colspan="1" class="col-md-1 text-center">Manage</th>
			</tr>
		</thead>

		<tbody>
			<?php
			foreach ($content as $row) {
				$patientDP = '';
				$patient = PatientModel::static()->oFindByBIND($row->patient, ['firstname', 'lastname', 'middlename', 'mid', 'dp', 'tuid', 'gender']);
				if (Vars::isNotEmptyArray($patient)) {
					$patientDP = $patient['dp'];
					unset($patient['dp']);
					$patientMID = $patient['mid'];
					unset($patient['mid']);
					$patientTUID = $patient['tuid'];
					unset($patient['tuid']);
					$patientGender = RecordQ::gender($patient['gender']);
					unset($patient['gender']);
					$patientName = RecordQ::name($patient);
				}

				$appointee = StaffModel::static()->oFindByBIND($row->appointee, ['firstname', 'lastname', 'middlename']);
				if (Vars::isNotEmptyArray($appointee)) {
					$appointee = RecordQ::name($appointee);
				} else {
					$appointee = null;
				}
				?>
			<tbody>
				<tr>
					<td class="ps-3 pe-3"><?php echo Utilizr::counter(); ?></td>
					<td>
						<img class="img-fluid img-thumbnail rounded-circle ao-photo-list me-3" src="<?php echo Utilizr::image($patientDP, 'DP'); ?>">
						<?php Vars::reveal($patientName); $patientName = null;?>
					</td>
					<td><?php Vars::reveal($patientMID); ?></td>
					<td><?php Vars::reveal($patientGender); ?></td>
					<td><?php Vars::reveal($appointee); ?></td>
					<td><?php $practice = AaceUtil::staffPractice($row->practice); Vars::reveal($practice); ?></td>
					<td><?php $schedule = TimeX::is('DATE', $row->schedule).' | '.TimeX::is('TIME', $row->schedule); Vars::reveal($schedule); ?></td>
					<td><?php Vars::reveal($row->remark); ?></td>
					<td><?php Vars::reveal($row->status); ?></td>
					<?php $contact = null; ?>
					<td class="text-end">
						<?php
						if ($row->status !== 'ENCOUNTERED') {
							if (AaceUtil::sessionUserHasNurse()) { ?>
								<a href="<?php AaceUtil::linkTo('encounter/check-in', ['appointment' => $row->tuid, 'patient' => $patientTUID]); ?>" class="btn btn-outline-warning btn-sm"><i class="fa-solid fa-clipboard-check"></i> Check In</a>
							<?php }
						} else { ?>
							<a href="<?php AaceUtil::linkTo('encounter/', ['appointment' => $row->tuid]); ?>" class="btn btn-outline-warning btn-sm"><i class="fa-solid fa-clipboard-check"></i> Encounter</a>
						<?php } ?>
						<!-- <a href="<?php AaceUtil::linkTo('appointment/detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> Detail</a> -->
						<?php if (AaceUtil::sessionUserHasReception() || AaceUtil::sessionUserHasAdmin()) { ?>
							<!-- <a href="<?php AaceUtil::linkTo('appointment/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a> -->
						<?php } ?>

						<?php if (AaceUtil::sessionUserHasAdmin()) { ?>
							<!-- <a href="<?php AaceUtil::linkTo('appointment/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a> -->
						<?php } ?>
					</td>
				</tr>
			<?php }
			$patient = null;
			?>
		</tbody>

	</table>
</div>
<div class="table-responsive">
	<table class="table table-hover table-md center-aligned-table align-middle">
		<thead class="table-dark">
			<tr>
				<th class="w-auto">S/N</th>
				<th class="w-auto">Patient</th>
				<th class="w-auto">Patient ID</th>
				<th class="col-md-1">Doctor</th>
				<th class="w-auto">Practice</th>
				<th class="w-auto">Complaint</th>
				<th class="col-md-1">Date</th>
				<th class="col-md-1">Time</th>
				<th class="w-auto">Status</th>
				<th class="w-auto text-center">Manage</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach ($content as $row) {
				$patient = PatientModel::static()->oFindByBIND($row->patient, ['firstname', 'lastname', 'middlename', 'mid', 'dp', 'tuid', 'gender']);
				$patientName = RecordQ::name($patient);
				$consultant = StaffModel::static()->oFindByBIND($row->consultant, ['firstname', 'lastname', 'middlename']);
				$consultantName = RecordQ::name($consultant);
				$medicalPractice = AaceUtil::staffPractice($row->practice);
				$encounterDate = TimeX::is('DATE', $row->created);
				$encounterTime = TimeX::is('TIME', $row->created);
				?>
				<tr>
					<td class="ps-3 pe-3"><?php echo Utilizr::counter(); ?></td>
					<td>
						<img class="img-fluid img-thumbnail rounded-circle ao-photo-list me-3" src="<?php echo Utilizr::image(DataQ::stackOne($patient, 'dp'), 'DP'); ?>">
						<?php Vars::revealOnRow($patientName); ?>
					</td>
					<td><?php Vars::reveal($patient, 'mid'); ?></td>
					<td><?php Vars::revealOnRow($consultantName); ?></td>
					<td><?php Vars::revealOnRow($medicalPractice); ?></td>
					<td><?php Vars::reveal($row->complaint); ?></td>
					<td><?php Vars::revealOnRow($encounterDate); ?></td>
					<td><?php Vars::revealOnRow($encounterTime); ?></td>
					<td><?php Vars::reveal($row->status); ?></td>
					<?php $contact = null; ?>
					<td class="text-center">
						<a href="<?php AaceUtil::linkTo('encounter/detail', ['id' => $row->puid]); ?>" class="btn btn-warning btn-sm"><i class="fa-solid fa-clipboard-check"></i> Encounter</a>
					</td>
				</tr>
			<?php }
			$patient = null;
			?>
		</tbody>
	</table>
</div>
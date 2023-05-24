<div class="table-responsive">
	<table class="table table-sm table-hover center-aligned-table align-middle">
		<thead class="table-dark">
			<tr>
				<th colspan="1" class="ps-2 pe-2">S/N</th>
				<th colspan="1" class="w-auto">Fullname</th>
				<th colspan="1" class="w-auto">Patient ID</th>
				<th colspan="1" class="w-auto">Blood Group</th>
				<th colspan="1" class="w-auto">Department</th>
				<th colspan="1" class="w-auto">Gender</th>
				<th colspan="1" class="w-auto">Phone Number</th>
				<th colspan="1" class="col-md-1 text-center">Appointment</th>
				<th colspan="1" class="col-md-2 text-center">Manage</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach ($content as $row) {
				$row->fullname = RecordQ::name($row->firstname, $row->lastname, $row->middlename);
				$row->gender = RecordQ::gender($row->gender);
				?>
				<tr>
					<td class="ps-3 pe-3"><?php echo Utilizr::counter(); ?></td>
					<td>
						<img class="img-fluid img-thumbnail rounded-circle ao-photo-list me-3" src="<?php echo Utilizr::image($row->dp, 'DP'); ?>">
						<strong><?php Vars::reveal($row->fullname); ?></strong>
					</td>
					<td><?php Vars::reveal($row->mid); ?></td>
					<td><?php Vars::reveal($row->medical, 'bloodgroup'); ?></td>
					<td><?php Vars::reveal($row->patient); ?></td>
					<td><?php Vars::reveal($row->gender); ?></td>
					<td><?php Vars::reveal($row->phone); ?></td>
					<td class="text-center">
						<?php if ($row->patient === 'IPD') { ?>
							<a href="<?php AaceUtil::linkTo('patient/in-treatment', ['patient' => $row->tuid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-file-prescription"></i> Treatment</a>
						<?php } else { ?>
							<a href="<?php AaceUtil::linkTo('appointment/schedule', ['patient' => $row->tuid]); ?>" class="btn btn-outline-warning btn-sm"><i class="fa-solid fa-calendar-plus"></i> Schedule</a>
						<?php } ?>
						<a href="<?php AaceUtil::linkTo('appointment/list', ['patient' => $row->tuid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-calendar-days"></i> Appointment</a>
					</td>
					<td class="text-end">
						<!-- <a href="<?php AaceUtil::linkTo('patient/record', ['patient' => $row->tuid]); ?>" class="btn btn-outline-dark btn-sm"><i class="fa-solid fa-briefcase-medical"></i> Medical</a> -->
						<a href="<?php AaceUtil::linkTo('patient/detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> Profile</a>
						<!-- <a href="<?php AaceUtil::linkTo('patient/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a> -->
						<!-- <a href="<?php AaceUtil::linkTo('patient/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a> -->
					</td>
				</tr>
				<?php
			} ?>
		</tbody>
	</table>
</div>
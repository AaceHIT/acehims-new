<div class="table-responsive">
	<table class="table table-hover center-aligned-table align-middle">
		<thead class="table-dark">
			<tr>
				<th colspan="1" class="ps-3 pe-3">S/N</th>
				<th colspan="1" class="col-md-3">Fullname</th>
				<th colspan="1" class="w-auto">Practice</th>
				<th colspan="1" class="w-auto">Role</th>
				<th colspan="1" class="w-auto">Religion</th>
				<th colspan="1" class="w-auto">Gender</th>
				<th colspan="1" class="w-auto">Phone Number</th>
				<th colspan="1" class="col-md-2 text-center">Manage</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach ($content as $row) {
				$row->fullname = RecordQ::name($row->firstname, '<strong>' . $row->lastname . '</strong>', $row->middlename);
				$row->sex = RecordQ::gender($row->gender);
				if (Vars::hasData($row->contact) && Vars::isJSON($row->contact)) {
					$contact = $row->contact;
				} ?>
				<tr>
					<td class="ps-3 pe-3"><?php echo Utilizr::counter(); ?></td>
					<td>
						<img class="img-fluid img-thumbnail rounded-circle ao-photo-list me-3" src="<?php echo Utilizr::image($row->dp, 'DP'); ?>">
						<?php Vars::reveal($row->fullname); ?>
					</td>
					<td><?php echo AaceUtil::staffPractice($row->practice); ?></td>
					<td><?php echo AaceUtil::staffRole($row->role, 'FIRST'); ?></td>
					<td><?php Vars::reveal($row->religion); ?></td>
					<td><?php Vars::reveal($row->sex); ?></td>
					<td><?php Vars::reveal($row->phone); ?></td>
					<?php $contact = null; ?>
					<td class="text-center">
						<a href="<?php AaceUtil::linkTo('staff/detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> View</a>
						<!-- <a href="<?php AaceUtil::linkTo('staff/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a> -->
						<!-- <a href="<?php AaceUtil::linkTo('staff/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a> -->
					</td>
				</tr>
			<?php } ?>
		</tbody>
	</table>
</div>
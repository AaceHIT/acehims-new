<div class="table-responsive">
	<table class="table table-hover center-aligned-table align-middle">

		<thead class="table-dark">
			<tr>
				<th colspan="1">S/N</th>
				<th colspan="1" class="col-md-4 text-left">FULLNAME</th>
				<th colspan="1" class="col-md-1">ROLE</th>
				<th colspan="1" class="col-md-1">RELIGION</th>
				<th colspan="1" class="col-md-1">BIRTH DATE</th>
				<th colspan="1" class="col-md-1">GENDER</th>
				<th colspan="1" class="col-md-1">PHONE NUMBER</th>
				<th colspan="1" class="col-md-2">EMAIL ADDRESS</th>
				<th colspan="3" class="col-md-1 text-center">MANAGE</th>
			</tr>
		</thead>

		<tbody>
			<?php
			$SN = 1;
			foreach ($content as $row) {
				$row->fullname = RecordQ::name($row->firstname, '<strong>' . $row->lastname . '</strong>', $row->middlename);
				$row->sex = RecordQ::gender($row->gender);
				if (Vars::hasData($row->contact) && Vars::isJSON($row->contact)) {
					$contact = $row->contact;
				} ?>
				<tr>
					<td><?php echo $SN++; ?></td>
					<td>
						<img class="img-fluid img-thumbnail rounded-circle ao-photo-list me-3" src="<?php echo Utilizr::image($row->dp, 'DP'); ?>">
						<?php Vars::reveal($row->fullname); ?>
					</td>
					<td><?php Vars::reveal($row->role); ?></td>
					<td><?php Vars::reveal($row->religion); ?></td>
					<td><?php Vars::reveal($row->dob); ?></td>
					<td><?php Vars::reveal($row->sex); ?></td>
					<td><?php Vars::reveal($row->phone); ?></td>
					<td><?php Vars::reveal($row->email); ?></td>
					<?php $contact = null; ?>
					<td><a href="<?php AaceUtil::linkTo('staff/detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> View</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('staff/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('staff/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a></td>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</div>
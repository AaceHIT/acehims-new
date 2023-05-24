<div class="table-responsive">
	<table class="table table-hover center-aligned-table align-middle">

		<thead class="table-dark">
			<tr>
				<th colspan="1">S/N</th>
				<th colspan="1" class="col-md-5 text-left">Family</th>
				<th colspan="1" class="col-md-1">Acronym</th>
				<th colspan="1" class="col-md-1">Code</th>
				<th colspan="1" class="col-md-1">Phone</th>
				<th colspan="1" class="col-md-2">Email</th>
				<th colspan="3" class="col-md-1 text-center">MANAGE</th>
			</tr>
		</thead>

		<tbody>
			<?php
			$SN = 1;
			foreach ($content as $row) {
				if (Vars::hasData($row->contact) && Vars::isJSON($row->contact)) {
					$contact = $row->contact;
				} ?>
				<tr>
					<td><?php echo $SN++; ?></td>
					<td><?php echo Vars::safe($row->title); ?></td>
					<td><?php echo Vars::safe($row->acronym); ?></td>
					<td><?php echo Vars::safe($row->code); ?></td>
					<td><?php echo Vars::safe($row->phone); ?></td>
					<td><?php echo Vars::safe($row->email); ?></td>
					<td><a href="<?php AaceUtil::linkTo('family/detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> View</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('family/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('family/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a></td>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</div>
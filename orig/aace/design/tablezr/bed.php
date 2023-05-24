<div class="table-responsive">
	<table class="table table-hover center-aligned-table align-middle">

		<thead class="table-dark">
			<tr>
				<th colspan="1">S/N</th>
				<th colspan="1" class="col-md-5">Bed No</th>
				<th colspan="1" class="col-md-2">Code</th>
				<th colspan="1" class="col-md-2">Ward</th>
				<th colspan="1" class="col-md-2">Allotment</th>
				<th colspan="1" class="col-md-1 text-center">Status</th>
				<th colspan="3" class="col-md-2 text-center">MANAGE</th>
			</tr>
		</thead>

		<tbody>
			<?php
			$SN = 1;
			foreach ($content as $row) { ?>
				<tr>
					<td><?php echo $SN++; ?></td>
					<td><?php echo Vars::safe($row->title); ?></td>
					<td><?php echo Vars::safe($row->code); ?></td>
					<td>
						<?php
						$ward = WardModel::static()->oFindByBIND($row->oward, 'title');
						if (DataQ::isRowColumn($ward, 'title')) {
							echo RecordQ::read($ward['title']);
						}
						?>
					</td>
					<td> - </td>

					<td class="text-center">
						<?php if ($row->status === 'INACTIVE') { ?>
							<label class="badge bg-danger"><?php echo Vars::safe($row->status); ?></label>
						<?php } elseif ($row->status !== 'ACTIVE') { ?>
							<label class="badge bg-warning"><?php echo Vars::safe($row->status); ?></label>
						<?php } else { ?>
							<label class="badge bg-success"><?php echo Vars::safe($row->status); ?></label>
						<?php } ?>
					</td>

					<td><a href="<?php AaceUtil::linkTo('ward/bed-update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('ward/bed-delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a></td>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</div>
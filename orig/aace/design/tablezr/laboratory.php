<div class="table-responsive">
	<table class="table table-hover center-aligned-table align-middle">

		<thead class="table-dark">
			<tr>
				<th colspan="1">S/N</th>
				<th colspan="1" class="col-md-5 text-left">Laboratory Test</th>
				<th colspan="1" class="col-md-1">Code</th>
				<th colspan="1" class="col-md-3">Side Effect</th>
				<th colspan="1" class="col-md-1">Price</th>
				<th colspan="3" class="col-md-1 text-center">MANAGE</th>
			</tr>
		</thead>

		<tbody>
			<?php
			$SN = 1;
			foreach ($content as $row) { ?>
				<tr>
					<td><?php echo $SN++; ?></td>
					<td><?php echo Vars::safe($row->generic);
					if (Vars::hasData($row->title)) {
						echo ' (' . Vars::safe($row->title) . ')';
					} ?></td>
					<td><?php echo Vars::safe($row->code); ?></td>
					<td><?php echo Vars::safe($row->effect); ?></td>
					<td><?php echo '₦' . FormatQ::number(Vars::safe($row->price), null, 'ZERO'); ?></td>

					<td><a href="<?php AaceUtil::linkTo('laboratory/detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> View</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('laboratory/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a></td>
					<td class="text-center"><a href="<?php AaceUtil::linkTo('laboratory/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a></td>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</div>
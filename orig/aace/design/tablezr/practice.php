<div class="table-responsive">
	<table class="table table-sm table-hover center-aligned-table align-middle">
		<thead class="table-dark">
			<tr>
				<th colspan="1" class="ps-3 pe-3">S/N</th>
				<th colspan="1" class="w-auto">Practice</th>
				<th colspan="1" class="w-auto">Acronym</th>
				<th colspan="1" class="w-auto">Code</th>
				<th colspan="1" class="col-md-2 text-center">Manage</th>
			</tr>
		</thead>
		<tbody>
			<?php foreach ($content as $row) { ?>
				<tr>
					<td class="ps-3 pe-3"><?php echo Utilizr::counter(); ?></td>
					<td><?php Vars::reveal($row->title); ?></td>
					<td><?php Vars::reveal($row->acronym); ?></td>
					<td><?php Vars::reveal($row->code); ?></td>
					<td class="text-end">
						<a href="<?php AaceUtil::linkTo('master/practice-detail', ['id' => $row->puid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> Detail</a>
						<a href="<?php AaceUtil::linkTo('master/practice-update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a>
						<a href="<?php AaceUtil::linkTo('master/practice-delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a>
					</td>
				</tr>
				<?php
			} ?>
		</tbody>
	</table>
</div>
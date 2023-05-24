<div class="table-responsive">
	<!-- <table class="table table-hover basic-data-list dataTable center-aligned-table align-middle" id="datalist"> -->

	<table id="Basic_Table" class="table table-hover js-basic-example dataTable">
		<thead class="table-dark">
			<tr>
				<th>#</th>
				<th class="col-md-6">Ward</th>
				<th class="col-md-3">Acronym</th>
				<th class="col-md-2">Code</th>
				<th class="col-md-1">Bed</th>
				<th colspan="2">Manage</th>
			</tr>
		</thead>

		<tbody>
			<?php
			$SN = 1;
			foreach ($content as $row) { ?>
				<tr>
					<td><?php echo $SN++; ?></td>
					<td><?php echo Vars::safe($row->title); ?></td>
					<td><?php echo Vars::safe($row->acronym); ?></td>
					<td><?php echo Vars::safe($row->code); ?></td>
					<td class="text-center"><a href="<?php AOUtil::linkTo('ward/bed-manage', ['ward' => $row->tuid]); ?>" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-bed fa-fw"></i> Bed</a></td>
					<td class="text-center"><a href="<?php AOUtil::linkTo('ward/update', ['id' => $row->puid]); ?>" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Update</a></td>
					<td class="text-right"><a href="<?php AOUtil::linkTo('ward/delete', ['id' => $row->suid]); ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a></td>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</div>
<div class="table-responsive">
	<table class="table table-hover center-aligned-table align-middle">

		<thead class="table-dark">
			<tr>
				<th colspan="1">S/N</th>
				<th colspan="1" class="col-md-1"></th>
				<th colspan="1" class="col-md-2">Patient Name</th>
				<th colspan="1" class="col-md-1 text-left">Patient ID</th>
				<th colspan="1" class="col-md-1">HMO</th>
				<th colspan="1" class="col-md-1">Gender</th>
				<th colspan="1" class="col-md-1">Birth Date</th>
				<th colspan="1" class="col-md-1">Phone</th>
				<th colspan="1" class="col-md-1">Email</th>
				<th colspan="1" class="col-md-1">Blood Group</th>
				<th colspan="1" class="col-md-2">Next of Kin</th>
				<th colspan="4" class="col-md-1 text-center">MANAGE</th>
			</tr>
		</thead>

		<tbody>
			<?php
			$SN = 1;
			$fallbackDP = AssetQ::path('image', false) . PS . 'dp.png';
			foreach ($content as $row) { ?>
				<tr>
					<td><?php echo $SN++; ?></td>
					<td class="text-end">
						<?php $patientDP = AssetQ::path('CLOUD_DP', false) . PS . $row->dp; ?>
						<img class="img-fluid img-thumbnail rounded-circle" src="<?php echo Vars::image($patientDP, $fallbackDP); ?>" width=" 50">
						<?php $patientDP = null; ?>
					</td>
					<td><strong><?php echo Vars::safe($row->firstname) . ' ' . Vars::safe($row->lastname); ?></strong></td>
					<td><?php echo Vars::safe($row->mid); ?></td>
					<td><?php
					$PersonHMOData = HMOModel::iFindByBIND($row->hmo);
					if (!empty($PersonHMOData['title'])) {
						echo $PersonHMOData['title'];
					} ?></td>
					<td><?php echo Vars::safe($row->gender); ?></td>
					<td><?php echo Vars::safe($row->dob); ?></td>
					<td><?php echo Vars::safe($row->phone); ?></td>
					<td><?php echo Vars::safe($row->email); ?></td>
					<td><?php echo Vars::safe($row->bloodgroup); ?></td>
					<td><?php echo Vars::safe($row->nok); ?></td>

					<td><a href="<?php AOUtil::linkTo('patient/detail?id=') . $row->puid; ?>" class="btn btn-primary btn-sm"><i class="fa-solid fa-file fa-fw"></i> View</a></td>
					<td class="text-center"><a href="<?php AOUtil::linkTo('patient/edit?id=') . $row->puid; ?>" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square fa-fw"></i> Edit</a></td>
					<td class="text-center"><a href="<?php AOUtil::linkTo('patient/delete?id=') . $row->suid; ?>" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash fa-fw"></i> Delete</a></td>
					<td class="text-center"><a href="<?php AOUtil::linkTo('encounter/detail?patient=') . $row->puid; ?>" class="btn btn-warning btn-sm"><i class="fa-solid fa-stethoscope fa-fw"></i> Vitals</a></td>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</div>
<div class="card-header"><strong>Encounter Department</strong></div>
<div class="card-body" id="practiceArea">

	<?php $practice = $content->record;
	if (!Utilizr::isNoResultAlert($practice)) {
		$consultantName = AaceUtil::userRecordName($practice->consultant);
		$practiceName = AaceUtil::staffPractice($practice->practice);
		?>
		<table class="table table-hover table-bordered">
			<tbody>
				<tr>
					<th class="text-nowrap col-md-3"> Consultant</th>
					<td><?php Vars::revealOnRow($consultantName); ?></td>
				</tr>
				<tr>
					<th class="text-nowrap"> Department/Practice </th>
					<td class="text-uppercase"><?php Vars::revealOnRow($practiceName); ?></td>
				</tr>
			</tbody>
		</table>
		<div class="row g-4 clearfix mb-2 mt-2 text-end">
		<div class="col-md-12">
			<a href="#" class="btn btn-outline-primary" onclick="loadContentXHR('practiceArea', '/encounter/practice?encounter=<?php Vars::reveal($practice->tuid); ?>&render=edit');"><i class="fa-regular fa-pen-to-square"></i> Update </a>
		</div>
	</div>
	<?php } ?>

</div>
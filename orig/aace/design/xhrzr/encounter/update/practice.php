<?php $row = $content->record;
if (!Utilizr::isNoResultAlert($row)) { ?>
	<form name="oFormGeneral" id="oFormGeneral" method="POST" action="/encounter/practice?encounter=<?php Vars::show($row->tuid); ?>&render=save">
		<div class="row g-4 clearfix pb-4">
			<div class="col-md-12">
				<table class="table table-hover table-bordered">
					<tbody>
						<tr>
							<th class="text-nowrap col-md-4"> Consulting Doctor</th>
							<td>
								<div class="form-floating">
									<select class="form-select" name="consultant">
										<option value="">- Select -</option>
										<?php FormQ::select(AaceUtil::formOptionDoctor(), $row->consultant); ?>
									</select>
									<label>Doctor</label>
								</div>
							</td>
						</tr>
						<tr>
							<th class="text-nowrap"> Department/Practice </th>
							<td>
								<div class="form-floating">
									<select class="form-select" name="practice">
										<option value="">- Select -</option>
										<?php FormQ::select(AaceUtil::formOptionPractice(), $row->practice); ?>
									</select>
									<label>Practice</label>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="col-md-12">
				<div class="d-grid gap-2 d-md-block">
					<button type="button" class="btn btn-primary" onclick="submitContentXHR('oFormGeneral', 'folderArea', '/encounter/practice?encounter=<?php Vars::reveal($row->tuid); ?>');"> <i class="fa-solid fa-floppy-disk"></i> Save Record</button>
					<button type="button" class="btn btn-secondary" onclick="loadFolderContentXHR('/encounter/practice?encounter=<?php Vars::show($row->tuid); ?>');"> <i class="fa-solid fa-chevron-left"></i> Cancel</button>
				</div>
			</div>
		</div>

	</form>
<?php } ?>
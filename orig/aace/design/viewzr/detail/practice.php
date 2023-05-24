<?php $row = $content->record; ?>
<div class="row clearfix">
	<div class="col-md-12">
		<div class="card mb-4">
			<div class="card-header"><strong>Practice Information</strong></div>
			<div class="card-body">
				<ul class="nav nav-tabs" id="tabArea" role="tablist">
					<li class="nav-item" role="presentation">
						<a class="nav-link active" id="practice-tab" data-bs-toggle="tab" href="#practice" role="tab" aria-controls="practice" aria-selected="true">About Practice</a>
					</li>
				</ul>
				<div class="tab-content" id="tabAreaContent">
					<div class="tab-pane fade show active" id="practice" role="tabpanel" aria-labelledby="practice-tab">
						<h6 class="text-primary text-uppercase mb-2 mt-2">Practice Information</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap"> Title </th>
										<td><?php Vars::reveal($row->title); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Acronym </th>
										<td><?php Vars::reveal($row->acronym); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Code </th>
										<td><?php Vars::reveal($row->code); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Description </th>
										<td><?php echo nl2br(Vars::safe($row->description));?></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
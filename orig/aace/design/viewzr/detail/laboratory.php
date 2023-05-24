<?php $row = $content->record; ?>
<div class="row clearfix">
	<div class="col-md-12">
		<div class="card mb-4">
			<div class="card-header"><strong>Laboratory Information</strong></div>
			<div class="card-body">
				<ul class="nav nav-tabs" id="tabArea" role="tablist">
					<li class="nav-item" role="presentation">
						<a class="nav-link active" id="laboratory-tab" data-bs-toggle="tab" href="#laboratory" role="tab" aria-controls="laboratory" aria-selected="true">About Laboratory</a>
					</li>
				</ul>
				<div class="tab-content" id="tabAreaContent">
					<div class="tab-pane fade show active" id="laboratory" role="tabpanel" aria-labelledby="laboratory-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">About Laboratory</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> Generic Name </th>
										<td><?php Vars::show($row->generic); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Medical Name </th>
										<td><?php Vars::show($row->title); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Code </th>
										<td><?php Vars::show($row->code); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Side Effect </th>
										<td><?php Vars::show($row->effect); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Price </th>
										<td><?php echo '₦' . FormatQ::number(Vars::safe($row->price), 2, 'ZERO'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Description </th>
										<td><?php echo nl2br(Vars::safe($row->description)); ?></td>
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
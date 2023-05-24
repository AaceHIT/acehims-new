<?php $row = $content->record; ?>
<div class="row clearfix">
	<div class="col-md-12">
		<div class="card mb-4">
			<div class="card-header"><strong>Company Information</strong></div>
			<div class="card-body">
				<ul class="nav nav-tabs" id="tabArea" role="tablist">
					<li class="nav-item" role="presentation">
						<a class="nav-link active" id="company-tab" data-bs-toggle="tab" href="#company" role="tab" aria-controls="company" aria-selected="true">About Company</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact Person</a>
					</li>
				</ul>
				<div class="tab-content" id="tabAreaContent">
					<div class="tab-pane fade show active" id="company" role="tabpanel" aria-labelledby="company-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">About Company</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> Company </th>
										<td><?php Vars::show($row->title); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Acronym </th>
										<td><?php Vars::show($row->acronym); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Code </th>
										<td><?php Vars::show($row->code); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Phone Number </th>
										<td><?php Vars::show($row->phone); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Email Address </th>
										<td><?php Vars::show($row->email); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Website </th>
										<td><?php Vars::show($row->website); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Address </th>
										<td><?php echo nl2br(Vars::safe($row->address)); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Note </th>
										<td><?php echo nl2br(Vars::safe($row->note)); ?></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">Contact Person</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> Full Name </th>
										<td><?php Vars::show($row->contact, 'person'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Phone Number </th>
										<td><?php Vars::show($row->contact, 'phone'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Email Address </th>
										<td><?php Vars::show($row->contact, 'email'); ?></td>
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
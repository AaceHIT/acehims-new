<?php $row = $content->record; ?>
<div class="row clearfix">
	<div class="col-md-12">
		<div class="card mb-4">
			<div class="card-header"><strong>Patient Information</strong></div>
			<div class="card-body">


				<ul class="nav nav-tabs" id="tabArea" role="tablist">
					<li class="nav-item" role="presentation">
						<a class="nav-link active" id="personal-tab" data-bs-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="true">About Patient</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="medical-tab" data-bs-toggle="tab" href="#medical" role="tab" aria-controls="medical" aria-selected="false">Medical</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="nok-tab" data-bs-toggle="tab" href="#nok" role="tab" aria-controls="nok" aria-selected="false">Next of KIN</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="guardian-tab" data-bs-toggle="tab" href="#guardian" role="tab" aria-controls="guardian" aria-selected="false">Guardian</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="hmo-tab" data-bs-toggle="tab" href="#hmo" role="tab" aria-controls="hmo" aria-selected="false">HMO</a>
					</li>
				</ul>
				<div class="tab-content" id="tabAreaContent">

					<div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">Personal Information</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<td colspan="2" class="text-center border-0">
											<img class="img-fluid img-thumbnail rounded-circle ao-photo-medium" src="<?php echo Utilizr::image($row->dp, 'DP'); ?>">
										</td>
									</tr>
									<tr>
										<th class="text-nowrap col-md-4"> Full Name </th>
										<td>
											<?php
											$name = RecordQ::name($row->firstname, $row->lastname, $row->middlename);
											Vars::reveal($name);
											?>
										</td>
									</tr>
									<tr>
										<th class="text-nowrap"> Gender </th>
										<td>
											<?php
											$gender = RecordQ::gender($row->gender);
											Vars::reveal($gender);
											?>
										</td>
									</tr>
									<tr>
										<th class="text-nowrap"> National Identity Number (NIN) </th>
										<td><?php echo nl2br(Vars::safe($row->nin)); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Birth Date </th>
										<td><?php Vars::reveal($row->dob); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Phone Number </th>
										<td><?php Vars::reveal($row->phone); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Email Address </th>
										<td><?php Vars::reveal($row->email); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Religion </th>
										<td><?php echo nl2br(Vars::safe($row->religion)); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Relationship Status </th>
										<td><?php Vars::reveal($row->relationship); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Occupation </th>
										<td><?php echo nl2br(Vars::safe($row->occupation)); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Nationality </th>
										<td><?php Vars::reveal($row->nationality); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Home Town </th>
										<td><?php Vars::reveal($row->origin, 'hometown'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> State of Origin </th>
										<td><?php Vars::reveal($row->origin, 'state'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Address </th>
										<td>
											<?php
											$address = Vars::safe($row->contact, 'address');
											echo nl2br($address);
											?>
										</td>
									</tr>
									<tr>
										<th class="text-nowrap"> Referred By </th>
										<td>
											<?php
											$referrerName = AaceUtil::userRecordName($row->referrer);
											Vars::reveal($referrerName);
											?>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="tab-pane fade" id="medical" role="tabpanel" aria-labelledby="medical-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">Medical Data</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> Patient ID</th>
										<td><?php Vars::reveal($row->mid); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Blood Group </th>
										<td><?php Vars::reveal($row->medical, 'bloodgroup'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Known Allergies </th>
										<td>
											<?php
											$remark = Vars::safe($row->medical, 'allergy');
											echo nl2br($remark);
											?>
										</td>
									</tr>
									<tr>
										<th class="text-nowrap"> Remark </th>
										<td>
											<?php
											$remark = Vars::safe($row->medical, 'remark');
											echo nl2br($remark);
											?>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="tab-pane fade" id="nok" role="tabpanel" aria-labelledby="nok-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">Next of KIN</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> Next of KIN Name </th>
										<td><?php Vars::reveal($row->nok, 'person'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Relationship with NOK </th>
										<td><?php Vars::reveal($row->nok, 'relationship'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Phone Number </th>
										<td><?php Vars::reveal($row->nok, 'phone'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Email Address </th>
										<td><?php Vars::reveal($row->nok, 'email'); ?></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="tab-pane fade" id="guardian" role="tabpanel" aria-labelledby="guardian-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">Guardian</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> Guardian Name </th>
										<td><?php Vars::reveal($row->guardian, 'person'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Phone Number </th>
										<td><?php Vars::reveal($row->guardian, 'phone'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Email Address </th>
										<td><?php Vars::reveal($row->guardian, 'email'); ?></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="tab-pane fade" id="hmo" role="tabpanel" aria-labelledby="hmo-tab">
						<h6 class="text-primary text-uppercase mb-3 mt-2">HMO Record</h6>
						<div class="col-md-4">
							<table class="table table-hover table-bordered">
								<tbody>
									<tr>
										<th class="text-nowrap col-md-4"> HMO Firm </th>
										<td><?php $HMOFirm = AaceUtil::HMO(Vars::safe($row->hmo, 'firm'));
										Vars::reveal($HMOFirm); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> HMO Coverage </th>
										<td><?php Vars::reveal($row->hmo, 'coverage'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Insurance Number </th>
										<td><?php Vars::reveal($row->hmo, 'insuranceid'); ?></td>
									</tr>
									<tr>
										<th class="text-nowrap"> Insurance Validity </th>
										<td><?php Vars::reveal($row->hmo, 'validity'); ?></td>
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
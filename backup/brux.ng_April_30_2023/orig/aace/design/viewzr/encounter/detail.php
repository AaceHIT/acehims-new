<div class="row g-4">
	<?php
	$fallbackDP = AssetQ::path('image', false) . PS . 'dp.png';
	$patientDP = AssetQ::path('CLOUD_DP', false) . PS . $content->dp; ?>

	<div class="col-lg-4 col-md-12">
		<div class="card profile-header text-center mb-4">
			<div class="card-body">
				<div class="profile-image mb-3">
					<img src="<?php echo Vars::image($patientDP, $fallbackDP); ?>" class="rounded-circle" alt="" style="max-height:140px;">
				</div>
				<div>
					<h4 class="mb-0"><strong><?php echo Vars::safe($content->firstname); ?></strong> <?php echo Vars::safe($content->lastname); ?></h4>
					<span><?php echo Vars::safe($content->mid); ?></span>
				</div>
				<div class="mt-3">
					<button class="btn btn-primary">View</button>
					<button class="btn btn-outline-secondary">Message</button>
				</div>
			</div>
		</div>

		<div class="card mb-4">
			<div class="card-header">
				Patient Information
				<ul class="header-dropdown">
					<li class="dropdown">
						<a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
						<ul class="dropdown-menu dropdown-menu-right">
							<!-- <li><a href="javascript:void(0);">Action</a></li>
							<li><a href="javascript:void(0);">Another Action</a></li>
							<li><a href="javascript:void(0);">Something else</a></li> -->
						</ul>
					</li>
				</ul>
			</div>
			<div class="card-body">
				<strong><small class="text-primary">HMO: </small></strong>
				<p><?php
				$PersonHMOData = HMOModel::iFindByBIND($content->hmo);
				echo Vars::safe($PersonHMOData['title']); if(!empty($content->hmoplan)){echo ' ('.$content->hmoplan.')';} ?></p>
				<strong><small class="text-primary">Address: </small></strong>
				<p><?php echo nl2br(Vars::safe($content->address)); ?></p>
				<strong><small class="text-primary">Email Address: </small></strong>
				<p><?php echo Vars::safe($content->email); ?></p>
				<strong><small class="text-primary">Phone Number: </small></strong>
				<p><?php echo Vars::safe($content->phone); ?></p>
				<strong><small class="text-primary">Date OF Birth: </small></strong>
				<p class="mb-0"><?php echo TimeX::is('LETTERB', $content->dob); ?></p>

			</div>
		</div>

		<div class="card mb-4">
			<div class="card-header">
				Patient History
			</div>
			<div class="card-body">
				<p class="text-danger">No History Available</p>
			</div>
		</div>

	</div>
	<div class="col-lg-8 col-md-12">
		<div class="card">
			<div class="card-body">
				<ul class="nav nav-tabs nav-tabs-new">
					<li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#Basic">Vitals </a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Account">Diagnosis</a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#General">Prescription</a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Nurse">Nurse Notes</a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Doctor">Doctor's Report</a></li>
				</ul>
			</div>
		</div>
		<!-- <div class="card mb-4">
																<div class="row profile_state text-center">
																		<div class="col-lg-3 col-6">
																				<div class="card-body">
																						<i class="fa fa-2x fa-thumbs-up"></i>
																						<h5 class="mb-0 number count-to" data-from="0" data-to="2365" data-speed="1000" data-fresh-interval="700">2365</h5>
																						<small>Experience</small>
																				</div>
																		</div>
																		<div class="col-lg-3 col-6">
																				<div class="card-body">
																						<i class="fa fa-2x fa-star"></i>
																						<h5 class="mb-0 number count-to" data-from="0" data-to="1203" data-speed="1000" data-fresh-interval="700">1203</h5>
																						<small>Awards</small>
																				</div>
																		</div>
																		<div class="col-lg-3 col-6">
																				<div class="card-body">
																						<i class="fa fa-2x fa-user"></i>
																						<h5 class="mb-0 number count-to" data-from="0" data-to="324" data-speed="1000" data-fresh-interval="700">324</h5>
																						<small>Clients</small>
																				</div>
																		</div>
																		<div class="col-lg-3 col-6">
																				<div class="card-body">
																						<i class="fa fa-2x fa-bug"></i>
																						<h5 class="mb-0 number count-to" data-from="0" data-to="1980" data-speed="1000" data-fresh-interval="700">1980</h5>
																						<small>Surgery</small>
																				</div>
																		</div>
																</div>
														</div> -->

		<div class="row clearfix text-center">
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card mb-4">
					<div class="card-body">
						<input type="text" class="knob" value="22" data-width="70" data-height="70" data-thickness="0.1" data-fgColor="#01b2c6">
						<h6>Pulse Rate</h6>
						<span>min</span>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card mb-4">
					<div class="card-body">
						<input type="text" class="knob" value="78" data-width="70" data-height="70" data-thickness="0.1" data-fgColor="#2196f3">
						<h6>Blood Pressure </h6>
						<span>(mm/Hg)</span>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card mb-4">
					<div class="card-body">
						<input type="text" class="knob" value="66" data-width="70" data-height="70" data-thickness="0.1" data-fgColor="#f44336">
						<h6>Temperature</h6>
						<span>(C)</span>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card mb-4">
					<div class="card-body">
						<input type="text" class="knob" value="50" data-width="70" data-height="70" data-thickness="0.1" data-fgColor="#4caf50">
						<h6>Respiration</h6>
						<span>min</span>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card mb-4">
					<div class="card-body">
						<input type="text" class="knob" value="70" data-width="70" data-height="70" data-thickness="0.1" data-fgColor="#4caf50">
						<h6>Height</h6>
						<span>cm</span>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card mb-4">
					<div class="card-body">
						<input type="text" class="knob" value="80" data-width="70" data-height="70" data-thickness="0.1" data-fgColor="#4caf98">
						<h6>Weight</h6>
						<span>kg</span>
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="card">
																<div class="card-body">
																		<ul class="nav nav-tabs nav-tabs-new">
																				<li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#Basic">Basic</a></li>
																				<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Account">Account</a></li>
																				<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#General">General</a></li>
																		</ul>
																</div>
														</div> -->

		<div class="tab-content pt-4 p-0">
			<div class="tab-pane active" id="Basic">
				<div class="card">
					<div class="card-body">
						<h6>Patients Vitals </h6>
						<form>
							<div class="form-floating mb-3">
								<input type="Date" class="form-control" placeholder="Date" name="date" value="<?php $t = time();
								echo (date("Y-m-d", $t)); ?>">
								<label>Date</label>
							</div>
							<div class="form-floating mb-3">
								<input type="time" class="form-control" placeholder="time" name="time" value="<?php $t = time();
								echo ($t); ?>">
								<label>Time</label>
							</div>
							<div class="form-floating mb-3 d-flex">
								<div class="form-check form-check-inline">
									<input type="text" class="form-control" placeholder="Pulse" name="paulse">
									<label>Pulse Rate (/min)</label>
								</div>
								<div class="form-check form-check-inline">
									<input type="text" class="form-control" placeholder="BP" name="bloodp">
									<label>Blood Pressure (mm/Hg)</label>
								</div>
							</div>
							<div class="form-floating mb-3">
								<input type="text" class="form-control" placeholder="Temprature" aria-label="Start" name="temp">
								<label>Temperature (C)</label>
							</div>
							<div class="form-floating mb-3">
								<input type="text" class="form-control" placeholder="Respiration" name="resp">
								<label>Respiration (/min)</label>
							</div>
							<div class="form-floating mb-3">
								<input type="text" class="form-control" placeholder="Height" name="height">
								<label>Height (CM)</label>
							</div>
							<div class="form-floating mb-3">
								<input type="text" class="form-control" placeholder="weight" name="weight">
								<label>Weight (Kg)</label>
							</div>
							<div class="form-floating mb-3">
								<input type="text" class="form-control" placeholder="Others" name="others">
								<label>Others</label>
							</div>
							<div class="form-floating mb-3">
								<textarea placeholder="Address" class="form-control" rows="5" name="address" style="height: 100%;"></textarea>
								<label>Nurse Note</label>
							</div>

							<button type="button" class="btn btn-primary">Update</button> &nbsp;&nbsp;
							<button type="button" class="btn btn-outline-secondary">Cancel</button>
						</form>
					</div>
				</div>
			</div>

			<!-- Diagnosis starts here -->

			<div class="tab-pane" id="Account">
				<div class="card">
					<div class="card-body">
						<h6>Diagnostics</h6>
						<form>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Reason for Visit" name="reason" rows="5"></textarea>
								<label>Reason For visit</label>
							</div>
							<div class="form-floating mb-3">
								<select class="form-select" name="condition" required>
									<option value="">- Select condition -</option>
									<option value="M">Improved</option>
									<option value="F">Recovered</option>
									<option value="M">Expired</option>
									<option value="F">Transfered</option>
								</select>
								<label>Condition Upon Check-Out</label>
							</div>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Check-In Impression" name="impresion" rows="3" style="height: 100%;"></textarea>
								<label>Check-In Impression</label>
							</div>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Final Diagnosis" name="diagnostics" rows="3" style="height: 100%;"></textarea>
								<label>Final Diagnosis</label>
							</div>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Clinical Findings" aria-label="Start" name="clinicals" rows="5" style="height: 100%;"></textarea>
								<label>Clinical Findings</label>
							</div>

							<button type="button" class="btn btn-primary">Update</button> &nbsp;&nbsp;
							<button class="btn btn-outline-secondary">Cancel</button>
						</form>
					</div>
				</div>
			</div>

			<!-- Prescription starts here  -->
			<div class="tab-pane" id="General">
				<div class="card">
					<div class="card-body">
						<h6>General Information</h6>
						<form>
							<div class="form-floating mb-3">
								<select class="form-select" name="pain" required>
									<option value="">- Select level of Pain -</option>
									<option value="0">0
									<option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<label>Pain Range (3/10)</label>
							</div>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="History of Present Illness" name="history" rows="5"></textarea>
								<label>History of Present Illness (HPI):</label>
							</div>

							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Symptoms Area" name="symptoms" rows="3" style="height: 100%;"></textarea>
								<label>Symptoms Area</label>
							</div>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Physical Examinaton" name="physical" rows="3" style="height: 100%;"></textarea>
								<label>Physical Examinaton (Assessment):</label>
							</div>
							<div class="form-floating mb-3">
								<textarea class="form-control" placeholder="Treament Plan:" aria-label="Start" name="clinicals" rows="5" style="height: 100%;"></textarea>
								<label>Treament Plan:</label>
							</div>
							<button type="button" class="btn btn-primary">Update</button> &nbsp;&nbsp;
							<button class="btn btn-outline-secondary">Cancel</button>
						</form>
					</div>
				</div>
			</div>
		</div>

	</div>

</div> <!-- Row End -->
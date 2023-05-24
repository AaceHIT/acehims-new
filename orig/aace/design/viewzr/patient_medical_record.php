<?php $row = $content->record; ?>
<div class="row g-4">

	<div class="col-lg-4 col-md-12">

		<?php
		$sliceViewPath = 'viewzr' . DS . 'patient' . DS . 'detail-';
		#DesignQ::slice($sliceViewPath . 'personal', $data);
		#DesignQ::slice($sliceViewPath . 'medical', $data);
		?>
	</div>



	<div class="col-lg-8 col-md-12">

		<div class="card mb-4">
			<div class="card-body">
				<ul class="nav nav-tabs nav-tabs-new2">
					<li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#Activity">Activity</a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Billings">Billings</a></li>
				</ul>
				<div class="tab-content pt-4 p-0">
					<div class="tab-pane active" id="Activity">
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<div class="timeline-item green">
							<span class="date">Just now</span>
							<h6>Discharge</h6>
						</div>
						<div class="timeline-item warning">
							<span class="date">6 mins ago</span>
							<h6>Spinal Osteomyelitis Surgery</h6>
							<a href="javascript:void(0);" title="">Dr. Chandler Bing</a>
							<p>web by far While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
							<ul class="list-unstyled team-info mb-0">
								<li><img src="assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Dr. Chris Fox" alt="Avatar"></li>
								<li><img src="assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Isabella" alt="Avatar"></li>
								<li><img src="assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-placement="top" title="Isabella" alt="Avatar"></li>
								<li><img src="assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Dr. Joge Lucky" alt="Avatar"></li>
								<li><img src="assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Isabella" alt="Avatar"></li>
							</ul>
							<div class="d-flex mt-3">
								<img class="w-25 img-fluid" src="assets/images/blog/blog-page-1.jpg" alt="">
								<img class="w-25 img-fluid ms-3" src="assets/images/blog/blog-page-2.jpg" alt="">
							</div>
						</div>

						<div class="timeline-item danger">
							<span class="date">15 mins ago</span>
							<h6>Blood Report</h6>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>

						<div class="timeline-item danger">
							<span class="date">1 day ago</span>
							<h6>Send email to all Employee salary slip</h6>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
							<div class="row">
								<div class="col-md-6">
									<strong>Analysis IDFB-3</strong>
									<table class="table table-hover">
										<tbody>
											<tr>
												<td>Down Cluster</td>
												<td>90.9% </td>
											</tr>
											<tr>
												<td>Down Fiber</td>
												<td>1.8%</td>
											</tr>
											<tr>
												<td>Waterfowl Feathers </td>
												<td>1.7%</td>
											</tr>
											<tr>
												<td>Quill</td>
												<td>0.0%</td>
											</tr>
											<tr>
												<td>Landfowl</td>
												<td>0.1%</td>
											</tr>
											<tr>
												<td>Total</td>
												<td>100.0%</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-6">
									<strong>Species IDFB-12</strong>
									<table class="table table-hover">
										<tbody>
											<tr>
												<td>Goose Down </td>
												<td>90.9% </td>
											</tr>
											<tr>
												<td>Duck Down</td>
												<td>1.8%</td>
											</tr>
											<tr>
												<td>Goose Feathers</td>
												<td>1.7%</td>
											</tr>
											<tr>
												<td>Duck Feathers</td>
												<td>0.0%</td>
											</tr>
											<tr>
												<td>Total Duck</td>
												<td>0.1%</td>
											</tr>
											<tr>
												<td>Total Goose</td>
												<td>100.0%</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>


						<div class="timeline-item dark pb-0">
							<span class="date">16 June, 2018</span>
							<h6>Blood checkup test</h6>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas saepe, necessitatibus magnam velit, ipsa consequuntur tempore doloribus architecto odio nulla vel fuga dignissimos reiciendis quo ea illo, eligendi deserunt?</p>
						</div>
					</div>

					<div class="tab-pane" id="Billings">
						<div class="card-header">Payment Method</div>
						<div class="card-body">
							<div class="payment-info">
								<h3 class="payment-name"><i class="fa fa-paypal"></i> PayPal ****2222</h3>
								<span>Next billing charged $29</span>
								<div class="d-flex flex-wrap justify-content-between">
									<em class="text-muted">Autopay on May 12, 2018</em>
									<a href="javascript:void(0);" class="edit-payment-info">Edit Payment Info</a>
								</div>
								<a class="mt-4" href="javascript:void(0);"><i class="fa fa-plus-circle"></i> Add Payment Info</a>
							</div>
							<div class="mt-4">
								<h6>Billing History</h6>
								<table class="table billing-history table-hover">
									<thead class="sr-only">
										<tr>
											<th>Plan</th>
											<th>Amount</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<h5 class="billing-title">Basic Plan <span class="invoice-number">#LA35628</span></h5>
												<span class="text-muted">Charged at April 17, 2018</span>
											</td>
											<td class="amount">$29</td>
											<td class="action text-end"><a href="javascript:void(0);">View</a></td>
										</tr>
										<tr>
											<td>
												<h5 class="billing-title">Pro Plan <span class="invoice-number">#LA3599</span></h5>
												<span class="text-muted">Charged at March 18, 2018</span>
											</td>
											<td class="amount">$59</td>
											<td class="action text-end"><a href="javascript:void(0);">View</a></td>
										</tr>
										<tr>
											<td>
												<h5 class="billing-title">Platinum Plan <span class="invoice-number">#LA1245</span></h5>
												<span class="text-muted">Charged at Feb 02, 2018</span>
											</td>
											<td class="amount">$89</td>
											<td class="action text-end"><a href="javascript:void(0);">View</a></td>
										</tr>
									</tbody>
								</table>
								<div>
									<button type="submit" class="btn btn-primary">Update</button>
									<button type="submit" class="btn btn-outline-secondary">Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button type="submit" class="btn btn-primary">Back to list</button>
		<button type="submit" class="btn btn-outline-secondary">Encounter</button>
	</div>

</div>
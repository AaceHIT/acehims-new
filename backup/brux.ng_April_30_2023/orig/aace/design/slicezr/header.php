
						<!-- Block Header -->
						<div class="block-header my-3">
							<div class="row">
								<div class="col-lg-6 col-md-8 col-sm-12">
									<h2 class="m-0 fs-5">
										<a href="javascript:void(0);" class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a>
										<?php Vars::show($meta->breadcrumb, 'title'); ?>
									</h2>

									<ul class="breadcrumb mb-0">
										<li class="breadcrumb-item"><a href="<?php AOUtil::linkTo(AOUtil::link('USER_DASHBOARD')); ?>"><i class="fa-solid fa-house"></i></a></li>
										<li class="breadcrumb-item active"><?php echo $meta->breadcrumb->primary; ?></li>
										<?php if(isset($meta->breadcrumb->secondary)){?>
										<li class="breadcrumb-item active"><?php echo $meta->breadcrumb->secondary;?></li>
											<?php } ?>
									</ul>
								</div>

								<div class="col-lg-6 col-md-4 col-sm-12 text-end">
									<div class="d-md-inline-block d-none mx-2 text-start">
										<div class="float-start me-2">
											<small>Visitors</small>
											<h6 class="mb-0 mt-1"><i class="fa fa-user"></i> 1,784</h6>
										</div>
										<span id="bh_visitors" class="float-end"></span>
									</div>
									<div class="d-xl-inline-block d-none mx-2 text-start">
										<div class="float-start me-2">
											<small>Visits</small>
											<h6 class="mb-0 mt-1"><i class="fa fa-globe"></i> 325</h6>
										</div>
										<span id="bh_visits" class="float-end"></span>
									</div>
									<div class="d-lg-inline-block d-none mx-2 text-start">
										<div class="float-start me-2">
											<small>Chats</small>
											<h6 class="mb-0 mt-1"><i class="fa fa-comments"></i> 13</h6>
										</div>
										<span id="bh_chats" class="float-end"></span>
									</div>
								</div>
							</div>
						</div>
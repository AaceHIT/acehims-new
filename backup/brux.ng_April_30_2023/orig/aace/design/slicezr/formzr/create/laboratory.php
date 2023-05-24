<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Laboratory Information</h4>
		<?php
		Utilizr::notifyFailure('The laboratory test was not created');
		Utilizr::notifySuccess('The laboratory test has been created successfully');
		if (!Utilizr::isLinkStatus('success')) { ?>

			<div class="row g-4 clearfix">
				<div class="col-md-6 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Generic Name" name="generic" required>
						<label>Generic Name</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Medical Name" name="title">
						<label>Medical Name</label>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Code" name="code">
						<label>Code</label>
					</div>
				</div>

				<div class="col-md-8 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Side Effect" name="effect">
						<label>Side Effect</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="number" class="form-control" placeholder="Price" name="price">
						<label>Price (₦)</label>
					</div>
				</div>

				<div class="col-12">
					<div class="form-floating">
						<textarea placeholder="Description" class="form-control" name="description"></textarea>
						<label>Description</label>
					</div>
				</div>

			</div>


			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Create</button>
				</div>
			</div>
		<?php } ?>
	</div>
</form>
<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">VIP Information</h4>
		<?php
		Utilizr::notifyFailure('The VIP was not created');
		Utilizr::notifySuccess('The VIP has been created successfully');
		if (!Utilizr::isLinkStatus('success')) { ?>

			<div class="row g-4 clearfix">
				<div class="col-md-6 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Title" name="title" required>
						<label>Title</label>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Acronym" name="acronym">
						<label>Acronym</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Code" name="code" value="VIP<?php echo RandomQ::digit(8); ?>">
						<label>Code</label>
					</div>
				</div>

				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="email" class="form-control" placeholder="Email Address" name="email">
						<label>Email Address</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Phone Number" name="phone">
						<label>Phone Number</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Website" name="website">
						<label>Website</label>
					</div>
				</div>

				<div class="col-12">
					<div class="form-floating">
						<textarea placeholder="Address" class="form-control" rows="4" name="address"></textarea>
						<label>Address</label>
					</div>
				</div>
			</div>



			<h4 class="ao-section-title small mb-4 mt-4">Contact Person</h4>
			<div class="row g-4 clearfix">

				<?php require ORIG['FORM'] . 'chunk' . DS . 'contact-person.php'; ?>

			</div>

			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Create</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>
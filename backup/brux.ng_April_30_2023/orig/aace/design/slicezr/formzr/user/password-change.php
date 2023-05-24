<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Password Information</h4>

		<div class="row g-4 clearfix">
			<div class="col-md-5">
				<div class="form-floating">
					<input type="password" class="form-control" placeholder="New Password" name="password" required>
					<label>New Password</label>
				</div>
			</div>
		</div>

		<div class="row g-4 clearfix mt-2">
			<div class="col-md-5">
				<div class="form-floating">
					<input type="password" class="form-control" placeholder="Re-Password" name="repassword" required>
					<label>Re-Password</label>
				</div>
			</div>
		</div>

		<div class="row g-4 clearfix mb-4 mt-2">
			<div class="col-sm-12">
				<button type="submit" class="btn btn-primary btn-lg ao-btn">Change Password</button>
			</div>
		</div>
	</div>
</form>
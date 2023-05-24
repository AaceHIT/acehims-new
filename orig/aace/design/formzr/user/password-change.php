<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Password Information</h4>
		<div class="row g-4 clearfix">
			<div class="col-md-5">
				<div class="mb-3 form-floating password-wrapper">
					<input type="password" class="form-control" id="password" placeholder="Password" name="password" required tabindex="2">
					<label for="password">Password</label>
					<span class="input-group-addon password-toggle" id="password-toggle">
						<i class="fa fa-eye-slash" aria-hidden="true"></i>
					</span>
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

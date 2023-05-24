<h6 class="mb-4 mt-4 small ao-text-header">Authentication Information</h6>
<div class="row g-4 clearfix pb-4">
	<div class="col-md-12">
		<div class="row mb-3">
			<label for="username" class="col-md-2 col-form-label fw-bold">Username</label>
			<div class="col-md-6">
				<div class="form-floating">
					<input type="text" class="form-control" placeholder="Username" name="username" id="username" required value="<?php echo RandomQ::username(8); ?>">
					<label>Username</label>
				</div>
			</div>
		</div>
		<div class="row mb-3">
			<label for="password" class="col-md-2 col-form-label fw-bold">Password</label>
			<div class="col-md-6">
				<div class="form-floating">
					<input type="password" class="form-control" placeholder="Password" name="password" id="password" required>
					<label>Password</label>
				</div>
			</div>
		</div>
		<div class="row mb-3">
			<label for="repassword" class="col-md-2 col-form-label fw-bold">Re-Password</label>
			<div class="col-md-6">
				<div class="form-floating">
					<input type="password" class="form-control" placeholder="Re-Password" name="repassword" id="repassword" required>
					<label>Re-Password</label>
				</div>
			</div>
		</div>
	</div>
</div>
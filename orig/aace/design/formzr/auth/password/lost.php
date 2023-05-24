<form name="oForm" id="oForm" class="form-auth-small" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card mb-4">
		<div class="card-header bg-transparent border-bottom-0 py-3">
			<p class="fs-5 mb-0">Reset your password</p>
		</div>
		<div class="card-body">
			<?php
			AuthModel::static()->logout();
			Utilizr::alertFailure('User was not found');
			if (Utilizr::isLinkStatus('default')) {
				echo '<p class="text-muted">Please enter your ID to receive instructions for resetting password</p>';
			} ?>
			<div class="mb-3 form-floating">
				<input type="text" class="form-control" id="userid" placeholder="User ID" name="userid" required tabindex="1" autofocus>
				<label for="userid">User ID</label>
			</div>
			<button type="submit" class="btn btn-primary w-100 mb-4 mt-4" id="reset-btn" tabindex="2" id="reset-btn">RESET PASSWORD</button>
			<div class="bottom text-center mb-4">
				<span class="helper-text mb-3 d-block">Know your password? <a href="<?php AaceUtil::linkTo('auth/login'); ?>">Login</a></span>
			</div>
		</div>
	</div>
</form>
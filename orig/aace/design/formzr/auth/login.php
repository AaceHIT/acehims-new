<form name="oForm" id="oForm" class="form-auth-small" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card mb-4">
		<div class="card-header bg-transparent border-bottom-0 py-3">
			<p class="fs-5 mb-0">Login to your account</p>
		</div>
		<div class="card-body">
			<?php
			AuthModel::static()->logout();
			Utilizr::alertFailure('Authentication Failed');
			Utilizr::alertLogout('You have logged out successfully!');
			Utilizr::alertExpired('Your session has expired!');
			Utilizr::alertChangePW('Your password has been updated successfully!');
			?>
			<div class="mb-3 form-floating">
				<input type="text" class="form-control" id="userid" placeholder="User ID" name="userid" required tabindex="1" autofocus>
				<label for="userid">User ID</label>
			</div>
			<div class="mb-3 form-floating password-wrapper">
				<input type="password" class="form-control" id="password" placeholder="Password" name="password" required tabindex="2">
				<label for="password">Password</label>
				<span class="input-group-addon password-toggle" id="password-toggle">
					<i class="fa fa-eye-slash" aria-hidden="true"></i>
				</span>
			</div>
			<div class="form-check mt-4">
				<input class="form-check-input" type="checkbox" value="" id="remember" tabindex="3">
				<label class="form-check-label" for="remember">Remember me</label>
			</div>
			<button type="submit" class="btn btn-primary w-100 mb-4 mt-4" tabindex="4" id="login-btn">LOGIN</button>

			<div class="bottom text-center mb-4">
				<span class="helper-text mb-3 d-block"><i class="fa fa-lock"></i> Lost Password? <a href="<?php AaceUtil::linkTo('auth/password/lost'); ?>" tabindex="5">Reset</a></span>
				<span>New Patient? <a href="<?php AaceUtil::linkTo('auth/signup/patient'); ?>" tabindex="6">Signup</a></span>
			</div>
		</div>
	</div>
</form>
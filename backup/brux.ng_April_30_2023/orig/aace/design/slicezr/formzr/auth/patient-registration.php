<div class="card mb-4">
	<div class="card-header bg-transparent border-bottom-0 py-3">
		<p class="fs-5 mb-0">Patient Registration</p>
	</div>
	<div class="card-body">

		<?php
		$isLoggedIn = AuthModel::static()->isLoggedIn();
		if (Utilizr::isLinkStatus('success') && $isLoggedIn === true) {
			$uri = AOUtil::link('setting/profile-update');
			RedirectX::to($uri, 4);
			?>
			<div class="mb-3 text-primary">
				<p>Hello <strong><?php echo AOUtil::sessionUser('name'); ?></strong><br>
					Your account has been successfully registered.<br><br>
					Please click <a href="<?php echo $uri; ?>" class="text-primary">continue</a> below to update your profile.
				</p>
				<p class="pt-3"><a href="<?php echo $uri; ?>" tile="Continue" class="btn btn-sm btn-primary">Continue</a></p>
			</div>
		<?php } elseif ($isLoggedIn === true) {
			$uri = AOUtil::link('SELF');
			AuthModel::static()->logout();
			RedirectX::instant($uri);
		} else { ?>
			<form class="form-auth-small" method="POST" action="<?php Utilizr::uri(); ?>">
				<div class="mb-3 form-floating">
					<input type="text" class="form-control" id="fullname" placeholder="Fullname" name="fullname" required>
					<label for="fullname">Fullname</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="text" class="form-control" id="phone" placeholder="Phone Number" name="phone" required>
					<label for="phone">Phone Number</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="email" class="form-control" id="email" placeholder="Email Address" name="email" required>
					<label for="email">Email Address</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="password" class="form-control" id="password" placeholder="Password" name="password" required>
					<label for="password">Password</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="date" class="form-control" id="birthdate" placeholder="Birth Date" name="birthdate" required>
					<label>Birth Date</label>
				</div>
				<div class="mb-3 form-floating">
					<select class="form-select" id="gender" name="gender" required>
						<option value="">- Select Gender -</option>
						<?php FormQ::selectOption('GENDER'); ?>
					</select>
					<label>Gender</label>
				</div>
				<div class="mb-3 form-floating">
					<select class="form-select" id="nationality" name="nationality" required>
						<option value="">- Select -</option>
						<?php FormQ::selectOption('COUNTRY', 'Nigeria'); ?>
					</select>
					<label>Nationality</label>
				</div>

				<button type="submit" class="btn btn-primary w-100 mb-4 mt-4">REGISTER</button>
				<div class="bottom text-center mt-2 mb-4">
					<span>Already have an account? <a href="<?php AOUtil::linkTo('auth/login'); ?>">Login</a></span>
				</div>
			</form>
		<?php } ?>
	</div>
</div>
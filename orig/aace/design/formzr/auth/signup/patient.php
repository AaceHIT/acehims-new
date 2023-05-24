<form name="oForm" id="oForm" class="form-auth-small" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card mb-4">
		<div class="card-header bg-transparent border-bottom-0 py-3">
			<p class="fs-5 mb-0">Patient Signup</p>
		</div>
		<div class="card-body">
			<?php
			$isLoggedIn = AuthModel::static()->isLoggedIn();
			if (Utilizr::isLinkStatus('success') && $isLoggedIn === true) {
				$uri = AaceUtil::link('dashboard');
				RedirectX::to($uri, 4);
				?>
				<div class="mb-3 text-primary">
					<p>Hello <strong><?php echo AaceUtil::sessionUser('name'); ?></strong><br>
						Your account has been successfully registered.<br><br>
						Please click <a href="<?php echo $uri; ?>" class="text-primary">continue</a> below to update your profile.
					</p>
					<p class="pt-3"><a href="<?php echo $uri; ?>" tile="Continue" class="btn btn-sm btn-primary">Continue</a></p>
				</div>
			<?php } elseif ($isLoggedIn === true) {
				$uri = AaceUtil::link('SELF');
				AuthModel::static()->logout();
				RedirectX::instant($uri);
			} else { ?>
				<div class="mb-3 form-floating">
					<input type="text" class="form-control" id="fullname" placeholder="Fullname" name="fullname" required tabindex="1" autofocus>
					<label for="fullname">Fullname</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="text" class="form-control" id="phone" placeholder="Phone Number" name="phone" required tabindex="2">
					<label for="phone">Phone Number</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="email" class="form-control" id="email" placeholder="Email Address" name="email" required tabindex="3">
					<label for="email">Email Address</label>
				</div>
				<div class="mb-3 form-floating password-wrapper">
					<input type="password" class="form-control" id="password" placeholder="Password" name="password" required tabindex="4">
					<label for="password">Password</label>
					<span class="input-group-addon password-toggle" id="password-toggle">
						<i class="fa fa-eye-slash" aria-hidden="true"></i>
					</span>
				</div>
				<div class="mb-3 form-floating">
					<input type="date" class="form-control" id="birthdate" placeholder="Birth Date" name="birthdate" required tabindex="5">
					<label>Birth Date</label>
				</div>
				<div class="mb-3 form-floating">
					<select class="form-select" id="gender" name="gender" required tabindex="6">
						<option value="">- Select -</option>
						<?php FormQ::selectOption('GENDER'); ?>
					</select>
					<label>Gender</label>
				</div>
				<div class="mb-3 form-floating">
					<select class="form-select" id="nationality" name="nationality" required tabindex="7">
						<option value="">- Select -</option>
						<?php FormQ::selectOption('COUNTRY', 'Nigeria'); ?>
					</select>
					<label>Nationality</label>
				</div>
				<div class="mb-3 form-floating">
					<input type="text" class="form-control" id="nin" placeholder="National Identity Number (NIN)" name="nin" required tabindex="8">
					<label for="nin">National Identity Number (NIN)</label>
				</div>
				<div class="mb-3 form-floating">
					<select class="form-select" id="referrer" name="referrer" tabindex="9">
						<option value="">- Select -</option>
						<option value="" selected>No Referrer</option>
						<?php FormQ::select(AaceUtil::formOptionReferrer()); ?>
					</select>
					<label>Referred By</label>
				</div>
				<div class="form-check mt-4">
					<input class="form-check-input" type="checkbox" value="" id="check-tos" tabindex="10">
					<label class="form-check-label" for="check-tos">I agree to the <a href="<?php AaceUtil::linkTo('tos'); ?>">Terms & Conditions</a></label>
				</div>
				<button type="submit" class="btn btn-primary w-100 mb-4 mt-4" tabindex="11" id="register-btn">REGISTER</button>
				<div class="bottom text-center mb-4">
					<span class="helper-text mb-3 d-block">Already have an account? <a href="<?php AaceUtil::linkTo('auth/login'); ?>" tabindex="11">Login</a></span>
				</div>
			<?php } ?>
		</div>
	</div>
</form>
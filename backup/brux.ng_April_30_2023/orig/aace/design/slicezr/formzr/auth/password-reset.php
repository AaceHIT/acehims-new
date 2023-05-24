<div class="card mb-4">
	<div class="card-header bg-transparent border-bottom-0 py-3">
		<p class="fs-5 mb-0">Reset Password</p>
	</div>
	<div class="card-body">
		<?php
		$status = DesignQ::link()->status;
		UserModel::static()->auth()->logout();
		?>
		<form class="form-auth-small" method="post" action="<?php Utilizr::uri(); ?>">

			<?php if ($status === 'default') { ?>
				<p>Please enter your User ID below to receive instructions for resetting password.</p>
			<?php } elseif ($status === 'failure') { ?>
				<div class="alert alert-danger" role="alert">
					<i class="fa fa-times-circle"></i> User Not Found
				</div>
			<?php } ?>

			<div class="mb-3 form-floating">
				<input type="text" class="form-control" id="userid" placeholder="UserID" name="userid" required>
				<label for="userid">UserID</label>
			</div>

			<button type="submit" class="btn btn-primary w-100 mb-4 mt-4">RESET PASSWORD</button>

			<div class="bottom text-center mb-4">
				<span>Know your password? <a href="<?php AOUtil::linkTo('auth/login'); ?>">Login</a></span>
			</div>

		</form>
	</div>
</div>
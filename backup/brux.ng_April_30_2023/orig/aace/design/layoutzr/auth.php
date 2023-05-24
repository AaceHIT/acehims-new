<!doctype html>
<html lang="en">

	<head>
		<?php require(ORIG['BIT'] . 'head.php'); ?>
	</head>

	<body>

		<div id="layout" class="theme-purple">
			<div id="wrapper">
				<div class="d-flex h100vh">
					<div class="d-flex align-items-center auth-main w-100">
						<div class="auth-box">
							<div class="top mb-4">
								<div class="logo">
									<img src="<?php echo AssetQ::path('IMAGE'); ?>/logo-white.png" id="logo-auth">
								</div>
							</div>
							<?php
							if (Vars::hasData($frontend->form)) {
								$form = DesignQ::isForm($frontend->form);
								if (Vars::hasData($form)) {
									require($form);
								}
							} ?>
						</div>
					</div>
				</div>
			</div>
		</div>

	</body>
	<?php require(ORIG['BIT'] . 'js.php'); ?>

</html>
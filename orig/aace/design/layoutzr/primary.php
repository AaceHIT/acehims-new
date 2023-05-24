<!doctype html>
<html lang="en">

	<head>
		<?php require(ORIG['BIT'] . 'head.php'); ?>
	</head>

	<body>
		<div id="layout" class="theme-purple">
			<?php require(ORIG['PIECE'] . 'loader.php'); ?>
			<div id="wrapper">
				<?php
				require(ORIG['SLICE'] . 'navbar.php');
				require(ORIG['SLICE'] . 'sidebar.php');
				?>

				<div id="main-content">
					<div class="container-fluid">
						<?php
						require(ORIG['SLICE'] . 'header.php');

						// • form
						if (Vars::hasData($frontend->form)) {
							require(ORIG['VIEW'] . 'form.php');
						}

						// • table
						elseif (isset($frontend->table)) {
							require(ORIG['VIEW'] . 'table.php');
						}

						// • notify
						elseif (isset($frontend->notify)) {
							require(ORIG['VIEW'] . 'notify.php');
						}

						// • view
						else {
							if (isset($frontend->view)) {
								$view = DesignQ::isView($frontend->view);
								if (Vars::hasData($view)) {
									require($view);
								}
							} else {
								DesignQ::view($design);
							}
						}
						?>
					</div>
				</div>

			</div>
		</div>
	</body>

	<?php require(ORIG['BIT'] . 'js.php'); ?>

</html>
<div class="card member-card text-center mb-4">
	<div class="card-header bg-primary">
		<h4 class="my-4 text-light"><strong><?php echo Vars::safe($content->firstname) . ' ' . Vars::safe($content->middlename) . ' ' . Vars::safe($content->lastname); ?></strong></h4>
	</div>
	<p class="card-body">
	<div class="member-img mb-3">
		<?php
		$fallbackDP = AssetQ::path('image', false) . PS . 'dp.png';
		$patientDP = AssetQ::path('CLOUD_DP', false) . PS . $content->dp;
		?>

		<img src="<?php echo Vars::image($patientDP, $fallbackDP); ?>" class="rounded-circle">
	</div>
	<hr>
	<p><strong>Patient MID</strong><br> <?php echo Vars::safe($content->mid); ?></p>
	<p><strong>Date Of Birth</strong><br>
		<?php if (!empty($content->dob)) {
			echo Vars::safe($content->dob) . ' (' . TimeX::age($content->dob) . ' years)';
		} ?>
	</p>
	<p><strong>Email ID</strong><br> <?php echo Vars::safe($content->email); ?></p>
	<p><strong>Phone</strong><br> <?php echo Vars::safe($content->phone); ?></p>
	<hr>
	<p><strong>Address</strong><br>
		<?php
		if (!empty($content->address)) {
			echo nl2br($content->address);
		} ?>
	</p>
	<p> <strong>State Of Origin</strong><br> <?php echo Vars::safe($content->state); ?></p>
	<p><strong>Country</strong><br><?php echo Vars::safe($content->nationality); ?></p>
	<p><strong>Occupation</strong><br><?php echo Vars::safe($content->occupation); ?></p>
	<p><strong>NIN</strong><br> <?php echo Vars::safe($content->nin); ?></p>

</div>
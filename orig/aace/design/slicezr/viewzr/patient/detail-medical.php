<div class="card mb-4">
	<div class="card-header">
		General Report
	</div>
	<div class="card-body">
		<p><strong>Blood Group</strong><br> <?php echo Vars::safe($content->bloodgroup); ?></p>
		<p><strong>Insurance No.</strong><br> <?php echo Vars::safe($content->insuranceid); ?></p>
		<p><strong>Insurance Exp. Date</strong><br> <?php echo Vars::safe($content->insurancevalidity); ?></p>
		<p><strong>HMO Provider</strong><br>
			<?php if (!empty($content->hmo)) {
				$HMO = RecordUtil::getHMOByBIND($content->hmo, 'title');
				if (!empty($HMO['title'])) {
					echo $HMO['title'];
				}
			} ?></p>
		<strong>HMO Package</strong><br>
		<p><?php echo Vars::safe($content->hmoplan); ?></p>

		<hr>
		<p><strong>Next of Kin</strong><br> <?php echo Vars::safe($content->nok); ?></p>
		<p><strong>NOK Phone</strong><br> <?php echo Vars::safe($content->nokphone); ?></p>
		<p><strong>NOK Relationship</strong><br> <?php echo Vars::safe($content->nokrelationship); ?></p>
		<p> <strong>Guardian/Parent Details</strong><br> <?php echo Vars::safe($content->guardian); ?></p>
		<p><strong>Group</strong><br> <?php echo Vars::safe($content->group); ?></p>
	</div>
</div>
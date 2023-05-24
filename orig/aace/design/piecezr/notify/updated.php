<div class="card-body">
	<p class="text-success mt-2"><?php echo $label;?> has been updated successfully</p>
	<?php if (Vars::safe($logic, 'linkback')) { RedirectX::to(AaceUtil::link($logic->linkback), 10);?>
		<p><a href="<?php echo AaceUtil::link($logic->linkback); ?>" class="btn btn-outline-primary">Continue</a> </p>
	<?php } ?>
</div>
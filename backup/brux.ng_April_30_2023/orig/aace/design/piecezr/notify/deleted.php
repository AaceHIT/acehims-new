<div class="card-body">
	<p class="text-success mt-2"><?php echo $label;?> has been deleted successfully</p>
	<?php if (Vars::safe($logic, 'linkback')) { RedirectX::to(AOUtil::link($logic->linkback), 10);?>
		<p><a href="<?php echo AOUtil::link($logic->linkback); ?>" class="btn btn-outline-primary">Continue</a> </p>
	<?php } ?>
</div>
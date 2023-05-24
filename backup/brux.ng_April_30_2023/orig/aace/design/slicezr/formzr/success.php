<?php Vars::trace($design);?>
<div class="row clearfix">
	<div class="col-12">
		<div class="card mb-4">
			<div class="card-header bg-success text-white"><?php Vars::show($logic->title); ?></div>
			<div class="card-body">
				<p class="text-success"><?php Vars::show($logic->message); ?></p>
				<?php if (Vars::hasData($logic->linkback)) { ?>
					<p><a href="<?php NavUtil::goto($logic->linkback); ?>" class="btn btn-success">Continue</a> </p>
				<?php } ?>
			</div>
		</div>
	</div>
</div>
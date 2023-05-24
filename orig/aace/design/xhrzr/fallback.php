<?php
$design = ArrayX::toObj($design);
$metaTitle = '';
if (Vars::safe($design->meta->breadcrumb, 'secondary')) {
	$metaTitle .= $design->meta->breadcrumb->secondary;
}
if (Vars::safe($design->meta->breadcrumb, 'primary')) {
	if (Vars::hasData($metaTitle)) {
		$metaTitle .= ' • ';
	}
	$metaTitle .= $design->meta->breadcrumb->primary;
}
?>
<div class="row clearfix">
	<div class="col-12">
		<div class="card mb-4">
			<div class="card-header"><strong><?php echo $metaTitle; ?></strong></div>
			<div class="card-body">
				<h4 class="text-primary"><?php Vars::safe($design->meta->breadcrumb, 'secondary'); ?></h4>
				<?php if (Env::is('machine') === 'LOCAL') { ?>
						<?php if (isset($design->logic->method) && isset($design->logic->class)) { ?>
							<p class="alert alert-warning mt-3 mb-3 col-md-3"><?php echo $design->logic->class . '::' . $design->logic->method; ?>()</p>
						<?php }
						if (Vars::hasData($file)) { ?>
							<p class="alert alert-danger mt-3 mb-3 col-md-3"><?php Vars::trace('<strong>Awaiting → </strong> [' . $file . ']'); ?></p>
						<?php } ?>
				<?php } ?>
				<p class="alert text-primary">This is a default placeholder as the content for this request is unavailable at the moment</p>
			</div>
		</div>
	</div>
</div>
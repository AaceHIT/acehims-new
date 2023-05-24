<script src="<?php echo AssetQ::path('BUNDLES'); ?>/libscripts.bundle.js"></script>
<script src="<?php echo AssetQ::path('BUNDLES'); ?>/flot.bundle.js"></script>

<script src="<?php echo AssetQ::path('BUNDLES'); ?>/bootstrapDatepicker.bundle.js"></script>
<script src="<?php echo AssetQ::path('BUNDLES'); ?>/dropify.bundle.js"></script>
<script src="<?php echo AssetQ::path('BUNDLES'); ?>/dataTables.bundle.js"></script>
<script src="<?php echo AssetQ::path('plugin'); ?>/sweetalert/sweetalert.min.js"></script>
<script src="<?php echo AssetQ::path('BUNDLES'); ?>/mainscripts.bundle.js"></script>

<script src="<?php echo AssetQ::path('JS'); ?>/pages/index.js"></script>
<script src="<?php echo AssetQ::path('JS'); ?>/pages/forms/dropify.js"></script>
<script src="<?php echo AssetQ::path('JS'); ?>/pages/table/table-basic.js"></script>
<script src="<?php echo AssetQ::path('BUNDLES'); ?>/jquery-knob.bundle.js"></script>

<script src="<?php echo AssetQ::path('JS'); ?>/pages/table/jquery-datatables.js"></script>



<script>
	$(document).ready(function () {
		$(".basic-data-list").DataTable();
	});


</script>

<script>
	$(function () {
		$('.knob').knob({
			draw: function () {
			}
		});
	});
</script>


<script>
	imageUploadWithPreview('photoFile', 'photoPreview');
</script>
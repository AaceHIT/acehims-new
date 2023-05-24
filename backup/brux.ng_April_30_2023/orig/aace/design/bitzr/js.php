<script src="<?php echo AssetQ::path('JS'); ?>/jquery.js"></script>

<script src="<?php echo AssetQ::path('BUNDLES'); ?>/libscripts.bundle.js"></script>
<script src="<?php echo AssetQ::path('BUNDLES'); ?>/mainscripts.bundle.js"></script>

<script src="<?php echo AssetQ::path('BUNDLES'); ?>/dropify.bundle.js"></script>

<script src="<?php echo AssetQ::path('JS'); ?>/init/dropify.js"></script>

<script src="/aace.js"></script>

<script>
	$(window).on('load', function () {
	// $(document).ready(function () {
		setTimeout(function () {
			$('#wrapper').css('visibility', 'visible');
			$('#wrapper').fadeIn("fast");
		}, 100);
	});
</script>
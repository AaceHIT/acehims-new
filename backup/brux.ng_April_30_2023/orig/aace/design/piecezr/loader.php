<?php if (!Env::machine('LOCAL')) { ?>
	<div class="page-loader-wrapper text-center">
		<div class="loader" id="loader">
			<div><img src="<?php echo AssetQ::path('IMAGE'); ?>/logo-white.png"></div>
			<p class="mt-3 text-center">L O A D I N G </p>
		</div>
	</div>
<?php } ?>
<?php if (!Utilizr::isModel('auth')) { ?>
	<script src="<?php echo AssetQ::path('BUNDLES'); ?>/libscripts.bundle.js"></script>
	<script src="<?php echo AssetQ::path('BUNDLES'); ?>/mainscripts.bundle.js"></script>
	<script src="<?php echo AssetQ::path('BUNDLES'); ?>/dropify.bundle.js"></script>
	<script src="<?php echo AssetQ::path('JS'); ?>/init/dropify.js"></script>
	<script>
		$(window).on('load', function () {
			setTimeout(function () {
				$('#wrapper').css('visibility', 'visible');
				$('#wrapper').fadeIn("fast");
			}, 100);
		});
	</script>
<?php } ?>


<?php if (Utilizr::isActiveLink('auth/login')) { ?>
	<script src="<?php echo AssetQ::path('SLIQ_JS'); ?>/login.js"></script>
<?php } elseif (Utilizr::isActiveLink('auth/password/lost')) { ?>
	<script src="<?php echo AssetQ::path('SLIQ_JS'); ?>/last-password.js"></script>
<?php } elseif (Utilizr::isActiveLink('auth/signup/patient')) { ?>
	<script src="<?php echo AssetQ::path('SLIQ_JS'); ?>/signup-patient.js"></script>
<?php } elseif (Utilizr::isModel('setting')) { ?>
	<script src="<?php echo AssetQ::path('SLIQ_JS'); ?>/setting.js"></script>
<?php } ?>
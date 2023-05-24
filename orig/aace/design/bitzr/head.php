<?php $randVersion = RandomQ::digit(6);?>
<title><?php Vars::show($meta->title); ?></title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="">
<link rel="icon" type="image/x-icon" href="<?php echo AssetQ::path('favicon'); ?>/favicon.ico">
<link rel="stylesheet" href="<?php echo AssetQ::path('CSS'); ?>/fontawesome.css">
<link rel="stylesheet" href="<?php echo AssetQ::path('CSS'); ?>/main.css">
<link rel="stylesheet" href="<?php echo AssetQ::path('CSS'); ?>/aace.css">
<?php if (Utilizr::isModel('auth') || Utilizr::isModel('setting')) { ?>
	<link rel="stylesheet" href="<?php echo AssetQ::path('SLIQ_CSS'); ?>/auth.css">
<?php } ?>
<link rel="stylesheet" href="<?php echo AssetQ::path('CSS'); ?>/dropify.css">
<?php if (Env::is('machine') !== 'LOCAL' && !Utilizr::isModel('auth')) { ?>
	<style>
		#wrapper {
			visibility: hidden;
		}
	</style>
<?php } ?>

<script type="text/javascript" src="<?php echo AssetQ::path('SLIQ_JS'); ?>/jquery.js"></script>
<script type="text/javascript" src="<?php echo AaceUtil::jsSliq('ao.js').'?'.$randVersion; ?>"></script>
<link rel="stylesheet" href="<?php echo AssetQ::path('SLIQ_CSS'); ?>/ao.css<?php echo '?'.$randVersion;?>">
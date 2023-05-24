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

<link rel="stylesheet" href="<?php echo AssetQ::path('CSS'); ?>/dropify.css">

<link rel="stylesheet" href="/aace.css">
<?php if (Env::is('machine') !== 'LOCAL' && !Utilizr::isModel('auth')) { ?>
	<style>
		#wrapper {
			visibility: hidden;
		}
	</style>
<?php } ?>
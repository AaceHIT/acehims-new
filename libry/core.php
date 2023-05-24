<?php
//*** Core - The Core » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// ◇ System [offline | online]
if (defined('SYS') && SYS === 'OFFLINE') {
	exit('<p><strong>' . TYDI . '™</strong> • <em>The Project is offline!</em></p>');
}



// ◇ Clean - constant for clean string
const CLEAN_STRING = [
	#Strip out JS
	'@<script[^>]*?>.*?</script>@si',

	#Strip out HTML tags
	'@<[\ /\!]*?[^<>]*?>@si',

	#Strip style tags properly
	'@<style[^>]*?>.*?</style>@siU',

	#Strip multi-line comments
	'@<![\s\S]*?--[ \t\n\r]*>@'
];



// ◇ Loader - Load files from array, all or selected files from directory
$file = 'loader.php';
if (!is_file(MD['LIBRY'] . $file)) {
	$e = '<strong>' . TYDI . '™</strong> • Loader Unavailable!';
	if (ENV === 'STAGING') {
		$file = DS . $file;
	} elseif (ENV === 'DEVELOPMENT') {
		$file = MD['LIBRY'] . $file;
	}
	exit($e . ' → [<em>' . $file . '</em>]');
}
require MD['LIBRY'] . $file;



// ◇ Library - Load library files & autoload
$files = ['oversight', 'directory', 'path', 'vars', 'caller', 'autoload', 'env', 'session'];
Loader::directoryFile(MD['LIBRY'] . 'initial' . DS, $files);
Loader::directory(LIBRY['TRAIT']);
Loader::directory(LIBRY['ABSTRACT']);
Loader::directory(LIBRY['INTERFACE']);
Loader::directory(LIBRY['ESSENTIAL']);
Loader::directory(LIBRY['INSTANCE']);
Loader::directory(LIBRY['SPRY']);
Loader::directory(LIBRY['ROUTE']);
if (function_exists('autoload')) {
	spl_autoload_register('autoload');
}
require MD['LIBRY'] . 'initial' . DS . 'preset.php';



// ◇ Initialize - Environ (Machine), Fusion & Project Directory
$initialize = [];
$file = RD . 'env.php';
if (is_file($file)) {
	require $file;
}
$file = MD['LIBRY'] . 'initial' . DS . 'origin.php';
if (is_file($file)) {
	require $file;
}



// ◇ Load Settings & Customization
$env = strtolower(Env::is('ABBR'));
$platform = strtolower(Link::platform());
FileX::load(ORIG['INIT'] . 'config.php', 'config');
FileX::append(ORIG['INIT'] . 'routes' . DS . $platform . '.php', $platform . ' routes');
$machine = ORIG['INIT'] . 'machine' . DS . strtolower(MACHINE) . '.php';
if (!is_file($machine)) {
	$machine = ORIG['INIT'] . 'machine' . DS . strtolower($env) . '.php';
}
FileX::load($machine);
FileX::append(ORIG['INIT'] . $env . DS . 'env.php');
FileX::append(ORIG['INIT'] . $env . DS . $platform . '.php');



// ◇ Load & Initialize Utilizr
FileX::load(MD['LIBRY'] . 'initial' . DS . 'utilizr.php');
Utilizr::initialize();



// ◇ Router
Route::routzr();



// ◇ Playground - Development Only
Env::playground();
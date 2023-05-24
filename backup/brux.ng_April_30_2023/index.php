<?php
//*** Index - The Entry » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// ◇ Init
const TYDI = 'Tydi';
const DS = DIRECTORY_SEPARATOR;
const RD = __DIR__ . DS;
const PS = '/';
const MD = [
	'ENV' => RD . 'env' . DS,
	'LIBRY' => RD . 'libry' . DS,
	'ORIG' => RD . 'orig' . DS
];



// ◇ Fuse
const HOSTNAME = 'brux.ng';
const MACHINE = 'LIVE';
const ENV = 'STAGING';
const SYS = 'ONLINE';
const DOMAINS = [
	'BRUX' => HOSTNAME,
	'AACE' => 'aace.co',
];



// ◇ Core
$file = 'core.php';
if (!is_file(MD['LIBRY'] . $file)) {
	$e = '<strong>' . TYDI . '™</strong> • Core Unavailable!';
	if (defined('ENV')) {
		if (ENV === 'STAGING') {
			$file = DS . $file;
		} elseif (ENV === 'DEVELOPMENT') {
			$file = MD['LIBRY'] . $file;
		}
		exit($e . ' → [<em>' . $file . '</em>]');
	}
	$e = '<strong>' . TYDI . '™</strong> • Environment Undefined!';
	exit($e);
}
require MD['LIBRY'] . $file;
?>
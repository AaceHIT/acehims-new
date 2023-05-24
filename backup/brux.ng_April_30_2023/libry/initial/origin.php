<?php
//*** Origin - Project Directory » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// • Initialize - Router
if (!isset($initialize)) {
	$initialize = [];
}
Route::initialize($initialize);


// • Initialize - Project Directory
if (!defined('PD')) {
	$origin = 'zero' . DS;
	if (!empty(Route::property('origin'))) {
		$origin = Route::property('origin') . DS;
	}
	define('PD', MD['ORIG'] . $origin);
}

const ORIG = [
	'ARIO' => PD . 'ario' . DS,
	'CONTROL' => PD . 'build' . DS . 'controlizr' . DS,
	'MODEL' => PD . 'build' . DS . 'modelizr' . DS,
	'ORGAN' => PD . 'build' . DS . 'organizr' . DS,
	'API' => PD . 'build' . DS . 'apizr' . DS,
	'APP' => PD . 'build' . DS . 'appzr' . DS,
	'UTIL' => PD . 'build' . DS . 'utilizr' . DS,
	'CLOUD' => PD . 'cloud' . DS,
	'LAYOUT' => PD . 'design' . DS . 'layoutzr' . DS,
	'PAGE' => PD . 'design' . DS . 'pagezr' . DS,
	'SLICE' => PD . 'design' . DS . 'slicezr' . DS,
	'BIT' => PD . 'design' . DS . 'bitzr' . DS,
	'PIECE' => PD . 'design' . DS . 'piecezr' . DS,
	'FORM' => PD . 'design' . DS . 'slicezr' . DS . 'formzr' . DS,
	'TABLE' => PD . 'design' . DS . 'slicezr' . DS . 'tablezr' . DS,
	'VIEW' => PD . 'design' . DS . 'viewzr' . DS,
	'INIT' => PD . 'engine' . DS . 'initzr' . DS,
	'ROUT' => PD . 'engine' . DS . 'routzr' . DS,
	'SET' => PD . 'engine' . DS . 'setzr' . DS
];
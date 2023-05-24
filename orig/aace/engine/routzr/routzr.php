<?php
//*** AACE - Router » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

$init = [];
$config = Env::property('config');


// • Routing::API
if (Route::isAPI()) {
	// 	SetQ::isKeyNotEmptyCopy($config, $init, 'project');
// 	SetQ::isKeyNotEmptyCopy($config, $init, 'timezone');
// 	SetQ::isKeyNotEmptyCopy($config, $init, 'routes');
// 	SetQ::isKeyNotEmptyCopy($config, $init, 'view');
// 	$api = new API();
// 	$api::initialize($init);
// 	$api::ignite();
// 	$api::terminate();
}



// • Routing::App
elseif (Route::isAPP()) {
	SetQ::isKeyNotEmptyCopy($config, $init, 'project');
	SetQ::isKeyNotEmptyCopy($config, $init, 'timezone');
	$app = new App;
	$app::initialize($init);
	$app::ignite();
	$app::terminate();
}



// • Routing::Site
elseif (Route::isSite()) {
	$url = StringX::strip(URLX::base(), 'aace.');
	if (StringX::begin($url, 'https://brux.')) {
		RedirectX::instant('/app/');
	} else {
		$url = StringX::strip(URLX::base(), 'www.');
		$url = StringX::strip($url, 'https://');
		RedirectX::instant('https://app.' . $url);
	}
	// 	$init = array_merge($init, ['langpath' => false, 'spet' => false]);
// 	SetQ::isKeyNotEmptyCopy($config, $init, 'project');
// 	SetQ::isKeyNotEmptyCopy($config, $init, 'timezone');
// 	$site = new Site();
// 	$site::initialize($init);
// 	$site::toWWW();
// 	$site::launch();
}
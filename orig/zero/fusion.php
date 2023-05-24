<?php
//*** ZERO Fusion » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// • Error Check
if (Vars::isNot($base)) {
	Vars::error('FUSION', 'Base is required');
} elseif (Vars::isNot($base->domain)) {
	Vars::error('FUSION', 'Base domain is required');
}


// • Initialize
$initialize['origin'] = FolderX::name(__DIR__);


// • Version & Environment
$platform = strtoupper(Route::platform());
$uri = Route::uri('IS');
$initialize['version'] = 'oreo';

if ($platform === 'API') {

	// » Production
	$initialize['version'] = 'onion';
	Env::$environment = 'PRODUCTION';

	// » Staging
	if (StringX::contain($uri, '/stage/')) {
		$initialize['version'] = 'stage';
		Env::$environment = 'STAGING';
	}

	// » Development
	if (StringX::contain($uri, '/oreo/')) {
		Env::$environment = 'DEVELOPMENT';
	}
}
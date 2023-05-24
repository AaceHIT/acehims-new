<?php
//*** AACE - Development Configuration » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// • Database
$config['database'] = [
	'aace' => [
		'name' => 'osaweren_aacedev',
		'user' => 'osaweren_dev',
		'password' => '6{LHK%1&[I[J'
	]
];


// • Append Config
Env::config($config);


// • CORS
const CORS = '*';
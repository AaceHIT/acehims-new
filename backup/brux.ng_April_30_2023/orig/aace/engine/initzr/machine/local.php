<?php
//*** AACE - Local Configuration » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// • Database
$config['database'] = [
	'aace' => [
		'name' => 'tydi_aace',
		'user' => 'laro',
		'password' => 'LARO'
	]
];


// • Append Config
Env::config($config);


// • CORS
const CORS = '*';
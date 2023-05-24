<?php
//*** AACE - Staging Configuration » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// • Database
$config['database'] = [
	'aace' => [
		'name' => 'osaweren_aacestag',
		'user' => 'osaweren_stag',
		'password' => '{ZET=p[Xa}b9'
	]
];


// • Append Config
Env::config($config);


// • CORS
const CORS = '*';
<?php
//*** Env - Environ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

Link::initialize();
$base = Link::property('base');
$uri = Link::property('uri');

if (Vars::hasData($base) && defined('DOMAINS')) {
	$fusion = 'fusion.php';

	// • AACE
	if (isset(DOMAINS['AACE'])) {
		if (StringX::in($base->domain, 'aace.' . DOMAINS['BRUX']) || StringX::end($base->domain, DOMAINS['AACE'])) {
			$fusion = MD['ORIG'] . 'aace' . DS . $fusion;
			$initialize['ario'] = PS . 'aace';
		}
	}


	// • Load::FUSION
	if (is_file($fusion)) {
		require $fusion;
	}
}
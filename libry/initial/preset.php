<?php
//*** Core Preset » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

// • PHP - Minimum Required
Env::php('7.4');


// • Session
$Session = new Session;
$Session->start();


// • Error Reporting & HTTP Handling
if (Env::is('PROD')) {
	error_reporting(0);
	HTTPX::init('HTML');
} elseif (Env::is('STAG')) {
	HTTPX::init('PRINT');
} elseif (Env::is('DEV')) {
	HTTPX::init('RAW');
}


// • Redirect (HTTP triggered redirect)
HTTPX::redirect();


// • Timezone
ServerX::Timezone();


// • Enforce SSL
ServerX::secure();
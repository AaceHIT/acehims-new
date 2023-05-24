<?php
//*** ServerX » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class ServerX {
	// ◇ ---- HOST • Server Host or Boolean (FALSE)
	public static function host() {
		if (!empty($_SERVER['HTTP_HOST'])) {
			return strtolower($_SERVER['HTTP_HOST']);
		}

		return false;
	}



	// ◇ ---- NAME • Server Name or Boolean (FALSE)
	public static function name() {
		if (!empty($_SERVER['SERVER_NAME'])) {
			return strtolower($_SERVER['SERVER_NAME']);
		}

		return false;
	}



	// ◇ ---- IP • Server IP or Boolean (FALSE)
	public static function ip() {
		if (!empty($_SERVER['SERVER_ADDR'])) {
			return strtolower($_SERVER['SERVER_ADDR']);
		}

		return false;
	}



	// ◇ ---- INFO • Server Information
	public static function info($i = 'INFO') {
		if ($i === 'PHP') {
			return phpversion();
		}
		if ($i === 'APACHE') {
			return apache_get_version();
		}
		if ($i === 'SYSTEM') {
			return PHP_OS;
		}
		if ($i === 'OS') {
			return php_uname('s');
		}
		if ($i === 'HOSTNAME') {
			return php_uname('n');
		}
		if ($i === 'RELEASE') {
			return php_uname('r');
		}
		if ($i === 'VERSION') {
			return php_uname('v');
		}
		if ($i === 'MACHINE') {
			return php_uname('m');
		}
		if ($i === 'INFO') {
			return php_uname();
		}
		if ($i === 'IP' && !empty($_SERVER['SERVER_ADDR'])) {
			return strtolower($_SERVER['SERVER_ADDR']);
		}

		return false;
	}



	// ◇ ---- HOSTNAME • Server Hostname (local machine) or Boolean (FALSE)
	public static function hostname() {
		if (!empty(gethostname())) {
			return strtolower(gethostname());
		}

		return false;
	}





	// ◇ ---- TIMEZONE • Set Timezone »
	public static function timezone($timezone = '') {
		if (Vars::isEmpty($timezone)) {
			if (!empty(Env::$config['timezone'])) {
				$timezone = Env::$config['timezone'];
			}
		}
		return TimeX::zone($timezone);
	}





	// ◇ ---- SECURE • Redirect to Secured URL » Boolean (true)
	public static function secure() {
		if (!URLX::is('SECURE') && strtolower(Route::property('platform')) !== 'api') {
			$secureURL = URLX::to('SELF', 'SECURE');
			RedirectX::html($secureURL);
		}
		return true;
	}

} // end of class ~ ServerX
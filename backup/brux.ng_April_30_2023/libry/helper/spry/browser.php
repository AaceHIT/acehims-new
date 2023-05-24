<?php
//*** BrowserQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class BrowserQ {

	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- IS • Browser Agent » String
	public static function is() {
		return strtolower($_SERVER['HTTP_USER_AGENT']);
	}





	public static function ie($operator = false, $version = NULL) {
		if (!preg_match('/MSIE (.*?);/', $_SERVER['HTTP_USER_AGENT'], $matches)
			|| preg_match('#Opera#', $_SERVER['HTTP_USER_AGENT'])) {
			return false === $operator ? false : NULL;
		}

		if (false !== $operator
			&& in_array($operator, array('<', '>', '<=', '>=', '==', '!='))
			&& in_array((int) $version, array(5, 6, 7, 8, 9, 10))) {
			return eval('return (' . $matches[1] . $operator . $version . ');');
		} else {
			return (int) $matches[1];
		}
	}





	public static function isIE($operator = '', $version = '') {
		if (!empty($operator) && !empty($version)) {
			$resolve = self::ie($operator, $version);
		} else {
			$resolve = self::ie();
		}
		if (!$resolve) {
			return false;
		}
		return true;
	}





	public static function isOpera($flag = 'MOBI') {
		if ($flag == 'MOBI') {
			if (StringX::in(self::is(), 'opera mobi')) {
				return true;
			}
		} elseif ($flag == 'MINI') {
			if (StringX::in(self::is(), 'opera mini')) {
				return true;
			}
		}
		return false;
	}





	public static function info() {
		if (self::isIE()) {
			$resolve = 'ie';
		} elseif (self::isOpera('MOBI')) {
			$resolve = 'operamobi';
		} elseif (self::isOpera('MINI')) {
			$resolve = 'operamini';
		} else {
			$resolve = self::is();
		}
		return strtolower($resolve);
	}

} // End Of Class ~ BrowserQ
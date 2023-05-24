<?php
//*** HTTPX » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class HTTPX {

	// ◇ ---- __call • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- INIT • Trigger HTTP Errors »
	public static function init($req = null) {
		if (ArrayX::isKey($request, 'olink') && $request['olink'] === 'ehttp') {
			return self::error($req, 'DATA');
		}
		return false;
	}





	// ◇ ---- ERROR • Handle HTTP Errors »
	public static function error($req = null, $request = []) {
		if ($request === 'DATA') {
			$request = self::get('DATA');
		}

		$uri = URLX::uri();
		if (ArrayX::isKeyNotEmpty($request, 'type')) {
			$type = $request['type'];
		} else {
			$type = '';
		}
		if ($req === 'RAW') {
			Vars::abort(array_merge(['error' => 'HTTP ' . $type, 'uri' => $uri], $request));
		} elseif ($req === 'PRINT') {
			oversight('HTTP • E' . $type, 'Not Found ~ An error occurred on your request', $uri);
		} elseif ($req === 'HTML') {
			exit('TODO: HTML HTTP Error View');
		}
		return false;
	}





	// ◇ ---- METHOD • HTTP Method
	public static function method($input = '') {
		if ($input === 'IS') {
			$method = false;
			if (!empty($_SERVER['REQUEST_METHOD'])) {
				$method = $_SERVER['REQUEST_METHOD'];
			} elseif (isset($_REQUEST)) {
				$method = 'REQUEST';
			}
			return $method;
		} elseif (!empty($input)) {
			$input = strtolower($input);
			if (method_exists(__CLASS__, $input)) {
				return self::$input('IS');
			}
		}

		return false;
	}





	// ◇ ---- GET •
	public static function get($option) {
		if (isset($_GET)) {
			if (!empty($option)) {
				if ($option === 'IS' && $_SERVER['REQUEST_METHOD'] == 'GET') {
					return true;
				}
				if ($option === 'EMPTY' && !empty($_GET)) {
					return true;
				}
				if ($option === 'DATA' && isset($_GET)) {
					return $_GET;
				}
			}
		}

		return false;
	}





	// ◇ ---- POST •
	public static function post($option) {
		if (isset($_POST)) {
			if (!empty($option)) {
				if ($option === 'IS' && $_SERVER['REQUEST_METHOD'] == 'POST') {
					return true;
				}
				if ($option === 'EMPTY' && !empty($_POST)) {
					return true;
				}
				if ($option === 'DATA' && isset($_POST)) {
					return $_POST;
				}
			}
		}

		return false;
	}





	// ◇ ---- REQUEST •
	public static function request($option) {
		if (!empty($option) && !empty($_REQUEST)) {
			if ($option === 'IS') {
				return true;
			}
			if ($option === 'DATA') {
				return $_REQUEST;
			}
		}

		return false;
	}





	// ◇ ---- DATA •
	public static function data($method) {
		if (!empty($method)) {
			$method = strtolower($method);
			if (method_exists(__CLASS__, $method)) {
				return self::$method('DATA');
			}
		}

		return false;
	}





	// ◇ ---- PARAM •
	public static function param($param = 'DATA', $method = 'REQUEST') {
		if ($param === 'DATA') {
			return self::data($method);
		} elseif (Vars::hasData($param)) {
			if (Vars::isString($param)) {
				$data = self::data($method);
				if (Vars::hasData($data) && Vars::isArray($data) && ArrayX::isKey($data, $param)) {
					return $data[$param];
				}
			}

			//...Array
			elseif (Vars::isArray($param)) {
				foreach ($param as $key) {
					$res[$key] = self::param($key, $method);
				}
				return $res;
			}
		}
		return false;
	}





	// ◇ ---- AJAX • Check Request Type & Method » Boolean
	public static function ajax($input = null) {
		// * TODO: Run a Test on this code!
		if ($input === 'IS' && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
			return true;
		} elseif (Vars::isNotEmpty($input)) {
			if (self::method($input) && self::ajax()) {
				return true;
			}
		}
		return false;
	}





	// ◇ ---- REDIRECT • URL Redirect (triggered) »
	public static function redirect($delay = false) {
		if (isset($_REQUEST['redirect'])) {
			$url = urldecode($_REQUEST['redirect']);
			if ($url && $url !== '') {
				if (!StringX::begin($url, 'http:/') && !StringX::begin($url, 'https:/')) {
					$url = URLX::base() . '/' . $url;
				} else {
					$url = StringX::cropBegin($url, 'http://', '');
					$url = StringX::cropBegin($url, 'https://', '');

					// * For safety reasons on URL
					$url = StringX::cropBegin($url, 'http:/');
					$url = StringX::cropBegin($url, 'https:/');

					$url = URLX::to($url, 'SECURE');
				}
				return RedirectX::to($url, $delay, true);
			}
		}
		return false;
	}





	// ◇ ---- IS SECURE • Check for HTTPS » Boolean
	public static function isSecure() {
		$https = 'INACTIVE';
		$port = 'DEFAULT';
		if (!empty($_SERVER['HTTPS'])) {
			$https = $_SERVER['HTTPS'];
		}
		if ($https !== 'INACTIVE') {
			$https == 'ACTIVE';
		}
		if (!empty($_SERVER['SERVER_PORT'])) {
			$port = $_SERVER['SERVER_PORT'];
		}
		if ($https == 'ACTIVE' || $port == 443) {
			return true;
		} elseif (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
			return true;
		} elseif (!empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] == 'on') {
			return true;
		}
		return false;
	}




	// ◇ ---- HTTPS • Redirect to HTTPS »
	public static function https($url = '', $permanent = false) {
		$protocol = self::isSecure() ? 'https' : 'http';
		if ($protocol !== 'https') {
			$res = 'https:#';
			if (!empty($url)) {
				$res .= $url;
			} else {
				if (!empty($_SERVER['HTTP_HOST'])) {
					$res .= $_SERVER['HTTP_HOST'];
				}
				if (!empty($_SERVER['REQUEST_URI'])) {
					$res .= $_SERVER['REQUEST_URI'];
				}
			}
			if (filter_var($res, FILTER_VALIDATE_URL) !== false) {
				$_SESSION['oSSL'] = 'IMPOSED';
				if ($permanent === true) {
					header('HTTP/1.1 301 Moved Permanently');
				}
				return RedirectX::instant($res);
			}
		}
	}





	// ◇ ---- SECURE • Enforce HTTPS »
	public static function imposeHTTPS($enforce = true, $url = '', $permanent = false) {
		if ($enforce === true) {
			return self::https($url, $permanent);
		} else {
			if (session_status() !== PHP_SESSION_ACTIVE) {
				// TODO: Trigger error [requiring $session->start() call]
			}

			if (empty($_SESSION['oSSL']) || $_SESSION['oSSL'] !== 'IMPOSED') {
				return self::https($url, $permanent);
			}
		}
		return false;
	}

} // End Of Class ~ HTTPX
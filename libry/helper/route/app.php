<?php
//*** App » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class App extends Route {

	// ◇ ---- __call • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- PROPERTY • Get Class Property » Boolean | Mixed
	public static function property($property, $req = 'GET') {
		if (Vars::isEmpty($property) || Vars::isEmpty($req)) {
			return false;
		}

		// • GET
		elseif ($req === 'GET') {
			if (Vars::isString($property)) {
				if ($property == 'PROPERTIES') {
					return get_class_vars(__CLASS__);
				}
				if (isset(self::$$property)) {
					return self::$$property;
				} else {
					return parent::property($req);
				}
			}

			// • ARRAY
			elseif (Vars::isArray($property)) {
				$o = [];
				foreach ($property as $value) {
					if (isset(self::$$value)) {
						$o[$value] = self::$$value;
					}
				}
				return $o;
			}
		}
		// • SET
		elseif ($req === 'SET') {
		}

		return false;
	}





	// ◇ ---- RESOLVE • Resolve & Return Response »
	public static function resolve($response) {
		if (Vars::isEmpty($response)) {
			$response = ErrorX::string('NO_RESPONSE');
		} elseif (Vars::isString($response) && StringX::begin($response, 'ERROR_')) {
			$response = ErrorX::string(StringX::cropBegin($response, 'ERROR_'));
		}

		$response = ErrorX::data($response);
		if (ArrayX::isKeyNotEmpty($response, 'status') && $response['status'] === 'F9') {
			// * TODO: Log Error!
		}
		$response = parent::resolver($response);
		return parent::output($response, 'TRACE');
	}





	// ◇ ---- INITIALIZE • Initialize API » Boolean
	public static function initialize($setting = [], $libraryOfSubdomain = []) {
		if (Vars::isNotEmpty($setting)) {
			parent::initialize($setting, $libraryOfSubdomain);
		}
		parent::codify();
		return true;
	}





	// ◇ ---- IS •
	public static function is($req = 'APP', $method = 'REQUEST') {

		// • Check if Platform is APP
		if ($req === 'APP') {
			return parent::isApp();
		}

		// • Check from Parent class
		else {
			return parent::is($req, $method);
		}
	}





	// ◇ ---- IGNITE •
	public static function ignite() {
		$organizr = parent::organizr();
		$object = parent::$codify->name;
		$method = parent::$codify->method;
		if (StringX::contain($organizr, DS . 'appzr' . DS)) {
			$object .= 'App';
		} elseif (StringX::contain($organizr, DS . 'organizr' . DS)) {
			$object .= 'zr';
		}
		FileX::load($organizr, 'load App', '', $object);
		$caller = new $object();
		$method = lcfirst($method);
		if (!method_exists($caller, $method)) {
			if (method_exists($caller, 'fallback')) {
				return $caller->fallback($method, $object);
			}
			$error = ['code' => 'C501DE', 'title' => 'Route Undefined', 'object' => $object . '::' . $method . '()'];
			return self::resolve($error);
		}
		return $caller->$method();
	}





	// ◇ ---- NAVIGATE •
	public static function navigate($link, $param = null) {
		$uri = parent::uri('IS');
		if ($link === '/') {
			$link = '';
		} elseif ($link === 'SELF') {
			$link = $uri;
		}
		if (StringX::begin($uri, '/app/') && !StringX::begin($link, '/app/')) {
			$link = '/app/' . $link;
		}
		if (!StringX::begin($link, '/')) {
			$link = '/' . $link;
		}
		if (Vars::hasData($param)) {
			if (Vars::isArray($param)) {
				$param = '?' . http_build_query($param);
			}
			$link .= $param;
		}
		return $link;
	}

} //> End Of Class ~ App
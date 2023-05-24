<?php
//*** API » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class API extends Route {

	// ◇ PROPERTY
	public static $view;
	protected static $directory;





	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return Vars::error(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return Vars::error(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- PROPERTY • Get Class Property » Boolean | Mixed
	public static function property($property, $req = 'GET') {
		if (Vars::isEmpty($property) || Vars::isEmpty($req)) {
			return false;
		}

		// • GET
		elseif ($req === 'GET') {
			if (Vars::isString($property)) {
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





	// ◇ ---- INIT • Initialize API » Boolean
	public static function initialize($setting = [], $libraryOfSubdomain = []) {

		// » VERIFY - Is Platform API?
		if (!parent::isAPI()) {
			return self::resolve(['code' => 'C400DE', 'detail' => 'Initialization :: Not API']);
		}

		// » VIEW - Set
		if (ArrayX::isKeyNotEmpty($setting, 'view')) {
			$views = ['AUTO', 'JSON', 'TRACE', 'DUMP', 'PRINT', 'STRING'];
			if (ArrayX::isNotValue($views, $setting['view'])) {
				return self::resolve(['code' => 'C400DE', 'detail' => 'Initialization → Invalid View (' . $setting['view'] . ')']);
			}
			self::$view = $setting['view'];
			unset($setting['view']);
		} else {
			self::$view = 'JSON';
		}


		// » SECURE
		if (!self::isSecure()) {
			return self::resolve(['code' => 'C400IE', 'detail' => 'Implementation → Bad URL (' . parent::$url . ')']);
		}


		// » ROUTES - Set
		if (ArrayX::isKeyNotEmpty($setting, 'routes')) {
			if (Vars::isNotEmpty(parent::$link->version) && ArrayX::isKey($setting['routes'], parent::$link->version)) {
				parent::$routes = $setting['routes'][parent::$link->version];
			} else {
				parent::$routes = $setting['routes'];
			}
			unset($setting['routes']);
		}

		if (Vars::isEmpty(parent::$routes)) {
			return self::resolve(['code' => 'C501DE', 'detail' => 'Developer → Routes Undefined']);
		}


		//...Initialize/Re-Initialize Route
		if (Vars::isNotEmpty($setting)) {
			parent::initialize($setting, $libraryOfSubdomain);
		}


		//...Codify
		parent::codify();


		//...Verify Routes
		if (!self::isValid()) {
			return self::resolve(['code' => 'C498IE', 'title' => 'Route Unsupported', 'message' => 'Route is not supported']);
		}

		//...Initialize & Set Directory (append version path, if available)
		if (Vars::isEmpty(self::$directory)) {
			self::$directory = ObjectX::make();
		}

		self::$directory->utilizr = ORIG['util'];
		if (FolderX::is(self::$directory->utilizr . parent::$link->version)) {
			self::$directory->utilizr .= parent::$link->version . DS;
		}

		self::$directory->layoutzr = ORIG['layout'];
		if (FolderX::is(self::$directory->layoutzr . parent::$link->version)) {
			self::$directory->layoutzr .= parent::$link->version . DS;
		}

		self::$directory->slicezr = ORIG['slice'];
		if (FolderX::is(self::$directory->slicezr . parent::$link->version)) {
			self::$directory->slicezr .= parent::$link->version . DS;
		}

		self::$directory->viewzr = ORIG['view'];
		if (FolderX::is(self::$directory->viewzr . parent::$link->version)) {
			self::$directory->viewzr .= parent::$link->version . DS;
		}

		//...Return True
		return true;
	}





	// ◇ ---- IS • ... »
	public static function is($req = 'API', $method = 'REQUEST') {

		//...Check if Platform is API
		if ($req === 'API') {
			return parent::isAPI();
		}

		//...Check from Parent class
		else {
			return parent::is($req, $method);
		}
	}





	// ◇ ---- DISPLAY • Output API Response »
	public static function display($response, $view = '') {
		if (Vars::isEmpty($view)) {
			if (Vars::isNotEmpty(self::$view)) {
				$view = self::$view;
			} else {
				$view = 'JSON';
			}
		}

		if ($view === 'JSON') {
			parent::output($response, $view);
			return exit;
		} else {
			return parent::output($response, $view);
		}
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
			// TODO: Log Error!
		}
		$response = Vars::resolver($response);
		return self::display($response);
	}





	// ◇ ---- IGNITE • ... »
	public static function ignite() {
		$organizr = parent::organizr();
		$object = parent::$codify->name;
		$method = parent::$codify->method;
		if (StringX::contain($organizr, DS . 'master' . DS)) {
			$object .= 'Master';
			$method = StringX::cropBegin($method, 'master');
		}
		if (StringX::contain($organizr, DS . 'admin' . DS)) {
			$object .= 'Admin';
			$method = StringX::cropBegin($method, 'admin');
		}
		if (StringX::contain($organizr, DS . 'user' . DS)) {
			$object .= 'User';
			$method = StringX::cropBegin($method, 'user');
		}
		if (StringX::contain($organizr, DS . 'apizr' . DS)) {
			$object .= 'API';
		} elseif (StringX::contain($organizr, DS . 'organizr' . DS)) {
			$object .= 'zr';
		}
		FileX::load($organizr, 'load API', '', $object);
		$caller = new $object;
		$method = lcfirst($method);
		if (!method_exists($caller, $method)) {
			$error = ['code' => 'C501DE', 'title' => 'Route Undefined', 'object' => $object . '::' . $method . '()'];
			return self::resolve($error);
		}
		return self::resolve($caller->$method());
	}

} // End Of Class ~ API
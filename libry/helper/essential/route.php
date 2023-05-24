<?php
//*** Route » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class Route extends Link {

	// ◇ PROPERTY
	public static $codify;
	public static $ario;
	protected static $origin;
	protected static $project;
	protected static $routes = [];





	// ◇ ---- __call • Non-Existent Static Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- INITIALIZE • Initialize » Boolean [True]
	public static function initialize($setting = [], $libraryOfSubdomain = []) {

		// » ARIO - Set
		if (ArrayX::isKeyNotEmpty($setting, 'ario')) {
			self::$ario = $setting['ario'];
		}

		// » Initialize link
		if (ArrayX::isKeyNotEmpty($setting, 'version')) {
			parent::initialize(['version' => $setting['version']], $libraryOfSubdomain);
		} else {
			parent::initialize([], $libraryOfSubdomain);
		}

		// » ROUTES - Set
		if (ArrayX::isKeyNotEmpty($setting, 'routes')) {
			self::$routes = $setting['routes'];
		}

		// » Prepare & Set Origin
		if (ArrayX::isKeyNotEmpty($setting, 'origin')) {
			self::$origin = $setting['origin'];
		}
		if (Vars::isEmpty(self::$origin)) {
			$origin = parent::$base->spring;
			if (Vars::isNotEmpty($origin) && ArrayX::isNotValue(['api', 'app', 'www'], $origin)) {
				self::$origin = $origin;
			} else {
				self::$origin = 'zero';
			}
		}


		// » Prepare & Set Project
		if (ArrayX::isKeyNotEmpty($setting, 'project')) {
			self::$project = $setting['project'];
		} else {
			self::$project = ['title' => TYDI];
		}
		self::$project['engine'] = TYDI . '™';

		return true;
	}





	// ◇ ----- ROUTZR • Load Routzr (detected or provided - if available) »
	public static function routzr($routzr = '') {
		if (Vars::isNotEmpty($routzr)) {
			FileX::load($routzr, '', [], 'Routzr');
		} else {
			FileX::append(ORIG['ROUT'] . parent::$platform . '.php');
			FileX::append(ORIG['ROUT'] . 'routzr.php');
		}
		Vars::trace('<p><b>WARNING</b> :: Routzr • Unavailable or Not Terminated! <br><em>(If intentional, comment line ' . __LINE__ . ' on ' . FileX::base(__FILE__) . ')</em></p>');
	}





	// ◇ ----- URL •
	public static function isURL($req = 'DATA', $method = 'REQUEST') {
		if ($req === 'DATA') {
			return parent::$base->url;
		} elseif (Vars::isNotEmpty($req)) {
			if ($req === parent::$base->url && parent::method($method)) {
				return true;
			}
		}
		return false;
	}





	// ◇ ----- HOST •
	public static function isHost($req = 'DATA', $method = 'REQUEST') {
		if ($req === 'DATA') {
			return parent::$base->host;
		} elseif (Vars::isNotEmpty($req)) {
			if ($req === parent::$base->host && parent::method($method)) {
				return true;
			}
		}
		return false;
	}





	// ◇ ----- HOSTNAME •
	public static function isHostname($req = 'DATA', $method = 'REQUEST') {
		if ($req === 'DATA') {
			return parent::$base->hostname;
		} elseif (Vars::isNotEmpty($req)) {
			if ($req === parent::$base->hostname && parent::method($method)) {
				return true;
			}
		}
		return false;
	}





	// ◇ ----- DOMAIN •
	public static function isDomain($req = 'DATA', $method = 'REQUEST') {
		if ($req === 'DATA') {
			return parent::$base->domain;
		} elseif (Vars::isNotEmpty($req)) {
			if ($req === parent::$base->domain && parent::method($method)) {
				return true;
			}
		}
		return false;
	}





	// ◇ ----- SPRING •
	public static function isSpring($req = 'DATA') {
		if ($req === 'DATA') {
			return parent::$base->spring;
		} elseif (Vars::isNotEmpty($req)) {
			if ($req === parent::$base->spring) {
				return true;
			}
		}
		return false;
	}





	// ◇ ----- ORIGIN •
	public static function isOrigin($req = 'DATA') {
		if ($req === 'DATA') {
			return self::$origin;
		} elseif (Vars::isNotEmpty($req)) {
			if ($req === self::$origin) {
				return true;
			}
		}
		return false;
	}





	// ◇ ----- PROJECT •
	public static function isProject() {
		return self::$project;
	}





	// ◇ ----- IS_SITE •
	public static function isSite() {
		if (self::platform('DATA') === 'site') {
			return true;
		}
		return false;
	}





	// ◇ ----- IS_APP •
	public static function isApp() {
		if (self::platform('DATA') === 'app') {
			return true;
		}
		return false;
	}






	// ◇ ----- IS_API •
	public static function isAPI() {
		if (self::platform('DATA') === 'api') {
			return true;
		}
		return false;
	}





	// ◇ ----- IS LANDING •
	public static function isLanding($model = '', $routes = [], $action = '') {
		if (Vars::isEmpty($model)) {
			$model = self::$codify->model;
		}

		if (Vars::isEmpty($action)) {
			$action = self::$link->action;
		}

		if (Vars::isEmpty($routes)) {
			$routes = self::$routes;
		}

		if ($action === 'landing') {
			if (ArrayX::isKey($routes, $model) || (ArrayX::isValue($routes, $model) && is_numeric(ArrayX::keyByValue($routes, $model)))) {
				return true;
			}
		}

		return false;
	}





	// ◇ ----- IS MODEL •
	public static function isModel($req = 'IS') {
		// » Retrieve value of link-action
		if ($req === 'IS') {
			return self::$codify->model;
		}
	}





	// ◇ ----- IS VALID •
	public static function isValid($model = '', $action = '', $routes = []) {
		if (Vars::isEmpty($model)) {
			$model = self::$codify->model;
		}

		if (Vars::isEmpty($action)) {
			$action = self::$link->action;
		}

		if (Vars::isEmpty($routes)) {
			$routes = self::$routes;
		}

		if ($action === 'landing') {
			return self::isLanding($model, $routes, $action);
		} else {
			if (ArrayX::isKey($routes, $model) && ArrayX::isValue($routes[$model], $action)) {
				return true;
			}
		}

		return false;
	}





	// ◇ ----- CODIFY • Set Class & Method for Link » Boolean
	public static function codify() {
		$codify = [];

		// » Model
		$model = StringX::swap(parent::$link->is, '-', '_');
		$model = StringX::noSpace(strtolower($model));
		if (Vars::isNotEmpty($model)) {
			$codify['model'] = $model;
		}

		// » Name
		$name = StringX::swapSpace(parent::$link->is, '-', true);
		$name = StringX::swapSpace($name, '_', true);
		$name = StringX::noSpace(ucwords(strtolower($name)));
		if (Vars::isNotEmpty($name)) {
			$codify['name'] = $name;
		}

		// » Method
		$method = StringX::swapSpace(parent::$link->action, '-', true);
		$method = StringX::swapSpace($method, '_', true);
		$method = lcfirst(StringX::noSpace(ucwords(strtolower($method))));
		if (Vars::isNotEmpty($method)) {
			$codify['method'] = $method;
		}


		// » Status
		$codify['status'] = parent::$link->status;


		// » View
		$view = '';


		self::$codify = ArrayX::toObj($codify);
		return true;
	}





	// ◇ ----- ORGANIZR • Organizer »
	public static function organizr() {
		if (parent::$platform === 'site') {
			$file = ORIG['ORGAN'] . 'site.php';
		}

		// » If platform is not Site
		else {
			$directory = ORIG['ORGAN'];
			$platformDirectory = ORIG[strtoupper(parent::$platform)];

			if (Vars::isNotEmpty(parent::$link->version) && FolderX::is($directory . parent::$link->version . DS)) {
				$directory .= parent::$link->version . DS;
			}

			if (Vars::isNotEmpty(parent::$link->version) && FolderX::is($platformDirectory . parent::$link->version . DS)) {
				$platformDirectory .= parent::$link->version . DS;
			}

			$uri = self::property('URI');
			if (StringX::contain($uri, PS . 'master' . PS)) {
				$file = $platformDirectory . 'master' . DS . strtolower(self::$codify->name) . '.php';
			} elseif (StringX::contain($uri, PS . 'admin' . PS)) {
				$file = $platformDirectory . 'admin' . DS . strtolower(self::$codify->name) . '.php';
			} elseif (StringX::contain($uri, PS . 'user' . PS)) {
				$file = $platformDirectory . 'user' . DS . strtolower(self::$codify->name) . '.php';
			} else {
				$file = $platformDirectory . strtolower(self::$codify->name) . '.php';
			}

			if (!FileX::is($file)) {
				$file = StringX::stripLast($platformDirectory, parent::$link->version . DS) . strtolower(self::$codify->name) . '.php';
			}

			if (!FileX::is($file)) {
				$file = $directory . strtolower(self::$codify->name) . '.php';
			}

			if (!FileX::is($file)) {
				$file = StringX::stripLast($directory, parent::$link->version . DS) . strtolower(self::$codify->name) . '.php';
			}

			if (!FileX::is($file)) {
				$file = $directory . parent::$platform . '.php';
			}

			if (!FileX::is($file)) {
				$file = ORIG['ORGAN'] . strtolower(self::$codify->name) . '.php';
			}
		}
		return $file;
	}





	// ◇ ----- MODELIZR • Model »
	public static function modelizr() {
		$file = ORIG['model'] . parent::$platform . DS . strtolower(self::$codify->name) . '.php';
		if (!FileX::is($file)) {
			$file = ORIG['model'] . parent::$platform . '.php';
		}
		if (!FileX::is($file)) {
			$file = ORIG['model'] . strtolower(self::$codify->name) . '.php';
		}
		return $file;
	}





	// ◇ ----- TITLE •
	public static function title() {
		$title = '';

		if (self::$codify->method !== 'landing') {
			$title .= ucwords(StringX::uppercaseToSpace(self::$codify->method)) . ' ';
		}
		if (self::$codify->name !== 'Index') {
			$title .= ucwords(self::$codify->name) . ' ';
		}
		if (Vars::hasData($title)) {
			$title .= ' - ';
		}
		$title .= self::$project['title'] . ' ';
		if (Vars::hasData($title)) {
			$title .= ' • ' . self::$project['brand'];
		}
		return $title;
	}





	// ◇ ----- TERMINATE • End Program »
	public static function terminate() {
		return Vars::end();
	}





	// ◇ ---- PROPERTY • Get Class Property » Boolean | Mixed
	public static function property($property, $req = 'GET') {
		if (Vars::isEmpty($property) || Vars::isEmpty($req)) {
			return false;
		}

		// • GET
		elseif ($req === 'GET') {
			if (Vars::isString($property) && isset(self::$$property)) {
				return self::$$property;
			}

			// • URL
			elseif ($req === 'URL') {
				return parent::$base->url;
			}

			// • Hostname
			elseif ($req === 'HOSTNAME') {
				return parent::$base->hostname;
			}

			// • Domain
			elseif ($req === 'DOMAIN') {
				return parent::$base->domain;
			}

			// • Spring
			elseif ($req === 'SPRING') {
				return parent::$base->spring;
			}

			// • Host
			elseif ($req === 'HOST') {
				return parent::$base->host;
			}

			// • TLD
			elseif ($req === 'TLD') {
				return parent::$base->tld;
			}

			// • VERSION
			elseif (strtoupper($req) === 'VERSION') {
				return parent::$link->version;
			}

			// • STATUS
			elseif ($req === 'STATUS') {
				return parent::$link->status;
			}

			// • ACTION
			elseif ($req === 'ACTION') {
				return parent::$link->action;
			}

			// • REFERRER
			elseif ($req === 'REFERRER') {
				return parent::$link->ref;
			}

			// • LINK
			elseif (strtoupper($req) === 'LINK') {
				return parent::$link->is;
			}

			// • URI
			elseif (strtoupper($req) === 'URI') {
				return self::$uri;
			}

			// • PROJECT TITLE
			elseif ($req === 'PROJECT_TITLE') {
				return self::$project['title'];
			}

			// • PROJECT BRAND
			elseif ($req === 'BRAND') {
				return self::$project['brand'];
			}

			// • SUPPORT EMAIL
			elseif ($req === 'SUPPORT_EMAIL') {
				if (Vars::is(self::$project['support']['email'])) {
					return self::$project['support']['email'];
				}
			}

			// • ROUTES
			elseif (strtoupper($req) === 'ROUTES') {
				return self::$routes;
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





	// ◇ ---- HANDLER • ... »
	public static function handler($var, $label = 'ERROR') {
		if (Vars::isArray($var) && ArrayX::isKeyNotEmpty($var, 'HAS_ERROR')) {
			unset($var['HAS_ERROR']);
			if (Route::isAPI()) {
				return API::resolve($var);
			}
			return Vars::abort([$label => $var]);
		}
		return $var;
	}




	// ◇ ---- RESOLVER • ... »
	public static function resolver($resp = []) {

		// • Terminus
		if (ArrayX::isNotKey($resp, 'terminus')) {
			$resp['terminus'] = Route::property('uri');
		}

		// • Version
		if (ArrayX::isNotKey($resp, 'version')) {
			$resp['version'] = Route::property('link')->version;
		}

		// • Response
		if (ArrayX::isNotKey($resp, 'response')) {
			$resp['response'] = [];
		}

		// • Code
		if (ArrayX::isKey($resp, 'code')) {
			$resp['response']['code'] = $resp['code'];
			unset($resp['code']);
		}

		// • Title
		if (ArrayX::isKey($resp, 'title')) {
			$resp['response']['title'] = $resp['title'];
			unset($resp['title']);
		}

		// • Message
		if (ArrayX::isKey($resp, 'message')) {
			$resp['response']['message'] = $resp['message'];
			unset($resp['message']);
		}

		// • Count
		if (ArrayX::isKey($resp, 'count')) {
			$resp['response']['count'] = $resp['count'];
			unset($resp['count']);
		} elseif (ArrayX::isNotKey($resp['response'], 'count')) {
			$resp['response']['count'] = 0;
		}

		// • Data
		if (ArrayX::isKey($resp, 'data')) {
			$resp['response']['data'] = $resp['data'];
			unset($resp['data']);
		} elseif (ArrayX::isNotKey($resp['response'], 'data')) {
			$resp['response']['data'] = [];
		}

		// • Summary
		if (ArrayX::isKey($resp, 'summary')) {
			$resp['response']['error']['summary'] = $resp['summary'];
			unset($resp['summary']);
		}

		// • Error_Id
		if (ArrayX::isKey($resp, 'errorid')) {
			$resp['response']['error']['errorid'] = $resp['errorid'];
			unset($resp['errorid']);
		}

		// • Error_Code
		if (ArrayX::isKey($resp, 'errcode')) {
			$resp['response']['error']['errcode'] = $resp['errcode'];
			unset($resp['errcode']);
		}

		// • Author
		if (ArrayX::isKey($resp, 'author')) {
			$resp['response']['error']['author'] = $resp['author'];
			unset($resp['author']);
		}

		// • Extra
		if (ArrayX::isKey($resp, 'detail')) {
			$resp['response']['error']['detail'] = $resp['detail'];
			unset($resp['detail']);
		}

		if ($resp['status'] === 'F9') {
			if (ArrayX::isNotKey($resp['response']['error'], 'summary')) {
				$resp['response']['error']['summary'] = $resp['response']['error']['errorid'];
				if (ArrayX::isKey($resp['response'], 'title')) {
					$resp['response']['error']['summary'] .= ' • ' . $resp['response']['title'];
				}
				if (isset($resp['object'])) {
					$resp['response']['error']['summary'] .= ' » ' . $resp['object'];
					unset($resp['object']);
				}
				$resp['response']['error']['summary'] .= ' • ' . $resp['terminus'];
			}
		}

		if ($resp['status'] === 'OK') {
			unset($resp['response']['error']);
		}
		// ksort($resp);
		return $resp;
	}










	// ◇ ---- OUTPUT • Output API Response »
	public static function output($response, $view = 'TRACE') {

		if (isset($response['response']['error'])) {
			// * TODO Remove from display based on Environment
			// self::display($response['response']['error']);
		}

		// • Json
		if ($view === 'JSON') {
			if (Vars::isObject($response)) {
				$response = ObjectX::toArray($response);
			}
			if (Vars::isArray($response)) {
				$response = ArrayX::toJSON($response);
			}
			JSONX::display($response);
		}

		// • Print
		elseif ($view === 'PRINT') {
			print_r($response);
		}

		// • Dump
		elseif ($view === 'DUMP') {
			var_dump($response);
		}

		// • String
		elseif ($view === 'STRING') {
			if (Vars::isObject($response)) {
				$response = ObjectX::toArray($response);
			}
			if (Vars::isArray($response)) {
				$response = ArrayX::toString($response);
			}
			echo $response;
		}

		// • Trace
		elseif ($view === 'TRACE') {
			return Vars::trace($response);
		}

		// • Response
		else {
			return $response;
		}

		return exit;
	}

} // End Of Class ~ Route

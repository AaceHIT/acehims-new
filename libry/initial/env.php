<?php
//*** Env » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class Env {

	// ◇ PROPERTY
	private static $initialized;
	protected static $config;
	protected static $machine;
	public static $environment;





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- INITIALIZE • Initialize Environment » Boolean (true)
	public static function initialize() {
		if (self::$initialized !== true) {
			if (empty(self::$environment)) {
				if (!defined('ENV')) {
					exit('<strong>' . TYDI . '™</strong> • Environment Undefined!');
				} else {
					self::$environment = ENV;
				}
			}
			if (empty(self::$machine)) {
				if (!defined('MACHINE')) {
					exit('<strong>' . TYDI . '™</strong> • Machine Undefined!');
				} else {
					self::$machine = MACHINE;
				}
			}
			self::$initialized = true;
		}
		return true;
	}





	// ◇ ---- PROPERTY • Get & Set Class Property » Boolean | Mixed
	public static function property($property, $req = 'GET') {
		if (Vars::isEmpty($property) || Vars::isEmpty($req)) {
			return false;
		}

		// • GET
		elseif ($req === 'GET') {
			if (Vars::isString($property) && isset(self::$$property)) {
				return self::$$property;
			} elseif (Vars::isArray($property)) {
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





	// ◇ ---- IS • ... » Boolean
	public static function is($var = 'ENV') {

		// • Initialize
		self::initialize();

		// • Machine
		if (strtoupper($var) === 'MACHINE') {
			return self::$machine;
		}

		// • Env/Data
		if (strtoupper($var) === 'DATA' || strtoupper($var) === 'ENV') {
			return self::$environment;
		}

		// • Abbreviation
		elseif (strtoupper($var) === 'ABBR') {
			$environment = substr(strtoupper(self::$environment), 0, 4);
			if ($environment === 'DEVE') {
				$environment = 'DEV';
			}
			return $environment;
		}

		// • Check $var against the current environment
		else {
			if (($var === 'PROD' || $var === 'PRODUCTION') && self::$environment === 'PRODUCTION') {
				return true;
			} elseif (($var === 'STAG' || $var === 'STAGE' || $var === 'STAGING') && self::$environment === 'STAGING') {
				return true;
			} elseif (($var === 'DEV' || $var === 'DEVELOPMENT') && self::$environment === 'DEVELOPMENT') {
				return true;
			}
		}

		return false;
	}





	// ◇ ---- MACHINE • ... »
	public static function machine($machine = 'DATA') {
		self::initialize();
		if (Vars::hasData($machine)) {
			if ($machine === 'DATA') {
				return self::$machine;
			} elseif (strtolower($machine) === strtolower(self::$machine)) {
				return true;
			}
		}
		return false;
	}





	// ◇ ---- ERROR • Error Displaying (Based on Environment) »
	public static function report($production, $development = null, $staging = null) {
		self::initialize();
		$error = $production;

		if (Vars::isNull($development)) {
			$development = $production;
		}

		if (Vars::isNull($staging)) {
			$staging = $production;
		}

		if (self::is('DEV')) {
			$error = $development;
		} elseif (self::is('STAGE')) {
			// * TODO! :: CODE_TO_REVIEW
			if ($staging === '...') {
				$staging = FolderX::base($development) . PS . FileX::base($development, true);
			}
			$error = $staging;
		}
		return $error;
	}





	// ◇ ---- PHP • Require Minimum PHP Version » Boolean (true) | Error
	public static function php($minimum = '7.4') {
		if (Vars::isNotEmpty($minimum)) {
			$minimum = floatval($minimum);
			$version = floatval(phpversion());
			if ($version < $minimum) {
				return oversight('PHP Server', 'Version Unsupported - ' . $version);
			}
		}
		return true;
	}





	// ◇ ---- CONFIG • Set Configurations » Boolean
	public static function config($config = []) {
		if (Vars::isEmpty(self::$config)) {
			self::$config = [];
		}

		if (is_array($config) && !empty($config)) {

			// • For Routes
			if (isset($config['routes']) && is_array($config['routes'])) {
				if (Vars::isEmpty(self::$config['routes'])) {
					self::$config['routes'] = $config['routes'];
				} else {
					self::$config['routes'] = ArrayX::blend($config['routes'], self::$config['routes']);
				}
				unset($config['routes']);
			}

			// • For Database
			if (isset($config['database']) && is_array($config['database'])) {
				if (Vars::isEmpty(self::$config['database'])) {
					self::$config['database'] = $config['database'];
				} else {
					self::$config['database'] = ArrayX::blend($config['database'], self::$config['database']);
				}
				unset($config['database']);
			}

			self::$config = array_merge(self::$config, $config);
			return true;
		}
		return false;
	}





	// ◇ ---- PLAYGROUND • Load Playground (development environment only) »
	public static function playground($file = 'PLAYGROUND') {
		if ($file === 'PLAYGROUND') {
			$file = RD . '_orign' . DS . 'playground' . DS . 'index.php';
		}
		if (is_file($file) && self::is('DEV')) {
			return require $file;
		}
		return false;
	}

} // End Of Class ~ Env
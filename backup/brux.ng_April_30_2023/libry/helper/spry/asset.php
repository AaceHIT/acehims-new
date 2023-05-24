<?php
//*** AssetQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class AssetQ {

	// ◇ PROPERTY
	public static $path;





	// ◇ ---- callStatic • Non-existent static method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- initialize • Initialize the class »
	public static function initialize() {
		$platform = Route::platform();
		if ($platform === 'app') {
			self::$path = App::$ario;
		}
		return true;
	}





	// ◇ ---- path • assetQ path »
	public static function path($req = null, $echo = true) {
		self::initialize();

		if ($req === 'favicon' || $req === 'ARIO') {
			$path = self::$path;
		} elseif ($req === 'CSS') {
			$path = self::$path . PS . 'css';
		} elseif ($req === 'JS') {
			$path = self::$path . PS . 'js';
		} elseif ($req === 'font') {
			$path = self::$path . PS . 'font';
		} elseif ($req === 'audio') {
			$path = self::$path . PS . 'audio';
		} elseif ($req === 'video') {
			$path = self::$path . PS . 'video';
		} elseif ($req === 'IMAGE') {
			$path = self::$path . PS . 'image';
		} elseif ($req === 'ICON') {
			$path = self::$path . PS . 'icon';
		} elseif ($req === 'media') {
			$path = self::$path . PS . 'media';
		} elseif ($req === 'cloud') {
			$path = self::$path . PS . 'cloud';
		} elseif ($req === 'plugin') {
			$path = self::$path . PS . 'plugin';
		} elseif ($req === 'BUNDLES') {
			$path = self::$path . PS . 'bundles';
		} elseif ($req === 'VENDOR') {
			$path = self::$path . PS . 'vendor';
		} elseif ($req === 'ILLUSTRATION') {
			$path = self::$path . PS . 'illustration';
		} elseif ($req === 'CLOUD_DP') {
			$path = self::$path . PS . 'cloud' . PS . 'dp';
		} elseif ($req === 'CLOUD_SIGN') {
			$path = self::$path . PS . 'cloud' . PS . 'sign';
		}

		if ($echo) {
			Vars::show($path);
		} else {
			return Vars::safe($path);
		}

		return false;
	}

} // End Of Class ~ AssetQ
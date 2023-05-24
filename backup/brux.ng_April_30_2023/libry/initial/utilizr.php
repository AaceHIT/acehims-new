<?php
//*** Utilizr » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class Utilizr {

	// ◇ PROPERTY
	public static $utilizr;
	protected static $codify;
	protected static $initLink;




	// ◇ ---- CALL-STATIC • Non-existent static method » Error
	public static function __callStatic($method, $argument) {
		// if (StringX::begin($method, 'O') && strlen($method) > 1) {
		// 	// % DESIGNED: To test feature possibility. Not meant for actual implement because of optimization reasons
		// 	$function = StringX::after($method, 'O');
		// 	foreach (self::$utilizr as $key => $class) {
		// 		if (method_exists($class, $function)) {
		// 			return $class::$function(...$argument);
		// 		}
		// 	}
		// } elseif (StringX::contain($method, '_')) {
		// 	$class = StringX::before($method, '_');
		// 	$function = StringX::after($method, '_');
		// 	if (Vars::is(self::$utilizr[$class])) {
		// 		$static = self::$utilizr[$class];
		// 		return $static::$function(...$argument);
		// 	}
		// } else {
		// 	if (Vars::is(self::$utilizr[$method])) {
		// 		$static = self::$utilizr[$method];
		// 		return new $static;
		// 	}
		// }
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}




	// ◇ ---- INITIALIZE •
	public static function initialize() {
		$directory = ORIG['UTIL'];
		$filenames = Loader::directoryFilenames($directory, 'php');
		foreach ($filenames as $key => $filename) {
			$filename = strtolower(StringX::cropEnd($filename, '.php'));
			$class = ucfirst($filename) . 'Util';
			if (class_exists($class)) {
				self::$utilizr[$filename] = $class;
			}
		}
	}





	// ◇ ---- UPLOAD-PHOTO • Handle image upload
	public static function uploadPhoto(array &$input, string $label, string $filename = null, $oldFilename = null) {
		$files = DataQ::grab('FILE');
		$file = DataQ::stackOne($files, $label);
		if (Vars::isNotEmptyArray($file) && isset($file['tmp_name'])) {
			$fileTemp = $file['tmp_name'];
			$extension = UploadQ::fileExtension($fileTemp, 'IMAGE');
			if (Vars::isNull($filename)) {
				$filename = RandomQ::filename();
			}
			$filename .= '.' . $extension;
			$destination = ORIG['CLOUD'] . $label . DS;
			if (!FolderX::is($destination)) {
				FolderX::create($destination);
			}
			if (is_writable($destination)) {
				if (UploadQ::basic($fileTemp, $destination, $filename)) {
					$input[$label] = $filename;
				}
			}
		}

		if (Vars::hasData($oldFilename)) {
			FileX::delete($oldFilename);
		}
		return true;
	}




	// ◇ ---- IMAGE • Safely return image name to load
	public static function image($image, $req) {
		if ($req === 'DP') {
			if (Vars::hasData($image)) {
				$file = ORIG['CLOUD'] . 'dp' . DS . $image;
				if (FileX::is($file)) {
					return AssetQ::path('CLOUD_DP') . PS . $image;
				}
			}
			return AssetQ::path('CLOUD_DP') . PS . 'none.png';
		}

		if ($req === 'SIGN') {
			if (Vars::hasData($image)) {
				$file = ORIG['CLOUD'] . 'sign' . DS . $image;
				if (FileX::is($file)) {
					return AssetQ::path('CLOUD_SIGN') . PS . $image;
				}
			}
			return AssetQ::path('CLOUD_SIGN') . PS . 'none.png';
		}
	}





	// ◇  ---- URI •
	public static function uri($print = true) {
		$o = Route::property('uri');
		if ($print === true) {
			echo $o;
			return true;
		}
		return $o;
	}




	// ◇  ---- LINK-STATUS •
	public static function linkStatus() {
		return Route::property('link')->status;
	}




	// ◇  ---- IS-LINK-STATUS •
	public static function isLinkStatus($status) {
		if (self::linkStatus() === $status) {
			return true;
		}
		return false;
	}




	// ◇ ---- INIT-LINK •
	public static function initLink() {
		if (Vars::noData(self::$initLink)) {
			self::$codify = App::$codify;
			unset(self::$codify->name);
			self::$initLink = true;
		}
	}




	// ◇ ---- IS-MODEL •
	public static function isModel($model) {
		self::initLink();
		if (self::$codify->model === $model) {
			return true;
		}
		return false;
	}




	// ◇ ---- IS-METHOD •
	public static function isMethod($method) {
		self::initLink();
		if (self::$codify->method === $method) {
			return true;
		}
		return false;
	}





	// ◇ ---- IS-ACTIVE-LINK-CHECK •
	public static function isActiveLinkCheck($model, $method = null, $status = null) {
		self::initLink();
		$isModel = self::isModel($model);
		$isMethod = self::isMethod($method);
		$isStatus = Utilizr::isLinkStatus($status);
		return ['isModel' => $isModel, 'isMethod' => $isMethod, 'isStatus' => $isStatus];
	}




	// ◇ ---- IS-ACTIVE-LINK •
	public static function isActiveLink($link = null) {
		self::initLink();
		if (StringX::begin($link, '/')) {
			$link = StringX::cropBegin($link, '/');
		}
		$model = StringX::before($link, '/');
		if (Vars::noData($model)) {
			$model = $link;
		}
		$method = StringX::after($link, '/');
		if (Vars::noData($method)) {
			$method = 'landing';
		}

		$status = null;

		if (StringX::contain($method, '!')) {
			$method = StringX::before($method, '!');
			$status = StringX::after($method, '!');
		}

		$method = StringX::swapSpace($method, '-', true);
		$method = StringX::swapSpace($method, '_', true);
		$method = lcfirst(StringX::noSpace(ucwords(strtolower($method))));

		return self::isActiveLinkCheck($model, $method, $status);
	}





	// ◇ ---- IS-ACTIVE-CSS •
	public static function isActiveCSS(string $link, string $append) {
		if(StringX::begin($link, '/app/')){
			$link = StringX::cropBegin($link, '/app');
		}
		$isActive = self::isActiveLink($link);
		if ($isActive['isModel'] === true && $isActive['isMethod'] === true) {
			echo $append;
			return true;
		}
		return false;
	}




	// ◇ ---- IS-GROUP-CSS •
	public static function isGroupCSS(string $group, bool $display, string $append) {
		if (self::isModel($group)) {
			if ($display) {
				echo $append;
			}
			return true;
		}
		return false;
	}




	// ◇ ---- CSS-NOTIFY-BG •
	public static function cssNotifyBG(bool $print = true) {
		$css = '';
		if (self::isLinkStatus('success')) {
			$css = ' bg-success text-white';
		} elseif (self::isLinkStatus('failure') || self::isLinkStatus('error')) {
			$css = ' bg-danger text-white';
		} elseif (self::isLinkStatus('warning')) {
			$css = ' bg-warning text-white';
		}
		if ($print === true) {
			echo $css;
			return true;
		}
		return $css;
	}




	// ◇  ---- NOTIFY-SUCCESS •
	public static function notifySuccess(string $message) {
		if (self::isLinkStatus('success')) {
			echo '<p class="text-success">' . $message . '</p>';
			return true;
		}
		return false;
	}




	// ◇  ---- NOTIFY-FAILURE •
	public static function notifyFailure(string $message) {
		if (self::isLinkStatus('failure')) {
			echo '<p class="text-danger">' . $message . '</p>';
			return true;
		}
		return false;
	}




	// ◇  ---- ALERT-FAILURE •
	public static function alertFailure(string $message) {
		if (self::isLinkStatus('failure')) {
			echo '<div class="alert alert-danger" role="alert"><i class="fa-solid fa-circle-info"></i> ' . $message . '</div>';
			return true;
		}
		return false;
	}





	// ◇  ---- ALERT-EXPIRED •
	public static function alertExpired(string $message) {
		if (self::isLinkStatus('expired')) {
			echo '<div class="alert alert-warning" role="alert"><i class="fa-solid fa-circle-exclamation"></i> ' . $message . '</div>';
			return true;
		}
		return false;
	}





	// ◇  ---- ALERT-LOGOUT •
	public static function alertLogout(string $message) {
		if (self::isLinkStatus('logout')) {
			echo '<div class="alert alert-success" role="alert"><i class="fa-solid fa-circle-check"></i> ' . $message . '</div>';
			return true;
		}
		return false;
	}




	// ◇  ---- ALERT-LOGOUT •
	public static function alertChangePW(string $message) {
		if (self::isLinkStatus('password-changed')) {
			echo '<div class="alert alert-success" role="alert"><i class="fa fa-check"></i> ' . $message . '</div>';
			return true;
		}
		return false;
	}

} //> End Of Class ~ Utilizr
<?php
//*** Autoload » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

function autoload($class) {
	// • Check if class exists » boolean [true]
	if (class_exists($class)) {
		return true;
	}

	// • Define file name from class name
	$file = strtolower($class);
	if (stripos($file, '_') !== false) {
		$fileAlternative = str_ireplace('_', DS, $file);
	}





	// • Essential :: Class name ends with X
	if (substr($class, -1) === 'X' && strlen($class) > 1) {
		$file = LIBRY['ESSENTIAL'] . substr_replace($file, '', -1) . '.php';
		FileX::load($file, 'essential');
	}

	// • Spry :: Class name ends with Q
	elseif (substr($class, -1) === 'Q' && strlen($class) > 1) {
		$file = LIBRY['SPRY'] . substr_replace($file, '', -1) . '.php';
		FileX::load($file, 'spry');
	}

	// • Instance :: Class name for Object
	elseif (substr($class, 0, 1) === 'o' || substr($class, -1) === 'O') {
		if (substr($class, 0, 1) === 'o') {
			$file = LIBRY['INSTANCE'] . substr($file, 1) . '.php';
		} elseif (substr($class, -1) === 'O') {
			$file = LIBRY['INSTANCE'] . substr_replace($file, '', -1) . '.php';
		}
		FileX::load($file, 'instance');
	}





	// • Utilizr :: class name ends with Util
	elseif (substr($class, -4) === 'Util') {
		$file = ORIG['UTIL'] . substr_replace($file, '', -4) . '.php';
		FileX::load($file, 'utility');
	}

	// • Modelizr :: class name ends with Model
	elseif (substr($class, -5) === 'Model') {
		$isLoaded = false;
		if (Vars::isNotEmpty($fileAlternative)) {
			$fileAlternative = ORIG['MODEL'] . substr_replace($fileAlternative, '', -5) . '.php';
			if (FileX::is($fileAlternative)) {
				require $fileAlternative;
				$isLoaded = true;
				$file = $fileAlternative;
			}
		}

		if (Vars::isFalse($isLoaded)) {
			$file = ORIG['MODEL'] . substr_replace($file, '', -5) . '.php';
			FileX::load($file, 'model');
		}
	}

	// • Controlizr :: class name ends with Contr
	elseif (substr($class, -5) === 'Contr') {
		$isLoaded = false;
		if (Vars::isNotEmpty($fileAlternative)) {
			$fileAlternative = ORIG['CONTROL'] . substr_replace($fileAlternative, '', -5) . '.php';
			if (FileX::is($fileAlternative)) {
				require $fileAlternative;
				$isLoaded = true;
				$file = $fileAlternative;
			}
		}

		if (Vars::isFalse($isLoaded)) {
			$file = ORIG['CONTROL'] . substr_replace($file, '', -5) . '.php';
			FileX::load($file, 'controller');
		}
	}

	// • Organizr :: class name ends with zr
	elseif (substr($class, -2) === 'zr') {
		$file = ORIG['ORGAN'] . substr_replace($file, '', -2) . '.php';
		FileX::load($file, 'organizer');
	}

	// • API :: class name ends with API
	elseif ($class !== 'API' && substr($class, -3) === 'API') {
		$file = ORIG['API'] . substr_replace($file, '', -3) . '.php';
		FileX::load($file, 'API', '', $class);
	}

	// • App :: class name ends with App
	elseif ($class !== 'App' && substr($class, -3) === 'App') {
		$file = ORIG['APP'] . substr_replace($file, '', -3) . '.php';
		FileX::load($file, 'App');
	}

	// • Setup :: class name ends with Setup
	elseif (substr($class, -5) === 'Setup' && strlen($class) > 5) {
		$file = ORIG['SET'] . substr_replace($file, '', -5) . '.php';
		FileX::load($file, 'setzr');
	}





	// • Check Others
	else {
		$file = [];
		$file['vendor'] = LIBRY['VENDOR'] . strtolower($class) . '.php';
		if (FileX::is($file['vendor'])) {
			require($file['vendor']);
		} else {
			$file['vendor'] = LIBRY['VENDOR'] . strtolower($class . DS . $class) . '.php';
			if (FileX::is($file['vendor'])) {
				require($file['vendor']);
			}
		}
	}


	// • class not exists :: trigger error
	if (!class_exists($class)) {
		return caller($class, 'CLASS', $file);
	}

	return true;
}
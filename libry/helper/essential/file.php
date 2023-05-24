<?php
//*** FileX » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class FileX {

	// ◇ ---- IS • Check (Is File) » Boolean
	public static function is($file) {
		if (is_file($file)) {
			return true;
		}

		return false;
	}




	// ◇ ---- IS_VIRTUAL • Check if not actual file » Boolean
	public static function isVirtual($file) {
		if (self::is($file) === false && FolderX::is($file) === false) {
			return true;
		}

		return false;
	}




	// ◇ ---- ALLOW_VIRTUAL • Allow virtual file » Boolean
	public static function allowVirtual($file, $virtual) {
		if ($virtual === false) {
			return self::is($file);
		} elseif ($virtual === true && (self::is($file) === true || self::isVirtual($file) === true)) {
			return true;
		}

		return false;
	}




	// ◇ ---- IS NOT • ... » Boolean
	public static function isNot($file) {
		if (!self::is($file)) {
			return true;
		}
		return false;
	}




	// ◇ ---- PATH • Path Information »
	public static function path($file, $i = 'INFO', $virtual = false) {
		if (self::allowVirtual($file, $virtual) === true) {
			$pathinfo = pathinfo($file);
			if ($i != '' && $i !== 'INFO') {
				$i = strtolower($i);
				if (isset($pathinfo[$i])) {
					return $pathinfo[$i];
				}
			}

			return $pathinfo;
		}

		return false;
	}




	// ◇ ---- NAME • File Name »
	public static function name($file, $virtual = false) {
		return self::path($file, 'filename', $virtual);
	}




	// ◇ ---- BASE • File Basename »
	public static function base($file, $virtual = false) {
		return self::path($file, 'basename', $virtual);
	}




	// ◇ ---- CHECK • Check File » Boolean | Error
	public static function check($filepath, $append = null, $object = null, $abort = true) {
		if (self::is($filepath) === false) {
			if (Vars::noData($object)) {
				$label = TYDI . '™';
			} else {
				$label = $object;
			}
			if (Vars::hasData($append)) {
				$label .= ' • ' . ucwords($append);
			}
			$filename = self::name($filepath, true);
			$error = Env::report($filename, $filepath, '...');
			return oversight($label, 'File Unavailable', $error, $abort);
		}
		return true;
	}




	// ◇ ---- LOAD • Load File »
	public static function load($filepath, $append = '', $content = '', $object = '') {
		if (self::check($filepath, $append, $object)) {
			return require $filepath;
		}
		return false;
	}




	// ◇ ---- APPEND • Append File »
	public static function append($filepath, $content = '', $safely = true, $append = '', $object = '') {
		if ($safely === true) {
			if (self::is($filepath)) {
				return require $filepath;
			}
		} else {
			return self::load($filepath, $append, $content, $object);
		}
		return false;
	}




	// ◇ ---- DELETE • Delete File »
	public static function delete($file) {
		if (self::is($file)) {
			return unlink($file);
		}
		return false;
	}

} // end of class ~ FileX
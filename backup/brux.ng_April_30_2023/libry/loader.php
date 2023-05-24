<?php
//*** Loader » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class Loader {

	// ◇ ---- FILE • Load file or files
	public static function file($file, $extension = '.php') {
		if (is_array($file)) {
			foreach ($file as $filename) {
				self::file($filename, $extension);
			}
		} elseif (!is_file($file)) {
			$e = '<strong>' . TYDI . '™</strong> • File Unavailable!';
			if (function_exists('oversight')) {
				return oversight(TYDI . '™ - ' . pathinfo(basename($file), PATHINFO_FILENAME), 'File Unavailable!', $file);
			} else {
				exit($e . ' → [<em>' . $file . '</em>]');
			}
		}
		return require_once $file;
	}





	// ◇ ---- DIRECTORY • Load all files from a directory
	public static function directory($directory, $extension = '.php') {
		$files = glob($directory . '*' . $extension);
		$lib = [];
		if (!empty($files)) {
			foreach ($files as $key => $file) {
				$lib[$key] = $directory . basename($file);
				if (is_file($lib[$key])) {
					require_once($lib[$key]);
				}
			}
			return $lib;
		}
		return false;
	}





	// ◇ ---- DIRECTORY • Load specific file(s) from a directory
	public static function directoryFile($directory, $filename, $extension = '.php') {
		if (is_dir($directory) && !empty($filename)) {
			if (is_array($filename)) {
				foreach ($filename as $file) {
					self::directoryFile($directory, $file, $extension);
				}
			} elseif (!is_file($directory . $filename . $extension)) {
				$e = '<strong>' . TYDI . '™</strong> • File Unavailable!';
				if (function_exists('oversight')) {
					return oversight(TYDI . '™ - ' . pathinfo(basename($directory . $filename . $extension), PATHINFO_FILENAME), 'File Unavailable!', $directory . $filename . $extension);
				} else {
					exit($e . ' → [<em>' . $directory . $filename . $extension . '</em>]');
				}
			} else {
				require_once($directory . $filename . $extension);
			}
		}
		return true;
	}





	// ◇ ---- DIRECTORY FILENAMES • Return names of files with a specific extension from a directory
	public static function directoryFilenames($directory, $extension = 'php') {
		$filenames = [];
		$files = scandir($directory);
		foreach ($files as $filename) {
			if (pathinfo($filename, PATHINFO_EXTENSION) === $extension) {
				$filenames[] = $filename;
			}
		}
		return $filenames;
	}

} //> End Of Class ~ Loader
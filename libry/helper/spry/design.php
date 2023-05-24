<?php
//*** DesignQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class DesignQ {

	// ◇ PROPERTY
	protected static $link;
	protected static $path;
	protected static $model;
	protected static $action;
	private static $initialized;





	// ◇ ---- callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- INITIALIZE •
	public static function initialize() {
		if (self::$initialized !== true) {
			self::$path = ObjectX::make();
			self::$link = Route::property('link');
			self::$model = Route::isModel();
			self::$action = Route::isAction();
			self::$path = ObjectX::make();

			// • layout
			self::$path->layoutzr = ORIG['LAYOUT'];
			if (FolderX::is(self::$path->layoutzr . self::$link->version)) {
				self::$path->layoutzr .= self::$link->version . DS;
			}

			// • xhr
			self::$path->xhrzr = ORIG['XHR'];
			if (FolderX::is(self::$path->xhrzr . self::$link->version)) {
				self::$path->xhrzr .= self::$link->version . DS;
			}

			// • bit
			self::$path->bitzr = ORIG['BIT'];
			if (FolderX::is(self::$path->bitzr . self::$link->version)) {
				self::$path->bitzr .= self::$link->version . DS;
			}

			// • piece
			self::$path->piecezr = ORIG['PIECE'];
			if (FolderX::is(self::$path->piecezr . self::$link->version)) {
				self::$path->piecezr .= self::$link->version . DS;
			}

			// • slice
			self::$path->slicezr = ORIG['SLICE'];
			if (FolderX::is(self::$path->slicezr . self::$link->version)) {
				self::$path->slicezr .= self::$link->version . DS;
			}

			// • form
			self::$path->formzr = ORIG['FORM'];
			if (FolderX::is(self::$path->formzr . self::$link->version)) {
				self::$path->formzr .= self::$link->version . DS;
			}

			// • table
			self::$path->tablezr = ORIG['TABLE'];
			if (FolderX::is(self::$path->tablezr . self::$link->version)) {
				self::$path->tablezr .= self::$link->version . DS;
			}

			// • view
			self::$path->viewzr = ORIG['VIEW'];
			if (FolderX::is(self::$path->viewzr . self::$link->version)) {
				self::$path->viewzr .= self::$link->version . DS;
			}

			self::$initialized = true;
		}
		return true;
	}




	// ◇ ==== fileIs →
	public static function fileIs($file, $path = null) {
		if (Vars::hasData($path)) {
			if (!StringX::end($path, DS)) {
				$path .= DS;
			}
			$file = $path . $file . '.php';
		}
		return StringX::swap($file, '_', DS);
	}




	// ◇ ==== xhr →
	public static function xhr(array $design = []) {
		if (Vars::isNotEmptyArray($design)) {
			foreach ($design as $key => $value) {
				${$key} = $value;
			}
		}
		self::initialize();
		$path = self::$path->xhrzr;
		if (isset($frontend->xhr)) {
			$file = self::fileIs($frontend->xhr, $path);
		}
		if (Vars::is($file) && FileX::is($file)) {
			require $file;
		} elseif (FileX::is($path . 'fallback.php')) {
			require $path . 'fallback.php';
		} else {
			FileX::check($file, 'XHR', null, false);
		}
	}






	// ◇ ---- LINK •
	public static function link($key = null) {
		if (Vars::hasData($key)) {
			if (isset(self::$link->$key)) {
				return self::$link->$key;
			}
			return false;
		}
		return self::$link;
	}





	// ◇ ---- FRONTEND •
	public static function frontend(array $design = []) {
		SetQ::isNotKeyOrEmpty($design, 'frontend', ['layout' => 'primary']);
		if (Vars::isNotEmptyArray($design)) {
			foreach ($design as $key => $value) {
				${$key} = $value;
			}
		}
		self::initialize();
		$layout = self::$path->layoutzr . $frontend->layout . '.php';
		if (FileX::is($layout)) {
			require $layout;
		} else {
			FileX::check($layout, 'Layout', null, false);
		}
	}












	// ◇ ---- BIT •
	public static function bit($bit, $design = null) {
		self::initialize();
		$bit = self::$path->bitzr . $bit . '.php';
		if (FileX::is($bit)) {
			require $bit;
		} else {
			FileX::check($bit, 'Bit', null, false);
		}
	}





	// ◇ ---- PIECE •
	public static function piece($piece, $design = null) {
		self::initialize();
		$piece = self::$path->piecezr . $piece . '.php';
		$piece = StringX::swap($piece, '_', DS);
		if (FileX::is($piece)) {
			require $piece;
		} else {
			FileX::check($piece, 'Piece', null, false);
		}
	}





	// ◇ ---- SLICE •
	public static function slice($slice, $design = null) {
		self::initialize();
		$slice = self::$path->slicezr . $slice . '.php';
		$slice = StringX::swap($slice, '_', DS);
		if (FileX::is($slice)) {
			require $slice;
		} else {
			FileX::check($slice, 'Slice', null, false);
		}
	}





	// ◇ ---- IS FORM •
	public static function isForm($name) {
		self::initialize();
		$file = self::$path->formzr . StringX::swap($name, '_', DS) . '.php';
		if (FileX::is($file)) {
			return $file;
		} else {
			FileX::check($file, 'Form', null, false);
		}
	}





	// ◇ ---- FORM •
	public static function form($form, $design = null) {
		$file = self::isForm($form);
		require $file;
	}





	// ◇ ---- IS TABLE •
	public static function isTable($name) {
		self::initialize();
		$file = self::$path->tablezr . StringX::swap($name, '_', DS) . '.php';
		if (FileX::is($file)) {
			return $file;
		} else {
			FileX::check($file, 'Table', null, false);
		}
	}





	// ◇ ---- TABLE •
	public static function table($table, $design = null) {
		self::initialize();
		$file = self::$path->tablezr . StringX::swap($table, '_', DS) . '.php';
		if (FileX::is($file)) {
			if (Vars::isNotEmptyArray($design)) {
				foreach ($design as $key => $value) {
					${$key} = $value;
				}
			}
			require $file;
		} else {
			FileX::check($file, 'Table', null, false);
		}
	}





	// ◇ ---- IS-VIEW •
	public static function isView($name = null) {
		self::initialize();
		$path = self::$path->viewzr;
		if (Vars::noData($name)) {
			if (FolderX::is($path . self::$model)) {
				$file = $path . self::$model . DS . self::$action . '.php';
			} else {
				$file = $path . self::$model . '.php';
				if (FileX::isNot($file)) {
					$file = $path . self::$action . '.php';
				}
			}
		} else {
			$file = $path . StringX::swap($name, '_', DS) . '.php';
		}
		if (FileX::is($file)) {
			return $file;
		} elseif (FileX::is($path . 'fallback.php')) {
			return $path . 'fallback.php';
		} else {
			FileX::check($file, 'View', null, false);
		}
	}





	// ◇ ---- VIEW •
	public static function view($design = null, $view = null) {
		$file = self::isView($view);
		if (Vars::isNotEmptyArray($design)) {
			foreach ($design as $key => $value) {
				${$key} = $value;
			}
		}
		require $file;
	}





	// ◇ ---- LAYOUT •
	public static function layout($layout, $design = null) {
		self::initialize();
		$file = self::$path->layoutzr . StringX::swap($layout, '_', DS) . '.php';
		if (FileX::is($file)) {
			if (Vars::isNotEmptyArray($design)) {
				foreach ($design as $key => $value) {
					${$key} = $value;
				}
			}
			require $file;
		} else {
			FileX::check($file, 'Layout', null, false);
		}
	}

} //> End Of Class ~ DesignQ
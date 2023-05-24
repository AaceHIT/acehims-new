<?php
//*** LangQ - Router » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class LangQ {
	// ◇ PROPERTY
	protected static $lang;





	// ◇ ----- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- IS • Get/Compare $lang » Boolean | String
	public static function is($req = 'DATA') {

		//...Retrieve $lang
		if ($req === 'DATA') {
			if (StringX::isEmpty(self::$lang)) {
				self::set();
			}
			return self::$lang;
		}


		//...Compare $lang with value of $req
		elseif ($req === self::$lang && StringX::isNotEmpty($req)) {
			return true;
		}

		return false;
	}





	// ◇ ----- IS • Set $lang » Boolean
	public static function set($input = '') {

		//...Set Session $lang (from input)
		if (StringX::isNotEmpty($input)) {
			$_SESSION['lang'] = $input;
		}


		//...Set Session $lang (from input)
		else {
			if (ArrayX::isKeyNotEmpty($_GET, 'lang')) {
				$_SESSION['lang'] = $_GET['lang'];
			} elseif (ArrayX::isKeyNotEmpty($_POST, 'lang')) {
				$_SESSION['lang'] = $_POST['lang'];
			}

			if (ArrayX::isKeyEmpty($_SESSION, 'lang') ) {
				$_SESSION['lang'] = 'en';
			}
		}


		//...Set $lang (from session)
		if (ArrayX::isKeyNotEmpty($_SESSION, 'lang')) {
			self::$lang = $_SESSION['lang'];
			return true;
		}

		return false;
	}

} // End Of Class ~ LangQ
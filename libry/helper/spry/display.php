<?php
//*** DisplayQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class DisplayQ {

	// ◇ ---- __call • Non-Existent Static Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- JSON • JSON DisplayQ »
	public static function json($var) {
		if (Vars::isString($var)) {
			$var['response'] = $var;
		}
		if (Vars::isArray($var)) {
			$var = ArrayX::toJSON($var);
		}
		return JSONX::displayQ($var);
	}

} // End Of Class ~ DisplayQ
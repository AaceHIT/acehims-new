<?php
//*** JSON » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class JSONX {

	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ==== make → create empty json » [json]
	public static function make() {
		return json_encode(new stdClass());
	}






	// ◇ ---- HANDLER • The Handler »
	public static function handler($data, array $report, $input) {
		// * TODO: Improve on this
		if ($report['code'] === JSON_ERROR_NONE) {
			return $data;
		} elseif (Vars::isNotEmpty($report['code'])) {
			return ['error' => $report, 'input' => $input];
		}
		return false;
	}





	// ◇ ---- ENCODE • Encode JSON » Boolean | JSON | Error
	public static function encode($input = '', $flag = 0) {
		if (Vars::isNotEmpty($input)) {
			$data = json_encode($input, $flag);
			$report = ['code' => json_last_error(), 'message' => json_last_error_msg(), 'type' => gettype($input)];
			return self::handler($data, $report, $input);
		}
		return false;
	}





	// ◇ ---- DECODE • Decode JSON/Array » Boolean | Array | Object | Error
	public static function decode($input = '', $flow = 'OBJECT') {
		if (Vars::isNotEmpty($input)) {
			if (ArrayX::is($input)) {
				$input = json_encode($input);
			}

			// • Convert json string to Array
			if ($flow === 'ARRAY') {
				$data = json_decode($input, true);
			}

			// • Convert json string to Object
			elseif ($flow === 'OBJECT') {
				$data = json_decode($input);
			}

			$report = ['code' => json_last_error(), 'message' => json_last_error_msg(), 'type' => gettype($input)];
			return self::handler($data, $report, $input);
		}
		return false;
	}









	// ◇ ---- DISPLAY • Encode & Output JSON » JSON Header
	public static function pretty($input = '') {
		return self::encode($input, JSON_PRETTY_PRINT);
	}





	// ◇ ---- DISPLAY • Encode & Output JSON » JSON Header
	public static function displayx($input) {
		$input = self::to($input);
		// if (!self::is($input)) {
		// 	$input = self::pretty($input);
		// }
		// return self::output($input);
		return $input;
	}





	// ◇ ---- TO ARRAY • JSON to Array » Boolean | Array
	public static function toArray($input) {
		if (self::is($input)) {
			return json_decode($input, true);
		}
		return false;
	}





	// ◇ ---- TO_OBJ • JSON to Object » Boolean | Array
	public static function toObj($input) {
		if (self::is($input)) {
			return json_decode($input);
		}
		return false;
	}




	// ◇ ==== is → check if var is valid JSON » [boolean]
	public static function is($var) {
		if (Vars::hasData($var) && Vars::isJSON($var)) {
			return true;
		}
		return false;
	}




	// ◇ ==== to → convert $var to JSON »
	public static function to($var) {
		if (!self::is($var)) {
			if (Vars::isArray($var)) {
				return ArrayX::toJSON($var);
			}
			return false;
		}
		return $var;
	}




	// ◇ ==== display → Display $var as JSON »
	public static function display($var) {
		$json = self::to($var);
		if (Vars::hasData($json)) {
			HeaderX::is(['JSON' => true]);
			if (defined('CORS')) {
				HeaderX::is(['CORS' => CORS]);
			}
			echo $json;
			exit;
		}
		return false;
	}

} //> end of JSONX
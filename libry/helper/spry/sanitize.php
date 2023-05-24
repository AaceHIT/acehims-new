<?php
//*** SanitizeQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class SanitizeQ {

	// ◇ ---- CLEAN •
	public static function clean($data) {
		$tags = CLEAN_STRING;
		if (Vars::isArray($data)) {
			foreach ($data as $key => $value) {
				$clean = preg_replace($tags, '', $value);
				$clean = strip_tags($clean);
				$clean = preg_replace("/&#?[a-z0-9]+;/i", "", $clean);
				$data[$key] = trim($clean);
			}
		}

		if (Vars::isString($data)) {
			$data = trim($data);
			$data = preg_replace($tags, '', $data);
			$data = strip_tags($data);
			$data = preg_replace("/&#?[a-z0-9]+;/i", "", $data);
			$data = trim($data);
		}

		return $data;
	}











	// ◇ ---- TO NAMES •
	public static function toNames($name) {
		$names = explode(' ', $name);
		if (ArrayX::isNotEmpty($names)) {
			$nameIs['firstname'] = ArrayX::firstValue($names);
			unset($names[ArrayX::firstKey($names)]);

			if (count($names) > 0) {
				$nameIs['lastname'] = ArrayX::lastValue($names);
				unset($names[ArrayX::lastKey($names)]);
			}

			if (count($names) > 0) {
				$nameIs['middlename'] = '';
				foreach ($names as $nameO) {
					$nameIs['middlename'] .= $nameO . ' ';
				}
				$nameIs['middlename'] = trim($nameIs['middlename']);
			}
		}
		if (Vars::isNotEmpty($nameIs)) {
			return $nameIs;
		}
		return $name;
	}






	// ◇ ---- IS USERNAME • ... »
	public static function isUsername($input, $req = 'DATA', $option = []) {
		if (ArrayX::isKeyNotEmpty($option, 'reserved')) {
			$reserved = $option['reserved'];
		} else {
			$reserved = ['admin', 'support', 'webmaster'];
		}
		if (ArrayX::isValue($reserved, $input)) {
			return 'username is reserved';
		} else {
			foreach ($reserved as $word) {
				if (StringX::begin(strtolower($input), $word)) {
					return 'username contains a reserved word';
				}
			}
		}

		if (StringX::begin($input, '_')) {
			return 'username must not begin with underscore';
		} elseif (StringX::end($input, '_')) {
			return 'username must not end with underscore';
		}

		$pattern = "/^[A-Z0-9_]+$/i";
		if (!StringX::pattern($input, $pattern, 'IS')) {
			return 'username contains invalid characters';
		}

		if (strlen($input) < 5) {
			return 'username is too short';
		}

		if (!empty($input)) {
			return true;
		}

		return false;
	}





	// ◇ ---- IS EMAIL • ... »
	public static function isEmail($input, $req = 'DATA') {
		if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
			if ($req === 'DATA') {
				return $input;
			}
			return true;
		}
		return false;
	}





	// ◇ ---- IS PHONE • ... »
	public static function isPhone($input, $req = 'DATA') {
		$input = self::clean($input);
		if (is_numeric($input) && strlen($input) < 20) {
			if ($req === 'DATA') {
				return $input;
			}
			return true;
		}
		return false;
	}





	// ◇ ---- IS BIND • ... »
	public static function isBind($input, $req = 'DATA', $length = 70) {
		$input = self::clean($input);
		if (Vars::isString($input) && strlen($input) === $length && ctype_alnum($input)) {
			if ($req === 'DATA') {
				return $input;
			}
			return true;
		}
		return false;
	}





	// ◇ ---- IS TOKEN • ... »
	public static function isToken($input, $req = 'DATA', $length = '') {
		$input = self::clean($input);
		if (Vars::isEmpty($length)) {
			$length = 20;
		}
		if (strlen($input) > $length && ctype_alnum($input)) {
			if ($req === 'DATA') {
				return $input;
			}
			return true;
		}
		return false;
	}





	// ◇ ---- TO GENDER •
	public static function toGender($sex, $req) {
		$gender = [
			1 => ['numeric' => '1', 'acronym' => 'M', 'title' => 'male'],
			2 => ['numeric' => '2', 'acronym' => 'F', 'title' => 'female']
		];

		if (Vars::isNotEmpty($sex)) {

			// * Determine Gender
			if (is_numeric($sex)) {
				if ($sex == 1 || $sex == 2) {
					$genderIs = $gender[$sex];
				}
			} elseif (strtoupper($sex) == 'M' || strtoupper($sex) == 'F') {
				switch (strtoupper($sex)) {
					case 'M':
						$genderIs = $gender[1];
						break;

					case 'F':
						$genderIs = $gender[2];
						break;
				}
			} elseif (strtolower($sex) == 'male' || strtolower($sex) == 'female') {
				switch (strtolower($sex)) {
					case 'male':
						$genderIs = $gender[1];
						break;

					case 'female':
						$genderIs = $gender[2];
						break;
				}
			}


			// % Determine Response
			if (Vars::isNotEmpty($genderIs)) {
				if ($req === 'NUMERIC') {
					return $genderIs['numeric'];
				} elseif ($req === 'ACRONYM') {
					return $genderIs['acronym'];
				} elseif ($req === 'TITLE') {
					return $genderIs['title'];
				}
				return $genderIs;
			}
		}

		return false;
	}





	public static function toDepartment($input) {
		if (Vars::isNotEmptyArray($input)) {
			if (Vars::hasData($input['department'])) {

				$input['department'] = StringX::toUpperCase($input['department']);
			}
		} else {
			$input = StringX::toUpperCase($input);
		}
		return $input;
	}

} //> End Of Class ~ SanitizeQ
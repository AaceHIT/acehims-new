<?php
//*** InputQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class InputQ {

	// ◇ ---- DEPARTMENT •
	public static function department($department) {
		if (Vars::isNotEmptyArray($department)) {
			$department = implode(', ', $department);
		}
		$department = SanitizeQ::clean($department);
		return strtoupper($department);
	}





	// ◇ ---- NAME •
	public static function name(&$name) {

		$names = explode(' ', trim($name));
		if (ArrayX::isNotEmpty($names)) {
			$nameIs['firstname'] = SanitizeQ::clean(ucwords(ArrayX::firstValue($names)));
			unset($names[ArrayX::firstKey($names)]);

			if (count($names) > 0) {
				$nameIs['lastname'] = SanitizeQ::clean(ucwords(ArrayX::lastValue($names)));
				unset($names[ArrayX::lastKey($names)]);
			}

			if (count($names) > 0) {
				$nameIs['middlename'] = '';
				foreach ($names as $nameO) {
					$nameIs['middlename'] .= $nameO . ' ';
				}
				$nameIs['middlename'] = SanitizeQ::clean(ucwords($nameIs['middlename']));
				if (strlen($nameIs['middlename']) == 1) {
					$nameIs['middlename'] .= '.';
				}
			}
		}
		if (Vars::isNotEmpty($nameIs)) {
			return $nameIs;
		}
		return $name;
	}





	// ◇ ---- FULLNAME •
	public static function fullname($fullname) {
		return self::name($fullname);
	}





	// ◇ ---- ACRONYM •
	public static function acronym($acronym) {
		$acronym = StringX::noSpace($acronym);
		$acronym = SanitizeQ::clean($acronym);
		return strtoupper($acronym);
	}





	// ◇ ---- EMAIL •
	public static function email($email) {
		$email = StringX::noSpace($email);
		$email = SanitizeQ::clean($email);
		return strtolower($email);
	}





	// ◇ ---- USERNAME •
	public static function username($username) {
		$username = StringX::noSpace($username);
		$pattern = '/[^A-Za-z0-9]/';
		$username = preg_replace($pattern, '', $username);
		$username = SanitizeQ::clean($username);
		return strtolower($username);
	}





	// ◇ ---- PASSWORD •
	public static function password($password) {
		$password = trim($password);
		$password = StringX::noSpace($password);
		return SanitizeQ::clean($password);
	}





	// ◇ ---- GENDER •
	public static function gender($input) {
		$input = SanitizeQ::clean($input);
		if (is_numeric($input)) {
			if ($input == 2) {
				$gender = 'F';
			}
			if ($input == 1) {
				$gender = 'M';
			}
		} else {
			if (strtoupper($input) === 'FEMALE') {
				$gender = 'F';
			} elseif (strtoupper($input) === 'MALE') {
				$gender = 'M';
			} else {
				$gender = $input;
			}
		}
		return $gender;
	}





	// ◇ ---- SEX •
	public static function sex($sex) {
		return self::gender($sex);
	}





	// ◇ ---- DOB •
	public static function dob($date) {
		return TimeX::is('SQL_DATE', $date);
	}





	// ◇ ---- BIRTHDATE •
	public static function birthdate($birthdate) {
		return self::dob($birthdate);
	}





	// ◇ ---- JSONIZE •
	public static function jsonize($input, $jsonize = null) {
		if (Vars::noData($jsonize)) {
			$jsonize = ['living', 'origin', 'contact', 'nok', 'hmo', 'medical', 'guardian', 'verified', 'otp', 'saas'];
		}
		if (Vars::isNotEmptyArray($input) && Vars::isNotEmptyArray($jsonize)) {
			foreach ($jsonize as $field) {
				if (isset($input[$field])) {
					SetQ::isArrayToJSON($input[$field]);
				}
			}
		}
		return $input;
	}





	// ◇ ---- CAPITALIZE •
	public static function capitalize($input, $capitalize = null) {
		if (Vars::noData($capitalize)) {
			$capitalize = ['religion'];
		}
		if (Vars::isNotEmptyArray($input) && Vars::isNotEmptyArray($capitalize)) {
			foreach ($capitalize as $field) {
				if (!empty($input[$field])) {
					if (Vars::isString($input[$field])) {
						$input[$field] = strtoupper($input[$field]);
					} elseif (Vars::isNotEmptyArray($input[$field])) {
						foreach ($input[$field] as $key => $value) {
							$input[$field][$key] = strtoupper($value);
						}
					}
				}
			}
		}
		return $input;
	}






	// ◇ ---- CAPITALIZE •
	public static function capitalizeWord($input, $capitalize = null) {
		if (Vars::noData($capitalize)) {
			$capitalize = ['occupation'];
		}
		if (Vars::isNotEmptyArray($input) && Vars::isNotEmptyArray($capitalize)) {
			foreach ($capitalize as $field) {
				if (!empty($input[$field])) {
					if (Vars::isString($input[$field])) {
						$input[$field] = ucwords($input[$field]);
					} elseif (Vars::isNotEmptyArray($input[$field])) {
						foreach ($input[$field] as $key => $value) {
							$input[$field][$key] = ucwords($value);
						}
					}
				}
			}
		}
		return $input;
	}




	// ◇ ---- LOWERIZE •
	public static function lowerize($input, $lowerize = null) {
		if (Vars::noData($lowerize)) {
			$lowerize = ['email', 'username', 'userid'];
		}
		if (Vars::isNotEmptyArray($input) && Vars::isNotEmptyArray($lowerize)) {
			foreach ($lowerize as $field) {
				if (!empty($input[$field])) {
					if (Vars::isString($input[$field])) {
						$input[$field] = strtolower($input[$field]);
					} elseif (Vars::isNotEmptyArray($input[$field])) {
						foreach ($input[$field] as $key => $value) {
							$input[$field][$key] = strtolower($value);
						}
					}
				}
			}
		}
		return $input;
	}





	// ◇ ---- SANITIZE •
	public static function sanitize(array $input) {
		$option = ['department', 'name', 'fullname', 'acronym', 'email', 'username', 'password', 'gender', 'sex', 'dob', 'birthdate'];
		$res = [];
		foreach ($input as $key => $value) {
			if (in_array($key, $option)) {
				$res[$key] = self::{$key}($value);
			} else {
				$res[$key] = SanitizeQ::clean($value);
			}
		}
		$res = self::capitalizeWord($res);
		$res = self::capitalize($res);
		$res = self::lowerize($res);
		$res = self::jsonize($res);
		return $res;
	}





	// ◇ ---- WRITE •
	public static function write($input) {
		if (Vars::hasData($input)) {
			$input = self::sanitize($input);
			if (Vars::isArray($input)) {
				SetQ::keySwap($input, 'id', 'puid');
				SetQ::keySwap($input, 'bind', 'tuid');
				SetQ::keySwap($input, 'rowid', 'suid');
				SetQ::keySwap($input, 'sex', 'gender');
				SetQ::keySwap($input, 'birthdate', 'dob');
				SetQ::keySwap($input, 'fullname', 'name');
				if (isset($input['name']) && is_array($input['name'])) {
					$input = array_merge($input, $input['name']);
					unset($input['name']);
				}
			}
		}
		return $input;
	}

} //> end of InputQ
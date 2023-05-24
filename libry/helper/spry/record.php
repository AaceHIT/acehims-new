<?php
//*** RecordQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class RecordQ {

	// ◇ ---- GENDER •
	public static function gender($sex) {

		if (is_numeric($sex)) {
			if ($sex == 2) {
				$gender = 'Female';
			}
			if ($sex == 1) {
				$gender = 'Male';
			}
		} else {
			if ($sex == 'F') {
				$gender = 'Female';
			} elseif ($sex == 'M') {
				$gender = 'Male';
			} else {
				$gender = $sex;
			}
		}

		return $gender;
	}





	// ◇ ---- NAME •
	public static function name($name, $lastname = null, $middlename = null) {
		$record = '';

		if (Vars::isNotEmptyArray($name)) {
			if (isset($name['firstname'])) {
				$firstname = $name['firstname'];
			}
			if (isset($name['middlename'])) {
				$middlename = $name['middlename'];
			}
			if (isset($name['lastname'])) {
				$lastname = $name['lastname'];
			}
		} elseif (Vars::isString($name)) {
			$firstname = $name;
		}

		if (Vars::hasData($firstname)) {
			$record .= ' ' . trim(ucwords($firstname));
		}
		if (Vars::hasData($middlename)) {
			$middlename = trim($middlename);
			if (strlen($middlename) == 1) {
				$middlename = strtoupper($middlename) . '.';
			}
			$record .= ' ' . trim(ucwords($middlename));
		}
		if (Vars::hasData($lastname)) {
			$record .= ' ' . trim(ucwords($lastname));
		}

		return trim($record);
	}





	// ◇ ---- TO OBJECT •
	public static function toObject($data = null) {

		$row = ObjectX::make();

		// • is array
		if (Vars::isArray($data)) {
			foreach ($data as $key => $value) {
				$row->{$key} = ObjectX::to($value);
			}
			return $row;
		}

		// • is object
		elseif (Vars::isObject($data)) {
			foreach ($data as $key => $value) {
				$row->{$key} = ObjectX::to($value);
			}
			return $row;
		}

		// • is json
		elseif (Vars::isJSON($data)) {
			// $data = JSONX::toObj($data);
			// return $row;
		}
		return $data;
	}






	// ◇ ---- READ •
	public static function read($data) {
		// * TDOD:
		if (Vars::isArray($data)) {
			if (ArrayX::isMultiAndKeyNumeric($data)) {
				foreach ($data as $key => $row) {
					$data[$key] = self::read($row);
				}
			} else {
				foreach ($data as $index => $value) {
					$data[$index] = self::read($value);
					if ($index === 'puid') {
						$data['id'] = $data['puid'];
						unset($data['puid']);
					} elseif ($index === 'tuid') {
						$data['bind'] = $data['tuid'];
						unset($data['tuid']);
					} elseif ($index === 'oauthid') {
						$data['bind'] = $data['oauthid'];
						unset($data['oauthid']);
					} elseif ($index === 'suid') {
						$data['rowid'] = $data['suid'];
						unset($data['suid']);
					} elseif ($index === 'dob') {
						$data['birthdate'] = $data['dob'];
						unset($data['dob']);
					} elseif ($index === 'emblem') {
						$data['media']['display'] = $data['emblem'];
						unset($data['emblem']);
					} elseif ($index === 'dp') {
						$data['media']['display'] = $data['dp'];
						unset($data['dp']);
					} elseif ($index === 'cover') {
						$data['media']['cover'] = $data['cover'];
						unset($data['cover']);
					} elseif ($index === 'cp') {
						$data['media']['cover'] = $data['cp'];
						unset($data['cp']);
					} elseif ($index === 'gender') {
						$data[$index] = ucwords(SanitizeQ::toGender($data[$index], 'TITLE'));
					} elseif ($index === 'firstname' || $index === 'lastname' || $index === 'middlename' || $index === 'fullname') {
						$data[$index] = ucwords($data[$index]);
					}
				}
			}
		}




		// • for object
		elseif (Vars::isObject($data)) {
			return self::toObject($data);
		}


		if (Vars::isNull($data)) {
			$data = '';
		}

		return $data;
	}




	// ◇ ==== resultToObject →
	public static function resultToObject($record) {
		$object = ObjectX::make();
		if (Vars::hasData($record) && $record !== 'NO_RESULT') {
			$object = ObjectX::to($record);
		}
		return $object;
	}

} //> end of RecordQ
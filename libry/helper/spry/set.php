<?php
//*** SetQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class SetQ {

	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- isNullOrEmpty • Set var if its null or empty
	public static function isNullOrEmpty(&$var, $value) {
		if (Vars::isEmpty($var) && Vars::isNotEmpty($value)) {
			$var = $value;
		}
		return true;
	}





	// ◇ ---- isNotKeyOrEmpty • Set array key if it doesn't exist or is empty
	public static function isNotKeyOrEmpty(&$array, $key, $value) {
		if (ArrayX::isNotKeyOrEmpty($array, $key)) {
			$array[$key] = $value;
		}
		return true;
	}





	// ◇ ---- isKeyNotEmptyCopy • ...
	public static function isKeyNotEmptyCopy(&$source, &$destination, $key, $valueCheck = null) {
		if (Vars::isNotEmptyArray($source) && Vars::isArray($destination)) {
			if (Vars::hasData($valueCheck)) {
				if (isset($source[$key]) && $source[$key] == $valueCheck) {
					$destination[$key] = $valueCheck;
				}
			} elseif (ArrayX::isKeyNotEmpty($source, $key)) {
				$destination[$key] = $source[$key];
			}
		}
		return true;
	}





	// ◇ ---- isKeyNotEmptyReplace • ...
	public static function isKeyNotEmptyReplace(&$array, $key, $value) {
		if (ArrayX::isKeyNotEmpty($array, $key)) {
			$array[$key] = $value;
			return true;
		} else {
			unset($array[$key]);
			return false;
		}
	}





	// ◇ ---- KEY • Set a key in an array
	public static function key(&$array, $key, $value) {
		$array[$key] = $value;
		return true;
	}





	// ◇ ---- SWAP KEY • Exchange a key in an array
	public static function keySwap(&$array, $key, $rekey) {
		$array = ArrayX::swapKey($array, $key, $rekey);
		return true;
	}





	// ◇ ---- DROP KEY • Drop a key in an array
	public static function keyDrop(&$array, $key, $value = null) {
		if (isset($array[$key])) {
			if (Vars::hasData($value)) {
				if ($array[$key] == $value) {
					unset($array[$key]);
				}
			} else {
				unset($array[$key]);
			}
		}
		return true;
	}





	// ◇ ---- isArrayToJSON • Convert array to JSON if isset
	public static function isArrayToJSON(&$var) {
		if (Vars::isNotEmptyArray($var)) {
			$var = ArrayX::toJSON($var);
			return true;
		}
		return null;
	}




	// ◇ ==== isRowColumnFilter → Set filter if column found in filter
	public static function isRowColumnFilter(&$row, $column) {
		if (DataQ::isRowColumn($row, $column)) {
			$filter[$column] = $row[$column];
		}
		if (Vars::isNotEmptyArray($filter)) {
			$row = $filter;
		}
		return $row;
	}


} //> End Of Class ~ SetQ
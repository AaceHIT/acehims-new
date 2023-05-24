<?php
//*** FormatQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class FormatQ {

	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- NUMBER • Format Number » Numeric
	public static function number($input, $digit = 2, $flow = 'INPUT') {
		if (is_numeric($input)) {
			$o = $input;
			if (!empty($digit) && is_numeric($digit)) {
				$o = number_format($input, $digit);
			} else {
				$o = number_format($input);
			}
			return $o;
		}
		if ($flow === 'ZERO') {
			return '0';
		} elseif ($flow === 'DASH') {
			return '-';
		}
		return $input;
	}











	// ◇ ---- SIZE • Computer-Based Measurement » Boolean | String
	public static function size($byte, $append = false) {
		if (!empty($byte)) {
			$unit = '';
			if ($byte >= 1073741824) {
				$o = number_format($byte / 1073741824, 2);
				$unit = 'GB';
			} elseif ($byte >= 1048576) {
				$o = number_format($byte / 1048576, 2);
				$unit = 'MB';
			} elseif ($byte >= 1024) {
				$o = number_format($byte / 1024, 2);
				$unit = 'KB';
			} elseif ($byte > 1) {
				$o = $byte;
				$unit = 'Bytes';
			} elseif ($byte == 1) {
				$o = $byte;
				$unit = 'Byte';
			} else {
				$o = '0';
			}
			if ($append === true) {
				$o .= ' ' . $unit;
			}
			return $o;
		}
		return false;
	}





	// ◇ ---- SIZE • Computer-Based Measurement » Boolean | String
	public static function toSizeUnit($byte, $unit = 'AUTO') {
		if ($unit === 'Byte') {
			$o = $byte;
		} elseif ($unit === 'KB') {
			$o = ($byte / 1024);
		} elseif ($unit === 'MB') {
			$o = (($byte / 1024) / 1024);
		} elseif ($unit === 'GB') {
			$o = ((($byte / 1024) / 1024) / 1024);
		} else {
			$o = self::size($byte, true);
		}
		return $o;
	}

} // End Of Class ~ FormatQ
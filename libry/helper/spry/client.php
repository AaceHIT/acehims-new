<?php
//*** ClientQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class ClientQ {

	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}




	// ◇ ---- DEVICE TYPE • ... »
	public static function deviceType($req = '') {
		$device = new Device;

		if ($device->isTablet()) {
			$deviceIs = 'TABLET';
		} elseif ($device->isMobile()) {
			$deviceIs = 'MOBILE';
		} else {
			$deviceIs = 'DESKTOP';
		}

		if ($req === 'DATA') {
			return $deviceIs;
		} elseif (strtolower($req) && strtolower($deviceIs)) {
			return true;
		}
		return false;
	}





	// ◇ ---- IP • ... »
	public static function IP() {
		if (!empty($_SERVER['HTTP_CLIENT_IP']) && Prime::validateIP($_SERVER['HTTP_CLIENT_IP'])) {
			return $_SERVER['HTTP_CLIENT_IP'];
		}
		if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== FALSE) {
				$IPs = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
				foreach ($IPs as $IP) {
					if (Prime::validateIP($IP)) {
						return $IP;
					}
				}
			} elseif (Prime::validateIP($_SERVER['HTTP_X_FORWARDED_FOR'])) {
				return $_SERVER['HTTP_X_FORWARDED_FOR'];
			}
		}
		if (!empty($_SERVER['HTTP_X_FORWARDED']) && Prime::validateIP($_SERVER['HTTP_X_FORWARDED'])) {
			return $_SERVER['HTTP_X_FORWARDED'];
		}
		if (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && Prime::validateIP($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
			return $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
		}
		if (!empty($_SERVER['HTTP_FORWARDED_FOR']) && Prime::validateIP($_SERVER['HTTP_FORWARDED_FOR'])) {
			return $_SERVER['HTTP_FORWARDED_FOR'];
		}
		if (!empty($_SERVER['HTTP_FORWARDED']) && Prime::validateIP($_SERVER['HTTP_FORWARDED'])) {
			return $_SERVER['HTTP_FORWARDED'];
		}
		return $_SERVER['REMOTE_ADDR'];
	}


} // End Of Class ~ ClientQ